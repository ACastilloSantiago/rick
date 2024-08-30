import './App.css';
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

// !! Axios
axios.defaults.baseURL = import.meta.env.VITE_URL_API;

function App() {
  const { pathname } = useLocation();

  const [characters, setCharacters] = useState([]);

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const URL = 'rickandmorty/login/';
      const { data } = await axios(URL + `?email=${email}&password=${password}`);
      const { access } = data;
      setAccess(access);
      access && navigate('/home');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  //! Onsearch de servidor local en Async-Await
  const onSearch = async (id) => {
    try {
      const { data } = await axios(`rickandmorty/character/${id}`);
      setCharacters((oldChars) => [...oldChars, data]);
    } catch (error) {
      window.alert('¡No hay personajes con este ID!');
      console.log(error);
    }
  };

  ////////////
  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== Number(id);
      })
    );
  };

  return (
    <main className="App">
      {pathname !== '/' && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />

        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </main>
  );
}

export default App;
