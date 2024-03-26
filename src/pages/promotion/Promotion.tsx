import { LineChart } from "../../components/generics/LineChart";

const Promotion = () => {
  return (
    <div>
      Promotion
      <div className="w-[20rem] h-[20rem] ml-36 mt-24 border border-border">
        <LineChart
          data={[10, 20, 30, 40, 50]}
          labels={["1", "2", "3", "4", "5"]}
          borderDash={[10, 5]}
        />
      </div>
    </div>
  );
};

export { Promotion };
