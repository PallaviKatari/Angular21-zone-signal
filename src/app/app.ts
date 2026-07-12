import { Component, signal } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h2>Zone.js Enabled</h2>
    <p>Counter (Zone): {{ zoneCounter }}</p>

    <h2>Zoneless + detectChanges()</h2>
    <p>Counter (CDR): {{ cdrCounter }}</p>

    <h2>Zoneless + Signals</h2>
    <p>Counter (Signal): {{ signalCounter() }}</p>
  `
})
export class AppComponent {
  // Zone.js demo
  zoneCounter = 0;

  // Zoneless + ChangeDetectorRef demo
  cdrCounter = 0;

  // Zoneless + Signals demo
  signalCounter = signal(0);

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // ✅ Zone.js enabled → Angular auto detects async changes
    setInterval(() => {
      this.zoneCounter++; // No manual detection needed
    }, 1000);

    // ✅ Zoneless + detectChanges()
    setInterval(() => {
      this.cdrCounter++;
      this.cdr.detectChanges(); // Must manually trigger view update
    }, 1000);

    // ✅ Zoneless + Signals
    setInterval(() => {
      this.signalCounter.update(c => c + 1); // Signal updates view automatically
    }, 1000);
  }
}
