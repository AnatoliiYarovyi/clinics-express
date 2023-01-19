import { BetterSQLite3Database } from 'drizzle-orm-sqlite/better-sqlite3';
import { Request } from 'express';

import { Clinics } from '../data/repositories/Clinics';

export class CtrlClinics {
  async getClinicsByCity(req: Request, res, next) {
    const db: BetterSQLite3Database = req.body.connection;
    const clinics = new Clinics(db);
    const { value } = req.query;

    const result = await clinics.getClinicsByCity(`${value}`);

    res.status(200).json({
      status: 'success',
      data: {
        result,
      },
    });
  }

  async getClinicsByName(req: Request, res, next) {
    const db: BetterSQLite3Database = req.body.connection;
    const clinics = new Clinics(db);
    const { value } = req.query;

    const result = await clinics.getClinicsByName(`${value}`);

    res.status(200).json({
      status: 'success',
      data: {
        result,
      },
    });
  }

  async getClinicsByPostcode(req: Request, res, next) {
    const db: BetterSQLite3Database = req.body.connection;
    const clinics = new Clinics(db);
    const { value } = req.query;

    const result = await clinics.getClinicsByPostcode(`${value}`);

    res.status(200).json({
      status: 'success',
      data: {
        result,
      },
    });
  }

  async getClinicsByState(req: Request, res, next) {
    const db: BetterSQLite3Database = req.body.connection;
    const clinics = new Clinics(db);
    const { value } = req.query;

    const result = await clinics.getClinicsByState(`${value}`);

    res.status(200).json({
      status: 'success',
      data: {
        result,
      },
    });
  }

  async getClinicsBySuburb(req: Request, res, next) {
    const db: BetterSQLite3Database = req.body.connection;
    const clinics = new Clinics(db);
    const { value } = req.query;

    const result = await clinics.getClinicsBySuburb(`${value}`);

    res.status(200).json({
      status: 'success',
      data: {
        result,
      },
    });
  }
}