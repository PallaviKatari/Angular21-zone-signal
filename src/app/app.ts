import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html'
})
export class AppComponent {

  // Normal variable (Zone.js demo)
  count = 0;

  // Signal variable
  signalCount = signal(0);

  // -----------------------------
  // Zone.js Example
  // -----------------------------
  incrementZone() {

    setTimeout(() => {

      this.count++;

    },1000);

  }

  // -----------------------------
  // Signal Example
  // -----------------------------
  incrementSignal(){

    this.signalCount.update(value => value + 1);

  }

}