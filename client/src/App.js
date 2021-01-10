import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainBody from './components/MainBody';
import CatInfoPage from './components/CatInfoPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Route path='/cat-info' component={CatInfoPage} exact />
        <Route path='/' component={MainBody} exact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
