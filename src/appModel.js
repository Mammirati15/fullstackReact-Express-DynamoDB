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
  console.log(appKey)
  const params = {
    TableName: 'applications',
    Key: {id: appKey}
  };
  dynamoDb.get(params, (err, data) => {
    if(err) return callback(err)
    delete data.ein
    callback(null, data)
  })
}  

module.exports.create = create
module.exports.find = find