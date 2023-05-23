import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const question1 = "Are you familiar with chess?";
  const question2 =
    "If you are interested in playing chess against me, hit me up below!";
  let message = " Nothing is beyond our reach, so strive for your goal!";

  return (
    <>
      <div className="mainContainer">
        <h1>The Game of Chess</h1>

        <header>
          <ul>
            <li>
              <a href="https://en.wikipedia.org/wiki/Chess">Home</a>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Chess#History">History</a>
            </li>
            <li>
              <a href="https://www.fortwayneschools.org/images/schools/Northrop/useruploads/BT_Sept_21_10_big_brain_benefits_of_playing_chess.pdf">
                Benifits
              </a>
            </li>
            <li>
              <a href="https://www.chess.com/article/view/best-chess-players-of-all-time">
                Events
              </a>
            </li>
          </ul>
        </header>

        <div className="mainBody">
          <p>
            <img
              src="https://media.tenor.com/UJ9BW-Cb-XAAAAAC/chesscom-chess.gif"
              alt="cat messing upchessboard"
            />
          </p>
          <p>
            Chess is a board game for two players, called White and Black, each
            controlling an army of chess pieces in their color, with the
            objective to checkmate the opponent's king. It is sometimes called
            international chess or Western chess to distinguish it from related
            games, such as xiangqi and shogi.{" "}
          </p>
        </div>

        <footer>
          <h2>{question1}</h2>
          <h3>{message}</h3>
          <h4>{question2}</h4>
          <button>
            <a href="https://www.chess.com/"> Contact Me </a>
          </button>
        </footer>
      </div>
    </>
  );
}

export default App;
