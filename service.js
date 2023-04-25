const express = require('express')
const router = express.Router()
const arrayOfLength = 5
router.get('/', (request, response) => {
    response.send(`the page`)
})
router.route('/:id')
    .get((request, response) => {
        const userId = Number(request.params.id)
        if (userId < arrayOfLength) {
            response.send(` ${request.service.name}`)
        }
        else{
            response.send('Invalid NUmber!')
        }
    })
// .put((request,response)=>{
//     response.send(`GET method on  user page with id ${request.params.id}`)

// })
// .delete((request,response)=>{
//     response.send(`GET method on  user page with id ${request.params.id}`)
// })

const users = [
    {
        name: 'web application'
    },
    {
        name: 'machine learning'
    },
    {
        name: 'mobile app development'
    },
    {
        name: 'data science'
    },
    {
        name: 'bigdata'
    },
]

router.param('id', (request, response, next, id) => {
    request.service = users[id]
    next()
})
module.exports = router