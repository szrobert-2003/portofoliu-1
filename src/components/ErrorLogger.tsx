"use client";

import { useEffect } from "react";
import { errorHandler, createErrorInfo } from "@/utils/errorHandler";

export default function ErrorLogger() {
  useEffect(() => {
    // Load previous errors from storage
    errorHandler.loadFromStorage();

    // Global error handler
    const handleError = (event: ErrorEvent) => {
      const errorInfo = createErrorInfo(
        event.message || "Unknown error",
        event.filename || "Unknown source",
        event.error,
        {
          lineno: event.lineno,
          colno: event.colno,
        }
      );

      errorHandler.logError(errorInfo);
    };

    // Unhandled promise rejection handler
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason;
      const error = reason instanceof Error ? reason : new Error(String(reason));
      
      const errorInfo = createErrorInfo(
        error.message || "Unhandled promise rejection",
        "Promise Rejection",
        error
      );

      errorHandler.logError(errorInfo);
    };

    // React error boundary (for component errors)
    const originalConsoleError = console.error;
    console.error = (...args: any[]) => {
      // Check if it's a React error
      const errorString = args.join(" ");
      if (
        errorString.includes("Error:") ||
        errorString.includes("Warning:") ||
        errorString.includes("at ")
      ) {
        const errorInfo = createErrorInfo(
          errorString,
          "Console Error",
          new Error(errorString)
        );

        errorHandler.logError(errorInfo);
      }

      // Call original console.error
      originalConsoleError.apply(console, args);
    };

    // Add event listeners
    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleUnhandledRejection);

    // Expose error handler to window for debugging
    (window as any).errorHandler = errorHandler;
    (window as any).downloadErrors = () => errorHandler.downloadErrors();
    (window as any).clearErrors = () => errorHandler.clearErrors();
    (window as any).getErrors = () => errorHandler.getErrors();

    // Log initialization
    console.log("✅ Error Logger initialized");
    console.log("💡 Use window.errorHandler to access error logs");
    console.log("💡 Use window.downloadErrors() to download error log file");
    console.log("💡 Use window.clearErrors() to clear all errors");

    // Cleanup
    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleUnhandledRejection);
      console.error = originalConsoleError;
    };
  }, []);

  return null; // This component doesn't render anything
}

