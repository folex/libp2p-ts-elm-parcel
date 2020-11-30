# Current issue
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
    at validate (/Users/folex/Development/parcel-ts-elm/node_modules/@babel/types/lib/definitions/utils.js:160:13)
    at Object.validate (/Users/folex/Development/parcel-ts-elm/node_modules/@babel/types/lib/definitions/utils.js:229:7)
    at validateField (/Users/folex/Development/parcel-ts-elm/node_modules/@babel/types/lib/validators/validate.js:24:9)
    at validate (/Users/folex/Development/parcel-ts-elm/node_modules/@babel/types/lib/validators/validate.js:17:3)
    at builder (/Users/folex/Development/parcel-ts-elm/node_modules/@babel/types/lib/builders/builder.js:38:27)
    at Object.identifier (/Users/folex/Development/parcel-ts-elm/node_modules/@babel/types/lib/builders/generated/index.js:342:31)
    at /Users/folex/Development/parcel-ts-elm/node_modules/regenerator-transform/lib/hoist.js:32:29
    at Array.forEach (<anonymous>)
    at varDeclToExpr (/Users/folex/Development/parcel-ts-elm/node_modules/regenerator-transform/lib/hoist.js:29:23)
    at exit (/Users/folex/Development/parcel-ts-elm/node_modules/regenerator-transform/lib/hoist.js:51:20)
```