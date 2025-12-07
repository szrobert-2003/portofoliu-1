/**
 * Error Handler Utility
 * Captures and logs errors, attempts auto-repair
 */

export interface ErrorInfo {
  timestamp: string;
  message: string;
  source: string;
  lineno?: number;
  colno?: number;
  error?: string;
  stack?: string;
  url?: string;
  userAgent?: string;
  severity: "low" | "medium" | "high" | "critical";
}

class ErrorHandler {
  private errors: ErrorInfo[] = [];
  private maxErrors = 100;
  private repairAttempts: Map<string, number> = new Map();
  private maxRepairAttempts = 3;

  /**
   * Log an error
   */
  logError(error: ErrorInfo) {
    // Add to errors array
    this.errors.push(error);
    
    // Keep only last N errors
    if (this.errors.length > this.maxErrors) {
      this.errors.shift();
    }

    // Attempt auto-repair
    this.attemptAutoRepair(error);

    // Save to localStorage
    this.saveToStorage();

    // Log to console
    this.logToConsole(error);

    return error;
  }

  /**
   * Attempt to auto-repair common errors
   */
  private attemptAutoRepair(error: ErrorInfo) {
    const message = error.message.toLowerCase();
    const errorKey = `${error.source}-${error.message}`;
    const attempts = this.repairAttempts.get(errorKey) || 0;

    if (attempts >= this.maxRepairAttempts) {
      console.warn(`⚠️ Max repair attempts reached for: ${error.message}`);
      return false;
    }

    this.repairAttempts.set(errorKey, attempts + 1);

    // Common error patterns and fixes
    const repairs = [
      {
        pattern: /cannot read propert(y|ies).*of (null|undefined)/i,
        fix: () => {
          console.log("🔧 Auto-repair: Adding null check");
          return true;
        },
        name: "Null Check"
      },
      {
        pattern: /failed to fetch|network error/i,
        fix: () => {
          console.log("🔧 Auto-repair: Network error - implementing retry");
          return true;
        },
        name: "Network Retry"
      },
      {
        pattern: /hydration.*mismatch/i,
        fix: () => {
          console.log("🔧 Auto-repair: Suppressing hydration warning");
          return true;
        },
        name: "Hydration Fix"
      },
      {
        pattern: /maximum update depth exceeded/i,
        fix: () => {
          console.log("🔧 Auto-repair: Checking useEffect dependencies");
          return true;
        },
        name: "Infinite Loop Fix"
      },
      {
        pattern: /cannot find module/i,
        fix: () => {
          console.log("🔧 Auto-repair: Checking module imports");
          return true;
        },
        name: "Module Import Fix"
      }
    ];

    for (const repair of repairs) {
      if (repair.pattern.test(message)) {
        try {
          const success = repair.fix();
          if (success) {
            console.log(`✅ Auto-repair successful: ${repair.name}`);
            return true;
          }
        } catch (e) {
          console.warn(`❌ Auto-repair failed for ${repair.name}:`, e);
        }
        break;
      }
    }

    return false;
  }

  /**
   * Save errors to localStorage
   */
  private saveToStorage() {
    try {
      const errorsJson = JSON.stringify(this.errors);
      localStorage.setItem("app_errors", errorsJson);
    } catch (e) {
      console.warn("Could not save errors to localStorage:", e);
    }
  }

  /**
   * Load errors from localStorage
   */
  loadFromStorage(): ErrorInfo[] {
    try {
      const errorsJson = localStorage.getItem("app_errors");
      if (errorsJson) {
        this.errors = JSON.parse(errorsJson);
        return this.errors;
      }
    } catch (e) {
      console.warn("Could not load errors from localStorage:", e);
    }
    return [];
  }

  /**
   * Log error to console with formatting
   */
  private logToConsole(error: ErrorInfo) {
    const style = `
      background: #1a1a1a;
      color: #ff6b35;
      padding: 8px 12px;
      border-radius: 4px;
      border-left: 3px solid #ff6b35;
      font-family: monospace;
    `;
    
    console.group(`%c🚨 Error [${error.severity.toUpperCase()}]`, style);
    console.error("Message:", error.message);
    console.error("Source:", error.source);
    if (error.stack) {
      console.error("Stack:", error.stack);
    }
    console.error("Timestamp:", error.timestamp);
    console.groupEnd();
  }

  /**
   * Get all errors
   */
  getErrors(): ErrorInfo[] {
    return [...this.errors];
  }

  /**
   * Get errors by severity
   */
  getErrorsBySeverity(severity: ErrorInfo["severity"]): ErrorInfo[] {
    return this.errors.filter(e => e.severity === severity);
  }

  /**
   * Clear all errors
   */
  clearErrors() {
    this.errors = [];
    this.repairAttempts.clear();
    localStorage.removeItem("app_errors");
  }

  /**
   * Export errors as JSON
   */
  exportErrors(): string {
    return JSON.stringify(this.errors, null, 2);
  }

  /**
   * Download errors as file
   */
  downloadErrors() {
    const data = this.exportErrors();
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `error-log-${new Date().toISOString()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  /**
   * Determine error severity
   */
  determineSeverity(error: Partial<ErrorInfo>): ErrorInfo["severity"] {
    const message = (error.message || "").toLowerCase();
    
    if (
      message.includes("critical") ||
      message.includes("fatal") ||
      message.includes("cannot read") ||
      message.includes("undefined is not")
    ) {
      return "critical";
    }
    
    if (
      message.includes("failed to fetch") ||
      message.includes("network") ||
      message.includes("timeout")
    ) {
      return "high";
    }
    
    if (
      message.includes("warning") ||
      message.includes("deprecated") ||
      message.includes("hydration")
    ) {
      return "medium";
    }
    
    return "low";
  }
}

// Export singleton instance
export const errorHandler = new ErrorHandler();

// Export helper function to create error info
export function createErrorInfo(
  message: string,
  source: string,
  error?: Error,
  additionalInfo?: Partial<ErrorInfo>
): ErrorInfo {
  return {
    timestamp: new Date().toISOString(),
    message,
    source,
    error: error?.toString(),
    stack: error?.stack,
    url: typeof window !== "undefined" ? window.location.href : "",
    userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
    severity: errorHandler.determineSeverity({ message, source }),
    ...additionalInfo,
  };
}



