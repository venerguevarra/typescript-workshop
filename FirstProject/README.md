-- Install Typescript
$ npm i typescript -g
-- Setup
$ tsc --init
-- Compilation
$ tsc
-- Compilation with Watch
$ tsc -w

-- lint
npm i tslint --g or
npm i tslint --save-dev
tslint --init
npm install tslint-config-airbnb
```
{
  "defaultSeverity": "error",
  "extends": [
    "tslint:recommended"
  ],
  "jsRules": {},
  "rules": {},
  "rulesDirectory": []
}
```


-- using gts
npm i gts -g
gts init -y
