import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "../interfaces/counter-state.interface";

const getCounterState = createFeatureSelector<CounterState>('counter');

// Selector for counter value
export const getCounter =
createSelector(
  getCounterState,
  (state: CounterState) => state.count
);


// Selector for counter name
export const getCounterName =
 createSelector(
  getCounterState,
  (state: CounterState) => state.counterName
 )
