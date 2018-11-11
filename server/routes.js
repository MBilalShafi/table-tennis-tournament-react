const mqtt = require ('mqtt');
var client  = mqtt.connect('tcp://localhost:1887');
const axios = require('axios')

client.on('connect', function () {
    client.subscribe('tournament');
    console.log('client has subscribed successfully');
});
client.on('message', function (topic, message){
    console.log("Message Recvd: "+message.toString()); //if toString is not given, the message comes as buffer
    const array = message.toString().split("||");
    const options = {
        player1Name: array[1],
        player1Score: array[2],
        player1Sets: array[3],
        player2Name: array[4],
        player2Score: array[5],
        player2Sets: array[6],
        commentry: array[7]
    }
    

    axios.post('http://localhost:3007/api/update', options)
    .then((res) => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
    })
    .catch((error) => {
    console.error(error)
    })
});

const appRouter = function(app) {
    app.get("/", function(req, res) {
      res.status(200).send("Welcome to our restful API");
    });
  };
  
  module.exports = appRouter;