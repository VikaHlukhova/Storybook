 import GameCard from "./components/GameCard";
import formatDateTime from "./assets/functions";
import Statistic from "./components/Statistic"
function App() {
  return (
      <div className="App">

        {/*<GameCard   theme='dark' score='1:0'  firstTeamInfo='Chornomorets' secondTeamInfo='Dnipro-1'  dateTime={formatDateTime(new Date(2023,2,23,17,0))} />*/}
        {/*<GameCard   theme='light' score='1:0'  firstTeamInfo='Chornomorets' secondTeamInfo='Dnipro-1' dateTime={formatDateTime(new Date(2023,1,23,17,0))} />*/}

        <Statistic type={'line'} firstTeamInfo={6} secondTeamInfo={4}  parameter={'Yellow cards'} colorFirst={'#cd3131'} colorSecond={'#2886e0'} />
        <Statistic type={'circle'} firstTeamInfo={6} secondTeamInfo={4}  parameter={'Yellow cards'} colorFirst={'#cd3131'} colorSecond={'#2886e0'} />

      </div>

  )
}

export default App;