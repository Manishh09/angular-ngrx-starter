# Counter App

A modern Angular application demonstrating state management with NgRx Store using standalone components and reactive patterns.

## 📁 App Structure

```text
counter/
├── counter/              # Container component (orchestrates children)
├── counter-buttons/      # Dispatches actions (Increment, Decrement, Reset)
├── counter-output/       # Displays count from store
├── interfaces/           # CounterState type definition
├── services/             # Signal-based alternative (commented out)
└── state/
    ├── counter.state.ts      # Initial state: { count: 0 }
    ├── coutnter.actions.ts   # Action creators
    └── coutner.reducer.ts    # State reducers
```

**Data Flow:** User clicks button → Component dispatches action → Reducer updates state → Store notifies → View updates

## 🎯 Why NgRx?

NgRx provides predictable state management through:

- **Single Source of Truth** - Centralized application state
- **Immutability** - State updates create new objects, preventing bugs
- **Unidirectional Data Flow** - Clear, traceable state changes
- **Time Travel Debugging** - Redux DevTools integration
- **Scalability** - Handles complex state in large applications

**When to use:** Multi-component state sharing, complex workflows, need for debugging history

**Alternative:** Angular signals for simpler use cases (example included in codebase)

## ⚙️ NgRx Configuration

### 1. Store Setup (`app.config.ts`)

```typescript
provideStore({
  counter: counterReducer
})
```

### 2. State Interface

```typescript
interface CounterState {
  count: number;
}
```

### 3. Actions

```typescript
increment()  // [Counter] Increment
decrement()  // [Counter] Decrement  
reset()      // [Counter] Reset
```

### 4. Reducer

```typescript
on(increment, (state) => ({ ...state, count: state.count + 1 }))
on(decrement, (state) => ({ ...state, count: state.count > 0 ? state.count - 1 : 0 }))
on(reset, (state) => ({ ...state, count: 0 }))
```

### 5. Component Usage

```typescript
// Dispatch actions
this.store.dispatch(increment())

// Select state
count$ = this.store.select(state => state.counter.count)
```

```html
<!-- Subscribe in template -->
<h2>Counter Value: {{ count$ | async }}</h2>
```

## 🎓 Key Learnings

1. **NgRx Flow** - Actions → Reducers → Store → Selectors → Components
2. **Immutable Updates** - Always use spread operator `{ ...state, count: newValue }`
3. **Function Injection** - Use `inject()` instead of constructor injection
4. **Standalone Components** - No NgModules required
5. **AsyncPipe** - Automatic subscription management in templates
6. **Type Safety** - TypeScript ensures correctness across actions/reducers/state
7. **Component Patterns** - Smart containers vs presentational components

## 📚 Resources

- [Angular Documentation](https://angular.dev)
- [NgRx Documentation](https://ngrx.io)
- [Angular Signals Guide](https://angular.dev/guide/signals)
- [RxJS Documentation](https://rxjs.dev)

## 🚀 Quick Start

```bash
npm install
npm start
```

Navigate to `http://localhost:4200/`

---

**Technologies:** Angular 20.3 • NgRx Store 20.1 • TypeScript 5.9 • RxJS 7.8
