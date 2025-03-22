import { useState } from 'react';

export default function useSelectedDay() {
    const [selectedDay, setSelectedDay] = useState([]);

    const datasDisponiveis = {
        1: [{ day: "10", week: "Mon" }, { day: "15", week: "Wed" }, { day: "22", week: "Fri" }],
        2: [{ day: "05", week: "Tue" }, { day: "12", week: "Thu" }, { day: "18", week: "Sat" }],
        3: [{ day: "08", week: "Wed" }, { day: "14", week: "Fri" }, { day: "28", week: "Sun" }],
        4: [{ day: "03", week: "Mon" }, { day: "11", week: "Thu" }, { day: "25", week: "Sat" }],
        5: [{ day: "06", week: "Sun" }, { day: "13", week: "Mon" }, { day: "20", week: "Tue" }, { day: "27", week: "Wed" }],
        6: [{ day: "02", week: "Thu" }, { day: "09", week: "Fri" }, { day: "16", week: "Sat" }],
        7: [{ day: "07", week: "Sun" }, { day: "14", week: "Mon" }, { day: "21", week: "Tue" }],
        8: [{ day: "04", week: "Thu" }, { day: "10", week: "Sat" }, { day: "18", week: "Sun" }],
        9: [{ day: "09", week: "Wed" }, { day: "15", week: "Fri" }, { day: "28", week: "Sun" }],
        10: [{ day: "05", week: "Tue" }, { day: "12", week: "Thu" }, { day: "19", week: "Sat" }],
        11: [{ day: "03", week: "Mon" }, { day: "11", week: "Wed" }, { day: "24", week: "Sun" }],
        12: [{ day: "07", week: "Thu" }, { day: "14", week: "Sat" }, { day: "21", week: "Mon" }]
    };

    const handleButtonClickDay = (day) => {
        console.log('day', day);
        setSelectedDay((prevSelected) => {
            if (prevSelected.includes(day)) {
                return prevSelected.filter((b) => b !== day);
            } else {
                return [day];
            }
        });
    };

    return { selectedDay, handleButtonClickDay, setSelectedDay, datasDisponiveis };
}