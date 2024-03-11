/* eslint-disable max-len */
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import walletIcon from '../../assets/header/wallet.svg';
import logo from '../../assets/logo.svg';

const Header = () => {

  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <header className="w-full font-Exo2 backdrop-blur-[2px] top-0 my-10 md:mt-10 sm:mt-8">
      <div className="flex items-center">
        <Link to="/" className="w-[10%] xl:w-[20%] md:hidden pl-8">
          <img className="w-16 h-16 lm:w-12 lm:h-12" src={logo} alt="logo"/>
        </Link>
        <nav className="flex justify-between items-center w-[90%] xl:w-[80%] md:w-full">

          <ul className="flex items-center gap-10 md:hidden 2xl:gap-6 xl:gap-4 px-2 mr-40 xl:mr-20 lg:mr-0">
            <li><Link className="text-lg text-basic hover:text-main transition-colors 2xl:text-base" to="/">Главная</Link></li>
            <li><Link className="text-lg hover:text-basic transition-colors 2xl:text-base xl:text-sm" to="/">Тарифы</Link></li>
            <li><Link className="text-lg hover:text-basic transition-colors 2xl:text-base xl:text-sm" to="/">О нас</Link></li>
            <li><Link className="text-lg hover:text-basic transition-colors 2xl:text-base xl:text-sm" to="/">Контакты</Link></li>
            <li><Link className="text-lg hover:text-basic transition-colors 2xl:text-base xl:text-sm" to="/">F.A.Q</Link></li>
          </ul>
          <div className="flex items-center md:hidden gap-10 2xl:gap-6 xl:gap-2 lm:gap-2">
            <button className="px-6 py-2 xl:px-4 lg:px-2 border-2 2xl:text-sm xl:text-sm border-basic text-basic rounded-xl hover:bg-green-800">
              Пополнить
            </button>
            <span className="flex items-center p-2">
              <img src={walletIcon} alt="" className="pr-2 xxl:w-6 xxl:h-6 xl:w-6 xl:h-6"/>
              <p className="text-lg text-basic 2xl:text-sm xl:text-sm">5000 руб</p>
            </span>
          </div>
          <button className="hidden md:block pr-4" onClick={() => setShowMenu(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <ul className="hidden md:block">
            <li><Link className="text-xl" to="/">Главная</Link></li>
          </ul>
          <div className="hidden md:flex md:justify-center md:items-center w-12 h-12 font-bold rounded-full select-none text-cyan-800 bg-cyan-100">
            C
          </div>
          {showMenu && (
            <AnimatePresence>
              <motion.div
                initial={{opacity: 0, height: 0}}
                animate={{opacity: 1, height: 'auto'}}
                className="absolute z-10 top-[-0.5rem] inset-x-0 transition-[3s] origin-top-right md:block">
                <div className="rounded-lg shadow-md bg-bg_basic ring-1 ring-black ring-opacity-5">
                  <div className="px-5 pt-4 mb-1 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src={logo}
                        alt="logo"
                      />
                    </div>
                    <div className="-mr-2">
                      <button id="close-btn" onClick={() => setShowMenu(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-lg hover:text-gray-900 transition-colors" viewBox="0 0 16 16">
                          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="px-2 pt-4 pb-3 space-y-1">
                    <Link className="block font-Quicksand text-xl px-3 py-2 rounded-md font-medium text-white hover:text-gray-400" to="/home">Главная</Link>
                    <Link className="block font-Quicksand text-xl px-3 py-2 rounded-md font-medium text-white hover:text-gray-400" to="shortens">Тарифы</Link>
                    <Link className="block font-Quicksand text-xl px-3 py-2 rounded-md font-medium text-white hover:text-gray-400" to="shortens">О нас</Link>
                    <Link className="block font-Quicksand text-xl px-3 py-2 rounded-md font-medium text-white hover:text-gray-400" to="shortens">Контакты</Link>
                    <Link className="block font-Quicksand text-xl px-3 py-2 rounded-md font-medium text-white hover:text-gray-400" to="shortens">F.A.Q</Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </nav>

      </div>

      {/* Mobile */}
      <div className="hidden md:block mt-6">
        <div className="flex flex-col justify-center w-full h-24 rounded-2xl bg-zinc-800 font-Exo2 px-4 py-2">
          <p className="text-start text-lg text-mobile_text">Баланс профиля</p>
          <div className="flex justify-between items-center">
            <p className="text-start text-3xl">₽ 5,700.00</p>
            <button className="text-black px-4 py-2 bg-second rounded-xl">
              Пополнить
            </button>
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>

    </header>
  );
};

export { Header };
