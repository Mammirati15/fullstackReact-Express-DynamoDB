const shortid = require('shortid');
const AWS = require('aws-sdk');
AWS.config.update({
  region: "us-west-2"
})
const dynamoDb = new AWS.DynamoDB.DocumentClient();

const create = (appData, callback) => {
  appData.id = shortid()
  appData.status = "submitted"
  appData.createdAt = Date.now()
  const params = {
    TableName: 'applications',
    Item: appData
  };
  dynamoDb.put(params, (err, result) => {
    if(err) return callback(err)
    delete appData.ein
    callback(null, appData)
  })
}

const find = (appKey, callback) => {
  
  const params = {
    TableName: 'applications',
    Item: appData
  };
  dynamoDb.put(params, (err, result) => {
    if(err) return callback(err)
    delete appData.ein
    callback(null, appData)
  })
}  

module.exports.create = create