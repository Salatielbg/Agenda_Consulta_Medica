import PropTypes from 'prop-types';
import styles from './AvailableHours.module.css';

AvailableHours.propTypes = {
    handleButtonClickHour: PropTypes.func,
    selectedHour: PropTypes.array,
    buttonNum: PropTypes.string,
    hour: PropTypes.string,
    period: PropTypes.string
}
export default function AvailableHours({handleButtonClickHour, selectedHour, buttonNum, hour, period}){
    return( 
        <div className={styles.AvailableHours}>
        <button onClick={() => handleButtonClickHour(buttonNum)} className={selectedHour.includes(buttonNum) ? styles.selected : ''}>
                <p>{hour}</p>
                <p>{period}</p>
            </button>
        </div>
        
    )
}