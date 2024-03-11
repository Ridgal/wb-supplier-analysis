import { ChartReturnAnalytics } from "./ChartReturnAnalytics";

const ReturnAnalyticsCard = () => {
  return (
    <div className="w-full h-full border-2 border-border rounded-3xl md:hidden">
      <div className="w-full mt-6">
        <ChartReturnAnalytics />
      </div>
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <h1 className="text-2xl 4xl:text-xl 2xl:text-base mt-4 font-Lato font-medium leading-4 text-white">
          Возвраты
        </h1>
      </div>
      <div className="w-full flex flex-col text-lg 4xl:text-base 3xl:text-sm text-zinc-600 font-Lato justify-center items-center px-6 mt-[7.5rem] 2xl:mt-14">
        <p>5% заказов от сегодня</p>
      </div>
    </div>
  );
};

export { ReturnAnalyticsCard };
