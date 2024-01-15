import {emailTemplate} from '../../src/js-foundation/01-template'


describe('js-foundation', () => { 

  test('emailTemplate should be containt a greeting', () => { 
    expect( emailTemplate ).toContain('Hi, ')
  })

  test('emailTemplate should containt {{name}} and {{orderID}}', () => { 

    expect( emailTemplate ).toMatch(/{{name}}/)
    expect( emailTemplate ).toMatch(/{{orderId}}/)


   })
})