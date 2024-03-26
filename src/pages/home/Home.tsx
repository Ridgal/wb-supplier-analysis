import { CardBestSales } from "./components/dekstop/CardBestSales";
import { CardReviews } from "./components/dekstop/CardReviews";
import { CardTodayStatistics } from "./components/dekstop/CardTodayStatistics";
import { CardWeekRating } from "./components/dekstop/CardWeekRating";
import { CardWeekStatistic } from "./components/dekstop/CardWeekStatistic";
import { ProductTopCard } from "./components/dekstop/ProductTopCard";
import { ReturnAnalyticsCard } from "./components/dekstop/ReturnAnalyticsCard";
import { ShipmentAnalyticsCard } from "./components/dekstop/ShipmentAnalyticsCard";
import { ShipmentStatusCard } from "./components/dekstop/ShipmentStatusCard";
import { StoreSummaryCard } from "./components/dekstop/StoreSummaryCard";
import { ReviewCard } from "./components/mobile/ReviewCard";
import { StatisticsCard } from "./components/mobile/StatisticsCard";
import { StatisticsForMount } from "./components/mobile/StatisticsForMount";
import { StatisticsForPeriod } from "./components/mobile/StatisticsForPeriod";
import { SummarySlider } from "./components/mobile/SummarySlider";
import { TopOrdered } from "./components/mobile/TopOrdered";

const Home = () => {
  return (
    <>
      <div className="flex flex-col w-full h-full md:hidden">  {/* Dekstop */}

        <section className="w-full h-full md:hidden mb-4">
          <div className="flex w-full h-96">
            <div className="flex justify-center w-1/3 2xl:w-1/2 md:hidden">
              <CardTodayStatistics />
            </div>
            <div className="flex justify-center w-1/3 2xl:w-1/2">
              <CardBestSales />
            </div>
            <div className="flex justify-center w-1/3 2xl:hidden">
              <CardReviews />
            </div>
          </div>
        </section>

        <section className="flex flex-col">
          <div className="flex w-full h-[30rem] 2xl:h-[26rem] my-4 3xl:my-2">
            <div className="flex w-[80%] h-full 2xl:w-full mr-2 md:hidden border-2 border-border rounded-3xl">
              <div className="w-[45%] 2xl:w-full h-full">
                <CardWeekStatistic />
              </div>
              <div className="w-[55%] h-full 2xl:hidden">
                <CardWeekRating />
              </div>
            </div>
            <div className="w-[20%] 2xl:hidden">
              <StoreSummaryCard />
            </div>
          </div>
          <div className="flex justify-between w-full mt-4 3xl:mt-2 h-[30rem] 2xl:h-full md:hidden 2xl:flex-col">
            <div className="flex w-[40%] 2xl:w-full 2xl:h-[30rem] 2xl:mb-2 mr-2">
              <div className="w-full 2xl:w-[70%]">
                <ShipmentStatusCard />
              </div>
              <div className="hidden 2xl:block 2xl:w-[30%]">
                <StoreSummaryCard />
              </div>
            </div>
            <div className="flex w-[60%] 2xl:w-full 2xl:h-[25rem] 2xl:my-2 2xl:flex-row-reverse ">
              <div className="w-[37%] lg:w-[36%] mx-2 2xl:mx-0 2xl:ml-2">
                <ProductTopCard />
              </div>
              <div className="w-[30%] mx-2 2xl:mx-2">
                <ReturnAnalyticsCard />
              </div>
              <div className="w-[30%] ml-2 2xl:ml-0 2xl:mr-2">
                <ShipmentAnalyticsCard />
              </div>
            </div>
            <div className="hidden w-full 2xl:block 2xl:h-[30rem] md:hidden mt-2">
              <CardWeekRating />
            </div>
          </div>
        </section>

      </div>


      <div className="w-full hidden md:block"> {/* Mobile */}
        <div className="h-full ">
          <div className="flex flex-col w-full">
            <TopOrdered />
          </div>
          <div className="mt-6">
            <StatisticsCard />
          </div>
          <div className="mt-6">
            <ReviewCard />
          </div>
          <div className="mt-6">
            <SummarySlider />
          </div>
          <div className="mt-24">
            <StatisticsForMount />
          </div>
          <div className="mt-10">
            <StatisticsForPeriod />
          </div>
          <div className="mt-10">
            <TopOrdered />
          </div>
          <div className="w-full flex justify-center mt-4">
            <p className="font-Exo2 text-zinc-600">
              Что бы видеть чистую прибыль укажите себестоимость в разделе товары
            </p>
          </div>
          <div className="h-80"></div>
        </div>
      </div>
    </>
  );
};

export { Home };
