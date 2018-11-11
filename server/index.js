// libs
const express = require('express')
const routes = require('./routes')
const bodyParser = require('body-parser')

const port = 3005
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);


app.listen(port, err => {
  if (err) {
    console.error('Server startup failed: ', err)
  }

  console.info(
    '==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.',
    port,
    port,
  )
})
