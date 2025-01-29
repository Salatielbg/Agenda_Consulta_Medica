import { useState } from 'react';

export default function useSelectedHour() {
    const [selectedHour, setSelectedHour] = useState([]);

    const handleButtonClickHour = (button) => {
        console.log('button', button);
        setSelectedHour((prevSelected) => {
            if (prevSelected.includes(button)) {
                return prevSelected.filter((b) => b !== button);
            } else {
                return [button];
            }
        });
    };

    return { selectedHour, handleButtonClickHour, setSelectedHour };
}

            

            // return (
            //     <>
            //         <button onClick={() => handleButtonClick('button1')} className={selectedButtons.includes('button1') ? styles.selected : ''}>Button 1</button>
            //         <button onClick={() => handleButtonClick('button2')} className={selectedButtons.includes('button2') ? styles.selected : ''}>Button 2</button>
            //         <button onClick={handleSubmit}>Submit</button>
            //     </>
            // );
