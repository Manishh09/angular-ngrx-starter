# NgRx Setup Guide (Beginner-Friendly, Expert-Quality)

NgRx is a powerful state-management library for Angular, inspired by
Redux.\
This guide walks you through everything you need to set up NgRx from
scratch --- clean, clear, and simple.

------------------------------------------------------------------------

## What is NgRx?

NgRx helps you manage application state using: - **Actions** -- Events
in your app\

- **Reducers** -- How the state changes\
- **Selectors** -- Read state efficiently\
- **Effects** -- Handle async logic\
- **Store** -- A single source of truth

------------------------------------------------------------------------

## NgRx Flow Explained

------------------------------------------------------------------------
UI → dispatch(Action)
        ↓
     Reducer — updates state
        ↓
     Store — holds state
        ↓
Selectors — get data for UI

------------------------------------------------------------------------


# Step 1 --- Install NgRx

``` bash
ng add @ngrx/store
ng add @ngrx/effects
ng add @ngrx/store-devtools
```

------------------------------------------------------------------------

# Step 2 --- Create a Feature Folder

    src/app/
      state/
        counter.actions.ts
        counter.reducer.ts
        counter.selectors.ts
        counter.effects.ts // If API handling is involved in app

------------------------------------------------------------------------

# Step 3 --- Create Actions

``` ts
import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');
```

------------------------------------------------------------------------

# Step 4 --- Create Reducer

``` ts
import { createReducer, on } from '@ngrx/store';
import * as CounterActions from './counter.actions';

export interface CounterState {
  count: number;
}

export const initialState: CounterState = {
  count: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(CounterActions.increment, state => ({ ...state, count: state.count + 1 })),
  on(CounterActions.decrement, state => ({ ...state, count: state.count - 1 })),
  on(CounterActions.reset, state => ({ ...state, count: 0 }))
);
```

------------------------------------------------------------------------

# Step 5 --- Register Reducer

``` ts
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './counter/counter.reducer';

export const appConfig = {
  providers: [
    provideStore(),
    provideState({ name: 'counter', reducer: counterReducer }),
  ],
};
```

------------------------------------------------------------------------

# Step 6 --- Selectors

``` ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.reducer';

const selectCounterFeature =
  createFeatureSelector<CounterState>('counter');

export const selectCount = createSelector(
  selectCounterFeature,
  state => state.count
);
```

------------------------------------------------------------------------

# Step 7 --- Use Store in Component

``` ts
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCount } from './counter.selectors';
import { increment, decrement, reset } from './counter.actions';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <h2>Count: {{ count$ | async }}</h2>

    <button (click)="inc()">Increment</button>
    <button (click)="dec()">Decrement</button>
    <button (click)="reset()">Reset</button>
  `
})
export class CounterComponent {
  private store = inject(Store);

  count$ = this.store.select(selectCount);

  inc() { this.store.dispatch(increment()); }
  dec() { this.store.dispatch(decrement()); }
  reset() { this.store.dispatch(reset()); }
}
```

------------------------------------------------------------------------

# Step 8 --- Optional: Effects

``` ts
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, delay } from 'rxjs/operators';
import { increment } from './counter.actions';

export const counterEffects = createEffect(
  (actions$ = inject(Actions)) => {
    return actions$.pipe(
      ofType(increment),
      delay(500),
      map(() => console.log('Increment Effect Triggered'))
    );
  },
  { functional: true }
);
```

Register:

``` ts
import { provideEffects } from '@ngrx/effects';

providers: [
  provideEffects(counterEffects)
]
```

------------------------------------------------------------------------

# Your NgRx Setup Is Complete

You now have: - A full NgRx feature\

- Actions, Reducer, Selectors, Effects\
- Store integration\
- Working component dispatching actions

------------------------------------------------------------------------

# Best Practices

- Always use selectors in components\
- Reducers must stay pure\
- Avoid API calls inside reducers\
- Keep feature stores small and meaningful\
- Prefer functional effects in Angular 16+

------------------------------------------------------------------------

## Learning Resources

- [NgRx Documentation](https://ngrx.io)
