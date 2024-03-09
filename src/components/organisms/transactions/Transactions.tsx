
import GrowIcon from "../../icons/grow-icon/GrowIcon";
import Hr from "../../atoms/hr/Hr";
import Line from "../../atoms/line/Line";

const Transactions = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <p className="min-w-[201px] text-base font-semibold">
          Latest transactions
        </p>
        <div className="flex items-center gap-2">
          <p className="h-5 w-5 rounded-full bg-blue-light text-paragraph">$</p>
          <p className="text-secondary">+8,6%</p>
          <GrowIcon />
        </div>
      </div>
      <Hr />
      <Line />
      <Hr />
      <Line />
      <Hr />
      <Line />
    </div>
  );
};

export default Transactions;
