import logo from './logo4.png';
import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
       </header>
       <main>
        <Dictionary defaultKeyword="Hello"/>
       </main>
       <footer className="app-footer"> <small> Coded by Vanessa Cadalso</small></footer>
      </div>
    </div>
  );
}


