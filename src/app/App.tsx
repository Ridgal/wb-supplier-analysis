import { Route, Routes } from 'react-router-dom';
import './App.css';

import { ProtectedRoute } from '../components/generics/ProtectedRoute/ProtectedRoute';
import { LoginForm } from '../pages/auth/components/LoginForm';
import { PhoneForm } from '../pages/auth/components/PhoneForm';
import { RegistrationForm } from '../pages/auth/components/RegistrationForm';
import { Pages } from '../pages/Pages';

const App = () => {

    // const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

    // useEffect(() => {
    //     function handleResize() {
    //         setScreenSize({
    //             width: window.innerWidth,
    //             height: window.innerHeight
    //         });
    //     }
    //     window.addEventListener("resize", handleResize);
    //     handleResize();
    //     return () => window.removeEventListener("resize", handleResize)
    // }, []);

    // useEffect(() => {
    //   const delay = 5000;
    //   const timeout = setTimeout(() => {
    //     console.log('screen size:', screenSize);
    //   }, delay);
    //   return () => clearTimeout(timeout);
    // }, [])

    console.log(3)

  return (
    <>
      <Routes>
        <Route path="*"
            element={
              <ProtectedRoute>
                <Pages />
              </ProtectedRoute>
            }
          />
        <Route path="/auth/phone" element={<PhoneForm />} />
        <Route path="/auth/register" element={<RegistrationForm />} />
        <Route path="/auth/login" element={<LoginForm />} />


      </Routes>
    </>
  );
};

export default App;
