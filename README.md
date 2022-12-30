# Generator in JS

## Requirements
NodeJS 18.4.0

## How to run
1. Clone the repository
2. Run the product server
```
npm run start:product
```
3. Run the cart server
```
npm run start:cart
```

## How to test
-  Call the product server
```
curl "http://localhost:3001/products?name=product_name"
```

-  Call the cart server
```
curl -X POST "http://localhost:3002/cart" --data '{"id":"123"}'
```