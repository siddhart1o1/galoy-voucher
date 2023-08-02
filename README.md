# Galoy Voucher

Galoy Voucher is a web application built with Next.js 13, GraphQL, TypeScript, and PostgreSQL. It leverages the Lightning Network (LN) and LNURL withdraw to facilitate the creation and redemption of vouchers for Bitcoin transactions.

Galoy-Voucher uses query, mutation, and subscription operations from the Galoy's graphql API endpoints.
## How to run this repo locally?
add these in your .env files or in `/config/variables` files 
```bash
ESCROW_TOKEN
NEXT_PUBLIC_ESCROW_WALLET_USD
```
to configure more option look into `/config/vairables `

then run 
```
yarn install
```
and run 
```
make start-dev
```
to start app in dev mode and docker containers for Database and kratos.





Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to build for production?
In the project directory, you can run:

yarn install
yarn build