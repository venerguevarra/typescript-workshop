# Step 1 – Add Node.js Yum Repository
```
yum install -y gcc-c++ make
curl -sL https://rpm.nodesource.com/setup_10.x | sudo -E bash -
```

# Step 2 – Install Node.js
```
sudo yum install nodejs
```

# Step 3 - Install Yarn using NPM (Optional)
```
sudo npm install yarn -g
```
or
```
curl -o- -L https://yarnpkg.com/install.sh | bash
curl -sL https://dl.yarnpkg.com/rpm/yarn.repo -o /etc/yum.repos.d/yarn.repo
sudo yum install yarn
```

# Step 4 - Check Node.js and NPM Version
```
node -v
npm -v
```

## Install Typescript
```
$ npm i typescript -g
```
## Setup
```
$ tsc --init
```
## Compilation
```
$ tsc
```
## Compilation with Watch
```
$ tsc -w
```

## Lint
```
npm i tslint --g or
npm i tslint --save-dev
tslint --init
npm install tslint-config-airbnb

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


## Using GTS
```
npm i gts -g
gts init -y
```
