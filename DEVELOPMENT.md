# Contributing

## Local development

If you have an angular application that you want to use to test this library,
you will need to package this project with each new change:
```
npm run package
```

Then, cd to your testing app's directory and run the following command
(assuming you checked out *this project* in `~/Projects`):

```
npm link ~/Projects/ngCast/dist/ng-cast/
```
