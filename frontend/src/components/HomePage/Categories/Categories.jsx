import styles from './Categories.module.css';
import CategoriesIcon from './CategoriesIcons/CategoriesIcon';
import CardiologyIcon from '../../../assets/images/Categories/Cardiologista.png';
import PharmaceuticalIcon from '../../../assets/images/Categories/Farmaceutico.png';
import DentistIcon from '../../../assets/images/Categories/Dentista.png';
import OrthopedistIcon from '../../../assets/images/Categories/ortopedista.png';
import PropTypes from 'prop-types';

Categories.propTypes = {
    handleButtonClickCategory: PropTypes.func,
    selectedCategory: PropTypes.string
}
export default function Categories({selectedCategory, handleButtonClickCategory}) {
    return (
        <div className={styles.categories}>
            <h3>Categories</h3>
            <div className={styles.categoriesIcons}>
                <CategoriesIcon icon={CardiologyIcon} handleButtonClickCategory={handleButtonClickCategory} selectedCategory={selectedCategory} title="Cardiologista" />
                <CategoriesIcon icon={PharmaceuticalIcon} handleButtonClickCategory={handleButtonClickCategory} selectedCategory={selectedCategory} title="Farmacêutico" />
                <CategoriesIcon icon={DentistIcon} handleButtonClickCategory={handleButtonClickCategory} selectedCategory={selectedCategory} title="Odontologista" />
                <CategoriesIcon icon={OrthopedistIcon} handleButtonClickCategory={handleButtonClickCategory} selectedCategory={selectedCategory} title="Ortopedista" />
            </div>
        </div>
    )
}