import { Heroes } from "../data/heroes"



export const findHeroById = ( id: number ) => {
  return Heroes.find( ( hero )=> hero.id === id )
}
