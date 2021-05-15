const MongoClient = require('mongodb').MongoClient;

const { URL } = require('./constants');

const uri = URL || '';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let referencedDB;
let referencedCollection;

const connectToDB = async () => {
  try {
    await client.connect();
    referencedDB = client.db('testDB');
    referencedCollection = referencedDB.collection('testCollection');
  } catch (err) {
    console.log(err);
  }
};

const checkConnection = async () => {
  let result = {
    success: false,
    data: null
  };
  try {
    const response = await referencedCollection.findOne();
    result = {
      success: true,
      data: response
    };
  } catch (err) {
    console.log(err);
    result = {
      success: false,
      data: err
    };
  }
  return result;
};

module.exports = {
  connectToDB,
  checkConnection
};
