import { config } from "https://deno.land/x/dotenv/mod.ts"

const CONFIG = {
  PORT: config().PORT || "3000",
}

export { CONFIG }
