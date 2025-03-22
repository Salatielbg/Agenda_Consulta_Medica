import AvailableHours from './AvailableHours/AvailableHours';
import styles from './Time.module.css';
import PropTypes from 'prop-types';
import useSelectedHour from '../../../hooks/useSelectedHour';

Time.propTypes = {
    handleButtonClickHour: PropTypes.func,
    selectedHour: PropTypes.array,
    selectedDay: PropTypes.string
}
export default function Time({handleButtonClickHour, selectedHour, selectedDay}){
    const { getAvailableHours } = useSelectedHour();

    const availableHours = getAvailableHours(selectedDay);
    
    return(
        <div>
            <h2>Time</h2> 
            <div className={styles.AvailableHours}>
                {availableHours.map((horario, index) => (
                            <AvailableHours
                                key={index}
                                selectedHour={selectedHour}
                                handleButtonClickHour={() => handleButtonClickHour(horario.hour)}
                                hour={horario.hour}
                                period={horario.period}
                            />
                        ))}
            </div>
        </div>
    )

}
