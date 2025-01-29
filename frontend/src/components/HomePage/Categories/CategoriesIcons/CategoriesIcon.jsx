import PropTypes from "prop-types"
import styles from "./CategoriesIcon.module.css"
CategoriesIcon.propTypes = {
    icon: PropTypes.string,
    handleButtonClickCategory: PropTypes.func,
    selectedCategory: PropTypes.string,
    title: PropTypes.string
}
export default function CategoriesIcon({icon, handleButtonClickCategory, selectedCategory, title}) {
    return (
        <div className={styles.CategoriesIcon}>
            <button onClick={() => handleButtonClickCategory(title)} className={selectedCategory === title ? styles.selected : ''}>
                <img src={icon} alt={title} />
            </button>
            
        </div>
    )
}