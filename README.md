# Angular Lazy Loaded SVG Icons Library with Material Icons

Use the cool icons from Material in your app, fully tree-shaked and only loaded when necessary. Injected into the dom, and therefore IE compatible.

## Live Demo
The live demo can be found at https://material-icons.akehir.com.

## Getting Started

If you just want to use the library, follow the following 4 simple steps. For contributing, or building the library locally, see the section on [building](#building) the library.

Supported Angular Versions
| Angular Version | Library Version          |
| --------------- | ------------------------ |
|  9.x            | 1.0.0                    |
| 10.x            | 2.0.0                    |
| 11.x            | 3.0.0                    |
| 12.x            | 4.0.0                    |
| 13.x            | 5.0.0                    |

### Step 1: Install

Install the npm package.

```
npm i @triangular/material-icons
```

### Step 2: Add to NgModule Imports

Then, add the __MaterialIconsModule__ to the imports of your module(s).

```typescript
import { NgModule } from '@angular/core';
import { MaterialIconsModule } from '@triangular/material-icons';

@NgModule({
    declarations: [
    ],
    imports: [
      MaterialIconsModule,
    ],
    providers: [],
    bootstrap: [],
})
export class AppModule { }
```

### Step 3: Register the Icons in the Registry
The tree-shaking magic happens when you import icons from   __@triangular/material-icons/icons__ and register them in the  __MaterialIconsRegistry__. By explicitly importing the icons where they are required, the tree shaking can ensure they are loaded when they are needed. If an icon is not required, it will not be bundled in your application. If an icon is required in a feature module, it will be bundled with the feature module. And if the icon is bundled in multiple feature modules, it will be bundled with the common bundle - in order to not download the same icon multiple times.

```typescript
import { Component } from '@angular/core';
import { MaterialIconsRegistry } from '@triangular/material-icons';
import {
  materialIconIc3DRotation24Px,
  // add more icons here
} from '@triangular/material-icons/icons';

@Component({
  selector: 'app-some-component-with-icons',
  template: '<material-icon name="ic_3_d_rotation_24_px"></material-icon>',
  styles: 'svg { color: #ccc; fill: currentColor; width: 5rem; height: 5rem; }',
})
export class SomeComponentWithIcons {

  constructor(private registry: MaterialIconsRegistry) {
    registry.registerIcons([
      materialIconIc3DRotation24Px,
      // add more icons here
    ]);
  }
}
```

### Step 4: Enjoy using the Icons with a Peace of Mind
Once an icon has been registered, it can simply be used in your template. If you get the error `can't bind to 'name' since it isn't a known property of 'material-icon'`, you need to include the __MaterialIconsModule__ in your module. 

```html
<material-icon name="ic_3_d_rotation_24_px"></material-icon>
```

## Building
As a pre-requisite to build the library, you need to install all the dependencies via `npm install` or `yarn`.
Furthermore, you will need to sync the projects submodules `git submodule sync --recursive` and  `git submodule update --init --recursive`.

### Building the Library
Before the sample app can be run, you need to build the library itself.

```
npm run build:lib
```

### Building the Sample App
After building the library, it is either possible to build the sample app, via

```
npm run build:app
```

,or to run the sample app with a local dev server:

```
npm run start:app
```

### Checking the bundle of the Sample App
You can verify how the application is bundled with the following command:

```
npm run analyze
```

## Running the tests

### Unit Tests
There are not many tests, but those that are can be run with:

```
npm run test -- --no-watch --progress=false --code-coverage --browsers ChromeHeadless
```

### And coding style tests

The project follows the [angular style guide](https://angular.io/guide/styleguide) and lints with the following command:

```
npm run lint
```

## Built With

* [Angular](https://github.com/angular/angular) - The web framework used
* [NPM](https://www.npmjs.com/) - Dependency Management
* [Gitlab](https://git.akehir.com) - Source Control & CI Runner

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. 

### Version History

- 1.0.0: Initial Release
- 1.0.2: Documentation
- 1.0.3: Documentation
- 2.0.0: Add support for Angular 10
- 3.0.0: Add support for Angular 11
- 4.0.0: Add support for Angular 12
- 5.0.0: Add support for Angular 13

## Authors

* **Raphael Ochsenbein** - *Initial work* - [Akehir](https://github.com/akehir)

See also the list of [contributors](https://github.com/akehir/material-icons/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [Google](https://github.com/google/material-design-icons) for creating the awesome icon library
* [Kevin Kreuzer (kreuzerk)](https://medium.com/angular-in-depth/how-to-create-a-fully-tree-shakable-icon-library-in-angular-c5488cf9cd76) For creating a tutorial and package for creating a lazy loaded angular library
* [Todd Palmer](https://indepth.dev/creating-a-library-in-angular-6-using-angular-cli-and-ng-packagr/) for a tutorial for creating an angular library
* [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2/) for the readme template

