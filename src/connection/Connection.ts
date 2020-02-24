import { createConnection } from "typeorm";
import SuperHero from "../entity/SuperHero";
import Power from "../entity/Power";

export const connection = createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "root",
  password: "root",
  database: "testdb",
  entities: [SuperHero, Power],
  synchronize: true,
  logging: false
});
