let characters = [
    {id: 1, name: "Luke Skywalker", image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b8d2b12-21e8-4931-8a6d-fb9ecdd60383/dcdap19-43d712bc-cbbf-4ede-ba1f-75e26c27d7e4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWI4ZDJiMTItMjFlOC00OTMxLThhNmQtZmI5ZWNkZDYwMzgzXC9kY2RhcDE5LTQzZDcxMmJjLWNiYmYtNGVkZS1iYTFmLTc1ZTI2YzI3ZDdlNC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.38lXwC2M3bF1bxdQClJKtXqSzd-pyUK6DL8Kd8HrvY0", attack: Math.round((Math.random()*(100-50)+50)), defense: Math.round((Math.random()*(100-50)+50)), special: Math.round((Math.random()*(100-50)+50)), force:100},
    
    {id: 2, name: "Darth Vader", image: "https://pngimg.com/uploads/darth_vader/darth_vader_PNG13.png", attack: Math.round((Math.random()*(100-50)+50)), defense: Math.round((Math.random()*(100-50)+50)), special: Math.round((Math.random()*(100-50)+50)), force:100},
    
    {id: 3, name: "General Kenobi", image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b8d2b12-21e8-4931-8a6d-fb9ecdd60383/dcand30-68485dad-da2f-4a15-8f71-8b32e6f87695.png/v1/fill/w_809,h_988,strp/star_wars_the_clone_wars_obi_wan_kenobi_png_by_metropolis_hero1125_dcand30-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMDAzIiwicGF0aCI6IlwvZlwvNWI4ZDJiMTItMjFlOC00OTMxLThhNmQtZmI5ZWNkZDYwMzgzXC9kY2FuZDMwLTY4NDg1ZGFkLWRhMmYtNGExNS04ZjcxLThiMzJlNmY4NzY5NS5wbmciLCJ3aWR0aCI6Ijw9ODIyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.RfBxPVnTQUvTFVRyZ9nygiErhluXeZ3CIVUnBufM2IQ", attack: Math.round((Math.random()*(100-50)+50)), defense: Math.round((Math.random()*(100-50)+50)), special: Math.round((Math.random()*(100-50)+50)), force:100},

    {id: 4, name: "Darth Maul", image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b8d2b12-21e8-4931-8a6d-fb9ecdd60383/dc99z5g-36e48bef-22af-4b6d-b1f3-aa5793ece176.png/v1/fill/w_797,h_1002,strp/star_wars_the_phantom_menace_darth_maul_png_by_metropolis_hero1125_dc99z5g-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMDE4IiwicGF0aCI6IlwvZlwvNWI4ZDJiMTItMjFlOC00OTMxLThhNmQtZmI5ZWNkZDYwMzgzXC9kYzk5ejVnLTM2ZTQ4YmVmLTIyYWYtNGI2ZC1iMWYzLWFhNTc5M2VjZTE3Ni5wbmciLCJ3aWR0aCI6Ijw9ODEwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.1LhBTz9QgEefqBElD7EQrSGE0zJsIjDR6rgv2U3WK6k", attack: Math.round((Math.random()*(100-50)+50)), defense: Math.round((Math.random()*(100-50)+50)), special: Math.round((Math.random()*(100-50)+50)), force:100},

    {id: 5, name: "Jar-Jar Binks", image: "https://img.pngio.com/jar-jar-binks-appreciation-thread-off-topic-dayzrp-jar-jar-binks-png-1005_865.png", attack: 0, defense: 0, special: 0, force:0},

];


module.exports = {
    getAllCharacters: (req, res) => {
        res.status(200).send(characters);
    },

    getCharacter: (req, res) => {
        let char = characters.find(element => element.id === +req.params.id);
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
        let char = characters.find(element => element.id === +req.params.id);
        char.attack = req.body.attack;
        char.defense = req.body.defense;
        char.special = req.body.special;
        char.force = req.body.force;

        res.status(200).send(characters);
    },

    deleteCharacter: (req, res) => {
        let index = characters.findIndex(element => element.id === +req.params.id);
        characters.splice(index, 1);
        res.status(200).send(characters);

    }
    
    

    




}