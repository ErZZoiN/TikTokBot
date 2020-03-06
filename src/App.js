import React from 'react';
import logo from './logo.svg';
import './App.css';
import TikTokAPI, { getRequestParams } from 'tiktok-api';

function App() {

  const params = getRequestParams({
    fp: 'xiaomi/ginkgo/ginkgo:9/PKQ1.190616.001/V11.0.6.0.PCOMIXM:user/release-keys',
    openuid: 'C4D667EEAAE8098D',
    iid: '6801094914664515333',
    device_id: '6801094709906851333'
  })
  const api = React.useRef()

  React.useEffect(() => {
    const asyncGetPost = async () =>
    {
      api.current = new TikTokAPI(params, {signURL})
      console.log(api.current)
      const returnConnect = await api.current.loginWithEmail('mr.parmentier@gmail.com', 'Cenl3a5L')
      console.log("return Connect : ", returnConnect)
      console.log("info tiktok ID : ", await api.current.getPost(6550545442545865728))
    }
    asyncGetPost();
    
  }, [])

  const signURL = async (url, ts, deviceId) =>
  {
    return "https://cors-anywhere.herokuapp.com/" + url;
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
