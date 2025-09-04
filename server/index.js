//Dependencies
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())

//Server
app.listen(3002, ()=>{
    console.log('Server is running on port 3002')
})

//DB connection(updated)
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'react_login',
})

//Routes
app.post('/register', (req, res)=>{
    const setEmail = req.body.Email
    const setUserName = req.body.UserName
    const setPassword = req.body.Password

    const SQL = 'INSERT INTO users (email, username, password) VALUES (?,?,?)'

    const Values = [setEmail, setUserName, setPassword]

    db.query(SQL, Values, (err, results)=>{
        if(err){
            res.send(err)
        }
        else{
            console.log('User inserted successfully!')
            res.send({message: 'User added!'})
        }
    })
})

