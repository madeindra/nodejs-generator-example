# Generator in JS

## Requirements
NodeJS 18.4.0

## How to run
1. Clone the repository
2. Run the first server
```
npm run start:server1
```
3. Run the second server
```
npm run start:server2
```

## How to test
-  Call the first server
```
curl http://localhost:3001/products?name=product_name
```

-  Call the second server
```
curl http://localhost:3002/products?name=product_name
```