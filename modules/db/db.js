const mongoose  = require('mongoose');
const userScheme = require('./shemas');
const userModel = mongoose.model('user', userScheme);
const mongodbUri ='mongodb://@ds026018.mlab.com:26018/bip-service';

mongoose.connect(mongodbUri, {
    useNewUrlParser: true,
    auth: {
      user: 'bipservice',
      password: 'bipserviceadmin503654'
    }
  })
  
  const connection = mongoose.connection;    
  
  connection.on('error', console.error.bind(console, 'connection error:'));  
  connection.once('open', () => {
   console.log('connected to a database')                       
  });

  module.exports = {
      connection,
      userModel
  }