//configuração a função customExpress

const express = require('express')
const consigne = require('consign')
const bodyParser = require('body-parser')


module.exports = () => {
    const app = express()
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    consigne()
        .include('controllers')
        .into(app)
 
        return app
}
