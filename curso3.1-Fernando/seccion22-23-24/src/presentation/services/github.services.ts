import { GitHubIssuePayload, GitHubStarPayload } from "../../interfaces";


export class GithubService {

  constructor(){}



  onStart( payload: GitHubStarPayload): string {

    let message= '';
    const {action, sender, repository,  }= payload
    message = `User ${ sender.login } ${ action }start on  ${ repository.full_name} `
    return message;

  }

  onIssue( payload: GitHubIssuePayload ):string {
    
    let message: string;
    const { action, issue } = payload;

    if ( action === '' ){
      const message = ` An issue was oppened with this title ${ issue.title }`;
      console.log({ message });
      return message;
    }

    if ( action === 'close'){
      const message = `An issue was closed by ${ issue.user.login }`;
      return message;
    }

    if ( action === 'reopened'){
      const message = `An issue was reopened by ${ issue.user.login }`;
      return message;
    }

    return `unhandled action  was reopened by ${ action }`;

  }


}