import brandImage from '../../../../../assets/general/images/brand.png';

const CardReviews = () => {
  return (
    <div className="w-full h-full border-2 border-border rounded-3xl ml-2 2xl:ml-0 bg-backgroundCards">
      <div className="h-[10%] pt-4">
        <h1 className="text-2xl 4xl:text-xl 3xl:text-lg 2xl:text-base pl-6 font-Exo2 font-extrabold leading-4 text-white">
          Получено отзывов сегодня
        </h1>
      </div>
      <div className="h-[64%] pt-2 px-6 font-Exo2">
        <div className="flex text-slate-300 mt-2">
          <p className="mr-4 text-mainBright text-base 4xl:text-sm 3xl:text-xs truncate">Сначала положительные</p>
          <p className="mr-4 text-base 4xl:text-sm 3xl:text-xs truncate">Сначала отрицательные</p>
        </div>
        <div className="flex flex-col">
          <div className="flex mt-4">
            <img className="w-[43px] h-[48px] object-cover transition-all rounded-md mr-4" src={brandImage} alt=""/>
            <div className="mr-4">
              <p className="text-base 4xl:text-sm 3xl:text-xs truncate">Имя пользователя</p>
              <p className="text-lg 4xl:text-base 3xl:text-sm 2xl:text-xs">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
            </div>
            <p className="mr-4 text-base 4xl:text-sm 3xl:text-xs text-gray-400 truncate">Текст <br /> коменнтария</p>
            <button className="text-main hover:text-mainBright text-lg 4xl:text-base 3xl:text-sm 2xl:text-xs font-bold">
              Смотреть
            </button>
          </div>
          <div className="flex mt-2">
            <img className="w-[43px] h-[48px] object-cover transition-all rounded-md mr-4" src={brandImage} alt=""/>
            <div className="mr-4">
              <p className="text-base 4xl:text-sm 3xl:text-xs truncate">Имя пользователя</p>
              <p className="text-lg 4xl:text-base 3xl:text-sm 2xl:text-xs">&#9733; &#9733; &#9733; &#9733; &#9734;</p>
            </div>
            <p className="mr-4 text-base 4xl:text-sm 3xl:text-xs text-gray-400 truncate">Текст <br /> коменнтария</p>
            <button className="text-main hover:text-mainBright text-lg 4xl:text-base 3xl:text-sm 2xl:text-xs font-bold">
              Смотреть
            </button>
          </div>
          <div className="flex mt-2 mb-[0.875rem]">
            <img className="w-[43px] h-[48px] object-cover transition-all rounded-md mr-4" src={brandImage} alt=""/>
            <div className="mr-4">
              <p className="text-base 4xl:text-sm 3xl:text-xs truncate">Имя пользователя</p>
              <p className="text-lg 4xl:text-base 3xl:text-sm 2xl:text-xs">&#9733; &#9733; &#9733; &#9733; &#9734;</p>
            </div>
            <p className="mr-4 text-base 4xl:text-sm 3xl:text-xs text-gray-400 truncate">Текст <br /> коменнтария</p>
            <button className="text-main hover:text-mainBright text-lg 4xl:text-base 3xl:text-sm 2xl:text-xs font-bold">
              Смотреть
            </button>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-border"></div>
      <div className="flex flex-col h-[26%] px-6 font-Exo2">
        <div className="mt-1">
          <p className="text-base 4xl:text-sm 3xl:text-xs">Худший отзыв</p>
        </div>
        <div className="flex mt-2">
          <img className="w-[43px] h-[48px] object-cover transition-all rounded-md mr-4" src={brandImage} alt=""/>
          <div className="mr-4">
            <p className="text-base 4xl:text-sm 3xl:text-xs">Имя пользователя</p>
            <p className="text-lg 4xl:text-base 3xl:text-sm 2xl:text-xs">&#9733; &#9734; &#9734; &#9734; &#9734;</p>
          </div>
          <p className="mr-8 text-base 4xl:text-sm 3xl:text-xs truncate text-gray-400">Продукт не <br /> рабочий</p>
          <button className="text-main hover:text-mainBright text-lg 4xl:text-base 3xl:text-sm 2xl:text-xs font-bold">
              Смотреть
          </button>
        </div>
      </div>
    </div>
  );
};

export { CardReviews };
