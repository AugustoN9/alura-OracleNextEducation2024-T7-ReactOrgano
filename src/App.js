import Banner from './Componentes/Banner';
import CampoTexto from './Componentes/CampoTexto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <CampoTexto label="Nome" placeholder="Digite seu nome"/>
        <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
       
      </header>
    </div>
  );
}

export default App;
