import { createAction, props } from '@ngrx/store';


// Action to increment the counter
export const increment = createAction('[Counter] Increment');

// Action to decrement the counter
export const decrement = createAction('[Counter] Decrement');

// Action to reset the counter
export const reset = createAction('[Counter] Reset');

// Action to set the counter to a specific value
export const setCounter = createAction(
  '[Counter] Set',
  props<{ value: number }>()
  //(value: number) => ({ value })
)

// setDescription action can be added here in future if needed
export const changeCounterName = createAction(
  '[Counter] Change Description',
);
