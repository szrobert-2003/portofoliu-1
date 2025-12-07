# Error Logging & Auto-Repair System

## Descriere

Acest sistem capturează automat toate erorile din consolă, le înregistrează și încearcă să le repare automat pentru erorile comune.

## Funcționalități

### 1. Capturare Erori
- **Erori JavaScript globale** - capturează toate erorile neprinse
- **Promise rejections** - capturează promise-uri nehandlate
- **Erori React** - capturează erorile din componente React
- **Erori console** - monitorizează console.error

### 2. Auto-Repair
Sistemul încearcă să repare automat următoarele tipuri de erori:
- ❌ **Null/undefined property access** - adaugă verificări
- ❌ **Network errors** - implementează retry logic
- ❌ **Hydration mismatches** - suprimă warning-urile
- ❌ **Infinite loops** - verifică useEffect dependencies
- ❌ **Module import errors** - verifică import-urile
- ❌ **Unhandled promise rejections** - adaugă handler-e

### 3. Logging
- Erorile sunt salvate în **localStorage** pentru persistență
- Erorile sunt logate în **consolă** cu formatare frumoasă
- Erorile pot fi **exportate** ca fișier JSON

## Utilizare

### Accesare Erori din Consolă

```javascript
// Vezi toate erorile
window.getErrors()

// Descarcă erorile ca fișier JSON
window.downloadErrors()

// Șterge toate erorile
window.clearErrors()

// Accesează error handler-ul direct
window.errorHandler.getErrors()
window.errorHandler.getErrorsBySeverity('critical')
window.errorHandler.exportErrors()
```

### Severități

Erorile sunt clasificate în 4 niveluri:
- 🔴 **critical** - Erori critice care opresc aplicația
- 🟠 **high** - Erori importante (network, timeout)
- 🟡 **medium** - Warning-uri și erori minore
- 🟢 **low** - Erori neimportante

## Structura Fișierelor

```
src/
├── components/
│   └── ErrorLogger.tsx      # Component principal care capturează erorile
├── utils/
│   └── errorHandler.ts      # Logică de logging și auto-repair
└── app/
    └── layout.tsx           # ErrorLogger este integrat aici
```

## Date Salvate

Erorile sunt salvate cu următoarele informații:
- Timestamp
- Mesaj eroare
- Sursă (fișier, linie, coloană)
- Stack trace
- URL-ul paginii
- User agent
- Severitate

## Limitări

- Maximum 100 de erori în memorie
- Maximum 50 de erori în localStorage
- Maximum 3 încercări de auto-repair per eroare

## Dezactivare

Pentru a dezactiva sistemul, comentează linia din `layout.tsx`:

```tsx
// <ErrorLogger />
```

