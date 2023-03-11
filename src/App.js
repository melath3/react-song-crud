import './App.css';
import Home from "./pages/Home";
import Statistics from './componenets/Statistics';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

const App = () => {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/statistics" element={ <Statistics />} />
      </Routes>
  </BrowserRouter>
  
)};

export default App;
