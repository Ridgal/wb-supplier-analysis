import checkIcon from '../../../../assets/pages/home/StatisticsForMount/checkIcon.svg';
import keyIcon from '../../../../assets/pages/home/StatisticsForMount/keyIcon.svg';
import RectangleTwo from '../../../../assets/pages/home/TopOrdered/RectangleTwo.svg';
import { LineChart } from "../../../../components/generics/LineChart";

const StatisticsForMount = () => {
  return (
    <div>
      <div className="flex flex-col justify-center w-full h-28 rounded-2xl bg-zinc-800 font-Exo2 px-4 py-2">
        <p className="text-start text-lg text-mobile_text">Ваша выручка за 30 дней</p>
        <div className="flex justify-between items-center">
          <p className="text-start text-4xl mt-2">₽750.00</p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center mt-10 mb-6 font-Exo2">
          <h1 className="text-xl font-extrabold leading-4 text-white">
            Стастика за месяц <span className="text-zinc-400">(30 дней)</span>
          </h1>
          <p className="text-xl">₽14.52</p>
        </div>
        <div className="w-full h-[25rem] border-2 border-border rounded-3xl mr-2 bg-zinc-800">
          <div className="pt-2 px-6 h-full font-Exo2">
            <div className="h-full">
              <div className="h-full py-4">
                <LineChart
                  data={[11, 13, 11, 30, 15, 18, 16, 14, 36, 29, 33, 34, 18, 25, 22, 27, 31, 34]}
                  labels={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17']}
                  borderDash={[10, 5]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="flex justify-between items-center mt-10 mb-6 font-Exo2">
          <h1 className="text-xl font-extrabold leading-4 text-white">
            Отправлено товаров <span className="text-zinc-400">(30 дней)</span>
          </h1>
          <p className="text-xl">290</p>
        </div>
        <div className="w-full h-[25rem] border-2 border-border rounded-3xl mr-2 bg-zinc-800">
          <div className="pt-2 px-6 h-full font-Exo2">
            <div className="h-full">
              <div className="h-full py-4">
                <LineChart
                  data={[100, 120, 150, 140, 220, 170, 200, 220, 240, 250, 280, 340, 300, 360, 320, 380, 400]}
                  labels={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17']}
                  borderDash={[10, 5]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full h-40 rounded-2xl bg-zinc-800 font-Exo2 mt-6 px-4 py-2">
        <div className="flex flex-col w-1/2 text-start">
          <p className="text-start text-lg text-mobile_text mt-4">Выкуплено</p>
          <p className="text-start text-3xl mt-4">₽6,328.00</p>
          <p className="text-start text-base mt-2">Обновлено 14:25</p>
        </div>
        <div className="flex justify-end w-1/2">
          <img src={RectangleTwo} alt=""/>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="flex w-full h-40 rounded-2xl bg-zinc-800 font-Exo2 mt-6 px-4 py-2">
          <div className="flex flex-col w-full">
            <p className="text-start text-lg sm:text-base text-mobile_text mt-4">Возвраты</p>
            <p className="text-start text-3xl sm:text-xl mt-2">3,642</p>
            <p className="w-[5.25rem] mt-4 text-center text-base text-basic rounded-2xl bg-green-200">+26.00%</p>
          </div>
        </div>
        <div className="flex w-full h-40 rounded-2xl bg-zinc-800 font-Exo2 mt-6 px-4 py-2">
          <div className="flex flex-col w-full">
            <p className="text-start text-lg sm:text-base text-mobile_text truncate mt-4">Возвраты в рублях</p>
            <p className="text-start text-3xl sm:text-xl mt-2">29,438</p>
            <p className="w-[5.25rem] mt-4 text-center text-base text-red-600 rounded-2xl bg-red-200">-2.96%</p>
          </div>
        </div>
        <div className="flex w-full h-40 rounded-2xl bg-zinc-800 font-Exo2 px-4 py-2">
          <div className="flex flex-col w-full">
            <p className="text-start text-lg sm:text-base text-mobile_text mt-4">Заказы</p>
            <p className="text-start text-3xl sm:text-xl mt-2">12,379</p>
            <p className="w-[5.25rem] mt-4 text-center text-base text-red-600 rounded-2xl bg-red-200">-1.95%</p>
          </div>
        </div>
        <div className="flex w-full h-40 rounded-2xl bg-zinc-800 font-Exo2 px-4 py-2">
          <div className="flex flex-col w-full">
            <p className="text-start text-lg sm:text-base text-mobile_text mt-4">Выкупы</p>
            <p className="text-start text-3xl sm:text-xl mt-2">7,19</p>
            <p className="w-[5.25rem] mt-4 text-center text-base text-basic rounded-2xl bg-green-200">+3.17%</p>
          </div>
        </div>
      </div>

      <div className="w-full mt-4">
        <div className="flex justify-between mt-10 mb-6 font-Exo2">
          <h1 className="text-xl font-extrabold leading-4 text-white">
            Лучший день
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex w-full h-40 rounded-2xl bg-zinc-800 font-Exo2 mt-6 px-4 py-3">
            <div className="flex flex-col w-full font-Exo2">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-backgroundBasic">
                <img className="w-7 h-7" src={keyIcon} alt=""/>
              </div>
              <p className="text-start text-lg text-mobile_text mt-4">Объем заказов</p>
              <p className="text-start text-3xl mt-2">47.6K</p>
            </div>
          </div>
          <div className="flex w-full h-40 rounded-2xl bg-zinc-800 font-Exo2 mt-6 px-4 py-3">
            <div className="flex flex-col w-full font-Exo2">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-backgroundBasic">
                <img className="w-7 h-7" src={checkIcon} alt=""/>
              </div>
              <p className="text-start text-lg text-mobile_text mt-4">Объем выкупов</p>
              <p className="text-start text-3xl mt-2">630</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export { StatisticsForMount };
