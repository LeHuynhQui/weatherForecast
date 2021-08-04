import './App.css';
import Alert from './components/Alert';
import AlertCannotReadLocation from './components/AlertCannotReadLocation';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Alert />
      <AlertCannotReadLocation />
    </div>
  );
}

export default App;
