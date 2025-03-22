import { useState, useEffect } from "react";
import { getDoctors, createDoctor } from "../../api";
export function Database() {
  const [doctors, setDoctors] = useState([]);

  function populateDatabase() {
    const doctorsList = [
      // Cardiologistas
      {
        nome: "Dr. Ramilson",
        formacao: "Cardiologista",
        biografia: "Cardiologista desde 1989",
        especialidades: "Ortodontia, Endodontia, Periodontia",
        avaliacao: "4.7"
      },
      {
        nome: "Dra. Alice",
        formacao: "Cardiologista",
        biografia: "Cardiologista experiente",
        especialidades: "Eletrocardiograma, Ecocardiografia, Arritmias",
        avaliacao: "4.8"
      },
      {
        nome: "Dr. Roberto",
        formacao: "Cardiologista",
        biografia: "Especialista em cardiologia preventiva",
        especialidades: "Eletrocardiograma, Hipertensão, Insuficiência Cardíaca",
        avaliacao: "4.6"
      },
      {
        nome: "Dra. Fernanda",
        formacao: "Cardiologista",
        biografia: "Experiente em tratamentos de arritmia",
        especialidades: "Arritmias, Eletrofisiologia, Marcapasso",
        avaliacao: "4.9"
      },
      {
        nome: "Dr. Lucas Silva",
        formacao: "Cardiologista",
        biografia: "Cardiologista com foco em doenças coronárias",
        especialidades: "Cardiopatia isquêmica, Insuficiência cardíaca, Arritmias",
        avaliacao: "4.7"
      },
    
      // Farmacêuticos
      {
        nome: "Dr. Marcos",
        formacao: "Farmacêutico",
        biografia: "Farmacêutico clínico",
        especialidades: "Farmacologia, Toxicologia, Análises Clínicas",
        avaliacao: "4.7"
      },
      {
        nome: "Dra. Camila",
        formacao: "Farmacêutico",
        biografia: "Especialista em análises clínicas",
        especialidades: "Toxicologia, Exames laboratoriais, Controle de qualidade",
        avaliacao: "4.6"
      },
      {
        nome: "Dra. Raquel Torres",
        formacao: "Farmacêutico",
        biografia: "Especialista em farmacologia clínica",
        especialidades: "Interações medicamentosas, Terapias farmacológicas, Cuidados paliativos",
        avaliacao: "4.7"
      },
      {
        nome: "Dr. Paulo",
        formacao: "Farmacêutico",
        biografia: "Atua em farmácia hospitalar com foco em medicamentos oncológicos",
        especialidades: "Farmacoterapia, Medicamentos anticâncer, Análises clínicas",
        avaliacao: "4.8"
      },
      {
        nome: "Dr. André Lima",
        formacao: "Farmacêutico",
        biografia: "Farmacêutico especializado em manipulação e formulação de medicamentos",
        especialidades: "Formulação magistral, Terapias alternativas, Controle de qualidade",
        avaliacao: "4.7"
      },
    
      // Odontologistas
      {
        nome: "Dr. Gustavo",
        formacao: "Odontologista",
        biografia: "Especialista em odontopediatria",
        especialidades: "Ortodontia infantil, Cáries, Tratamento gengival",
        avaliacao: "4.9"
      },
      {
        nome: "Dra. Mariana",
        formacao: "Odontologista",
        biografia: "Cirurgiã-dentista com mais de 15 anos de experiência",
        especialidades: "Implantes dentários, Reabilitação oral, Estética",
        avaliacao: "4.8"
      },
      {
        nome: "Dr. Rafael Oliveira",
        formacao: "Odontologista",
        biografia: "Especialista em cirurgia bucal e implantodontia",
        especialidades: "Implantes dentários, Cirurgia de tecidos moles, Estética dental",
        avaliacao: "4.9"
      },
      {
        nome: "Dra. Fernanda Costa",
        formacao: "Odontologista",
        biografia: "Mestre em periodontia e saúde bucal",
        especialidades: "Tratamento de gengiva, Odontologia estética, Implantes",
        avaliacao: "4.8"
      },
      {
        nome: "Dr. Felipe Barbosa",
        formacao: "Odontologista",
        biografia: "Especialista em ortodontia e tratamentos faciais",
        especialidades: "Ortodontia, Clareamento dental, Aparelhos ortodônticos",
        avaliacao: "4.7"
      },
    
      // Ortopedistas
      {
        nome: "Dra. Beatriz",
        formacao: "Ortopedista",
        biografia: "Especialista em traumas ortopédicos",
        especialidades: "Coluna, Joelho, Quadril",
        avaliacao: "4.8"
      },
      {
        nome: "Dr. Sérgio",
        formacao: "Ortopedista",
        biografia: "Especialista em insuficiência cardíaca avançada",
        especialidades: "Cardiopatia congênita, Hipertensão arterial",
        avaliacao: "4.6"
      },
      {
        nome: "Dra. Paula Ribeiro",
        formacao: "Ortopedista",
        biografia: "Especialista em ortopedia pediátrica",
        especialidades: "Fraturas infantis, Deficiência de crescimento ósseo, Deformidades ortopédicas",
        avaliacao: "4.8"
      },
      {
        nome: "Dr. Tiago Lima",
        formacao: "Ortopedista",
        biografia: "Especialista em cirurgia de joelho e quadril",
        especialidades: "Fraturas, Artroscopias, Lesões ligamentares",
        avaliacao: "4.9"
      },
      {
        nome: "Dra. Marcela Oliveira",
        formacao: "Ortopedista",
        biografia: "Especialista em ortopedia esportiva e reabilitação",
        especialidades: "Lesões musculares, Fraturas, Reabilitação pós-cirúrgica",
        avaliacao: "4.7"
      }
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
      

      <h2>Médicos cadastradossad:</h2>
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
