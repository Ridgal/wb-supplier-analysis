import brandImage from '../../../../assets/general/images/brand.png';
import arrowProceeds from '../../../../assets/pages/home/CardSales/svg/arrowProceeds.svg';
import graphOrders from '../../../../assets/pages/home/CardSales/svg/graphOrders.svg';
import graphProceeds from '../../../../assets/pages/home/CardSales/svg/graphProceeds.svg';
import { LineChart } from '../../../../components/generics/LineChart';

const CardBestSales = () => {
  return (
    <div className="w-full h-full lg:h-full border-2 md:hidden border-border rounded-3xl ml-2 mr-2 lg:mr-0 bg-backgroundCards">
      <div className="h-[10%] pt-4">
        <h1 className="text-2xl 4xl:text-xl 3xl:text-lg px-6 font-Exo2 font-extrabold leading-4 text-white">
          Лучшие продажи конкурентов
        </h1>
      </div>
      <div className="h-[64%] pt-6 font-Exo2">
        <div className="flex px-6 h-[73%]">
          <div className="w-[30%] h-full">
            <img className="w-full h-full object-cover transition-all rounded-xl" src={brandImage} alt=""/>
          </div>
          <div className="w-[70%] h-full pl-4">
            <LineChart
              data={[11, 13, 11, 30, 15, 18, 16, 14, 36, 29, 33, 34, 18, 25, 22, 27, 31]}
              labels={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17']}
              borderDash={[10, 5]}
            />
          </div>
        </div>
        <div className="flex items-center px-6 3xl:mt-0 h-[27%]">
          <p className="text-xl 4xl:text-lg 3xl:text-base mr-4">Название товара</p>
          •
          <p className="text-lg 4xl:text-lg 3xl:text-base ml-4 pt-[2px]">Название бренда</p>
        </div>
      </div>
      <div className="border-t-[1px] border-border"></div>
      <div className="flex justify-between font-Exo2 h-[26%] px-6 pt-6 3xl:pt-4 2xl:pt-6">
        <div className="flex">
          <div className="mr-4">
            <img className="4xl:w-20 4xl:h-11 3xl:w-16 3xl:h-10" src={graphProceeds} alt=""/>
          </div>
          <div>
            <p className="text-base 4xl:text-sm 3xl:text-sm">Выручка</p>
            <span className="flex justify-between">
              <p className="text-xl 4xl:text-lg mr-2">5 000 ₽</p>
              <img className="2xl:w-3 2xl:h-6" src={arrowProceeds} alt="" />
            </span>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4">
            <img className="4xl:w-20 4xl:h-12 3xl:w-16 3xl:h-10" src={graphOrders} alt=""/>
          </div>
          <div>
            <p className="text-base 4xl:text-sm 3xl:text-sm">Заказы</p>
            <span className="flex justify-between">
              <p className="text-xl 4xl:text-lg 3xl:text-base mr-2">60 шт.</p>
              <img className="2xl:w-3 2xl:h-6" src={arrowProceeds} alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CardBestSales };
