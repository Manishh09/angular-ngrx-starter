# AngularNgrxStarter

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.0.

This repository contains multiple Angular applications grouped in a
simple monorepo structure. Each app demonstrates a specific Angular
concept such as state management, CRUD operations, architecture
patterns, or UI best practices.

The goal of this monorepo is to provide clear, modular, and reusable
examples for learning, teaching, and experimenting with Angular.

------------------------------------------------------------------------

## What's Inside?

### `projects/`

Each Angular application lives inside the `projects/` folder:

    projects/
    ├── app-1/       # Example: ngrx-counter-app
    ├── app-2/       # Example: ngrx-crud-app
    └── ...more apps

Each app is fully independent and can be served, built, and developed
separately.

This is created using below command:
```bash
npx -p ng new angular-ngrx-starter --no-create-application
```

For specific angular version:
```bash
npx -p @angular/cli@19 ng new angular-ngrx-starter --no-create-application
```

------------------------------------------------------------------------

## Example Apps (Replace with Your Own)

### Counter App

A minimal feature example demonstrating: - Component structure - Basic
services - Optional NgRx integration - Signals-based state (optional)

### CRUD App

A simple CRUD example demonstrating: - HTTP communication - Services and
models - Reusable UI patterns - Optional global state management
(NgRx/Signals)

------------------------------------------------------------------------

## Development Setup

### Install dependencies once for the whole repo

```bash
npm install
```

------------------------------------------------------------------------

## Running Apps

### Serve a specific app

```bash
ng serve --project=<app-name>
```

Example:

```bash
ng serve --project=counter-app
```

------------------------------------------------------------------------

## Project Structure

    root/
    │
    ├── projects/
    │   ├── counter-app/
    │   ├── crud-app/
    │   └── <future-app>/
    │
    ├── angular.json
    ├── package.json
    └── README.md

------------------------------------------------------------------------

## Working With Angular CLI in a Monorepo

To generate components inside a specific application:

```bash
ng generate component components/my-button --project=counter-app
```

To generate services, directives, pipes, etc.:

```bash
ng g service services/user --project=counter-app
```

------------------------------------------------------------------------

## Building an App

```bash
ng build --project=<app-name>
```

Build output will be stored in:

    dist/<app-name>/

------------------------------------------------------------------------

## Testing

### Unit Tests

```bash
ng test --project=<app-name>
```

------------------------------------------------------------------------

## Purpose of This Monorepo

This repository is ideal for:

- Teaching Angular concepts
- Showcasing best practices
- Hands-on demos in workshops
- Comparing patterns (Signals vs NgRx, etc.)
- Creating isolated examples without maintaining multiple repos

------------------------------------------------------------------------

## Extending the Monorepo

You can easily add more apps such as:

- signals-todo-app
- form-validation-app
- router-demo-app
- performance-optimization-app
- material-design-showcase

Create a new app inside `projects`:

```bash
ng g application <app-name> --standalone
```

Create a Shared NgRx State Library
```bash
ng g library shared-state --standalone
```

Create a  Shared UI Library
```bash
ng g library shared-ui --standalone
```

------------------------------------------------------------------------

## Learning Resources

- [Angular Documentation](https://angular.dev)
- [NgRx Documentation](https://ngrx.io)
- [Angular Signals Guide](https://angular.dev/guide/signals)
- [RxJS Documentation](https://rxjs.dev)

------------------------------------------------------------------------

## License

MIT License
