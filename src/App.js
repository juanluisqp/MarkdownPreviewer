import './App.css';
import Textarea from './components/Textarea';

function App() { 
   return (
    <div className="App">
      <div className='container'>
        <h1 className='text-center'>Convertidor de texto</h1>
        <div className='row'>
          <Textarea />
          <div className='col-md-6 preview'>AQUI VA EL PREVIEWER</div>
        </div>  
      </div>
    </div>
  );
}

export default App;
