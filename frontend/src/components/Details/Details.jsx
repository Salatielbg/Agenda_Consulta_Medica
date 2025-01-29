import styles from './Details.module.css'
import ScrollGrid from "../HomePage/ScrollGrid/ScrollGrid";
import TopBar from "./TopBar/TopBar";
import cardiologista from '../../assets/images/Profile/cirurgiaoprofile.png'
import DoctorInfo from "./DoctorInfo/DoctorInfo";
import Calendar from "./Calendar/Calendar";
import Time from './Time/Time';
import AppointmentButton from './AppointmentButton/AppointmentButton';
import useSelectedHour from '../../hooks/useSelectedHour';
import useSelectedDay from '../../hooks/useSelectedDay';
import { getDoctor } from '../../api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';



export function Details(){
    const { selectedDay, handleButtonClickDay } = useSelectedDay();
    const { selectedHour, handleButtonClickHour } = useSelectedHour();
    const [doctor, setDoctor] = useState({});

    let params = useParams();
    let id = params.id;

    useEffect(() => {
        async function loadDoctor(){
            let data = await getDoctor(id);
            setDoctor(data);
        }
        loadDoctor();
    }, [])

    const handleSubmit = () => {
        // Handle the submit logic here with selectedButtons
        console.log('Selected buttons:', selectedHour, selectedDay);
    };
    return(
        <div className={styles.Details}>
            <TopBar />
            <ScrollGrid 
                    image={cardiologista}
                    name={doctor.nome}
                    specialty={doctor.formacao}
                    rating="4.9"
            />
            <DoctorInfo biografia={doctor.biografia} especialidades={doctor.especialidades}/>
            <Calendar handleButtonClickDay={handleButtonClickDay} selectedDay={selectedDay}/>
            <Time handleButtonClickHour={handleButtonClickHour} selectedHour={selectedHour}/>
            <AppointmentButton handleSubmit={handleSubmit}/>
        </div>
    )
}