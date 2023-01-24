
import './App.css';
import Perfil from './Perfil';
import Datospersonales from './Datospersonales';
import Educacion from './Educacion';
import Fortalezas from './Fortalezas';
function App() {
  return (
    
    <div class="columnas">
      <header className="App-header">
       <Perfil></Perfil>
       
       <Datospersonales></Datospersonales>
       
       <Educacion></Educacion>
       
        <Fortalezas></Fortalezas>
        
        
      </header>
    </div>
  );
}

export default App;
