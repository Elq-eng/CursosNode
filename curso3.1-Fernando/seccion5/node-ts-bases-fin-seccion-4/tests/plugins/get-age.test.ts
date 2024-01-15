import { getAge } from "../../src/plugins/get-age.plugin";


describe('Plugins/ger-age.plugins', () => { 
  const birthdate = '1985-10-21';
  test('getAge() should return the age of person', () => { 

    const age = getAge(birthdate);
    expect( typeof age ).toBe('number');
  })

  test('getAge should return current age ', () => { 
    const age = getAge(birthdate)

    const calculateAge = new Date().getFullYear() - new Date(birthdate).getFullYear()
    expect( age ).toBe( calculateAge)
  })

  test('getAge should return 0 years '  , () => { 

    const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995)

    const birthdate2 = '1995-10-21';
    const age = getAge(birthdate2)
    expect( age ).toBe(0)

  })


})