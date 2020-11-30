# What?
I need to get libp2p-js + TypeScript + Elm + Parcel to work. This repository shows history of me trying to achieve that.

*NOTE: libp2p dependency is brought through `fluence` dependency since it's the easiest and most relevant way to use libp2p for me.*

## Current state of affairs
Setting target browsers to `"last 1 Chrome version"` in `.babelrc` seems to avoid the [issue](#previous-issue), though this is suboptimal. 

If anyone knows how to fix [issue](#previous-issue) without giving up on older browsers, **please let me know by submitting a PR or an issue**, thanks in advance!

## Previous issue
Previously (commit 1b474826bf14bd3dab696f9e9cc7a7beed78da2f) I was stuck at this issue: [facebook/regenerator#391](https://github.com/facebook/regenerator/issues/391), [babel/babel-loader#840](https://github.com/babel/babel-loader/issues/840).

To reproduce, run
```shell
npm i
npm run start
```

This will yield an error
```
$ npm run start

> parcel-ts-elm@1.0.0 start
> parcel src/index.html

Server running at http://localhost:1234
🚨  parcel-ts-elm/node_modules/libp2p-secio/src/handshake/finish.js: parcel-ts-elm/node_modules/libp2p-secio/src/handshake/finish.js: Property name expected type of string but got null
    at validate (parcel-ts-elm/node_modules/@babel/types/lib/definitions/utils.js:160:13)
    at Object.validate (parcel-ts-elm/node_modules/@babel/types/lib/definitions/utils.js:229:7)
    at validateField (parcel-ts-elm/node_modules/@babel/types/lib/validators/validate.js:24:9)
    at validate (parcel-ts-elm/node_modules/@babel/types/lib/validators/validate.js:17:3)
    at builder (parcel-ts-elm/node_modules/@babel/types/lib/builders/builder.js:38:27)
    at Object.identifier (parcel-ts-elm/node_modules/@babel/types/lib/builders/generated/index.js:342:31)
    at parcel-ts-elm/node_modules/regenerator-transform/lib/hoist.js:32:29
    at Array.forEach (<anonymous>)
    at varDeclToExpr (parcel-ts-elm/node_modules/regenerator-transform/lib/hoist.js:29:23)
    at exit (parcel-ts-elm/node_modules/regenerator-transform/lib/hoist.js:51:20)
```