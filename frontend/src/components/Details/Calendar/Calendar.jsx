import AvailableDays from "./AvailableDays/AvailableDays";
import styles from './Calendar.module.css';
import PropTypes from 'prop-types';

Calendar.propTypes = {
    handleButtonClickDay: PropTypes.func,
    selectedDay: PropTypes.array
}
export default function Calendar({handleButtonClickDay, selectedDay}) {
    return(
        <div>
            <h2>Calendar</h2>
            <div className={styles.AvailableDays}>
                <AvailableDays selectedDay={selectedDay} handleButtonClickDay={handleButtonClickDay} buttonNum='1' datemonth="12" dateweek="Mon"/>
                <AvailableDays selectedDay={selectedDay} handleButtonClickDay={handleButtonClickDay} buttonNum='2' datemonth="13" dateweek="Tue"/>
                <AvailableDays selectedDay={selectedDay} handleButtonClickDay={handleButtonClickDay} buttonNum='3' datemonth="14" dateweek="Wed"/>
                <AvailableDays selectedDay={selectedDay} handleButtonClickDay={handleButtonClickDay} buttonNum='4' datemonth="15" dateweek="Thu"/>
            </div>
        </div>
        

    )
}