import {GoogleLogin} from 'react-google-login';
import { clientID } from '../App';

const Google=()=>{

    const responseGoogle = (response) => {
        console.log(response);
      }

      const responseGoogleYes = (response) => {
        console.log(response);
      }

    return(
        <GoogleLogin
        clientId={clientID}
        buttonText="Se connecter avec Google"
        onSuccess={responseGoogleYes}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    );
}

export default Google;
