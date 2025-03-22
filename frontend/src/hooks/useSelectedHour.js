import { useState } from 'react';

export default function useSelectedHour() {
    const [selectedHour, setSelectedHour] = useState([]);

    const horariosDisponiveis = {
        "10": [{ hour: "09:00", period: "AM" }, { hour: "11:00", period: "AM" }, { hour: "15:00", period: "PM" }],
        "15": [{ hour: "08:30", period: "AM" }, { hour: "10:30", period: "AM" }, { hour: "14:00", period: "PM" }],
        "22": [{ hour: "07:00", period: "AM" }, { hour: "13:00", period: "PM" }, { hour: "16:30", period: "PM" }],
        "27": [{ hour: "08:45", period: "AM" }, { hour: "12:00", period: "PM" }, { hour: "17:00", period: "PM" }],
    };

    // Função para gerar horários padrão
    const generateDefaultHours = () => {
        return [
            { hour: "09:00", period: "AM" },
            { hour: "11:00", period: "AM" },
            { hour: "14:00", period: "PM" },
            { hour: "16:00", period: "PM" },
        ];
    };

    // Função para obter horários disponíveis para um dia específico
    const getAvailableHours = (day) => {
        return horariosDisponiveis[day] || generateDefaultHours();
    };

    const handleButtonClickHour = (hour) => {
        setSelectedHour((prevSelected) => {
            if (prevSelected.includes(hour)) {
                return prevSelected.filter((b) => b !== hour);
            } else {
                return [hour];
            }
        });
    };

    return { selectedHour, handleButtonClickHour, setSelectedHour, getAvailableHours };
}