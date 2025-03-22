import { useState, useEffect } from 'react';
import { getDoctors } from '../api';

export default function useFilteredDoctors() {
    const [doctors, setDoctors] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        async function loadAllDoctors() {
            const data = await getDoctors();
            setDoctors(data);
        }
        loadAllDoctors();
    }, []);

    const filteredDoctors = doctors.filter((doctor) => {
        const matchesName = doctor.nome && doctor.nome.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory ? doctor.formacao && doctor.formacao.toLowerCase() === selectedCategory.toLowerCase() : true;
        return matchesName && matchesCategory;
    });

    return { searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, filteredDoctors };
}