// Components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
// Styles
import '../Home/Home.scss';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <center><Navbar></Navbar></center>
      </header>
      <body className="body-home">
        <center><h1>Fernando Guardado</h1></center>
        <center><h4>Tech Enthusiast & Developer. </h4></center>
        <br></br>
      </body>
      <br></br>
      <Footer></Footer>
    </div>
  );
}

export default Home;
