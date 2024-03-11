import { Route, Routes } from 'react-router-dom';
import { LoginForm } from './components/LoginForm';
import { PhoneForm } from './components/PhoneForm';
import { RegistrationForm } from './components/RegistrationForm';

const Auth = () => {
  return (
    <main className="h-screen">
      <Routes>
        <Route path="/" element={<PhoneForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </main>
  );
};

export { Auth };
