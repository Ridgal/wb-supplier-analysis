import { Link, Route, Routes } from "react-router-dom";
import image from '../../../assets/general/images/image.png';
import { Positions } from "./Positions/Positions";
import { Products } from "./Products/Products";
import { Seller } from "./Seller/Seller";

const Dashboard = () => {
  return (
    <section className="w-full">
      <div className="w-full h-64">
        <h1 className="text-xl font-Benzim-medium font-medium text-white">
          Анализ
        </h1>
        <div className="flex mt-4">
          <div>
            <img className="w-72 h-44 rounded-2xl mb-2" src={image} alt=""/>
            <p>
              <span className="text-zinc-400">Категория:</span> Детские товары
            </p>
          </div>
          <div className="ml-4">
            <p className="text-xl font-Benzim-medium font-medium text-white mb-4">Приставка Xbox One 360</p>
            <p className="font-Exo2">Бренд: Microsoft</p>
            <p className="font-Exo2">Арт: 128341734</p>
          </div>
        </div>
      </div>
      <nav className="mt-6">
        <ul className="flex items-center gap-10">
          <li><Link className="text-lg font-Benzim-medium hover:underline underline-offset-8 transition-colors 2xl:text-base" to="product">О товаре</Link></li>
          <li><Link className="text-lg font-Benzim-medium hover:underline underline-offset-8 transition-colors 2xl:text-base xl:text-sm" to="seller">О продавце</Link></li>
          <li><Link className="text-lg font-Benzim-medium hover:underline underline-offset-8 transition-colors 2xl:text-base xl:text-sm" to="positions">Позиции</Link></li>
          <li><Link className="text-lg font-Benzim-medium hover:underline underline-offset-8 transition-colors 2xl:text-base xl:text-sm" to="store">Склады</Link></li>
          </ul>
      </nav>
      <Routes>
        <Route path="/product" element={<Products />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/positions" element={<Positions />} />
      </Routes>
    </section>
  );
};

export { Dashboard };
