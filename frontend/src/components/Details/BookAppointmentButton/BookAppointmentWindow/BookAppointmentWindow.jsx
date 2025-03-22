import styles from './BookAppointmentWindow.module.css';
import PropTypes from 'prop-types';
import { Link } from "react-router";

AppointmentWindow.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
}

export default function AppointmentWindow({ isOpen, onClose }) {
    if (!isOpen) return null; // Se não estiver aberta, retorna null
  
    return (
      <div className={styles.modaloverlay}>
        <div className={styles.modalcontent}>
          <h2>Scheduled Appointment!</h2>
          <p>Remember to check your calendar!</p>
  
          <Link to='/Appointments'>
            <button
              onClick={onClose}
              className={styles.modalbutton}
            >
              Concluir
            </button>
            </Link>
          
        </div>
      </div>
    );
  }
  