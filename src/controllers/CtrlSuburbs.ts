import { BetterSQLite3Database } from 'drizzle-orm-sqlite/better-sqlite3';
import { Request } from 'express';

import { Suburbs } from '../data/repositories/Suburbs';

export class CtrlSuburbs {
  async getSuburbs(req: Request, res, next) {
    const db: BetterSQLite3Database = req.body.connection;
    const suburbs = new Suburbs(db);
    const { value } = req.query;

    const result = await suburbs.getSuburbs(`${value}`);

    res.status(200).json({
      status: 'success',
      data: {
        result,
      },
    });
  }

  async getPostcode(req: Request, res, next) {
    const db: BetterSQLite3Database = req.body.connection;
    const suburbs = new Suburbs(db);
    const { value } = req.query;

    const result = await suburbs.getPostcode(`${value}`);

    res.status(200).json({
      status: 'success',
      data: {
        result,
      },
    });
  }
}
