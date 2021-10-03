import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Pageone from './Pageone/Pageone';
import Pagetwo from './Pagetwo/Pagetwo';
import Pagethree from './Pagethree/Pagethree';
import Pagefive from './Pagefive/Pagefive';
import Pagefour from './Pagefour/Pagefour';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />

      </header>
      <Pageone />
      <Pagetwo />
      <Pagethree />
      <Pagefour/>
      <Pagefive />
      <Footer/>
    </div>
  );
}

export default App;
