import { createKey } from '@/lib/keyStore';

export default function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const userId = Date.now(); // örnek amaçlı basit userId

  const keyData = createKey(ip, userId);
  res.status(200).json(keyData);
}
