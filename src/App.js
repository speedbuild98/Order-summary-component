import "./App.css";
import headerImg from "./images/illustration-hero.svg"
import musicIcon from "./images/icon-music.svg"



function App() {
  return (
    <div className="App">
      <main>
        <img className="headerImg" src={headerImg} alt="header img" />
        <div className="contenedor">
          <h1 className="titulo">Order Summary</h1>
          <p className="descripcion">
            You can now listen to millions of<br/>songs, audiobooks, and podcasts on<br/>
            any device anywhere you like!
          </p>
          <div className="plan">
            <img class="musicIcon" src={musicIcon} alt="music icon" />
            <div className="costo">
              <h2 className="planAnual">Annual Plan</h2>
              <p className="precio">$59.99/year</p>
            </div>
            <a href="https://devgallardo.netlify.app/" className="cambiar">
              Change
            </a>
          </div>
          <div className="botones">
            <button className="proceder">Proceed to Payment</button>
            <button className="cancel">Cancel Order</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;






