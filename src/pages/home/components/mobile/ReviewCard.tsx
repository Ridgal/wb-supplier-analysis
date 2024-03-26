import brandImage from '../../../../assets/general/images/brand.png';

const ReviewCard = () => {
  return (
    <div>
      <div className="my-12">
        <h1 className="text-2xl font-Exo2 font-extrabold leading-4 text-white">
          Получено отзывов
        </h1>
      </div>
      <div className="w-full h-[20rem] border-2 border-border rounded-3xl mr-2 bg-zinc-800 py-5 px-4">
        <div className="flex text-slate-300 mt-2 font-Exo2">
          <p className="mr-4 text-base sm:text-sm hover:text-basic truncate">Сначала положительные</p>
          <p className="mr-4 text-base sm:text-sm hover:text-basic truncate">Сначала отрицательные</p>
        </div>
        <div className="flex justify-between font-Exo2 h-56 mt-4 p-4 w-full bg-backgroundBasic rounded-lg">
          <div className="">
            <p className="text-2xl sm:text-xl mb-10 sm:mb-5">Очки женские BLOOM</p>
            <p className="text-xs text-gray-500 mb-12 sm:mb-6">Очки прекрасные покупкой довольна!! <br /> у детей тоже эйфория, не знаю что и сказать</p>
            <p className="text-4xl sm:text-2xl">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
          </div>
          <div>
            <img className="w-36 h-48 sm:w-30 sm:h-full sm:ml-1 rounded-lg object-cover" src={brandImage} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ReviewCard };
