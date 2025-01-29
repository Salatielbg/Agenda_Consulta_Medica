import SearchBar from "./SearchBar/SearchBar";
import styles from "./TopBar.module.css";
import notificationIcon from "../../../assets/images/Icons/notification-bell.png";
import PropTypes from "prop-types";

TopBar.propTypes = {
    searchTerm: PropTypes.string,
    onSearchChange: PropTypes.func,
};
export default function TopBar({ searchTerm, onSearchChange }) {
    return(
        <div className={styles.topbar}>
            <div className={styles.Userinfo}>
                <h3>Hi, Steven</h3>
                <button>
                    <img src={notificationIcon} alt="Notificações" />
                </button>
            </div>
            <div className={styles.searchBar}>
                <h1>Let&apos;s find <br />your top doctor!</h1>
                <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange}/>
            </div>
            
        </div>
    )
}