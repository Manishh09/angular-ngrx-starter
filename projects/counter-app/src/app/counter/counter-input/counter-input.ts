import { Component, inject, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { changeCounterName, setCounter } from '../state/coutnter.actions';
import { getCounter, getCounterName } from '../state/counter.selector';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-counter-input',
  imports: [FormsModule, AsyncPipe],
  templateUrl: './counter-input.html',
  styleUrl: './counter-input.scss',
})
export class CounterInput {

  private store = inject(Store)

  counterValue: number = 0;
  counterName$: Observable<string> = this.store.select(getCounterName);



  onValueChange() {
    // Logic to handle the change in counter value can be added here
    console.log('Counter value changed to:', this.counterValue);
    this.store.dispatch(
      setCounter({ value: this.counterValue })
    )
  }

  onChangeCounterName() {
    this.store.dispatch(changeCounterName());
  }
}
