import { useState } from 'react';

export default function useSelectedDay() {
    const [selectedDay, setSelectedDay] = useState([]);

    const handleButtonClickDay = (button) => {
        console.log('button', button);
        setSelectedDay((prevSelected) => {
            if (prevSelected.includes(button)) {
                return prevSelected.filter((b) => b !== button);
            } else {
                return [button];
            }
        });
    };

    return { selectedDay, handleButtonClickDay, setSelectedDay };
}