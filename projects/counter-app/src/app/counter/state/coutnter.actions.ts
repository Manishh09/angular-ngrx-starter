import { createAction } from '@ngrx/store';


// Action to increment the counter
export const increment = createAction('[Counter] Increment');

// Action to decrement the counter
export const decrement = createAction('[Counter] Decrement');

// Action to reset the counter
export const reset = createAction('[Counter] Reset');
