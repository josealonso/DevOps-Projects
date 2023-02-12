// implement a get endpoint
express = require('express')
app = express()
port = 3000

app.get('/', (req, res) => res.json([
        // list of users
    {

        name: 'John Doe',
        email: 'johndoe@gmail.com'
    },
    {
        name: 'Alice Doe',
        email: 'alicedoe@gmail.com'
    },
    {
        name: 'Bob Doe',
        email: 'bobdoe@gmail.com'
    }
]))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})