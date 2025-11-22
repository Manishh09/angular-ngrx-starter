import { Component, inject, output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/coutnter.actions';
import { CounterState } from '../interfaces/counter-state.interface';

@Component({
  selector: 'app-counter-buttons',
  imports: [],
  templateUrl: './counter-buttons.html',
  styleUrl: './counter-buttons.scss',
})
export class CounterButtons {

  // inject store
  private store = inject(Store<{
    counter: CounterState
  }>)


  // increment = output<void>();
  // decrement = output<void>();
  // reset = output<void>();

  // onDecrement() {
  //   // Logic for decrement
  //   this.decrement.emit();
  // }

  // onIncrement() {
  //   // Logic for increment
  //   this.increment.emit();
  // }

  // onReset() {
  //   // Logic for reset
  //   this.reset.emit();
  // }

  /***** USING NGRX ****/


  onDecrement() {

    this.store.dispatch(
      decrement()
    )

  }

  onIncrement() {

    this.store.dispatch(
      increment()
    )

  }

  onReset() {
    this.store.dispatch(
       reset()
    );

  }
}
