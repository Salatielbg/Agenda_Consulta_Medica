import AvailableDays from "./AvailableDays/AvailableDays";
import styles from './Calendar.module.css';
import PropTypes from 'prop-types';
import useSelectedDay from "../../../hooks/useSelectedDay";

Calendar.propTypes = {
    handleChangeMonth: PropTypes.func,
    handleButtonClickDay: PropTypes.func,
    selectedMonth: PropTypes.number,
    selectedDay: PropTypes.array
}
export default function Calendar({ handleChangeMonth, handleButtonClickDay, selectedMonth, selectedDay}) {
    const { datasDisponiveis } = useSelectedDay();
    return(
        <div>
            <div className={styles.CalendarHeader}>
                <h2>Calendar</h2>
                <select id="mes" value={selectedMonth} onChange={handleChangeMonth}>
                    {Array.from({ length: 12 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                            {new Date(0, i).toLocaleString("en-US", { month: "long" }).charAt(0).toUpperCase() + new Date(0, i).toLocaleString("en-US", { month: "long" }).slice(1)}
                        </option>
                    ))}
                </select>
                
            </div>
            <div className={styles.AvailableDays}>
                {datasDisponiveis[selectedMonth]?.map((data, index) => (
                        <AvailableDays
                            key={index}
                            selectedDay={selectedDay}
                            handleButtonClickDay={handleButtonClickDay}
                            datemonth={data.day}
                            dateweek={data.week}
                        />
                    ))}
            </div>
        </div>
    )
}