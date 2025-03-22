import styles from './Details.module.css'
import ScrollGrid from "../HomePage/ScrollGrid/ScrollGrid";
import TopBar from "./TopBar/TopBar";
import cardiologista from '../../assets/images/Profile/cirurgiaoprofile.png'
import DoctorInfo from "./DoctorInfo/DoctorInfo";
import Calendar from "./Calendar/Calendar";
import Time from './Time/Time';
import AppointmentButton from './BookAppointmentButton/BookAppointmentButton';
import AppointmentWindow from './BookAppointmentButton/BookAppointmentWindow/BookAppointmentWindow';
import useSelectedHour from '../../hooks/useSelectedHour';
import useSelectedDay from '../../hooks/useSelectedDay';
import useSelectedMonth from '../../hooks/useSelectedMonth';
import { getDoctor } from '../../api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';



export function Details(){
    const { selectedDay, handleButtonClickDay } = useSelectedDay();
    const { selectedHour, handleButtonClickHour } = useSelectedHour();
    const { selectedMonth, handleChangeMonth } = useSelectedMonth();
    const [doctor, setDoctor] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    let params = useParams();
    let id = params.id;

    useEffect(() => {
        async function loadDoctor(){
            let data = await getDoctor(id);
            setDoctor(data);
        }
        loadDoctor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <div className={styles.Details}>
            <TopBar name="Details"/>
            <ScrollGrid 
                    image={cardiologista}
                    name={doctor.nome}
                    specialty={doctor.formacao}
                    rating={doctor.avaliacao}
            />
            <DoctorInfo biografia={doctor.biografia} especialidades={doctor.especialidades}/>
            <Calendar handleChangeMonth={handleChangeMonth} handleButtonClickDay={handleButtonClickDay} selectedMonth={selectedMonth} selectedDay={selectedDay}/>
            {selectedDay && (
                <Time handleButtonClickHour={handleButtonClickHour} selectedHour={selectedHour} selectedDay={selectedDay}/>
            )}
            <AppointmentButton onClick={() => setIsOpen(true)} selectedDay={selectedDay} selectedHour={selectedHour} selectedMonth={selectedMonth} patientName='Steven'/>
            <AppointmentWindow isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
    )
}