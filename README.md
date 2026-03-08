# Angular Dynamic Form

## Executive Summary
This repository is a lightweight Angular application that demonstrates metadata-driven dynamic forms using Reactive Forms. The codebase has been upgraded to the Angular 21 toolchain and is currently in a good state for local development after configuration alignment updates.

Current business value:
- Demonstrates dynamic control rendering (`textbox`, `dropdown`) from typed metadata.
- Provides a clear baseline for extending forms without hardcoding UI fields.
- Serves as a concise learning/reference project for dynamic form patterns in Angular.

Current technical status:
- Runtime framework: Angular `21.2.x`
- Language: TypeScript `5.9.x`
- Form approach: Reactive Forms
- Build tooling: Angular CLI / `@angular-devkit/build-angular`

## Repository Scope
The application renders a job application form from control metadata, validates required fields, and outputs submitted form payload as JSON.

Core flow:
1. `CustomService` returns control metadata.
2. `CustomControlService` transforms metadata into a `FormGroup`.
3. `DynamicFormComponent` renders controls and handles submit.
4. `DynamicFormCustomComponent` chooses control type with `ngSwitch`.

## Architecture Snapshot
Primary files:
- `src/app/app.component.ts`: Root component, fetches control metadata via `CustomService`.
- `src/app/dynamic-form.component.ts`: Dynamic form container and submit handler.
- `src/app/dynamic-form-custom.component.ts`: Per-control renderer and validation message handling.
- `src/app/custom-controls/interfaces/custom-base.ts`: Base metadata model for dynamic controls.
- `src/app/custom-controls/interfaces/custom-textbox.ts`: Textbox control type.
- `src/app/custom-controls/interfaces/custom-dropdown.ts`: Dropdown control type.
- `src/app/custom-controls/services/custom.service.ts`: Metadata source (currently in-memory).
- `src/app/custom-controls/services/custom-control.service.ts`: Metadata-to-`FormGroup` mapping.

## Dependency and Upgrade Posture
Key versions from `package.json`:
- `@angular/*`: `^21.2.1`
- `@angular/cli`: `^21.2.1`
- `@angular-devkit/build-angular`: `^21.2.1`
- `typescript`: `~5.9.0`
- `rxjs`: `~7.8.0`

Recent configuration compatibility fix:
- Updated Angular workspace target keys in `angular.json` from `browserTarget` to `buildTarget` for `serve` and `extract-i18n` to satisfy current CLI schema validation.

## Operational Readiness
Local development:
- `npm install`
- `npm start`

Build and test commands:
- `npm run build`
- `npm test`

Observed status:
- Development server compiles and starts successfully (`ng serve`).
- No active TypeScript/Angular diagnostics detected in workspace error scan.

## Risks and Gaps
1. Limited automated quality gates: no lint script and no CI workflow documented in this repository.
2. Testing depth unknown: Karma setup exists, but test coverage and critical-path assertions are not documented.
3. Data source is static/in-memory: `CustomService` currently mocks metadata instead of consuming a remote contract.
4. Legacy project identity remains in config (`angular.io-example`) and may cause confusion for maintainers.

## Recommendations (Priority Order)
1. Add CI checks for install, build, and test on pull requests.
2. Add and enforce linting (`ng lint` or ESLint) to prevent style and safety regressions.
3. Add focused unit tests for metadata sorting, required validation, and dynamic control rendering.
4. Externalize control metadata contract and document expected payload shape.
5. Align project naming across Angular config/package metadata for maintainability.

## Scripts
- `npm start`: Start dev server.
- `npm run build`: Production build.
- `npm run watch`: Development build in watch mode.
- `npm test`: Run unit tests.

## Reference
- Original interactive sample: https://stackblitz.com/edit/angular-dyn4m1c-f0rm
