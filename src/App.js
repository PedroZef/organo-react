import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import Rodape from './components/Rodape';

function App() {

  const times = [
    {
      id: 'programacao',
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      id: 'front-end',
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      id: 'data-science',
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      id: 'devops',
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      id: 'ux-design',
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      id: 'mobile',
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      id: 'inovacao-gestao',
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ];

  const inicial = [
    {
      id: '1',
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.github.com/julianao.png',
      time: times[0].nome
    },
    {
      id: '2',
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone',
      imagem: 'https://www.github.com/danielartine.png',
      time: times[0].nome
    },
    {
      id: '3',
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e Instrutor na Alura',
      imagem: 'https://www.github.com/guilhermeonrails.png',
      time: times[0].nome
    },
    {
      id: '4',
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.github.com/peas.png',
      time: times[0].nome
    },
    {
      id: '5',
      nome: 'PEDRO ZEFERINO',
      cargo: 'Desenvolvedor Full Stack',
      imagem: 'https://github.com/PedroZef.png',
      time: times[1].nome
    },
    {
      id: '6',
      nome: 'MARIO SOUTO',
      cargo: 'Desenvolvedor Front-End e Instrutor na Alura',
      imagem: 'https://github.com/omariosouto.png',
      time: times[1].nome
    },
    {
      id: '7',
      nome: 'VINICIUS DIAS',
      cargo: 'Instrutor e Desenvolvedor Web',
      imagem: 'https://github.com/vitorfsg.png',
      time: times[1].nome
    }
  ];

  const [colaboradores, setColaboradores] = useState(inicial);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    const novoColaborador = { ...colaborador, id: Date.now().toString() };
    setColaboradores([...colaboradores, novoColaborador]);
  };

  const deletarColaborador = (id) => {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  };

  return (
    <div className="App">
      <Banner />
      <Formulario 
        times={times.map(time => time.nome)} 
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} 
      />

      {times.map(time => (
        <Time 
          key={time.nome} 
          nome={time.nome} 
          corPrimaria={time.corPrimaria} 
          corSecundaria={time.corSecundaria} 
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
        />
      ))}

      <Rodape />
    </div>
  );
}

export default App;
