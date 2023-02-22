import Button from './Button';

import style from './Header.module.css';

function Header() {
    return (
        <div className={style.container}>
            <div className={style.logo}>
                <a>envatomarket</a>
            </div>
            <div>
                <Button size="sm" children={"Buy now"} />
            </div>
        </div>
    );
}
export default Header;