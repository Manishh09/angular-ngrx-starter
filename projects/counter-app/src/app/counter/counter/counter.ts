import { Component, inject, signal } from '@angular/core';
import { CounterOutput } from "../counter-output/counter-output";
import { CounterButtons } from "../counter-buttons/counter-buttons";
import { Counter as CounterService } from '../services/counter';
import { CounterInput } from "../counter-input/counter-input";
@Component({
  selector: 'app-counter',
  imports: [CounterOutput, CounterButtons, CounterInput],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {

  // private counterService = inject(CounterService);

  // count = this.counterService.count;

  // handleIncrement() {
  //   this.counterService.increment();
  // }

  // handleDecrement() {
  //   if (this.count() > 0) {
  //     this.counterService.decrement();
  //   }
  // }

  // handleReset() {
  //   this.counterService.reset();
  // }
}
