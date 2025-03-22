import styles from './AvailableDays.module.css';
import PropTypes from 'prop-types';

AvailableDays.propTypes = {
    handleButtonClickDay: PropTypes.func,
    selectedDay: PropTypes.array,
    buttonNum: PropTypes.number,
    datemonth: PropTypes.string,
    dateweek: PropTypes.string
}
export default function AvailableDays({handleButtonClickDay, selectedDay, buttonNum, datemonth, dateweek}) {
    return(
        <div className={styles.AvailableDays}>
        <button onClick={() => handleButtonClickDay(datemonth)}  className={selectedDay.includes(datemonth) ? styles.selected : ''}>
                <p>{datemonth}</p>
                <p>{dateweek}</p>
            </button>
            
        </div>
    )
}