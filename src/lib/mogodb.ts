// lib/mongodb.ts
import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://dhruvawani17:OQIA8qCHZ8zstR9B@reservation.3121twl.mongodb.net/?retryWrites=true&w=majority&appName=reservation';
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default clientPromise;
