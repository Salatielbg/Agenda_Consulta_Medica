import Categories from './Categories/Categories'
import ScrollGrid from './ScrollGrid/ScrollGrid'
import TopBar from './TopBar/Topbar'
import cardiologista from '../../assets/images/Profile/cirurgiaoprofile.png'
import useFilteredDoctors from '../../hooks/useFilteredDoctors'

export function HomePage() {
  const { searchTerm, setSearchTerm, setSelectedCategory, filteredDoctors} = useFilteredDoctors();

  const handleButtonClickCategory = (category) => {
    setSelectedCategory((prevSelected) => (prevSelected === category ? '' : category));
  };
  return (
    <>
      <TopBar searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
      <Categories handleButtonClickCategory={handleButtonClickCategory}/>

      {filteredDoctors.map((doctor) => {
        return(
            <ScrollGrid 
              key={doctor._id}
              _id={doctor._id}
              image={cardiologista}
              name={doctor.nome}
              specialty={doctor.formacao}
              rating="4.9"
            />
        )
      })}
    </>
  )
}


