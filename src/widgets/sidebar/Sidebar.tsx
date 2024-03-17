import { Link } from 'react-router-dom';
import account_icon from '../../assets/sidebar/account.svg';
import alert_icon from '../../assets/sidebar/alerts.svg';
import analytics_icon from '../../assets/sidebar/analytics.svg';
import chart_icon from '../../assets/sidebar/chart.svg';
import customers_icon from '../../assets/sidebar/customers.svg';
import dashboard_gray_icon from '../../assets/sidebar/dashboard-gray.svg';
import dashboard_icon from '../../assets/sidebar/dashboard.svg';
import home_icon from '../../assets/sidebar/home.svg';
import logout_icon from '../../assets/sidebar/logout.svg';
import message_icon from '../../assets/sidebar/message.svg';
import plus_icon from '../../assets/sidebar/plus.svg';
import products_icon from '../../assets/sidebar/products.svg';
import profile_icon from '../../assets/sidebar/profile.svg';
import sales_icon from '../../assets/sidebar/sales.svg';
import settings_icon from '../../assets/sidebar/settings.svg';
import traffic_icon from '../../assets/sidebar/traffic.svg';

const Sidebar = () => {
  return (
    <div className="!fixed flex flex-col items-center md:justify-center md:absolute mt-4 md:z-10 md:left-0 md:bottom-0 md:w-full md:h-[80px] w-[6.5rem] xl:w-24 h-[39rem] md:p-0 border-2 rounded-2xl md:rounded-none border-border md:border-0 bg-backgroundCards md:bg-transparent">
      <div className="flex pt-1 4xl:pt-0 flex-col items-center md:mt-0 md:hidden">
        <div className="flex flex-col items-center pt-2">
          <label className="flex justify-center items-center bg-bg_icon rounded-2xl w-12 h-12">
            <img className="w-6 h-6" src={analytics_icon} alt="" />
          </label>
          <p className="w-full text-center text-base font-Exo2 text-blue-400">Аналитика</p>
        </div>

        <div className="md:hidden">
          <Link to="/analysis/dashboard/product" className="flex justify-center items-center px-2 active:bg-bg_icon rounded-2xl w-12 h-[2.8rem]">
            <img className="w-5 h-5" src={dashboard_icon} alt=""/>
          </Link>
          <Link to="" className="flex justify-center items-center px-2 active:bg-bg_icon rounded-2xl w-12 h-[2.8rem]">
            <img className="w-5 h-5" src={traffic_icon} alt=""/>
          </Link>
          <Link to="" className="flex justify-center items-center px-2 active:bg-bg_icon rounded-2xl w-12 h-[2.8rem]">
            <img className="w-5 h-5" src={sales_icon} alt=""/>
          </Link>
          <Link to="" className="flex justify-center items-center px-2 active:bg-bg_icon rounded-2xl w-12 h-[2.8rem]">
            <img className="w-5 h-5" src={products_icon} alt=""/>
          </Link>
          <Link to="" className="flex justify-center items-center px-2 active:bg-bg_icon rounded-2xl w-12 h-[2.8rem]">
            <img className="w-5 h-5" src={customers_icon} alt=""/>
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center md:hidden">
        <p className="w-full text-center text-base font-Exo2 text-blue-400">Сервисы</p>
        <div className="flex flex-col items-center justify-center pb-2">
          <Link to="" className="flex justify-center items-center px-2 active:bg-bg_icon rounded-2xl w-12 h-[2.8rem]">
            <img className="w-5 h-5" src={profile_icon} alt=""/>
          </Link>
          <Link to="" className="flex justify-center items-center px-2 active:bg-bg_icon rounded-2xl w-12 h-[2.8rem]">
            <img className="w-5 h-5" src={message_icon} alt=""/>
          </Link>
          <Link to="" className="flex justify-center items-center px-2 active:bg-bg_icon rounded-2xl w-12 h-[2.8rem]">
            <img className="w-5 h-5" src={account_icon} alt=""/>
          </Link>
          <Link to="" className="flex justify-center items-center px-2 active:bg-bg_icon rounded-2xl w-12 h-[2.8rem]">
            <img className="w-5 h-5" src={settings_icon} alt=""/>
          </Link>
        </div>
      </div>

      <div className="relative flex justify-center items-center md:hidden bg-bg_user_icon rounded-2xl w-[5.5rem] h-14 xl:w-20">
        <div className="relative">
          <img className="w-8 h-8 rounded-full" src="" alt="" />
          <span className="bottom-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </div>
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white ml-4 xl:ml-2 bg-backgroundCards focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center" type="button">
          <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
          </svg>
        </button>
      </div>

      <div className="flex items-center justify-center mt-4 md:hidden">
        <button>
          <img className="w-5 h-5" src={logout_icon} alt=""/>
        </button>
      </div>

      {/* Mobile */}
      <div className="hidden md:block w-full h-24 z-10">
        <div className="flex items-center justify-around bg-bg_user_icon">
          <Link to="" className="flex justify-center items-center px-2 py-2 active:bg-bg_icon rounded-2xl w-16 h-16">
            <img className="w-8 h-8 sm:w-6 sm:h-6" src={home_icon} alt=""/>
          </Link>

          <Link to="" className="flex justify-center items-center px-2 py-2 active:bg-bg_icon rounded-2xl w-16 h-16">
            <img className="w-8 h-8 sm:w-6 sm:h-6" src={alert_icon} alt=""/>
          </Link>

          <button className="relative bottom-10 flex items-center justify-center w-20 h-20 text-white bg-second rounded-full px-2 py-2 text-center" type="button">
            <img className="w-8 h-8" src={plus_icon} alt=""/>
          </button>

          <Link to="" className="flex justify-center items-center px-2 py-2 active:bg-bg_icon rounded-2xl w-16 h-16">
            <img className="w-8 h-8 sm:w-6 sm:h-6" src={chart_icon} alt=""/>
          </Link>

          <Link to="" className="flex justify-center items-center px-2 py-2 active:bg-bg_icon rounded-2xl w-16 h-16">
            <img className="w-8 h-8 sm:w-6 sm:h-6" src={dashboard_gray_icon} alt=""/>
          </Link>
        </div>
      </div>

    </div>
  );
};

export { Sidebar };
