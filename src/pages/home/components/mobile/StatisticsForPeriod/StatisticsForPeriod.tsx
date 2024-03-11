import { ChartForPeriod } from "./ChartForPeriod";

const StatisticsForPeriod = () => {
  return (
    <div>
      <div>
        <p className="text-xl font-Exo2 font-extrabold leading-4 text-white">
          Стастика за период
        </p>
        <p className="text-xl font-Exo2 font-extrabold leading-4 mt-6 text-white">
          17 июля - 17 августа
        </p>
        <div className="flex items-center w-full font-Exo2 mt-4">
          <p className="text-start text-lg text-mobile_text mr-4">Выручка</p>
          <p className="text-start text-3xl mr-4">4,385</p>
          <p className="w-[5.25rem] text-center text-base text-basic rounded-2xl bg-green-200">
            +56.32%
          </p>
        </div>
      </div>

      <div className="w-full h-[25rem] border-2 border-border rounded-3xl mt-6 bg-zinc-800">
        <div className="pt-2 px-6 h-full font-Exo2">
          <div className="h-full">
            <div className="h-full py-4">
              <ChartForPeriod />
            </div>
          </div>
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

    </div>
  );
};

export { StatisticsForPeriod };
