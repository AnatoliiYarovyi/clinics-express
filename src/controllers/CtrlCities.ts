import { BetterSQLite3Database } from 'drizzle-orm-sqlite/better-sqlite3';
import { Request } from 'express';

import { Cities } from '../data/repositories/Cities';

export class CtrlCities {
  async getCities(req: Request, res, next) {
    const db: BetterSQLite3Database = req.body.connection;
    const cities = new Cities(db);
    const { value } = req.query;

    const result = await cities.getCities(`${value}`);

    res.status(200).json({
      status: 'success',
      data: {
        result,
      },
    });
  }

  async getState(req: Request, res, next) {
    const db: BetterSQLite3Database = req.body.connection;
    const cities = new Cities(db);
    const { value } = req.query;

    const result = await cities.getState(`${value}`);

    res.status(200).json({
      status: 'success',
      data: {
        result,
      },
    });
  }
}
