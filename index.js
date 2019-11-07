const express = require('express')
//declaring express a value of require with the param of express
const teams = require('./teams.json')
//declaring team a value of require with param of teams.json
const app = express()
//declaring app a value of express with open param
const bodyParser = require('body-parser')

app.get('/teams', (request, response) => {
    response.send(teams)
})

app.get('/teams/:filter', (request, response) => {
    let result = teams.filter((team) => {
        let filter = request.params.filter
        console.log(filter)
        return team.id == filter || team.abbreviation == filter
    })
    response.send(result)
})

app.post('/teams', bodyParser.json(), (request, response) => {
    const body = request.body
    let newTeams = teams.concat(body)

    if (!body.location ) {
        response.send('Must specify location.')
    }
    if (!body.mascot ) {
        response.send('Must specify mascot.')
    }
    console.log({body})
    response.send(newTeams)
})
app.all('*', (request, response) => {
    response.send('Be Specific')
})

app.listen(1337, (request, response) => {
    console.log('Server up and running')
})