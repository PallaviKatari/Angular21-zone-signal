# Angular 21 — Zone.js vs Signals Demo

This small demo shows two ways Angular 21 updates the UI:

- Traditional Zone.js-triggered change detection (mutable variable updates)
- Reactive Signals (automatic, fine-grained change propagation)

It's intended to help you understand the behavioral differences and when Signals can replace or complement Zone-based patterns.

## Prerequisites

- Node.js (LTS)
- npm (comes with Node)
- Angular CLI 21 (optional, only if you use `ng` commands)

Verify basic tools:

```bash
node -v
npm -v
ng version  # optional
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm start
```

This runs the Angular dev server and serves the demo at http://localhost:4200 by default.

## What this demo contains

- `src/app/app.ts` — demo application logic (shows a traditional mutable counter and a Signal-based counter).
- `src/app/app.html` — UI template demonstrating both counters and buttons to update them.
- `src/app/app.config.ts` — small app configuration used by the demo.
- `src/app/app.css` and `src/app/styles.css` — demo styles.

Open these files to inspect how the counters are implemented and updated.

## What to look for

- Traditional (Zone.js) counter: UI updates when Angular detects changes (usually after async tasks or inside Angular event handlers).
- Signal counter: the Signal value notifies views directly when changed — updates can be more local, predictable, and cheaper.

The demo includes buttons that update each counter in different ways (synchronous increment, setTimeout/Promise updates) so you can observe when Zone change detection runs vs when Signals update immediately.

## How to experiment

1. Run the app and open the page in a browser.
2. Use the increment buttons for both counters and observe the UI.
3. Try updating the traditional counter from a non-Angular callback (e.g., `setTimeout`) — notice when Angular picks up the change.
4. Inspect the Signal counter implementation — changes to the Signal propagate without Zone involvement.

## Notes and tips

- Signals are a newer reactive primitive in Angular that can improve performance for selective updates.
- This demo is educational — not a production pattern library. Use Signals where they simplify logic or improve performance.

## Tests

If there are unit tests in `src/app/app.spec.ts`, run:

```bash
npm test
```

## Further reading

- Angular Signals: https://angular.io/ (search Signals)
- Zone.js change detection: https://github.com/angular/zone.js

---

If you'd like, I can:

- Add inline comments to the demo files explaining each step.
- Create a small demo script that performs automated updates so you can see the differences in the console.