import brandImage from "../../../../assets/general/images/brand.png";
import image from '../../../../assets/general/images/image.png';
import traidingIcon from "../../../../assets/general/svg/traiding-up.svg";
import mail from '../../../../assets/pages/analysis/images/mail.png';
import phone from '../../../../assets/pages/analysis/images/phone.png';
import social from '../../../../assets/pages/analysis/images/social.png';
import graphDown from '../../../../assets/pages/analysis/svg/graphDown.svg';
import arrowProceeds from "../../../../assets/pages/home/CardSales/svg/arrowProceeds.svg";
import graphOrders from "../../../../assets/pages/home/CardSales/svg/graphOrders.svg";
import linkIcon from "../../../../assets/pages/home/CardWeek/svg/externalLink.svg";

import { ChartBestSales } from "../../../home/components/dekstop/CardSales/ChartBestSales";
import { CardChart } from "../../../home/components/dekstop/CardTodayStatistic/ChartCardToday";
import { ChartWeekStatistic } from "../../../home/components/dekstop/CardWeek/CardWeekStatistic/ChartWeekStatistic";

const Seller = () => {
  return (
    <div>
      <section className="w-full h-full md:hidden my-4">
          <div className="flex w-full h-96">

            <div className="flex justify-center w-1/3 2xl:w-1/2 md:hidden">
              <div className="w-full h-full lg:h-full border-2 border-border rounded-3xl mr-2 bg-backgroundCards">
                <div className="h-[10%] pt-4">
                  <h1 className="text-2xl 4xl:text-xl 3xl:text-lg pl-6 font-Exo2 font-extrabold leading-4 text-white">
                    Уставной капитал
                  </h1>
                </div>
                <div className="pt-2 px-6 h-[64%] font-Exo2">
                  <div className="h-full">
                    <div className="flex text-slate-300 h-[15%]">
                      <p className="mr-4 text-base 4xl:text-sm 3xl:text-xs">Изменение по годам</p>
                    </div>
                    <div className="h-[85%]">
                      <CardChart />
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
                    <p className="text-base w-full 4xl:text-sm 3xl:text-sm truncate">Чистая прибыль</p>
                    <span className="flex justify-around">
                      <p className="text-xl 4xl:text-lg lg:text-sm text-main font-semibold text-light_basic truncate">65 000 ₽</p>
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
                    Репутация
                  </h1>
                </div>
                <div className="h-[64%] pt-6 font-Exo2">
                  <div className="flex px-6 h-[73%]">
                    <div className="w-[30%] h-full">
                      <img className="w-full h-full object-cover transition-all rounded-xl" src={image} alt=""/>
                    </div>
                    <div className="w-[70%] h-full pl-4">
                      <p className="text-sm text-center w-full font-Exo2 text-zinc-500">Судебные дела</p>
                      <ChartBestSales />
                    </div>
                  </div>
                  <div className="flex items-center px-6 3xl:mt-0 h-[27%]">
                    <p className="text-xl 4xl:text-lg 3xl:text-base mr-2">Статус:</p>
                    <p className="text-xl text-basic 4xl:text-lg 3xl:text-base ml-2 pt-[2px]">Хороший</p>
                  </div>
                </div>
                <div className="border-t-[1px] border-border"></div>
                <div className="flex justify-between font-Exo2 h-[26%] px-6 pt-6 3xl:pt-4 2xl:pt-6">
                  <div className="flex">
                    <div className="mr-4">
                      <img className="4xl:w-20 4xl:h-11 3xl:w-16 3xl:h-10" src={graphDown} alt=""/>
                    </div>
                    <div>
                      <p className="text-base 4xl:text-sm 3xl:text-sm">Проиграно дел</p>
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
                      <p className="text-base 4xl:text-sm 3xl:text-sm">Выиграно дел</p>
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
                  <h1 className="text-2xl font-Benzim-medium 4xl:text-xl 3xl:text-lg 2xl:text-base pl-6  font-medium leading-4 text-white">
                    Контакты компании
                  </h1>
                </div>
                <div className="h-[64%] pt-2 px-6 font-Exo2">
                  <div className="flex text-slate-300 mt-2">
                    <p className="mr-4 text-mainBright text-base 4xl:text-sm 3xl:text-xs truncate">
                      Результат из открытых источников
                    </p>
                  </div>
                  <div className="flex flex-col">

                    <div className="flex justify-between  mt-4 w-full font-Exo2">
                      <div className="flex items-center">
                        <img className="w-[43px] h-[48px] object-cover transition-all rounded-md mr-4" src={brandImage} alt=""/>
                        <div className="mr-4">
                          <p className="text-base 4xl:text-sm 3xl:text-xs truncate">Сайт</p>
                        </div>
                        <p className="mr-4 text-base 4xl:text-sm 3xl:text-xs text-gray-400 truncate">asd.ru</p>
                      </div>
                      <button className="text-basic hover:text-light_basic text-lg 4xl:text-base 3xl:text-sm 2xl:text-xs font-bold">
                        Смотреть
                      </button>
                    </div>

                    <div className="flex justify-between mt-2 w-full font-Exo2">
                      <div className="flex items-center">
                        <img className="w-[43px] h-[48px] object-cover transition-all rounded-md mr-4" src={brandImage} alt=""/>
                        <div className="mr-4">
                          <p className="text-base 4xl:text-sm 3xl:text-xs truncate">Почта</p>
                        </div>
                        <p className="mr-4 text-base 4xl:text-sm 3xl:text-xs text-gray-400 truncate">asd@mail.ru</p>
                      </div>

                      <button className="text-basic hover:text-light_basic text-lg 4xl:text-base 3xl:text-sm 2xl:text-xs font-bold">
                        Написать
                      </button>
                    </div>

                    <div className="flex justify-between mt-2 w-full font-Exo2">
                      <div className="flex items-center">
                        <img className="w-[43px] h-[48px] object-cover transition-all rounded-md mr-4" src={brandImage} alt=""/>
                        <div className="mr-4">
                          <p className="text-base 4xl:text-sm 3xl:text-xs truncate">Номер</p>
                        </div>
                        <p className="mr-4 text-base 4xl:text-sm 3xl:text-xs text-gray-400 truncate">+7 (999) 999-99-99</p>
                      </div>

                      <button className="text-basic hover:text-light_basic text-lg 4xl:text-base 3xl:text-sm 2xl:text-xs font-bold">
                        Позвонить
                      </button>
                    </div>

                  </div>
                </div>
                <div className="border-t-[1px] border-border"></div>

                <div className="flex flex-col h-[26%] px-6 font-Exo2">
                  <div className="mt-1">
                    <p className="text-base 4xl:text-sm 3xl:text-xs">Фактический адрес</p>
                  </div>
                  <div className="flex justify-between mt-2">
                    <div className="flex items-center">
                      <img className="w-[43px] h-[48px] object-cover transition-all rounded-md mr-4" src={brandImage} alt=""/>
                      <div className="mr-4">
                        <p className="text-base 4xl:text-sm 3xl:text-xs">Город</p>
                      </div>
                      <p className="mr-8 text-base 4xl:text-sm 3xl:text-xs truncate text-gray-400">
                        Москва, Улица Щербинка 22
                      </p>
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

            <div className="w-[40%] 2xl:w-full h-full">

              <div className="w-full h-full 2xl:w-full border-r 2xl:border-r-0 border-border">
                <div className="h-[8%] pt-4">
                  <h1 className="text-2xl 4xl:text-xl pl-6 font-Exo2 font-extrabold leading-4 text-white">
                    О руководителе
                  </h1>
                </div>
                <div className="pt-2 px-6 h-[66%] font-Exo2">
                  <div className="flex text-slate-300 mb-2 mt-2">
                    <p className="mr-4 text-mainBright text-base 4xl:text-sm">Гражданство РФ</p>
                    <p className="mr-4 text-base 4xl:text-sm ">Найдены штрафы</p>
                    <p className="text-base 4xl:text-sm">Мутсабиров Ниссан Александрович</p>
                  </div>
                  <div className="h-[12.5rem] 2xl:h-[11rem]">
                    <ChartWeekStatistic />
                  </div>
                  <div className="mt-2 mb-2 text-base 2xl:flex 2xl:justify-between 4xl:text-sm 3xl:text-xs 3xl:mt-4 2xl:text-base lg:text-sm 2xl:mt-2">
                    <p>Фактический адрес продавца: г. Москва, ул Куусинена 22, д3</p>
                    <p>Учредитель других компаний: ООО ВЕСТА</p>
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
                    <p className="text-xl 4xl:text-sm font-bold truncate">Репутация</p>
                    <span className="flex justify-around">
                      <p className="text-2xl font-Exo2 text-red-500 4xl:text-lg xl:text-base text-main font-bold">Плохая</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[60%] h-full 2xl:hidden">
              <div className="w-full h-full mr-2 2xl:border-2 2xl:border-border 2xl:rounded-3xl">
                <div className="h-[8%] pt-4 px-4">
                  <h1 className="text-2xl 4xl:text-xl pl-2 font-Exo2 font-extrabold leading-4 text-white">
                    Личная информация продавца
                  </h1>
                </div>
                <div className="flex pt-2 px-4 h-[66%]">

                    <div className="w-[60%] overflow-auto">
                      <table className="w-full text-base text-left font-Exo2 overflow-scroll">
                        <thead className="text-base text-white">
                          <tr className="px-4">
                            <th scope="col" className="font-normal pl-2 4xl:text-sm 2xl:pr-2 2xl:truncate">
                             Информация из открытых источников
                            </th>
                            <th scope="col" className="font-normal flex items-center 4xl:text-sm 2xl:text-xs 2xl:pr-2">

                            </th>
                            <th scope="col" className="font-normal 4xl:text-sm 2xl:pr-2">
                              Актуален
                            </th>
                          </tr>
                        </thead>
                        <tbody className="">
                          <tr className="bg-transparent hover:bg-green-900 pt-4">
                            <th scope="row" className="flex items-center font-medium mx-2 my-2 2xl:my-1 text-gray-900 whitespace-nowrap dark:text-white">
                              <img src={phone} alt="" className="w-[4.5rem] h-[4.5rem] object-cover transition-all rounded-md mr-2"/>
                              <p className="text-base 4xl:text-sm truncate">Номер телефона</p>
                            </th>
                            <td className="px-6 py-4 mt-4 4xl:px-2">
                              + 7 (989) 674-56 99
                            </td>
                            <td className="px-6 py-4 mt-4 4xl:px-2">
                              2023
                            </td>
                          </tr>

                          <tr className="bg-green-900">
                            <th scope="row" className="flex items-center font-medium mx-2 my-2 2xl:my-1 text-gray-900 whitespace-nowrap dark:text-white">
                              <img src={mail} alt="" className="w-[4.5rem] h-[4.5rem] object-cover transition-all rounded-md mr-2"/>
                              <p className="text-base 4xl:text-sm truncate">Почта</p>
                            </th>
                            <td className="px-6 py-4 mt-4 4xl:px-2">
                              mitsubizi@mail.ru
                            </td>
                            <td className="px-6 py-4 mt-4 4xl:px-2">
                              2023
                            </td>
                          </tr>

                          <tr className="bg-transparent hover:bg-green-900">
                            <th scope="row" className="flex items-center font-medium mx-2 my-2 2xl:my-1 text-gray-900 whitespace-nowrap dark:text-white">
                              <img src={social} alt="" className="w-[4.5rem] h-[4.5rem] object-cover transition-all rounded-md mr-2"/>
                              <p className="text-base 4xl:text-sm truncate">Социальные сети</p>
                            </th>
                            <td className="px-6 py-4 mt-4 4xl:px-2 truncate">
                              Игорек Прокурор
                            </td>
                            <td className="px-6 py-4 mt-4 4xl:px-2">
                              2023
                            </td>
                          </tr>

                        </tbody>
                      </table>
                    </div>


                    <div className="w-[40%] text-white p-2">
                      <div className="flex flex-col w-full h-full bg-bg_classic rounded-lg px-6 py-3">
                        <h1 className="text-xl font-Benzim-medium">Требуется удалить <br /> информацию?</h1>
                        <div className="mt-8">
                          <p className="text-sm text-zinc-500">Ваш номер телефона</p>
                          <input
                            className="w-full mt-2 h-10 rounded-lg bg-bg_table text-white p-2"
                            />
                        </div>
                        <button
                          type="submit"
                          className="flex w-2/3 ml-14 font-Benzim-bold font-extrabold justify-center rounded-lg px-3 py-2 mt-14 text-base text-gray-900 bg-mainForm hover:bg-main shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                        Далее
                        </button>
                      </div>
                    </div>

                </div>
                <div className="border-t-[1px] border-border"></div>
                <div className="flex justify-between h-[26%] px-4 3xl:px-2 2xl:px-6 pb-6 pt-4 2xl:pt-6 font-Exo2">
                  <div className="">
                    <h2 className="text-base font-bold 4xl:text-sm">Документы</h2>
                    <p className="text-base 4xl:text-sm">СНИЛС - 3242345235345345</p>
                    <p className="text-base 4xl:text-sm">ИНН - 423542345436456456456</p>
                    <p className="text-base 4xl:text-sm">Паспорт - 5324 423442</p>
                  </div>
                  <div className="">
                    <h2 className="text-base font-bold 4xl:text-sm">Прошлое место работы</h2>
                    <span className="flex">
                      <a className="underline text-basic text-base 4xl:text-sm" href="">NL MARKETING</a>
                      <img className="ml-2 xl:w-5 xl:h-4" src={linkIcon} alt=""/>
                    </span>
                    <p className="text-base 4xl:text-sm">2023</p>
                    <p className="text-base 4xl:text-sm">Кредитов не обнаружено</p>
                  </div>
                  <div>
                    <h2 className="text-base font-bold 4xl:text-sm truncate">Дата рождения</h2>
                    <p className="text-basic 4xl:text-sm">16.12.2000</p>
                    <p className="text-base 4xl:text-sm">Авто - X355ВВ05</p>
                    <p className="text-base 4xl:text-sm">Lada Vesta</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section>
        <div className="flex w-full h-[30rem] 2xl:h-[26rem] my-4 3xl:my-2">
          <div className="flex w-full h-full 2xl:w-full md:hidden border-2 border-border rounded-3xl">
            <div className="w-[30%] 2xl:w-full h-full">

              <div className="w-full h-full 2xl:w-full border-r 2xl:border-r-0 border-border">
                <div className="h-[8%] pt-4">
                  <h1 className="text-2xl 4xl:text-xl pl-6 font-Exo2 font-extrabold leading-4 text-white">
                    Всего товаров на сумму
                  </h1>
                </div>
                <div className="pt-2 px-6 h-[66%] font-Exo2">
                  <div className="flex text-slate-300 mb-2 mt-2">
                    <p className="mr-4 text-mainBright text-base 4xl:text-sm">
                      Расчет всех позиций с прибавлением количества
                    </p>
                  </div>
                  <div className="h-[15.5rem] 2xl:h-[11rem]">
                    <ChartWeekStatistic />
                  </div>
                </div>
                <div className="border-t-[1px] border-border"></div>
                <div className="flex h-[26%] w-full justify-between 2xl:justify-start font-Exo2 px-6 3xl:px-2 2xl:px-4 pb-6 pt-8">
                  <div className="mr-4 2xl:mr-8">
                    <p className="text-sm 4xl:text-sm">Количество остатков всех позиций</p>
                    <p className="text-lg 4xl:text-base">100 Шт.</p>
                  </div>
                  <div className="">
                    <p className="text-base 4xl:text-sm font-bold truncate">Сумма остатков</p>
                    <span className="flex justify-around">
                      <p className="text-xl 4xl:text-lg 3xl:text-sm text-basic font-bold">1 000 000 ₽</p>
                      <img className="2xl:w-5 2xl:h-5" src={traidingIcon} alt="" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[70%] h-full 2xl:hidden">
              <div className="w-full h-full mr-2 2xl:border-2 2xl:border-border 2xl:rounded-3xl">
                <div className="h-[8%] pt-4 px-4">
                  <h1 className="text-2xl 4xl:text-xl pl-2 font-Exo2 font-extrabold leading-4 text-white">
                    Больше всего на складе
                  </h1>
                </div>
                <div className="pt-2 px-4 h-[95%] overflow-auto">

                    <table className="w-full text-base text-left font-Exo2 overflow-scroll">
                      <thead className="text-base text-white">
                        <tr className="px-4">
                          <th scope="col" className="font-normal pl-2 4xl:text-sm 2xl:pr-2 2xl:truncate">
                            Наименование товара
                          </th>
                          <th scope="col" className="font-normal flex items-center 4xl:text-sm 2xl:text-xs 2xl:pr-2">
                            Склад
                          </th>
                          <th scope="col" className="font-normal 4xl:text-sm 2xl:pr-2">
                            Количество
                          </th>
                          <th scope="col" className="font-normal 4xl:text-sm 2xl:pr-2">
                            Сумма
                          </th>
                          <th scope="col" className="font-normal 4xl:text-sm 2xl:pr-2">
                            Цена
                          </th>
                          <th scope="col" className="font-normal 4xl:text-sm 2xl:pr-2">
                            Хранение в день
                          </th>
                          <th scope="col" className="font-normal 4xl:text-sm 2xl:pr-2">
                            Комиссия категории
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
                           Москва
                          </td>
                          <td className="px-6 py-4 mt-4 4xl:px-2">
                            4000 шт
                          </td>
                          <td className="px-6 py-4 mt-4 4xl:px-2">
                            5000 руб
                          </td>
                          <td className="px-6 py-4 mt-4 4xl:px-2">
                            500 руб
                          </td>
                          <td className="px-6 py-4 mt-4 4xl:px-2">
                            400 все/руб
                          </td>
                          <td className="px-6 py-4 mt-4 4xl:px-2">
                            300 все/руб
                          </td>
                        </tr>
                        <tr className="bg-green-900">
                          <th scope="row" className="flex items-center font-medium mx-2 my-2 2xl:my-1 text-gray-900 whitespace-nowrap dark:text-white">
                            <img src={brandImage} alt="" className="w-[4.5rem] h-[4.5rem] object-cover transition-all rounded-md mr-2"/>
                            <p className="text-base 4xl:text-sm truncate">Короткое имя 2</p>
                          </th>
                          <td className="px-6 py-4 mt-4 4xl:px-2">
                            СПБ
                          </td>
                          <td className="px-6 py-4 mt-4 4xl:px-2">
                            5000 шт
                          </td>
                          <td className="px-6 py-4 mt-4 4xl:px-2">
                            6000 руб
                          </td>
                          <td className="px-6 py-4 mt-4 4xl:px-2">
                            600 руб
                          </td>
                          <td className="px-6 py-4 mt-4 4xl:px-2">
                            400 все/руб
                          </td>
                          <td className="px-6 py-4 mt-4 4xl:px-2">
                            300 все/руб
                          </td>
                        </tr>
                        <tr className="bg-transparent hover:bg-green-900">
                          <th scope="row" className="flex items-center font-medium mx-2 my-2 2xl:my-1 text-gray-900 whitespace-nowrap dark:text-white">
                            <img src={brandImage} alt="" className="w-[4.5rem] h-[4.5rem] object-cover transition-all rounded-md mr-2"/>
                            <p className="text-base 4xl:text-sm truncate">Длинное <br /> наименование <br /> товара 01</p>
                          </th>
                          <td className="px-6 py-4 mt-4 4xl:px-2 truncate">
                            Воронеж
                          </td>
                          <td className="px-6 py-4 mt-4 4xl:px-2">
                            3000 шт
                          </td>
                          <td className="px-6 py-4 mt-4 4xl:px-2">
                            3500 руб
                          </td>
                          <td className="px-6 py-4 mt-4 4xl:px-2">
                            500 руб
                          </td>
                          <td className="px-6 py-4 mt-4 4xl:px-2">
                            300 все/руб
                          </td>
                          <td className="px-6 py-4 mt-4 4xl:px-2">
                            300 все/руб
                          </td>
                        </tr>
                        <tr className="bg-transparent hover:bg-green-900">
                          <th scope="row" className="flex items-center font-medium mx-2 my-2 2xl:my-1 text-gray-900 whitespace-nowrap dark:text-white">
                            <img src={brandImage} alt="" className="w-[4.5rem] h-[4.5rem] object-cover transition-all rounded-md mr-2"/>
                            <p className="text-base 4xl:text-sm truncate">Длинное <br /> наименование <br /> товара 01</p>
                          </th>
                          <td className="px-6 py-4 mt-4 4xl:px-2 truncate">
                            Саратов
                          </td>
                          <td className="px-6 py-4 mt-4 4xl:px-2">
                            2000 шт
                          </td>
                          <td className="px-6 py-4 mt-4 4xl:px-2">
                            2000 руб
                          </td>
                          <td className="px-6 py-4 mt-4 4xl:px-2">
                            400 руб
                          </td>
                          <td className="px-6 py-4 mt-4 4xl:px-2">
                            500 все/руб
                          </td>
                          <td className="px-6 py-4 mt-4 4xl:px-2">
                            300 все/руб
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="flex justify-between text-zinc-500 h-[5%] px-4 3xl:px-2 2xl:px-6 pb-6 pt-4 2xl:pt-6 font-Exo2">
                      <p>Итого расходов в день: 7802 руб. В месяц 137 892</p>
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

export { Seller };
