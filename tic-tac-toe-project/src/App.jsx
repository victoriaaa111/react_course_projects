import Player from "./components/Player.jsx";

function App() {

  return (
    <main>
      <div id="game-container">
        <ol id = "players">
          <Player name="Victoria" symbol="X"/>
          <Player name="Rick" symbol="O"/>
        </ol>
      </div>
    </main>
  )
}

export default App
