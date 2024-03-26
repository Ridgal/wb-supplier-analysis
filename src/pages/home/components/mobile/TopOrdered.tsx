import RectangleFive from '../../../../assets/pages/home/TopOrdered/RectangleFive.svg';
import RectangleFour from '../../../../assets/pages/home/TopOrdered/RectangleFour.svg';
import RectangleOne from '../../../../assets/pages/home/TopOrdered/RectangleOne.svg';
import RectangleThree from '../../../../assets/pages/home/TopOrdered/RectangleThree.svg';
import RectangleTwo from '../../../../assets/pages/home/TopOrdered/RectangleTwo.svg';
import filterOrder_icon from '../../../../assets/pages/home/TopOrdered/filterOrder.svg';
import staticsOrder_icon from '../../../../assets/pages/home/TopOrdered/staticsOrder.svg';

const TopOrdered = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-Exo2 text-xl text-gray-300">
            Топ заказанных
          </p>
        </div>
        <div>
          <button className="p-2 bg-zinc-800 rounded-md mr-4">
            <img src={filterOrder_icon} alt="" />
          </button>
          <button className="p-2 bg-zinc-800 rounded-md">
            <img src={staticsOrder_icon} alt=""/>
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">

        <div className="w-full h-24 flex justify-between mt-6 font-Exo2 bg-zinc-800 rounded-2xl p-4">
          <div className="flex">
            <div className="h-full mr-6">
              <img className="sm:w-16 sm:h-16" src={RectangleOne} alt=""/>
            </div>
            <div className="h-full mr-24">
              <p className="text-lg sm:text-base">Футболка игровая</p>
              <p className="text-sm text-gray-500">Одежда</p>
            </div>
          </div>
          <div>
            <p className="text-2xl sm:text-xl">$750.00</p>
            <p className="text-basic">+76%</p>
          </div>
        </div>

        <div className="w-full h-24 flex justify-between mt-6 font-Exo2 bg-zinc-800 rounded-2xl p-4">
          <div className="flex">
            <div className="h-full mr-6">
              <img className="sm:w-16 sm:h-16" src={RectangleTwo} alt=""/>
            </div>
            <div className="h-full mr-24">
              <p className="text-lg sm:text-base">Женские брюки</p>
              <p className="text-sm text-gray-500">Одежда</p>
            </div>
          </div>
          <div>
            <p className="text-2xl sm:text-xl">₽240.00</p>
            <p className="text-basic">+12%</p>
          </div>
        </div>

        <div className="w-full h-24 flex justify-between mt-6 font-Exo2 bg-zinc-800 rounded-2xl p-4">
          <div className="flex">
            <div className="h-full mr-6">
              <img className="sm:w-16 sm:h-16" src={RectangleThree} alt=""/>
            </div>
            <div className="h-full mr-24">
              <p className="text-lg sm:text-base">Куртка мужская</p>
              <p className="text-sm text-gray-500">Одежда</p>
            </div>
          </div>
          <div>
            <p className="text-2xl sm:text-xl">₽380.00</p>
            <p className="text-basic">+37%</p>
          </div>
        </div>

        <div className="w-full h-24 flex justify-between mt-6 font-Exo2 bg-zinc-800 rounded-2xl p-4">
          <div className="flex">
            <div className="h-full mr-6">
              <img className="sm:w-16 sm:h-16" src={RectangleFour} alt=""/>
            </div>
            <div className="h-full mr-24">
              <p className="text-lg sm:text-base">Фьюджин</p>
              <p className="text-sm text-gray-500">Категория</p>
            </div>
          </div>
          <div>
            <p className="text-2xl sm:text-xl">₽420.00</p>
            <p className="text-basic">+45%</p>
          </div>
        </div>

        <div className="w-full h-24 flex justify-between mt-6 font-Exo2 bg-zinc-800 rounded-2xl p-4">
          <div className="flex">
            <div className="h-full mr-6">
              <img className="sm:w-16 sm:h-16" src={RectangleFive} alt=""/>
            </div>
            <div className="h-full mr-24">
              <p className="text-lg sm:text-base">Спейшл</p>
              <p className="text-sm text-gray-500">Одежда</p>
            </div>
          </div>
          <div>
            <p className="text-2xl sm:text-xl">₽329.00</p>
            <p className="text-basic">+32%</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export { TopOrdered };
