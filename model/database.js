var mongoose=require('mongoose');
var mongodb=require('mongodb');
var MongoClient=mongodb.MongoClient;

exports.mongoConnected =() =>{
  mongoose.connect('mongodb+srv://aliya:4141@cluster0.5q07rlc.mongodb.net/data?retryWrites=true&w=majority')
.then(result =>{
  console.log('connected')
})
.catch(err =>{
  console.log('err');
});
};
