import express from 'express';
import { envs } from './config';
import { GithubController } from './presentation/gitgub/controller';


(()=>{
  main()

})()



function main() {

  const app = express();

  const webhookGithub = new GithubController()

  app.use( express.json() );

  app.post('/api/github', webhookGithub.webhookHandler)


  app.listen( envs.PORT , () => {
    console.log('App running on port ' + envs.PORT)
  })

}
