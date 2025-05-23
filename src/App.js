import './App.css';
import Header from "./components/Header/Header"
import EventsSection from "./components/EventsSection/EventsSection"
import BetSection from "./components/BetSection/BetSection"
import WinModal from "./components/WinModal/WinModal"
import {data as eventsArr} from "./data.js"
import React from 'react';
import Confetti from "react-confetti"

//Fammi sapere che ne pensi del codice! :)
function App() {
  const [selectedBet, setSelectedBet] = React.useState(null);
  const [founds, setFounds] = React.useState(100);
  const [bettedMoney, setBettedMoney] = React.useState(0);
  const [modal, setModal] = React.useState({
    show: false,
    text: "",
    moneyWon: 0,
  });

  function handleClick(bet, quota) {
    const { content, conditions, firstQuota, secondQuota, chance} = eventsArr[bet];

    setSelectedBet({
      content: content,
      condition: conditions[quota],
      chosenCondition: quota,
      quota: quota === 0 ? firstQuota : secondQuota,
      chance
    })
  }

  function handleBet() {
    const betResult = Math.random() * 100;
    if (bettedMoney > founds || bettedMoney < 1) {
      window.alert("Fondi insufficienti.");
      return;
    }
    setFounds(founds - bettedMoney);

    let moneyWon;
    if (betResult <= selectedBet.chance && selectedBet.chosenCondition === 0) {
      moneyWon = bettedMoney * selectedBet.quota;
      setFounds(founds + moneyWon)
      setModal({
        show: true,
        text: "Hai vinto:",
        moneyWon
      })
    } else if (betResult > selectedBet.chance && selectedBet.chosenCondition === 1) {
      moneyWon = bettedMoney * selectedBet.quota;
      setFounds(founds + moneyWon)
      setModal({
        show: true,
        text: "Hai vinto:",
        moneyWon
      })
    }
  }

  return (
    <div className="App">
      <Header />
      <EventsSection founds={founds} handleClick={handleClick} events={eventsArr}/>
      <BetSection selectedBet={selectedBet} handleBet={handleBet} bettedMoney={bettedMoney} setBettedMoney={setBettedMoney}/>
      {modal.show && <WinModal setModal={setModal} modal={modal}/>}
      {modal.show && <Confetti />}
    </div>
  );
}

export default App;
