import styles from './AppointmentButton.module.css';
import PropTypes from 'prop-types';

AppointmentButton.propTypes = {
    handleSubmit: PropTypes.func.isRequired
}
export default function AppointmentButton({handleSubmit}){
    return(
        <div className={styles.AppointmentButton}>
            <button onClick={handleSubmit}>Book appointment</button>
        </div>
    )
}