import './App.css';
import Footer from './components/footer';
import Cards from './components/cards';
import Video from './components/video';
import Header from './components/header';
import 'tw-elements';

function App() {
  return (
    <>
        <div style={{
          backgroundImage: 'url("img/wave-wall-2.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%'
      }}>
          <Header></Header>
          <Cards></Cards>
        </div>
        <Video></Video>
        <Footer></Footer>
    </>
  );
}

export default App;
