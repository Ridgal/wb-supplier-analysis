import traidingIcon from '../../../../../../assets/general/svg/traiding-up.svg';
import { ChartWeekStatistic } from './ChartWeekStatistic';

const CardWeekStatistic = () => {
  return (
    <div className="w-full h-full 2xl:w-full border-r 2xl:border-r-0 border-border">
      <div className="h-[8%] pt-4">
        <h1 className="text-2xl 4xl:text-xl pl-6 font-Exo2 font-extrabold leading-4 text-white">
          Стастика за неделю
        </h1>
      </div>
      <div className="pt-2 px-6 h-[66%] font-Exo2">
        <div className="flex text-slate-300 mb-2 mt-2">
          <p className="mr-4 text-mainBright text-base 4xl:text-sm">По выручке</p>
          <p className="mr-4 text-base 4xl:text-sm ">По заказам</p>
          <p className="text-base 4xl:text-sm">По продажам</p>
        </div>
        <div className="h-[12.5rem] 2xl:h-[11rem]">
          <ChartWeekStatistic />
        </div>
        <div className="mt-2 mb-2 text-base 2xl:flex 2xl:justify-between 4xl:text-sm 3xl:text-xs 3xl:mt-4 2xl:text-base lg:text-sm 2xl:mt-2">
          <p>Самый прибыльный день — Суббота (3 февраля)</p>
          <p>Самый проигрышный день — Понедельник (29 января)</p>
        </div>
      </div>
      <div className="border-t-[1px] border-border"></div>
      <div className="flex h-[26%] w-full justify-between 2xl:justify-start font-Exo2 px-6 3xl:px-2 2xl:px-4 pb-6 pt-8">
        <div className="mr-4 2xl:mr-8">
          <p className="text-base 4xl:text-sm">Выручка</p>
          <p className="text-lg 4xl:text-base">500 000 ₽</p>
        </div>
        <div className="mr-4 2xl:mr-8">
          <p className="text-base 4xl:text-sm">Заказов</p>
          <p className="text-lg 4xl:text-base">5324 Шт.</p>
        </div>
        <div className="mr-4 2xl:mr-8">
          <p className="text-base 4xl:text-sm">Продано</p>
          <p className="text-lg 4xl:text-base">2631 Шт.</p>
        </div>
        <div className="">
          <p className="text-base 4xl:text-sm font-bold truncate">Чистая прибыль</p>
          <span className="flex justify-around">
            <p className="text-xl 4xl:text-lg xl:text-base text-main font-bold">328 000 ₽</p>
            <img className="2xl:w-5 2xl:h-5" src={traidingIcon} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export { CardWeekStatistic };
