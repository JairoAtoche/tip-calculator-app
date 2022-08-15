import './App.scss';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import CardTip from './components/CardTip';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <CardTip />
      </main>
      <Footer />
    </div>
  )
}

export default App
