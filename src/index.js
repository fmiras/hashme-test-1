require('dotenv').config()
const { MongoClient } = require('mongodb')

const { MONGO_URL, MONGO_DB } = process.env

const getHotels = async () => {
  const connection = await MongoClient.connect(MONGO_URL)
  const db = connection.db(MONGO_DB)
  const collection = db.collection('hotels')
  const jobs = await collection.find().toArray()
  connection.close()
  return jobs
}

module.exports = async (req, res) => {
  const hotels = await getHotels()
  hotels.map(hotel => delete hotel._id)
  return { hotels }
}
