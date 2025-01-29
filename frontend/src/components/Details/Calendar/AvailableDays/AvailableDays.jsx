import styles from './AvailableDays.module.css';
import PropTypes from 'prop-types';

AvailableDays.propTypes = {
    handleButtonClickDay: PropTypes.func,
    selectedDay: PropTypes.array,
    buttonNum: PropTypes.string,
    datemonth: PropTypes.string,
    dateweek: PropTypes.string
}
export default function AvailableDays({handleButtonClickDay, selectedDay, buttonNum, datemonth, dateweek}) {
    return(
        <div className={styles.AvailableDays}>
        <button onClick={() => handleButtonClickDay(buttonNum)} className={selectedDay.includes(buttonNum) ? styles.selected : ''}>
                <p>{datemonth}</p>
                <p>{dateweek}</p>
            </button>
            
        </div>
    )
}