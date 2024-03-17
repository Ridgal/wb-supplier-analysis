import { Route, Routes } from "react-router-dom";
import { Header } from "../../widgets/header/Header";
import { Sidebar } from "../../widgets/sidebar/Sidebar";
import { AnalysisForm } from "./components/AnalysisForm/AnalysisForm";
import { Dashboard } from "./components/Dashboard";

export const Analysis = () => {
  return (
    <div className="container 2xl:px-8 xl:px-6 md:px-4">
      <section>
        <Header />
      </section>
      <div className="flex">
        <section className="w-[10%] lg:w-0 h-full md:mt-0 md:w-0">
          <Sidebar />
        </section>
        <section className="flex flex-col w-[90%] h-full mt-4 xl:w-[88%] lg:w-[87%] xl:ml-12 lg:ml-28 md:hidden">
          <Routes>
            <Route path="/form" element={<AnalysisForm />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
          </Routes>
        </section>
      </div>
    </div>
  );
};
