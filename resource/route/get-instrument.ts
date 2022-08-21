import { Request, Response, NextFunction } from 'express';
import { Instrument } from 'database/model/Instrument';

export async function getInstrument(request: Request, response: Response, next: NextFunction): Promise<void> {
  try {
    const instrument: Instrument | null = await Instrument.findOne({ where: { instrument_symbol: request.params.instrument_symbol } });

    if (instrument) {
      response.send(instrument);
    } else {
      next();
    }
  } catch (error) {
    response.status(500).json(error);
  }
}

export default getInstrument;