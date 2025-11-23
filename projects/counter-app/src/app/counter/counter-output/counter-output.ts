import { AsyncPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../interfaces/counter-state.interface';
import { getCounter } from '../state/counter.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  imports: [AsyncPipe],
  templateUrl: './counter-output.html',
  styleUrl: './counter-output.scss',
})
export class CounterOutput {
  // count = input<number>(0);


  // Using NgRx, so no need of input decorator

  // inject store and select count from state

  private store = inject(Store<{
    counter: CounterState
  }>);

  countValue$: Observable<number> = this.store.select(getCounter);
  // count$ = this.store.select(
  //   (state) => {
  //     return state.counter.count;
  //   }
  // )





}
