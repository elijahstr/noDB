const express = require('express');
const app = express();
const ctrl = require('./controller');
app.use(express.json());


app.get('/api/character/:id', ctrl.getCharacter);
app.post('/api/character', ctrl.newCharacter);
app.put('/api/character/:id', ctrl.updateAttributes);
app.delete('/api/character/:id', ctrl.deleteCharacter);




app.listen(3001, () => console.log("Server is running on 3001"));