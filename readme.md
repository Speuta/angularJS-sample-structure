# AngularJS sample structure

## Get started
- Install dependencies:
```
npm install
```

- Run a SCSS file watcher compiler on the project.
- Change informations in `package.json`, `Gruntfile.js`.
- Change app name in `src/app/app.js`
- Start to code !

## Add a view
- Copy `src/app/components/home/` folder with the name of your new view.
- Add js controller link to `src/index.html`.
- Add js controller to modules list in `src/app/app.js`.
- Add route in `src/app/app.routes.js`.
- Add SCSS path in `src/css/imports.scss`.

## Add a service / factory:
- Add it in `src/app/services/` folder.
- Add link to `src/index.html`.
- Add to modules list in `src/app/app.js`.

## Add a directive:
- Copy one existing directive in `src/app/shared/` folder with the name of your new directive.
- Add js directive link to `src/index.html`.
- Add js directive to modules list in `src/app/app.js`.
- Add SCSS path in `src/css/imports.scss`.

## Build
Result in "dist" folder.
```
npm build
```
