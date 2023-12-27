import "./App.css";
import Nav from "./components/Nav/Nav";
import Cards from "./components/Cards/Cards.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
// export const URL_BASE = "https://rym2-production.up.railway.app/api/character/";
// export const API_KEY = "key=henrym-acastillosantiago";

function App() {
  const { pathname } = useLocation();

  const [characters, setCharacters] = useState([]);

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      console.log(access);
      console.log(data);
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      console.log("s", error);
    }
  };

  // login promesas
  // function login(userData) {
  //   const { email, password } = userData;
  //   const URL = "http://localhost:3001/rickandmorty/login/";
  //   axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
  //     const { access } = data;
  //     setAccess(access);
  //     access && navigate("/home");
  //   });
  // }

  // Anterior login
  // function login(userData) {
  //   if (userData.password === PASSWORD && userData.email === EMAIL) {
  //     setAccess(true);
  //     navigate("/home");
  //   }
  // }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  //! Onsearch de servidor local en Async-Await
  const onSearch = async (id) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      setCharacters((oldChars) => [...oldChars, data]);
    } catch (error) {
      window.alert("¡No hay personajes con este ID!");
      console.log(error);
    }
  };

  //! Onsearch de servidor local
  // function onSearch(id) {
  //   axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
  //     ({ data }) => {
  //       if (data.name) {
  //         setCharacters((oldChars) => [...oldChars, data]);
  //       } else {
  //         window.alert("¡No hay personajes con este ID!");
  //       }
  //     }
  //   );
  // }
  /// ! Onsearch con api de henry
  // function onSearch(id) {
  //   axios(`${URL_BASE}${id}?${API_KEY}`).then(({ data }) => {
  //     if (data.name) {
  //       setCharacters((oldChars) => [...oldChars, data]);
  //     } else {
  //       window.alert("¡No hay personajes con este ID!");
  //     }
  //   });
  // }
  ////////////
  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== Number(id);
      })
    );
  };

  // const EMAIL = "sattog@gmail.com";
  // const PASSWORD = "123456"

  return (
    <main className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />

        <Route path="/login" element={<Form login={login} />} />
        <Route path="/signin" element={<Form login={login} />} />

        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </main>
  );
}

export default App;
