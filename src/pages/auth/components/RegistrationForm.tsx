import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import telegramIcon from '../../../assets/pages/auth/telegramIcon.svg';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { registration } from '../../../redux/auth/actions';


type FormData = {
  login: string;
  password: string;
  sms_code: string;
};

const RegistrationForm = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const status = useAppSelector((state) => state.authSlice.status);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    dispatch(registration(data));
    if (status === 'success') {
      navigate('/login');
    }
    reset();
  };

  return (
    <section className="min-h-full sm:min-h-0 flex flex-col justify-center sm:flex-none">
      <div className="flex justify-center sm:justify-start">
        <img
          className="mx-auto w-20 h-20 sm:mt-4 sm:ml-4 sm:mr-4"
          src={logo}
          alt="Your Company"
        />
      </div>
      <div className="min-h-full sm:mt-20">
        <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 pt-0 pb-12 sm:pt-0 lg:pt-0 lg:pb-4 lg:px-4">
          <div className="w-[40rem] sm:mx-auto sm:w-full text-center">
            <h2 className="mt-10 text-center sm:text-start text-3xl font-extrabold tracking-wide font-Benzim-bold leading-9">
              Регистрация
            </h2>
            <h4 className="font-Benzim-medium sm:text-start tracking-wider text-zinc-400 mt-2">Введите номер телефона для входа или регистрации</h4>
          </div>
          <div className="w-[40rem] mt-10 sm:mt-8 sm:mx-auto sm:w-full">
            <form className="space-y-4" action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <div className="mt-2 relative">
                  <input
                    id="phone"
                    type="text"
                    autoComplete="phone"
                    placeholder="Номер телефона"
                    {...register('login', { required: true })}
                    required
                    className="block w-full placeholder:font-semibold placeholder:text-zinc-300 rounded-lg border-0 px-2.5 py-[0.75rem] shadow-sm bg-backgroundInputs outline-0 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="mt-3 relative">
                  <input
                    id="password"
                    type="text"
                    autoComplete="password"
                    placeholder="Пароль"
                    {...register('password', { required: true })}
                    required
                    className="block w-full placeholder:font-semibold placeholder:text-zinc-300 rounded-lg border-0 px-2.5 py-[0.75rem] shadow-sm bg-backgroundInputs outline-0 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="mt-3 relative">
                  <input
                    id="sms_code"
                    type="text"
                    autoComplete="sms_code"
                    placeholder="Код"
                    {...register('sms_code', { required: true })}
                    required
                    className="block w-full placeholder:font-semibold placeholder:text-zinc-300 rounded-lg border-0 px-2.5 py-[0.75rem] shadow-sm bg-backgroundInputs outline-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full font-Benzim-bold font-extrabold justify-center rounded-lg px-3 py-[0.75rem] text-lg leading-6 text-gray-900 bg-mainForm hover:bg-main shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                Далее
                </button>
              </div>
            </form>
            <div className="flex flex-col mt-6 sm:mx-auto sm:w-full">
              <div className="w-full border border-zinc-400"></div>
              <p className="relative bg-background font-semibold w-16 px-4 top-[-13px] left-[45%] sm:left-[42%] font-Benzim-bold">
                ИЛИ
              </p>
            </div>
            <button type="submit" className="flex items-center rounded-lg p-3 w-full border border-zinc-400 bg-backgroundLink">
              <img
                className="mr-4"
                src={telegramIcon}
                alt="telegramIcon"
              />
              <div className="text-left">
                <p className="ttols font-extralight font-Benzim-bold text-xl text-white">Telegram</p>
                <p className="font-Benzim-medium text-xs text-zinc-400 text-ellipsis">Наиболее практичный и полезный способ</p>
              </div>
            </button>
            <div className="w-full mt-4 text-xs text-zinc-400 font-Benzim-medium leading-tight text-center">
              <p>Продолжая, вы подтверждаете, что ознакомились с <span className="underline">политикой конфиденцальности</span> и <span className="underline">публичной офертой</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { RegistrationForm };
