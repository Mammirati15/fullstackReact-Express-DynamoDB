const uuid = require('uuid');
const AWS = require('aws-sdk');
AWS.config.update({
  region: "us-west-2"
})
const dynamoDb = new AWS.DynamoDB.DocumentClient();

const create = (appData, callback) => {
  appData.id = uuid.v4()
  const params = {
    TableName: 'applications',
    Item: appData
  };
  dynamoDb.put(params, (err, result) => {
    if(err) return callback(err)
    callback(null, appData)
  })
}  

module.exports.create = create