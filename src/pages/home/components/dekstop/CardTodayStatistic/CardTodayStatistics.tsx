import traidingIcon from '../../../../../assets/general/svg/traiding-up.svg';
import { CardChart } from './ChartCardToday';

const CardTodayStatistics = () => {
  return (
    <div className="w-full h-full lg:h-full border-2 border-border rounded-3xl mr-2 bg-backgroundCards">
      <div className="h-[10%] pt-4">
        <h1 className="text-2xl 4xl:text-xl 3xl:text-lg pl-6 font-Exo2 font-extrabold leading-4 text-white">
          Стастика за сегодня
        </h1>
      </div>
      <div className="pt-2 px-6 h-[64%] font-Exo2">
        <div className="h-full">
          <div className="flex text-slate-300 h-[15%]">
            <p className="mr-4 text-base 4xl:text-sm 3xl:text-xs">По выручке</p>
            <p className="mr-4 text-base 4xl:text-sm 3xl:text-xs">По заказам</p>
            <p className="text-main text-base 4xl:text-sm 3xl:text-xs">По продажам</p>
          </div>
          <div className="h-[85%]">
            <CardChart />
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-border"></div>
      <div className="flex justify-between h-[26%] px-4 pt-5 2xl:pt-6 font-Exo2">
        <div className="mr-4">
          <p className="text-base 4xl:text-sm ">Выручка</p>
          <p className="text-lg 4xl:text-base 3xl:text-sm lg:text-sm truncate">175 000 ₽</p>
        </div>
        <div className="mr-4">
          <p className="text-base 4xl:text-sm ">Заказов</p>
          <p className="text-lg 4xl:text-base 3xl:text-sm lg:text-sm truncate">5324 Шт.</p>
        </div>
        <div className="mr-4">
          <p className="text-base 4xl:text-sm">Продано</p>
          <p className="text-lg 4xl:text-base 3xl:text-sm lg:text-sm truncate">26340 Шт.</p>
        </div>
        <div className="mr-4">
          <p className="text-base w-full 4xl:text-sm 3xl:text-sm truncate">Чистая прибыль</p>
          <span className="flex justify-around">
            <p className="text-xl 4xl:text-lg lg:text-sm text-main font-bold truncate">65 000 ₽</p>
            <img className="3xl:w-5 3xl:h-5" src={traidingIcon} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export { CardTodayStatistics };
