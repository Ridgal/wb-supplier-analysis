import { BarChart } from "../../../../components/generics/BarChart";

const ProductTopCard = () => {
  return (
    <div className="w-full h-full md:hidden border-2 border-border rounded-2xl bg-backgroundCards">
      <div className="w-full px-6 h-[25%] pt-10">
        <h1 className="text-lg 4xl:text-base mb-2 font-Lato font-medium truncate leading-4 text-white">
          Стул из стекла оптоволоконный
        </h1>
        <p className="text-xs text-gray-500 font-Lato">Лучший товар</p>
      </div>
      <div className="w-full pt-2 pb-4 px-6 h-[75%] font-Lato">
        <BarChart
          data={[1, 5, 7, 3, 2, 4, 6]}
          labels={['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']}
        />
      </div>
    </div>
  );
};

export { ProductTopCard };
