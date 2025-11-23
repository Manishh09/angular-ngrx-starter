# Redux

Redux provides predictable state management by enforcing three principles,

- a single store
- read-only state
- pure reducers

When something happens in the UI, we dispatch an `action`. **Reducers** take the current state + action and return a new immutable state.

The `store` holds this state, and `selectors` allow the UI to subscribe to it.

## Flow

UI → Dispatch(Action)

  ⬇

Reducer → Creates a new State

  ⬇

Store → Holds the latest State

  ⬇

UI subscribes to state → Re-renders automatically
