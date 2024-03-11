import { StoreChartSummary } from "./ChartStoreSummary";

const StoreSummaryCard = () => {
  return (
    <div className="h-full border-2 border-border rounded-3xl md:hidden ml-2 2xl:ml-4">
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-xl 4xl:text-xl 2xl:text-base mt-4 font-Lato font-normal leading-4 text-white">
          Сводная по магазину
        </h1>
      </div>
      <div className="mt-4">
        <StoreChartSummary />
      </div>

      <div className="w-full flex flex-col font-Lato justify-center items-center px-6 mt-2">
        <div className="flex flex-col w-full">
          <div className="flex items-center">
            <p className="text-3xl 4xl:text-xl">1987 ₽</p>
            <p className="ml-4 text-zinc-600 truncate">Комиссия</p>
          </div>
          <div className="w-full mt-2">
            <div className="w-full bg-gray-200 rounded-sm h-2 mb-2 dark:bg-gray-700">
              <div className="bg-basic h-2 rounded-sm" style={{ width: "60%" }}></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <div className="flex items-center">
            <p className="text-3xl 4xl:text-xl">60%</p>
            <p className="ml-4 text-zinc-600 truncate">Рейтинг выкупов</p>
          </div>
          <div className="w-full mt-2">
            <div className="w-full bg-gray-200 rounded-sm h-2 mb-2 dark:bg-gray-700">
              <div className="bg-teal-500 h-2 rounded-sm" style={{ width: "60%" }}></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <div className="flex items-center">
            <p className="text-3xl 4xl:text-xl">4.9</p>
            <p className="ml-4 text-zinc-600 truncate">Рейтинг магазина</p>
          </div>
          <div className="w-full mt-2">
            <div className="w-full bg-gray-200 rounded-sm h-2 mb-2 dark:bg-gray-700">
              <div className="bg-second h-2 rounded-sm" style={{ width: "60%" }}></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export { StoreSummaryCard };
