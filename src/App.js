import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
    <div className="container">
     <Weather defaultCity="Vienna"/>
     <small>
       This website was coded by{" "}
     <a href="https://www.linkedin.com/in/clararotsch/" target="_blank" rel="noreferrer">Clara Rotsch</a>  
        {" "}and is open-sourced on{" "}
     <a href="https://github.com/Primavera19476/react-weather-app-2" target="_blank" rel="noreferrer">GitHub</a>
     </small>
     </div>
    </div>
  );
}
