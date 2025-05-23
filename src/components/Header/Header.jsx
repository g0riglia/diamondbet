import style from "./Header.module.css";

function Header() {
    return(
        <header className={style.header}>
            <i className="fa-solid fa-gem fa-2x"></i>
            <p className={style.title}>DiamondBet</p>
        </header>
    )
}

export default Header;