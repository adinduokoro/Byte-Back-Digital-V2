import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {Layout} from "./components"
import { Home } from './pages';
import { useSelector } from 'react-redux';
import { selectIsDarkModeOn } from './redux/slice/themeSlice';


function App() {
  const isDarkModeOn = useSelector(selectIsDarkModeOn)
  const theme = isDarkModeOn ? "dark" : "light"

  return (
    <div className="App" data-theme={theme}>
      <ToastContainer />
      <Routes>
        <Route path="/" element={ <Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
