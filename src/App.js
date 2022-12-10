import logo from './logo.svg';
import './App.css';
import Header from './component/Header-main/header';
import Banner from './component/Banner/banner';
import Card from './component/Card/card'
import Section from './component/Pro-section/section'
import Footer from './component/Footer/footer';

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Card/>
      <Section/>
      <Footer/>
    </div>
  );
}

export default App;
