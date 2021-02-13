import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>6018</title>
        <meta name="description" content="Manufacture convenience apps." data-react-helmet="true" />
        <meta name="google-site-verification" content="Pl5EyeztKHbZPtdPeFkCW5cVcd3f3ypofOvkw7VFL_g" />
      </Helmet>
      <header className="App-header">
        <p style={{marginLeft: 0.6, marginTop: 0.6, marginRight: 0.6, marginBottom: 1.6, fontSize: 2.8 + 'em'}}>6018</p>
        <ul>
          <li>
            <a href="https://soundcloud.com/wd6018" target="_blank">SoundCloud</a>
          </li>
          <li>
            <a href="https://twitter.com/_ekady6" target="_blank">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/ekady6/" target="_blank">Github</a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
