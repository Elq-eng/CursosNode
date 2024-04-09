import 'dotenv/config'
import { get } from 'env-var'




export const envs = {

  PORT: get('PORT').required().asPortNumber(),
  PUBLIC_PATH: get('PUBLIC_PATH').required().asString(),
  
  // POSTGRES_URL:get('POSTGRES_URL').required().asString(),
  // POSTGRES_USER:get('POSTGRES_USER').required().asEmailString(),
  // POSTGRES_DB:get('POSTGRES_DB').required().asString(),
  // POSTGRES_PASSWORD: get('POSTGRES_PASSWORD').required().asBool(),

}


