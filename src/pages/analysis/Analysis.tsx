import { Route, Routes } from "react-router-dom";
import { AnalysisForm } from "./components/AnalysisForm";
import { Dashboard } from "./components/Dashboard";

export const Analysis = () => {
  return (
    <>
      <section className="flex flex-col w-full h-full md:hidden">
        <Routes>
          <Route path="/form" element={<AnalysisForm />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </section>
    </>
  );
};
