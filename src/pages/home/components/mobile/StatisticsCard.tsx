import traiding_icon from '../../../../assets/general/svg/traiding-up.svg';
import { LineChart } from '../../../../components/generics/LineChart';

const StatisticsCard = () => {
  return (
    <div className="w-full">
      <div className="my-12">
        <h1 className="text-2xl font-Exo2 font-extrabold leading-4 text-white">
          Стастика за сегодня
        </h1>
      </div>
      <div className="w-full h-[25rem] border-2 border-border rounded-3xl mr-2 bg-zinc-800">
        <div className="pt-2 px-6 h-[75%] font-Exo2">
          <div className="h-full">
            <div className="flex text-slate-300 h-6 my-2">
              <p className="mr-4 text-base sm:text-sm hover:text-basic">По выручке</p>
              <p className="mr-4 text-base sm:text-sm hover:text-basic">По заказам</p>
              <p className="text-main text-base sm:text-sm hover:text-basic">По продажам</p>
            </div>
            <div className="h-60">
              <LineChart
                data={[11, 13, 11, 30, 15, 18, 16, 14, 36, 29, 33, 34, 18, 25, 22, 27, 31, 34, 18, 25, 22, 27, 31]}
                labels={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']}
                borderDash={[10, 5]}
              />
            </div>
          </div>
        </div>
        <div className="border-t-2 border-zinc-600"></div>
        <div className="flex justify-between h-[25%] px-4 pt-6 font-Exo2">
          <div className="mr-4">
            <p className="text-sm sm:text-xs">Выручка</p>
            <p className="text-lg sm:text-xs">175 000 ₽</p>
          </div>
          <div className="mr-4">
            <p className="text-sm sm:text-xs">Заказов</p>
            <p className="text-lg sm:text-xs">5324 Шт.</p>
          </div>
          <div className="mr-4">
            <p className="text-sm sm:text-xs">Продано</p>
            <p className="text-lg sm:text-xs">26340 Шт.</p>
          </div>
          <div className="mr-4">
            <p className="text-sm sm:text-xs w-full truncate">Чистая прибыль</p>
            <span className="flex justify-around">
              <p className="text-xl sm:text-sm text-main font-bold mr-2">65 000 ₽</p>
              <img className="w-7 h-7" src={traiding_icon} alt="" />
            </span>
          </div>
        </div>
      </div>

    </div>
  );
};

export { StatisticsCard };
