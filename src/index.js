require('dotenv').config()
const { parse } = require('url')
const { MongoClient } = require('mongodb')
const { router, get } = require('microrouter')

const { MONGO_URL, MONGO_DB } = process.env

const queryForHotels = async query => {
  const connection = await MongoClient.connect(MONGO_URL)
  const db = connection.db(MONGO_DB)
  const collection = db.collection('hotels')
  const jobs = await collection.find(query).toArray()
  connection.close()
  return jobs
}

module.exports = async (req, res) => {
  const query = parse(req.url, true).query
  const hotels = await queryForHotels(query)
  hotels.map(hotel => delete hotel._id)
  return { hotels }
}
