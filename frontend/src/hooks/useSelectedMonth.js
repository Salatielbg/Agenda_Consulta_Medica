import { useState } from "react";

export default function useSelectedMonth() {
    // Estado para armazenar o mês selecionado
    const [selectedMonth, setselectedMonth] = useState(1);

    // Atualiza o mês selecionado e as datas disponíveis
    const handleChangeMonth = (event) => {
        setselectedMonth(parseInt(event.target.value));
    };

    return {selectedMonth, handleChangeMonth} ;
}
