import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Google from './components/google';
import { gapi } from 'gapi-script';

export const clientID = "14554587483-eoh5trtag10vbgm3fpmpt51tb0kj9luo.apps.googleusercontent.com";

function App() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientID: clientID,
        scope: ""
      })
    };

    gapi.load('client:auth2', start);
  }, [])

  return (
    <div className="App">
      <Google />
    </div>
  );
}

export default App;
