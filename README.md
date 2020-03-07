# Electron-React-Webpack-Boilerplate - Documentation

![Screenshot](https://i.imgur.com/1oCcBcH.png "Screenshot")

This template serves as the basis for creating extensible electron applications using the React frontend framework, all transpiled by webpack allowing for the latest ECMAScript standards to be used.

This template is minimal, by design, reducing the overhead required for customization. Out of the box, it will feature minimal pages that need to be modified. This results in less time being spent cleaning up unused portions of the code, and less time to production.

## Getting Started

| Command       | Effect                                                                   |
| ------------- | ------------------------------------------------------------------------ |
| `npm install` | Install all of the required node modules and depedencies for the project |

## Development Commands

The following commands with allow for an intuitive development environment with the application hot reloading on any frontend application changes.
**The application will not hot reload on electron changes.**

| Command        | Effect                                                                   |
| -------------- | ------------------------------------------------------------------------ |
| `webpack-dev`  | Compiles a development version of all applicable files (main & renderer) |
| `react-dev`    | Launches a live webpack development server on port 3000                  |
| `electron-dev` | Launches electron and connects to port 3000                              |

> The `react-dev` command must be ran prior to `electron-dev` to connect to the local server.

> While in `Development` mode Chrome Developer Tools can be opened via Ctrl+Shift+I.

## Production Commands

The following commands with compile the application for win32 platform machines.

| Command        | Effect                                                                  |
| -------------- | ----------------------------------------------------------------------- |
| `webpack-prod` | Compiles a production version of all applicable files (main & renderer) |
| `build-win`    | Compiles the production files to a Windows executable                   |

> While in `Production` mode Chrome Developer Tools is disabled.
