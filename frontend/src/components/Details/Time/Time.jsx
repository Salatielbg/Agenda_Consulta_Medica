import AvailableHours from './AvailableHours/AvailableHours';
import styles from './Time.module.css';
import PropTypes from 'prop-types';

Time.propTypes = {
    handleButtonClickHour: PropTypes.func,
    selectedHour: PropTypes.array
}
export default function Time({handleButtonClickHour, selectedHour}){
    return(
        <div>
            <h2>Time</h2>
            <div className={styles.AvailableHours}>
                <AvailableHours selectedHour={selectedHour} handleButtonClickHour={handleButtonClickHour} buttonNum='1' hour='09:00' period='AM'/>
                <AvailableHours selectedHour={selectedHour} handleButtonClickHour={handleButtonClickHour} buttonNum='2' hour='11:00' period='AM'/>
                <AvailableHours selectedHour={selectedHour} handleButtonClickHour={handleButtonClickHour} buttonNum='3' hour='03:00' period='PM'/>
            </div>
        </div>
    )

}
