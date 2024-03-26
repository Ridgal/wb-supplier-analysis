import brandIcon from '../../../../assets/general/images/brand.png';
import linkIcon from '../../../../assets/pages/home/CardWeek/svg/externalLink.svg';

const CardWeekRating = () => {
  return (
    <div className="w-full h-full mr-2 2xl:border-2 2xl:border-border 2xl:rounded-3xl">
      <div className="h-[8%] pt-4 px-4">
        <h1 className="text-2xl 4xl:text-xl pl-2 font-Exo2 font-extrabold leading-4 text-white">
          Топ 5 товаров
        </h1>
      </div>
      <div className="pt-2 px-4 h-[66%] overflow-auto">

          <table className="w-full text-base text-left font-Exo2 overflow-scroll">
            <thead className="text-base text-white">
              <tr className="px-4">
                <th scope="col" className="font-normal pl-2 4xl:text-sm 2xl:pr-2 2xl:truncate">
                  Наименование товара
                </th>
                <th scope="col" className="font-normal flex items-center 4xl:text-sm 2xl:text-xs 2xl:pr-2">
                  Выручка
                </th>
                <th scope="col" className="font-normal 4xl:text-sm 2xl:pr-2">
                  Заказы
                </th>
                <th scope="col" className="font-normal 4xl:text-sm 2xl:pr-2">
                  Продажи
                </th>
                <th scope="col" className="font-normal 4xl:text-sm 2xl:pr-2">
                  Товары
                </th>
                <th scope="col" className="font-normal 4xl:text-sm 2xl:pr-2">
                  Отмены
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="bg-transparent hover:bg-green-900 pt-4">
                <th scope="row" className="flex items-center font-medium mx-2 my-2 2xl:my-1 text-gray-900 whitespace-nowrap dark:text-white">
                  <img src={brandIcon} alt="" className="w-[4.5rem] h-[4.5rem] object-cover transition-all rounded-md mr-2"/>
                  <p className="text-base 4xl:text-sm truncate">Наименование <br /> товара 1</p>
                </th>
                <td className="px-6 py-4 mt-4 4xl:px-2">
                  5 000 ₽
                </td>
                <td className="px-6 py-4 mt-4 4xl:px-2">
                  58
                </td>
                <td className="px-6 py-4 mt-4 4xl:px-2">
                  76
                </td>
                <td className="px-6 py-4 mt-4 4xl:px-2">
                  12
                </td>
                <td className="px-6 py-4 mt-4 4xl:px-2">
                  5
                </td>
              </tr>
              <tr className="bg-green-900">
                <th scope="row" className="flex items-center font-medium mx-2 my-2 2xl:my-1 text-gray-900 whitespace-nowrap dark:text-white">
                  <img src={brandIcon} alt="" className="w-[4.5rem] h-[4.5rem] object-cover transition-all rounded-md mr-2"/>
                  <p className="text-base 4xl:text-sm truncate">Короткое имя 2</p>
                </th>
                <td className="px-6 py-4 mt-4 4xl:px-2">
                  5 000 ₽
                </td>
                <td className="px-6 py-4 mt-4 4xl:px-2">
                  58
                </td>
                <td className="px-6 py-4 mt-4 4xl:px-2">
                  76
                </td>
                <td className="px-6 py-4 mt-4 4xl:px-2">
                  12
                </td>
                <td className="px-6 py-4 mt-4 4xl:px-2">
                  5
                </td>
              </tr>
              <tr className="bg-transparent hover:bg-green-900">
                <th scope="row" className="flex items-center font-medium mx-2 my-2 2xl:my-1 text-gray-900 whitespace-nowrap dark:text-white">
                  <img src={brandIcon} alt="" className="w-[4.5rem] h-[4.5rem] object-cover transition-all rounded-md mr-2"/>
                  <p className="text-base 4xl:text-sm truncate">Длинное <br /> наименование <br /> товара 01</p>
                </th>
                <td className="px-6 py-4 mt-4 4xl:px-2 truncate">
                  5 000 ₽
                </td>
                <td className="px-6 py-4 mt-4 4xl:px-2">
                  58
                </td>
                <td className="px-6 py-4 mt-4 4xl:px-2">
                  76
                </td>
                <td className="px-6 py-4 mt-4 4xl:px-2">
                  12
                </td>
                <td className="px-6 py-4 mt-4 4xl:px-2">
                  5
                </td>
              </tr>
              <tr className="bg-transparent hover:bg-green-900">
                <th scope="row" className="flex items-center font-medium mx-2 my-2 2xl:my-1 text-gray-900 whitespace-nowrap dark:text-white">
                  <img src={brandIcon} alt="" className="w-[4.5rem] h-[4.5rem] object-cover transition-all rounded-md mr-2"/>
                  <p className="text-base 4xl:text-sm truncate">Длинное <br /> наименование <br /> товара 01</p>
                </th>
                <td className="px-6 py-4 mt-4 4xl:px-2 truncate">
                  5 000 ₽
                </td>
                <td className="px-6 py-4 mt-4 4xl:px-2">
                  58
                </td>
                <td className="px-6 py-4 mt-4 4xl:px-2">
                  76
                </td>
                <td className="px-6 py-4 mt-4 4xl:px-2">
                  12
                </td>
                <td className="px-6 py-4 mt-4 4xl:px-2">
                  5
                </td>
              </tr>
            </tbody>
          </table>

      </div>
      <div className="border-t-[1px] border-border"></div>
      <div className="flex justify-between h-[26%] px-4 3xl:px-2 2xl:px-6 pb-6 pt-4 2xl:pt-6 font-Exo2">
        <div className="">
          <h2 className="text-base font-bold 4xl:text-sm">Получено отзывов за неделю</h2>
          <p className="text-base 4xl:text-sm">Хороших - <span className="text-mainBright">49</span></p>
          <p className="text-base 4xl:text-sm">Нейтральных - 21</p>
          <p className="text-base 4xl:text-sm">Отрицательных - 5</p>
        </div>
        <div className="">
          <h2 className="text-base font-bold 4xl:text-sm">Получено вопросов за неделю</h2>
          <span className="flex">
            <a className="underline text-mainBright text-base 4xl:text-sm" href="">439 вопросов</a>
            <img className="ml-2 xl:w-5 xl:h-4" src={linkIcon} alt=""/>
          </span>
          <p className="text-base 4xl:text-sm">Отвечено - 0</p>
        </div>
        <div>
          <h2 className="text-base font-bold 4xl:text-sm truncate">Ваш лучший бренд</h2>
          <p className="text-mainBright 4xl:text-sm">Название бренда</p>
          <p className="text-base 4xl:text-sm">Выручка - 500 000 ₽</p>
          <p className="text-base 4xl:text-sm">Возвраты - 4%</p>
        </div>
      </div>
    </div>
  );
};

export { CardWeekRating };
