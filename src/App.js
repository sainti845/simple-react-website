import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppHeader from './components/header';
import Corousel from './components/Corousel';
import AppAbout from './components/about';
import AppContact from './components/contact';
import AppFooter from './components/footer';

function App() {
  return (
    <div className="App">
      <header>
        <AppHeader />
      </header>
      
        <Corousel />
        <AppAbout />
        <AppContact />
      
      <footer id="footer">
        <AppFooter />
      </footer>
    </div>
  );
}

export default App;
