let characters = [
    {id: 1, name: "Luke Skywalker", image: "../Images/luke.png", attack: (Math.random()*(100-50)+50), defense: (Math.random()*(100-50)+50), special: (Math.random()*(100-50)+50), force:100},
    
    {id: 2, name: "Darth Vader", image: "../Images/vader.png", attack: (Math.random()*(100-50)+50), defense: (Math.random()*(100-50)+50), special: (Math.random()*(100-50)+50), force:100},
    
    {id: 3, name: "General Kenobi", image: "../Images/kenobi.png", attack: (Math.random()*(100-50)+50), defense: (Math.random()*(100-50)+50), special: (Math.random()*(100-50)+50), force:100},

    {id: 4, name: "Darth Maul", image: "../Images/maul.png", attack: (Math.random()*(100-50)+50), defense: (Math.random()*(100-50)+50), special: (Math.random()*(100-50)+50), force:100},

    {id: 5, name: "Jar-Jar Binks", image: "../Images/jar-jar.png", attack: 0, defense: 0, special: 0, force:0},

];


module.exports = {
    getCharacter: (req, res) => {
        const {id} = req.params.id;
        let char = characters.find(element => element.id === +id);
        res.status(200).send(char);
    },

    newCharacter: (req, res) => {
        let newChar = {
            id: characters[characters.length-1].id+1,
            name: req.body.name,
            image: req.body.image,
            attack: req.body.attack,
            defense: req.body.defense,
            special: req.body.special,
            force: req.body.force,
        }
        characters.push(newChar);
        res.status(200).send(characters);
    },
    
    updateAttributes: (req, res) => {
        const {id} = req.params.id;
        const {attack} = req.body.attack;
        const {defense} = req.body.defense;
        const {special} = req.body.special;
        const {force} = req.body.force;

        let char = characters.find(element => element.id === +id);
        char.attack = attack;
        char.defense = defense;
        char.special = special;
        char.force = force;

        res.status(200).send(characters);
    },

    deleteCharacter: (req, res) => {
        const {id} = req.params.id;
        let index = characters.findIndex(element => element.id === +id);
        characters.splice(index, 1);
        res.status(200).send(characters);

    }
    
    

    




}