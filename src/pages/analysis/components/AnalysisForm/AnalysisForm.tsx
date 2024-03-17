import RectangleFive from '../../../../assets/pages/home/TopOrdered//RectangleFive.svg';

const AnalysisForm = () => {
  return (
    <section className="min-h-full mt-[10%] sm:min-h-0 flex flex-col justify-center sm:flex-none">
      <div className="min-h-full sm:mt-20">
        <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 pt-0 pb-12 sm:pt-0 lg:pt-0 lg:pb-4 lg:px-4">
          <div className="w-[40rem] sm:mx-auto sm:w-full text-center">
            <h2 className="mt-10 text-center sm:text-start text-xl font-semibold tracking-wide font-Benzim-medium leading-9">
              Введите артикул
            </h2>
            <h4 className="font-Exo2 text-sm sm:text-start tracking-wider text-zinc-400 mt-2">
              Введите артикул товара, который хотите найти для просмотра подробной информации
            </h4>
          </div>
          <div className="w-[40rem] mt-4 sm:mt-8 sm:mx-auto sm:w-full">
            <form className="space-y-4" action="#" method="POST">
              <div className="mt-2 relative">
                <input
                  id="login"
                  type="text"
                  placeholder="Артикул"
                  required
                  className="block w-full h-16 placeholder:font-semibold text-center font-Exo2 placeholder:text-zinc-300 rounded-xl border-0 px-2.5 py-5 shadow-sm bg-neutral-800 outline-0 text-xl sm:leading-6"
                />
              </div>
            </form>
            <button className="flex items-center h-16 rounded-xl py-2 px-2.5 mt-4 w-full bg-bg_icon">
              <img
                className="mr-4 w-16 h-12"
                src={RectangleFive}
                alt="telegramIcon"
              />
              <div className="text-left">
                <p className="font-extralight font-Benzim-bold text-xl text-white">
                  Название товара
                </p>
              </div>
            </button>
            <div className="w-full mt-4 text-xs text-zinc-400 font-Benzim-medium leading-tight text-center">
              <p>Продолжая, вы подтверждаете, что ознакомились с <span className="underline">политикой конфиденцальности</span> и <span className="underline">публичной офертой</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { AnalysisForm };
