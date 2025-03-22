import PropTypes from 'prop-types';
import styles from './BookAppointmentButton.module.css';
AppointmentButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    selectedDay: PropTypes.array,
    selectedHour: PropTypes.array,
    selectedMonth: PropTypes.number,
    patientName: PropTypes.string.isRequired
}
export default function AppointmentButton({ onClick, selectedDay, selectedHour, selectedMonth, patientName }) {
    const handleBookAppointment = async () => {
        const appointmentData = {
            patientName,
            selectedDay,
            selectedHour,
            selectedMonth
        };
        try {
            const response = await fetch('http://localhost:3000/appointments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(appointmentData)
            });
            if (response.ok) {
                onClick();
            } else {
                alert('Error booking appointment');
            }
        } catch (error) {
            console.error('Error booking appointment:', error);
            alert('Error booking appointment');
        }

    };

    return (
        <div className={styles.AppointmentButton}>
            <button
                onClick={handleBookAppointment}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
            Book appointment
            </button>
        </div>
      );
    }
    


        

    
