import { getUserById } from '../../src/js-foundation/03-callbacks'


describe('js-foundation/callbacks ', () => { 

    // failded
    test('getUserById should return an error if user does not exist', (done) => { 

      const id=10;
      getUserById(id, (err, user )=>{
        expect( err ).toBe(`User not found with id ${id}`)
        expect( user ).toBeUndefined();

        done()
      })

    })

    test('getUserById should return an error if user EXIST', (done) => { 

      const id=1;
      getUserById(id, (err, user )=>{
        
        const { id, name } = user!
        

        
        expect( err ).toBeUndefined()
        expect( id ).toBe(1)
        expect( name ).toBe('John Doe')
        
        // expect( user ).toBe('');

        done()
      })

    })


 })