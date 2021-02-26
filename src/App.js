import './App.css';
import Link from './components/Link';

function App() {
  return (
    <div className="App">
      <div className="cabecera">
        <h2>UASD - Acceso directo </h2>
      </div>
      <div className="enlaces">
        <Link
         text="Página Principal"
         link="https://www.uasd.edu.do/"
         icono="LanguageIcon"
        />
        <Link
         text="Campus Virtual"
         link="https://soft.uasd.edu.do/UASDVirtualGateway/"
         icono="LanguageIcon"
        />
        
      </div>
      <div className="enlaces">
        <Link
         text="Autoservicio"
         link="https://ssb.uasd.edu.do/ssomanager/c/SSB"
         icono="LanguageIcon"
        />
        <Link
         text="Pensum"
         link="https://soft.uasd.edu.do/PlanesGrado/"
         icono="LanguageIcon"
        />
      </div>
      <div className="enlaces">
        <Link
         text="Programación Docente"
         link="https://soft.uasd.edu.do/ProgramacionPorAsignatura/"
         icono="LanguageIcon"
        />
      </div>
      <div className="descripcion">
        <p><b> ¿Cómo funciona esta herramienta?</b></p>
      </div>
      
    </div>
  );
}

export default App;
