import logo from './logo.svg';
//import './App.css';
import "./style.css";
import Header from "./Header.js";
import Article from "./Article.js"
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Article />
      <Footer />

      

      
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
