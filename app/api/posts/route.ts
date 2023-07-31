import { connectToDatabase } from '../../../lib/mongodb'
import { NextResponse } from 'next/server';


/* 
DELETED FOR gh-pages

export async function GET(req: any,) {
   // Connect to the database
   const db = await connectToDatabase()
   // Get all documents from the posts collection
   const posts = await db.collection('posts').find().toArray()
   // Send the posts as a JSON response
   return new Response(JSON.stringify(posts))
 } 




export async function POST(req: Request) {
  // Get the post data from the request body
  const content = await req.text()
  // Connect to the database
  const db = await connectToDatabase()
  // Insert the post data into the posts collection
  await db.collection('posts').insertOne({ content })
  // Send a success response
  return NextResponse.json({ message: 'Post created' })
}

 */
