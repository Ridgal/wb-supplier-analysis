import { DoughnutChart } from "../../../../components/generics/DoughnutChart";

const ShipmentAnalyticsCard = () => {
  return (
    <div className="w-full h-full border-2 border-border rounded-3xl md:hidden">
      <div className="w-full h-[12rem] mt-6">
        <DoughnutChart
          data={[900, 500]}
          labels={['1']}
          radius={90}
          rotation={-90}
          circumference={360}
          cutout={'90%'}
          cutoutPercentage={50}
        />
      </div>
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <h1 className="text-2xl 4xl:text-xl 2xl:text-base mt-4 font-Lato font-medium leading-4 text-white">
          Логистика
        </h1>
      </div>
      <div className="w-full flex flex-col text-lg 4xl:text-base 3xl:text-sm text-zinc-600 font-Lato justify-center items-center px-6 mt-[7.5rem] 2xl:mt-14">
        <p>28% выручки за сегодня</p>
      </div>
    </div>
  );
};

export { ShipmentAnalyticsCard };
