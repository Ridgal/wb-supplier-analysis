import { DoughnutChart } from "../../../../components/generics/DoughnutChart";

const ReturnAnalyticsCard = () => {
  return (
    <div className="w-full h-full border-2 border-border rounded-3xl md:hidden">
      <div className="w-full h-[11rem] mt-6">
        <DoughnutChart
          data={[900, 300]}
          labels={['1']}
          radius={100}
          rotation={-119}
          circumference={240}
          cutout={'90%'}
          cutoutPercentage={50}
        />
      </div>
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <h1 className="text-2xl 4xl:text-xl 2xl:text-base mt-8 font-Lato font-medium leading-4 text-white">
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
