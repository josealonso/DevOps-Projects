// implement a get endpoint
express = require('express')
app = express()
port = 3000

app.get('/', (req, res) => res.json([
        // list of users
    {

        name: 'John Doe',
        email: 'johndoe@gmail.com'
    }
]))

app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})