// import { createEnv } from "@t3-oss/env-nextjs";
// import { z } from "zod";
// TODO configure t3-env for env variable.
// export const env = createEnv({
//   server: {
//     ESCROW_TOKEN: z.string().isOptional(false),
//     PGHOST: z.string().default("localhost"),
//     PGUSER: z.string().default("ln-withdraw-usr"),
//     PGPASSWORD: z.string().default("ln-withdraw-pwd"),
//     PGDATABASE: z.string().default("ln-withdraw"),
//     DB_SSL: z.boolean().default(false),
//     PORT: z.number().default(5432),
//     DEBUG: z.boolean().default(false),
//     POOL_MAX: z.number().default(5),
//     POOL_MIN: z.number().default(1),
//   },
//   client: {
//     NEXT_PUBLIC_GALOY_URL: z.string().default("api.staging.galoy.io"),
//     NEXT_PUBLIC_LOCAL_URL: z.string().default(""),
//   },
//   shared: {
//     NEXT_PUBLIC_ESCROW_WALLET_BTC: z.string().default(""),
//     NEXT_PUBLIC_ESCROW_WALLET_USD: z.string().isOptional(false),
//   },
//   runtimeEnv: {
//     NEXT_PUBLIC_GALOY_URL: process.env.NEXT_PUBLIC_GALOY_URL,
//     NEXT_PUBLIC_ESCROW_WALLET_BTC: process.env.NEXT_PUBLIC_ESCROW_WALLET_BTC,
//     NEXT_PUBLIC_ESCROW_WALLET_USD: process.env.NEXT_PUBLIC_ESCROW_WALLET_USD,
//     NEXT_PUBLIC_LOCAL_URL: process.env.NEXT_PUBLIC_LOCAL_URL,
//     ESCROW_TOKEN: process.env.ESCROW_TOKEN,
//     PGHOST: process.env.PGHOST,
//     PGUSER: process.env.PGUSER,
//     PGPASSWORD: process.env.PGPASSWORD,
//     PGDATABASE: process.env.PGDATABASE,
//     DB_SSL: process.env.DB_SSL,
//     PORT: process.env.PORT,
//     DEBUG: process.env.DEBUG,
//     POOL_MAX: process.env.POOL_MAX,
//     POOL_MIN: process.env.POOL_MIN,
//   },
// });
