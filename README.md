## angular2-seed in Visual Studio.NET and Visual Studio Code

This project template is based on official Angular2 Seed project: [angular2-see](https://github.com/angular/angular2-seed)

A simple starter project demonstrating the basic concepts of Angular2.

Webpack is used for Development. 

## Usage with Visual Studio.NET

### Adding build to Visual Studio.NET project file 
tsconfig.json file contains the following build definitions for the latest TypeScript compiler
```
 "emitDecoratorMetadata": true,
 "experimentalDecorators": true,
```


[TypeScript Compiler Options for MS-Build](https://github.com/Microsoft/TypeScript/wiki/Setting-Compiler-Options-in-MSBuild-projects)
```
 <TypeScriptEmitDecoratorMetadata>true</TypeScriptEmitDecoratorMetadata>
 <TypeScriptExperimentalDecorators>true</TypeScriptExperimentalDecorators>
```
### Usage with Visual Studio Code
- Clone or fork this repository
- Make sure you have [node.js](https://nodejs.org/) installed
- run `npm install` to install dependencies
- run `npm start` to fire up dev server
- open browser to `http://localhost:8080`

### Known Issues
- angular2-polyfills.js is currently being handled manually. 
- bundle size is large, due to inline sourcemaps from angular2 npm source.
