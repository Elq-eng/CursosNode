import { characters } from '../../src/js-foundation/02-destructuring'



describe('Destrcuturing/02', () => { 

  test('characters should containt flash, superman', () => { 
    expect( characters ).toContain('Superman')

  })


})