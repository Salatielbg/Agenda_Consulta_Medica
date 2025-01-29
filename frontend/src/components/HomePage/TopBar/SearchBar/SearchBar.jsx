import styles from "./SearchBar.module.css";
import PropTypes from "prop-types";

SearchBar.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    onSearchChange: PropTypes.func.isRequired,
};
export default function SearchBar({ searchTerm, onSearchChange }) {
    return(
        <div className={styles.SearchBar}>
            <input 
                type="text" 
                placeholder="Search here..." 
                value={searchTerm}
                onChange={(ev) => onSearchChange(ev.target.value)}
            />
        </div>
    )
}