const express = require('express')
const app = express()

app.get('/hi', (req, res) => {
    res.send('sup')
})

app.listen(3001, () => {
    console.log('Listening on port 3000')
})