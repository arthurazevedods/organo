import Banner from './components/Banner';
import Form from './components/Form';
import { useState } from 'react'
import Time from './components/Time';

const App = () => {

  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionar = (colaborador) =>{
    console.log(colaborador)
    //espalha os antigos colaboradores e adiciona o novo no final
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner />
      <Form aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionar(colaborador)}/>
      <Time nome='Programação'/>
      <Time nome='Front-End'/>
      <Time nome='Data Science'/>
      <Time nome='Devops'/>
      <Time nome='UX e Design'/>
      <Time nome='Mobile'/>
      <Time nome='Inovação e Gestão'/>
    </div>
  );
}

export default App;
