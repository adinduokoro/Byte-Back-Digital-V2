import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {Layout} from "./components"
import { Home } from './pages';


function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        {/* <Route path="/" element={ <Layout />}> */}
          <Route index element={<Home />} />
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
