import {getPokemonById} from '../../src/js-foundation/06-promises'


describe('js-foundation/promises', () => {

  test('should ', async() => { 
    const pokemonId = 1;
    const pokemonName = await getPokemonById( pokemonId );
    expect( pokemonName ).toBe('bulbasaur')
  })

  test(' should return an error if pokemon does not exist',async () => { 

    const pokemonId = 10000000;
    try {
      const pokemonName = await getPokemonById( pokemonId );
      expect( true ).toBeFalsy()
    } catch (error) {
      expect( error ).toBe('Pokemon not found')
    }

    


  })
})