
// lib/mongodb.js
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const client = new MongoClient(uri)

let isConnected = false

export async function connectToDatabase() {
  if (!isConnected) {
    await client.connect()
    isConnected = true
  }
  return client.db()
}
