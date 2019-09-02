const express = require('express')
const app = express()
const port = process.env.PORT || 3002
const dotenv = require('dotenv').config()
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const knex = require('knex')(config)
const cors = require('cors')

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors())

app.get('/candidates', (req, res, next) => {
    knex('candidates')
        .then((rows) => {
            res.send(rows)
        })
        .catch((err) => {
            next(err)
        })
})
app.post('/candidates', (req, res, next) => {
    knex('candidates').insert(req.body)
        .then((rows) => {
            res.send(rows);
        })
        .catch((err) => {
            next(err)
        })
})

//edit:
app.put('/candidates/:id', (req, res, next) => {
    console.log('req.body', req.body)
    knex('candidates').update(req.body).where('id', req.params.id).returning('*')
        .then((rows) => {
            res.send(rows);
        })
        .catch((err) => {
            next(err)
        })
})

//delete:
app.delete('/candidates/:id', (req, res, next) => {
    knex('candidates').where('id', req.params.id).del()
        .then((data) => {
            res.status(200).send({
                message: 'success',
                data: data
            })
        })
        .catch((err) => {
            next(err)
        })
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('something broke!')
})
app.use(function (err, req, res, next) {

    res.status(404).send('Sorry, cannot find that!')
})



app.listen(port, function () {
    console.log(`listening on port ${port}`)
})
