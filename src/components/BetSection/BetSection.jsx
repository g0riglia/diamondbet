import style from "./BetSection.module.css"

function BetSection({ selectedBet, handleBet, bettedMoney, setBettedMoney }) {
    function handleSubmit(event) {
        event.preventDefault();
        handleBet();
    }

    return (
        <section className={style.betSection}>
            <h1>Scommetti</h1>
            <form onSubmit={handleSubmit} className={style.bet}>
                {selectedBet && <p className={style.selectedBet}>{selectedBet.content}, {selectedBet.condition}</p>}
                <p>Importo:</p>
                <div className={style.input}>
                    €
                    <input 
                        type="number"
                        value={bettedMoney}
                        onChange={e => setBettedMoney(e.target.value)}
                        ></input>
                </div>
                <button>Scommetti</button>
            </form>
        </section>
    )
}

export default BetSection;