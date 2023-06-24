import './App.css';
import MainContext from './context/main-context';
import Routes from './routes/routes';

function App() {
  return (
    <MainContext>
      <Routes />
    </MainContext>
  );
}

export default App;
