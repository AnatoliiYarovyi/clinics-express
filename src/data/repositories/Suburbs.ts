import { BetterSQLite3Database } from 'drizzle-orm-sqlite/better-sqlite3';
import { like } from 'drizzle-orm/expressions';

import { suburbs } from '../tables/suburbsTable';

export class Suburbs {
  private db: BetterSQLite3Database;

  constructor(db: BetterSQLite3Database) {
    this.db = db;
  }

  async getSuburbs(value: string) {
    const result = await this.db
      .select(suburbs)
      .fields({
        suburbs: suburbs.suburbName,
      })
      .where(like(suburbs.suburbName, `${value}%`))
      .all();

    return result;
  }

  async getPostcode(value: string) {
    const result = await this.db
      .select(suburbs)
      .fields({
        postcode: suburbs.postcode,
      })
      .where(like(suburbs.postcode, `${value}%`))
      .groupBy(suburbs.postcode)
      .all();

    return result;
  }
}
