import SearchBar from "./SearchBar";
import {Link} from "react-router-dom";
import logoHenry from '../assets/logoHenry.png';
import styles from './Nav.module.css';

export default function Nav({onSearch}) {
    return (
        <nav className={styles.nav}>
            <div className={styles.links}>
                <Link to='/'>
                <span className={styles.brand}>
                    <img id="logoHenry" src={logoHenry} width="30" height="30" className="d-inline-block align-top"
                         alt=""/>
                        Henry - Weather App
                </span>
                </Link>
                <Link to='/about'>
                    <span>About</span>
                </Link>
            </div>
            <SearchBar
                onSearch={onSearch}
            />
        </nav>
    );
};
