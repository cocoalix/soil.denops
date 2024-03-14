import { Database } from "https://deno.land/x/sqlite3@LATEST_VERSION/mod.ts";
const db = new Database("test.db");
db.close();
