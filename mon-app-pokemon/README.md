# MonAppPokemon

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

To develop an Angular program, especially to consume the PokéAPI as previously mentioned, here are the detailed steps, starting from the installation of Angular CLI to creating components and integrating services to consume the API.

### 1. Installation of Node.js and npm

Angular requires Node.js. Ensure you have Node.js and npm (Node Package Manager) installed on your machine. You can verify their installation and versions with the following commands in your terminal:

```bash
node -v
npm -v
```

If these commands return version numbers, Node.js and npm are correctly installed. Otherwise, download and install Node.js from the official website: [https://nodejs.org/](https://nodejs.org/). npm is included with Node.js.

### 2. Installation of Angular CLI

Angular CLI is a command-line tool for initializing, developing, scaffolding, and maintaining Angular applications. Install it globally via npm:

```bash
npm install -g @angular/cli
```

### 3. Creating a New Angular Application

Once Angular CLI is installed, create your new Angular application with:

```bash
ng new my-pokemon-app
```

During creation, Angular CLI will ask you some questions regarding the features to include. For a basic project, you can disable routing and choose the stylesheet format you prefer (CSS, SCSS, etc.).

### 4. Launching the Application

Navigate to your newly created application directory and launch the development server:

```bash
cd my-pokemon-app
ng serve
```

Your Angular application is now accessible at `http://localhost:4200/`.

### 5. Creating a Service to Consume the API

Use Angular CLI to generate a service that will consume the PokéAPI:

```bash
ng generate service pokemon
```

Implement the service as previously shown, using HttpClient to make GET requests to the API.

### 6. Creating Components

Generate a component to display Pokémon information:

```bash
ng generate component pokemon
```

In the `pokemon` component, inject the `PokemonService` and use it to retrieve and display data of a specific Pokémon.

### 7. Adding HttpClientModule

Open your application's `app.module.ts` file and add `HttpClientModule` to the list of imports:

```typescript
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    // other components
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

This will allow your application to use `HttpClient`.

