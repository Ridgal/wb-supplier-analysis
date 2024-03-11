import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Analysis } from '../pages/analysis/index';
import { Auth } from '../pages/auth/Auth';
import { Home } from '../pages/home/Home';
import './App.css';

const App = () => {

 const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        function handleResize() {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    console.log("Ширина: " + screenSize.width + "px");
    console.log("Высота: " + screenSize.height + "px");

  return (
    <>
      <Routes>
        <Route path="/*" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/analysis" element={<Analysis />}/>
      </Routes>
    </>
  );
};

export default App;
