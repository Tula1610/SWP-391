import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  

  return (
    <>
        <div className='container' >
            <Header/>
            <Content/>
            <Footer/>
        </div>
    </>
  );
}

export default App;
