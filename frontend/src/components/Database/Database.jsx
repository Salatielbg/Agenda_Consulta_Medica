import { useState, useEffect } from "react";
import { getDoctors, createDoctor } from "../../api";

export function Database() {
  const [doctors, setDoctors] = useState([]);

  function populateDatabase() {
    const doctorsList = [
      {
        nome: "Dr. Ramilson",
        formacao: "Odontologia",
        biografia: "Dentista desde 1989",
        especialidades: "Ortodontia, Endodontia, Periodontia",
      },
      {
        nome: "Dra. Alice",
        formacao: "Medicina",
        biografia: "Cardiologista experiente",
        especialidades: "Eletrocardiograma, Ecocardiografia, Arritmias",
      },
      {
        nome: "Dr. Marcos",
        formacao: "Farmácia",
        biografia: "Farmacêutico clínico",
        especialidades: "Farmacologia, Toxicologia, Análises Clínicas",
      },
      {
        nome: "Dra. Beatriz",
        formacao: "Ortopedia",
        biografia: "Especialista em traumas ortopédicos",
        especialidades: "Coluna, Joelho, Quadril",
      },
    ];

    doctorsList.forEach((doctor) => createDoctor(doctor));
  }

  useEffect(() => {
    async function loadDoctors() {
      let data = await getDoctors();
      if (data) {
        setDoctors(data);
      }
    }
    loadDoctors();
  }, []);

  return (
    <>
      <button onClick={populateDatabase}>
        Popular Banco de Dados
      </button>

      <h2>Médicos cadastrados:</h2>
      <ul>
        {doctors.map((doctor, index) => (
          <li key={index}>
            {doctor.nome} - {doctor.formacao}
          </li>
        ))}
      </ul>
    </>
  );
}
