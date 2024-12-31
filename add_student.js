const response = require('express')

fetch('http://localhost:3000/api/student',{
    method : 'POST',
    headers :{
        "Content-Type":"application/json"
    },
    body :JSON.stringify({
        name : 'Allrinz',
        email : 'allrinz0@gmail.com',
        phone : '087811287862'
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error =>console.log(error))