import Slider from "react-slick";
import RectangleOne from '../../../../assets/pages/home/TopOrdered/RectangleOne.svg';

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const SummarySlider = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="w-full">
      <div className="my-12">
        <h1 className="text-2xl font-Exo2 font-extrabold leading-4 text-white">
          Сводная по магазину
        </h1>
      </div>
      <div className="w-full flex flex-col slider-container !z-0">
        <Slider {...settings}>
          <div className="!flex items-center w-full h-28 px-8 py-2 border-2 border-zinc-600 bg-zinc-800 rounded-2xl">
            <div className="flex flex-col w-1/2">
              <p className="text-5xl sm:text-2xl font-Montserrat font-semibold">57 000 ₽</p>
              <p className="text-zinc-500 font-Lato text-sm">Отправлено <br /> товаров на сумму</p>
            </div>
            <div className="w-1/2 flex justify-end">
              <img src={RectangleOne} alt=""/>
            </div>
          </div>

          <div className="!flex items-center w-full h-28 px-8 py-2 border-2 border-zinc-600 bg-zinc-800 rounded-2xl">
            <div className="flex flex-col w-1/2">
              <p className="text-5xl sm:text-2xl font-Montserrat font-semibold">50 000 ₽</p>
              <p className="text-zinc-500 font-Lato text-sm">Логистика WB</p>
            </div>
            <div className="w-1/2 flex justify-end">
              <img src={RectangleOne} alt=""/>
            </div>
          </div>

          <div className="!flex items-center w-full h-28 px-8 py-2 border-2 border-zinc-600 bg-zinc-800 rounded-2xl">
            <div className="flex flex-col w-1/2">
              <p className="text-5xl sm:text-2xl font-Montserrat font-semibold">70 000 ₽</p>
              <p className="text-zinc-500 font-Lato text-sm">Комиссия WB</p>
            </div>
            <div className="w-1/2 flex justify-end">
              <img src={RectangleOne} alt=""/>
            </div>
          </div>

          <div className="!flex items-center w-full h-28 px-8 py-2 border-2 border-zinc-600 bg-zinc-800 rounded-2xl">
            <div className="flex flex-col w-1/2">
              <p className="text-5xl sm:text-2xl font-Montserrat font-semibold">70 PSC</p>
              <p className="text-zinc-500 font-Lato text-sm">Товаров в пути</p>
            </div>
            <div className="w-1/2 flex justify-end">
              <img src={RectangleOne} alt=""/>
            </div>
          </div>

          <div className="!flex items-center w-full h-28 px-8 py-2 border-2 border-zinc-600 bg-zinc-800 rounded-2xl">
            <div className="flex flex-col w-1/2">
              <p className="text-5xl sm:text-2xl font-Montserrat font-semibold">70</p>
              <p className="text-zinc-500 font-Lato text-sm">Получено отзывов</p>
            </div>
            <div className="w-1/2 flex justify-end">
              <img src={RectangleOne} alt=""/>
            </div>
          </div>

          <div className="!flex items-center w-full h-28 px-8 py-2 border-2 border-zinc-600 bg-zinc-800 rounded-2xl">
            <div className="flex flex-col w-1/2">
              <p className="text-5xl sm:text-2xl font-Montserrat font-semibold">70</p>
              <p className="text-zinc-500 font-Lato text-sm">Получено вопросов</p>
            </div>
            <div className="w-1/2 flex justify-end">
              <img src={RectangleOne} alt=""/>
            </div>
          </div>

        </Slider>
      </div>
    </div>

  );
};

export { SummarySlider };
