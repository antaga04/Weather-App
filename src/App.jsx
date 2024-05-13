import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

function App() {
  console.log('render APP');
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
