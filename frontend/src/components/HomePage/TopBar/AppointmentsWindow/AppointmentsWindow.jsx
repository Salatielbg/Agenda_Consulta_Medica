import { useEffect, useState } from 'react';
import styles from './AppointmentsWindow.module.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import TopBar from '../../../Details/TopBar/TopBar';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Ícones para editar e excluir

// Registre os componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function AppointmentsList() {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await fetch('http://localhost:3000/appointments');
                const data = await response.json();
                setAppointments(data);
            } catch (error) {
                console.error('Error fetching appointments:', error);
            }
        };

        fetchAppointments();
    }, []);

    // Processar dados para o gráfico
    const processChartData = () => {
        const appointmentsByDay = {};

        appointments.forEach((appointment) => {
            const day = appointment.selectedDay;
            if (appointmentsByDay[day]) {
                appointmentsByDay[day]++;
            } else {
                appointmentsByDay[day] = 1;
            }
        });

        const labels = Object.keys(appointmentsByDay);
        const data = Object.values(appointmentsByDay);

        return {
            labels,
            datasets: [
                {
                    label: 'Appointments per Day',
                    data,
                    backgroundColor: '#46c1ff', // Cor azul da Topbar
                    borderColor: '#1b94d1', // Cor azul mais escura
                    borderWidth: 1,
                },
            ],
        };
    };

    const chartData = processChartData();

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Appointments Distribution by Day',
            },
        },
    };

    return (
        <div className={styles.container}>
            <TopBar name="Appointments" />

            <h2 className={styles.title}>Appointments</h2>

            {/* Gráfico de Barras */}
            <div className={styles.chartContainer}>
                <Bar data={chartData} options={chartOptions} />
            </div>

            {/* Lista de Agendamentos */}
            <div className={styles.appointmentsTable}>
                <div className={styles.tableHeader}>
                    <span>Patient Name</span>
                    <span>Date</span>
                    <span>Time</span>
                    <span>Actions</span>
                </div>
                <ul className={styles.appointmentsList}>
                    {appointments.map((appointment) => (
                        <li key={appointment._id} className={styles.appointmentItem}>
                            <span className={styles.appointmentDetails}>
                                {appointment.patientName}
                            </span>
                            <span className={styles.appointmentDetails}>
                                {appointment.selectedDay}/{appointment.selectedMonth}
                            </span>
                            <span className={styles.appointmentDetails}>
                                {appointment.selectedHour}
                            </span>
                            <div className={styles.actions}>
                                <button
                                    className={styles.actionButton}
                                    onClick={() => alert(`Edit appointment for ${appointment.patientName}`)}
                                >
                                    <FaEdit /> {/* Ícone de editar */}
                                </button>
                                <button
                                    className={styles.actionButton}
                                    onClick={() => alert(`Delete appointment for ${appointment.patientName}`)}
                                >
                                    <FaTrash /> {/* Ícone de excluir */}
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}