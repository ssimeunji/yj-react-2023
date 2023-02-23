import Button from './Button';
import style from './Header.module.css';
import envatoLogo from './assets/img/envato_logo.png';

function Header() {
    return (
        <div className={style.container}>
            <div className={style.logo}>
                <img src={envatoLogo} alt="logo" />
                <span>envatomarket</span>
            </div>
            <div>
                <Button variant={"header"} children={"Buy now"} />
            </div>
        </div>
    );
}
export default Header;