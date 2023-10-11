const express = require('express');

const Service = require('./src/services')


const app = express();
app.use(express.json())

//  escuchar las peticiones 
app.get('/', (request, response) => {
    response.json({
        message: 'Lista de datos',
        body: Service.getUsers()
    })
})

// consultar por id
app.get('/:id', (req, response) => {
    let id = req.params.id;
    let user = Service.getUser(id)
    console.log(user);
    response.json({
        message: 'Usuario encontrado',
        body: Service.getUser()
    })
})

//  modificar 
app.put(('/:id', (req, res) => {

}))


//  delete 
app.delete('/:id', (req, res) => {
    let id = req.params.id;
    let result = Service.deleteUser(id)
    console.log(result)
    res.json({
        message: 'Delete Data',
        body: Service.getUsers()
    })


})

// post
app.post('/', (req, res) => {
    let { body: newUser } = req;
    Service.createUser(newUser)
    res.status(201).json({
        message: 'Ususario registrado',
        body: Service.createUser(newUser)
    })

})

app.listen(3000, () => {
    console.log("Servidro escuchando en http://localhost:3000");
})