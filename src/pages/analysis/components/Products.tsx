import brandImage from "../../../assets/general/images/brand.png";
import image from '../../../assets/general/images/image.png';
import traidingIcon from "../../../assets/general/svg/traiding-up.svg";
import arrowProceeds from "../../../assets/pages/home/CardSales/svg/arrowProceeds.svg";
import graphOrders from "../../../assets/pages/home/CardSales/svg/graphOrders.svg";
import graphProceeds from "../../../assets/pages/home/CardSales/svg/graphProceeds.svg";
import linkIcon from "../../../assets/pages/home/CardWeek/svg/externalLink.svg";

import { LineChart } from "../../../components/generics/LineChart";

const Products = () => {
  return (
    <div className="mt-10">
      <section className="w-full h-full md:hidden my-4">
          <div className="flex w-full h-96">

            <div className="flex justify-center w-1/3 2xl:w-1/2 md:hidden">
              <div className="w-full h-full lg:h-full border-2 border-border rounded-3xl mr-2 bg-backgroundCards">
                <div className="h-[10%] pt-4">
                  <h1 className="text-2xl 4xl:text-xl 3xl:text-lg pl-6 font-Exo2 font-extrabold leading-4 text-white">
                    Предварительная аналитика
                  </h1>
                </div>
                <div className="pt-2 px-6 h-[64%] font-Exo2">
                  <div className="h-full">
                    <div className="flex text-slate-300 h-[15%]">
                      <p className="mr-4 text-base 4xl:text-sm 3xl:text-xs">По выручке</p>
                      <p className="mr-4 text-base 4xl:text-sm 3xl:text-xs">По заказам</p>
                      <p className="text-main text-base 4xl:text-sm 3xl:text-xs">По продажам</p>
                    </div>
                    <div className="h-[85%]">
                      <LineChart
                        data={[11, 13, 11, 30, 15, 18, 16, 14, 36, 29, 33, 34, 18, 25, 22, 27, 31]}
                        labels={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17']}
                        borderDash={[10, 5]}
                      />
                    </div>
                  </div>
                </div>
                <div className="border-t-[1px] border-border"></div>
                <div className="flex justify-between h-[26%] px-4 pt-5 2xl:pt-6 font-Exo2">
                  <div className="mr-4">
                    <p className="text-base 4xl:text-sm ">Выручка</p>
                    <p className="text-lg 4xl:text-base 3xl:text-sm lg:text-sm truncate">175 000 ₽</p>
                  </div>
                  <div className="mr-4">
                    <p className="text-base 4xl:text-sm ">Заказов</p>
                    <p className="text-lg 4xl:text-base 3xl:text-sm lg:text-sm truncate">5324 Шт.</p>
                  </div>
                  <div className="mr-4">
                    <p className="text-base 4xl:text-sm">Продано</p>
                    <p className="text-lg 4xl:text-base 3xl:text-sm lg:text-sm truncate">26340 Шт.</p>
                  </div>
                  <div className="mr-4">
                    <p className="text-base w-full 4xl:text-sm 3xl:text-sm truncate">Чистая прибыль</p>
                    <span className="flex justify-around">
                      <p className="text-xl 4xl:text-lg lg:text-sm text-main font-bold truncate">65 000 ₽</p>
                      <img className="3xl:w-5 3xl:h-5" src={traidingIcon} alt="" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center w-1/3 2xl:w-1/2">
              <div className="w-full h-full lg:h-full border-2 md:hidden border-border rounded-3xl ml-2 mr-2 lg:mr-0 bg-backgroundCards">
                <div className="h-[10%] pt-4">
                  <h1 className="text-2xl 4xl:text-xl 3xl:text-lg px-6 font-Exo2 font-extrabold leading-4 text-white">
                    Рейтинг товара
                  </h1>
                </div>
                <div className="h-[64%] pt-6 font-Exo2">
                  <div className="flex px-6 h-[73%]">
                    <div className="w-[30%] h-full">
                      <img className="w-full h-full object-cover transition-all rounded-xl" src={image} alt=""/>
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
                    <p className="text-xl 4xl:text-lg 3xl:text-base mr-4">Приставка Xbox</p>
                    •
                    <p className="text-lg 4xl:text-lg 3xl:text-base ml-4 pt-[2px]">Microsoft</p>
                  </div>
                </div>
                <div className="border-t-[1px] border-border"></div>
                <div className="flex justify-between font-Exo2 h-[26%] px-6 pt-6 3xl:pt-4 2xl:pt-6">
                  <div className="flex">
                    <div className="mr-4">
                      <img className="4xl:w-20 4xl:h-11 3xl:w-16 3xl:h-10" src={graphProceeds} alt=""/>
                    </div>
                    <div>
                      <p className="text-base 4xl:text-sm 3xl:text-sm">Возвратов</p>
                      <span className="flex justify-between">
                        <p className="text-xl 4xl:text-lg mr-2">50 Шт.</p>
                        <img className="2xl:w-3 2xl:h-6" src={arrowProceeds} alt="" />
                      </span>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-4">
                      <img className="4xl:w-20 4xl:h-12 3xl:w-16 3xl:h-10" src={graphOrders} alt=""/>
                    </div>
                    <div>
                      <p className="text-base 4xl:text-sm 3xl:text-sm">Отмен</p>
                      <span className="flex justify-between">
                        <p className="text-xl 4xl:text-lg 3xl:text-base mr-2">60 шт.</p>
                        <img className="2xl:w-3 2xl:h-6" src={arrowProceeds} alt="" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center w-1/3 2xl:hidden">
              <div className="w-full h-full border-2 border-border rounded-3xl ml-2 2xl:ml-0 bg-backgroundCards">
                <div className="h-[10%] pt-4">
                  <h1 className="text-2xl 4xl:text-xl 3xl:text-lg 2xl:text-base pl-6 font-Exo2 font-extrabold leading-4 text-white">
                    Отзывы
                  </h1>
                </div>
                <div className="h-[64%] pt-2 px-6 font-Exo2">
                  <div className="flex text-slate-300 mt-2">
                    <p className="mr-4 text-mainBright text-base 4xl:text-sm 3xl:text-xs truncate">Сначала положительные</p>
                    <p className="mr-4 text-base 4xl:text-sm 3xl:text-xs truncate">Сначала отрицательные</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex justify-between mt-4">
                      <div className="flex">
                        <img className="w-[43px] h-[48px] object-cover transition-all rounded-md mr-4" src={brandImage} alt=""/>
                        <div className="mr-4">
                          <p className="text-base 4xl:text-sm 3xl:text-xs truncate">Имя пользователя</p>
                          <p className="text-lg 4xl:text-base 3xl:text-sm 2xl:text-xs">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
                        </div>
                        <p className="mr-4 text-base 4xl:text-sm 3xl:text-xs text-gray-400 truncate">Текст <br /> коменнтария</p>
                      </div>
                      <button className="text-basic hover:text-light_basic text-lg 4xl:text-base 3xl:text-sm 2xl:text-xs font-bold">
                        Смотреть
                      </button>
                    </div>
                    <div className="flex justify-between mt-2">
                      <div className="flex">
                        <img className="w-[43px] h-[48px] object-cover transition-all rounded-md mr-4" src={brandImage} alt=""/>
                        <div className="mr-4">
                          <p className="text-base 4xl:text-sm 3xl:text-xs truncate">Имя пользователя</p>
                          <p className="text-lg 4xl:text-base 3xl:text-sm 2xl:text-xs">&#9733; &#9733; &#9733; &#9733; &#9734;</p>
                        </div>
                        <p className="mr-4 text-base 4xl:text-sm 3xl:text-xs text-gray-400 truncate">Текст <br /> коменнтария</p>
                      </div>

                      <button className="text-basic hover:text-light_basic text-lg 4xl:text-base 3xl:text-sm 2xl:text-xs font-bold">
                        Смотреть
                      </button>
                    </div>
                    <div className="flex justify-between mt-2 mb-[0.875rem]">
                      <div className="flex">
                        <img className="w-[43px] h-[48px] object-cover transition-all rounded-md mr-4" src={brandImage} alt=""/>
                        <div className="mr-4">
                          <p className="text-base 4xl:text-sm 3xl:text-xs truncate">Имя пользователя</p>
                          <p className="text-lg 4xl:text-base 3xl:text-sm 2xl:text-xs">&#9733; &#9733; &#9733; &#9733; &#9734;</p>
                        </div>
                        <p className="mr-4 text-base 4xl:text-sm 3xl:text-xs text-gray-400 truncate">Текст <br /> коменнтария</p>
                      </div>

                      <button className="text-basic hover:text-light_basic text-lg 4xl:text-base 3xl:text-sm 2xl:text-xs font-bold">
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
                  <div className="flex justify-between mt-2">
                    <div className="flex">
                      <img className="w-[43px] h-[48px] object-cover transition-all rounded-md mr-4" src={brandImage} alt=""/>
                      <div className="mr-4">
                        <p className="text-base 4xl:text-sm 3xl:text-xs">Имя пользователя</p>
                        <p className="text-lg 4xl:text-base 3xl:text-sm 2xl:text-xs">&#9733; &#9734; &#9734; &#9734; &#9734;</p>
                      </div>
                      <p className="mr-8 text-base 4xl:text-sm 3xl:text-xs truncate text-gray-400">Продукт не <br /> рабочий</p>
                    </div>
                    <button className="text-basic hover:text-light_basic text-lg 4xl:text-base 3xl:text-sm 2xl:text-xs font-bold">
                        Смотреть
                    </button>
                  </div>
                </div>
              </div>
            </div>

        </div>
      </section>

      <section>
        <div className="flex w-full h-[30rem] 2xl:h-[26rem] my-4 3xl:my-2">
          <div className="flex w-full h-full 2xl:w-full md:hidden border-2 border-border rounded-3xl">
            <div className="w-1/2 2xl:w-full h-full">

              <div className="w-full h-full 2xl:w-full border-r 2xl:border-r-0 border-border">
                <div className="h-[8%] pt-4">
                  <h1 className="text-2xl 4xl:text-xl pl-6 font-Exo2 font-extrabold leading-4 text-white">
                    Стастика за неделю
                  </h1>
                </div>
                <div className="pt-2 px-6 h-[66%] font-Exo2">
                  <div className="flex text-slate-300 mb-2 mt-2">
                    <p className="mr-4 text-mainBright text-base 4xl:text-sm">По выручке</p>
                    <p className="mr-4 text-base 4xl:text-sm ">По заказам</p>
                    <p className="text-base 4xl:text-sm">По продажам</p>
                  </div>
                  <div className="h-[12.5rem] 2xl:h-[11rem]">
                    <LineChart
                      data={[40, 75, 85, 60, 86, 150, 110]}
                      labels={['29 янв.', '30 янв.', '31 янв.', '1 фев.', '2 фев.', '3 фев.', '4 фев.']}
                      borderDash={[10, 5]}
                    />
                  </div>
                  <div className="mt-2 mb-2 text-base 2xl:flex 2xl:justify-between 4xl:text-sm 3xl:text-xs 3xl:mt-4 2xl:text-base lg:text-sm 2xl:mt-2">
                    <p>Самый прибыльный день — Суббота (3 февраля)</p>
                    <p>Самый проигрышный день — Понедельник (29 января)</p>
                  </div>
                </div>
                <div className="border-t-[1px] border-border"></div>
                <div className="flex h-[26%] w-full justify-around 2xl:justify-start font-Exo2 px-6 3xl:px-2 2xl:px-4 pb-6 pt-8">
                  <div className="mr-4 2xl:mr-8">
                    <p className="text-base 4xl:text-sm">Выручка</p>
                    <p className="text-lg 4xl:text-base">500 000 ₽</p>
                  </div>
                  <div className="mr-4 2xl:mr-8">
                    <p className="text-base 4xl:text-sm">Заказов</p>
                    <p className="text-lg 4xl:text-base">5324 Шт.</p>
                  </div>
                  <div className="mr-4 2xl:mr-8">
                    <p className="text-base 4xl:text-sm">Продано</p>
                    <p className="text-lg 4xl:text-base">2631 Шт.</p>
                  </div>
                  <div className="">
                    <p className="text-base 4xl:text-sm font-bold truncate">Чистая прибыль</p>
                    <span className="flex justify-around">
                      <p className="text-xl 4xl:text-lg xl:text-base text-main font-bold">328 000 ₽</p>
                      <img className="2xl:w-5 2xl:h-5" src={traidingIcon} alt="" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-1/2 h-full 2xl:hidden">
              <div className="w-full h-full mr-2 2xl:border-2 2xl:border-border 2xl:rounded-3xl">
                <div className="h-[8%] pt-4 px-4">
                  <h1 className="text-2xl 4xl:text-xl pl-2 font-Exo2 font-extrabold leading-4 text-white">
                    Топ 5 складов
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
                            <img src={brandImage} alt="" className="w-[4.5rem] h-[4.5rem] object-cover transition-all rounded-md mr-2"/>
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
                            <img src={brandImage} alt="" className="w-[4.5rem] h-[4.5rem] object-cover transition-all rounded-md mr-2"/>
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
                            <img src={brandImage} alt="" className="w-[4.5rem] h-[4.5rem] object-cover transition-all rounded-md mr-2"/>
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
                            <img src={brandImage} alt="" className="w-[4.5rem] h-[4.5rem] object-cover transition-all rounded-md mr-2"/>
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
                      <a className="underline text-basic text-base 4xl:text-sm" href="">439 вопросов</a>
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
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export { Products };
