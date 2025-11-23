import { Component, inject, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { setCounter } from '../state/coutnter.actions';
@Component({
  selector: 'app-counter-input',
  imports: [FormsModule],
  templateUrl: './counter-input.html',
  styleUrl: './counter-input.scss',
})
export class CounterInput {

  private store = inject(Store)

  counterValue: number = 0;

  onValueChange() {
    // Logic to handle the change in counter value can be added here
    console.log('Counter value changed to:', this.counterValue);
    this.store.dispatch(
      setCounter({ value: this.counterValue })
    )
  }
}
