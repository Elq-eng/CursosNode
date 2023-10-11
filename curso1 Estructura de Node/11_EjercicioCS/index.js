const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');


const main = async() => {

    let res = await axios.get('https://rickandmortyapi.com/api/character')

    let { data: { results } } = res

    let characters = results.map((character) => {
        return {
            id: character.id,
            name: character.name,
            status: character.status,
            species: character.species,

        }
    })

    let title = Object.keys(characters[1])
    let csvContent = '\ufeff' + title.join(',') + '\n';



    let result = characters.map((personaje) => {
        let data = Object.values(personaje).join(",")
        return csvContent += data
    }).join('\n')



    await fs.writeFile(path.join(__dirname, 'data.csv'), result)

    // console.log(path.join(__dirname, 'data.csv'));

}


main();