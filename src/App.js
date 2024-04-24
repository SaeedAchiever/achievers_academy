import logo from './logo.svg';

import './App.css';

import Courses from './components/Courses/Courses';
import  Homepage  from  './components/Homepage/Homepage'
import Header from './components/Homepage/Header';
import Footer from './components/Homepage/Footer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div className="App">
      <Header />
      <Homepage  />
      {/* <Courses  /> */}
      {/* <About  /> */}
      {/* <Contact  /> */}
      <Footer />

    </div>
  );
}

export default App;
