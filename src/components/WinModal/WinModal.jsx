import style from "./WinModal.module.css";

function WinModal({ modal, setModal }) {
    return(
        <div className={style.winModal}>
            <h1>{modal.text}</h1>
            <p>{modal.moneyWon}€</p>
            <button onClick={() => setModal({...modal, show: false})}>Chiudi</button>
        </div>
    )
}

export default WinModal;