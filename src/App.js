import Data from './meusComponentes/Data';

function App() {
  return (
    <div className="App">
      <Data texto="Data e hora atuais no Brasil: " timeZone = "-3"/>
      <Data texto ="Data e hora atuais em Londres:" timeZone = "1"/>
      <Data texto="Data e horas atuais em Nova York:" timeZone = "-4"/>
    </div>
  );
}

export default App;
