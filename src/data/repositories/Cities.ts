import { BetterSQLite3Database } from 'drizzle-orm-sqlite/better-sqlite3';
import { and, asc, desc, eq, like, or } from 'drizzle-orm/expressions';

import { cities } from '../tables/citiesTable';

export class Cities {
  private db: BetterSQLite3Database;

  constructor(db: BetterSQLite3Database) {
    this.db = db;
  }

  async getCities(value: string) {
    const results = await this.db
      .select(cities)
      .fields({
        suggestion: cities.cityName,
      })
      .where(like(cities.cityName, `${value}%`))
      .all();

    return results;
  }

  async getState(value: string) {
    const results = await this.db
      .select(cities)
      .fields({
        suggestion: cities.state,
      })
      .where(like(cities.state, `${value}%`))
      .groupBy(cities.state)
      .all();

    return results;
  }
}
