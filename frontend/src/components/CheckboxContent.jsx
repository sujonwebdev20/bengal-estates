import { FaCheck } from "react-icons/fa";

const CheckboxContent = ({ featuresName }) => {
  return (
    <label className="flex gap-6 items-center relative">
      <input
        type="checkbox"
        className="appearance-none w-3 h-3 bg-light_purple inline-block rounded-sm p-[.6rem]"
      />
      <FaCheck className="w-4 h-4 absolute left-[.10rem] text-dark_trans_purple" />
      <span>{featuresName}</span>
    </label>
  );
};

export default CheckboxContent;
