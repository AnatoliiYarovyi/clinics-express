import { BetterSQLite3Database } from 'drizzle-orm-sqlite/better-sqlite3';
import { Request } from 'express';

import { Clinics } from '../data/repositories/Clinics';

export class CtrlClinics {
  async getClinicsByCity(req: Request, res, next) {
    const db: BetterSQLite3Database = req.body.connection;
    const clinics = new Clinics(db);
    const { value } = req.query;

    const results = await clinics.getClinicsByCity(`${value}`);

    res.status(200).json({
      status: 'success',
      data: {
        results,
      },
    });
  }

  async getClinicsByName(req: Request, res, next) {
    const db: BetterSQLite3Database = req.body.connection;
    const clinics = new Clinics(db);
    const { value } = req.query;

    const results = await clinics.getClinicsByName(`${value}`);

    res.status(200).json({
      status: 'success',
      data: {
        results,
      },
    });
  }

  async getClinicsByPostcode(req: Request, res, next) {
    const db: BetterSQLite3Database = req.body.connection;
    const clinics = new Clinics(db);
    const { value } = req.query;

    const results = await clinics.getClinicsByPostcode(`${value}`);

    res.status(200).json({
      status: 'success',
      data: {
        results,
      },
    });
  }

  async getClinicsByState(req: Request, res, next) {
    const db: BetterSQLite3Database = req.body.connection;
    const clinics = new Clinics(db);
    const { value } = req.query;

    const results = await clinics.getClinicsByState(`${value}`);

    res.status(200).json({
      status: 'success',
      data: {
        results,
      },
    });
  }

  async getClinicsBySuburb(req: Request, res, next) {
    const db: BetterSQLite3Database = req.body.connection;
    const clinics = new Clinics(db);
    const { value } = req.query;

    const results = await clinics.getClinicsBySuburb(`${value}`);

    res.status(200).json({
      status: 'success',
      data: {
        results,
      },
    });
  }

  async getClinicNames(req: Request, res, next) {
    const db: BetterSQLite3Database = req.body.connection;
    const clinics = new Clinics(db);
    const { value } = req.query;

    const results = await clinics.getClinicNames(`${value}`);

    res.status(200).json({
      status: 'success',
      data: {
        results,
      },
    });
  }
}
