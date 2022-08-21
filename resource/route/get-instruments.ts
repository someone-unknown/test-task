import { Request, Response } from 'express';
import { Instrument } from 'database/model/Instrument';

export async function getInstruments(request: Request, response: Response): Promise<void> {
  try {
    response.send(await Instrument.findAll());
  } catch (error) {
    response.status(500).json(error);
  }
}

export default getInstruments;