import './App.scss';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Cards from './components/cards/Cards'


function App() {
  return (
    <div className="app">
      <Header />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
