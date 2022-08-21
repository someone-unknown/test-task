import { ClientRequest, IncomingMessage } from 'http';
import { request } from 'https';
import { Instrument } from 'database/model/Instrument';

interface InstrumentRaw {
  instrument_symbol: string;
  instrument_name: string;
  usd_price: number;
}

async function getInstruments(): Promise<InstrumentRaw[]> {
  return new Promise<InstrumentRaw[]>((resolve, reject): void => {
    try {
      const req: ClientRequest = request('https://api.coingecko.com/api/v3/coins', (response: IncomingMessage): void => {
        let buffer: Buffer = Buffer.alloc(0);

        response.on('data', (data: Buffer): void => {
          buffer = Buffer.concat([buffer, data]);
        });

        response.on('error', reject);

        response.on('end', (): void => {
          console.log(buffer.toString('utf-8'));
          const data: InstrumentRaw[] = JSON.parse(buffer.toString('utf-8')).map((entry: any): InstrumentRaw => ({
            instrument_symbol: entry.symbol,
            instrument_name: entry.name,
            usd_price: entry.market_data.current_price.usd,
          }));

          resolve(data);
        });
      });

      req.on('error', reject);

      req.end();
    } catch (error) {
      reject(error);
    }
  });
}

setInterval(async (): Promise<void> => {
  const data: InstrumentRaw[] = await getInstruments();

  data.forEach(async (instrument: InstrumentRaw): Promise<void> => {
    const found: Instrument | null = await Instrument.findOne({ where: { instrument_symbol: instrument.instrument_symbol } });

    if (found) {
      found.set(instrument);
      await found.save();
    } else {
      await Instrument.create({
        instrument_symbol: instrument.instrument_symbol,
        instrument_name: instrument.instrument_name,
        usd_price: instrument.usd_price,
      });
    }
  });
}, 5000);