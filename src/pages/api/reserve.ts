// pages/api/reserve.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const client = await clientPromise;
      const db = client.db('reservation_db'); // You can change this to your DB name
      const collection = db.collection('reservations');

      const reservationData = req.body;

      const result = await collection.insertOne(reservationData);

      res.status(200).json({ success: true, insertedId: result.insertedId });
    } catch (error) {
      console.error('Error inserting reservation:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
