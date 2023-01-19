import { sql } from 'drizzle-orm';
import { BetterSQLite3Database } from 'drizzle-orm-sqlite/better-sqlite3';
import { and, asc, desc, eq, like, or } from 'drizzle-orm/expressions';

import { clinics } from '../tables/clinicsTable';

export class Clinics {
  private db: BetterSQLite3Database;

  constructor(db: BetterSQLite3Database) {
    this.db = db;
  }

  async getClinicsByName(value: string) {
    const result = await this.db
      .select(clinics)
      .fields({
        city: clinics.city,
        state: clinics.state,
        clinicName: clinics.clinicName,
        fullAddress: clinics.fullAddress,
        postcode: clinics.postcode,
        website: clinics.website,
        phone: clinics.phone,
        suburb: clinics.suburb,
        email: clinics.email,
        aboutClinic: clinics.aboutClinic,
      })
      .where(like(clinics.clinicName, `%${value}%`))
      .all();

    return result;
  }

  async getClinicsByCity(value: string) {
    const result = await this.db
      .select(clinics)
      .fields({
        city: clinics.city,
        state: clinics.state,
        clinicName: clinics.clinicName,
        fullAddress: clinics.fullAddress,
        postcode: clinics.postcode,
        website: clinics.website,
        phone: clinics.phone,
        suburb: clinics.suburb,
        email: clinics.email,
        aboutClinic: clinics.aboutClinic,
      })
      .where(like(clinics.city, `%${value}%`))
      .all();

    return result;
  }

  async getClinicsByState(value: string) {
    const result = await this.db
      .select(clinics)
      .fields({
        city: clinics.city,
        state: clinics.state,
        clinicName: clinics.clinicName,
        fullAddress: clinics.fullAddress,
        postcode: clinics.postcode,
        website: clinics.website,
        phone: clinics.phone,
        suburb: clinics.suburb,
        email: clinics.email,
        aboutClinic: clinics.aboutClinic,
      })
      .where(like(clinics.state, `%${value}%`))
      .all();

    return result;
  }

  async getClinicsByPostcode(value: string) {
    const result = await this.db
      .select(clinics)
      .fields({
        city: clinics.city,
        state: clinics.state,
        clinicName: clinics.clinicName,
        fullAddress: clinics.fullAddress,
        postcode: clinics.postcode,
        website: clinics.website,
        phone: clinics.phone,
        suburb: clinics.suburb,
        email: clinics.email,
        aboutClinic: clinics.aboutClinic,
      })
      .where(like(clinics.postcode, `%${value}%`))
      .all();

    return result;
  }

  async getClinicsBySuburb(value: string) {
    const result = await this.db
      .select(clinics)
      .fields({
        city: clinics.city,
        state: clinics.state,
        clinicName: clinics.clinicName,
        fullAddress: clinics.fullAddress,
        postcode: clinics.postcode,
        website: clinics.website,
        phone: clinics.phone,
        suburb: clinics.suburb,
        email: clinics.email,
        aboutClinic: clinics.aboutClinic,
      })
      .where(like(clinics.suburb, `%${value}%`))
      .all();

    return result;
  }
}
