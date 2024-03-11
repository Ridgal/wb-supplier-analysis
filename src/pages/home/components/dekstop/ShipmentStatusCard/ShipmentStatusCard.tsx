import { ChartShipmentStatus } from "./ChartShipmentCard";

const ShipmentStatusCard = () => {
  return (
    <div className="w-full h-full md:hidden border-2 border-border rounded-2xl bg-backgroundCards">
      <div className="px-6 h-[25%] pt-10">
        <h1 className="text-lg 4xl:text-base mb-2 font-Lato font-medium truncate leading-4 text-white">
          Товаров в пути
        </h1>
        <p className="font-Lato">637 шт</p>
      </div>
      <div className="pt-2 pb-4 px-6 h-[75%] font-Lato">
        <ChartShipmentStatus />
      </div>
    </div>
  );
};

export { ShipmentStatusCard };
