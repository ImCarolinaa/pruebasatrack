// /node-express-api/src/utils/db.js
const { MongoClient } = require('mongodb');
const uri = 'your_mongodb_connection_string'; 

let dbInstance = null;

async function connectToDatabase() {
  if (dbInstance) return dbInstance;
  
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  dbInstance = client.db('your_database_name');
  return dbInstance;
}

async function get(collectionName) {
    console.log('using db mongo');
    return ['hola desde capa de datos'];
//   const db = await connectToDatabase();
//   return db.collection(collectionName);
}

module.exports = { get };