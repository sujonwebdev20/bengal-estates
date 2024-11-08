import { CgUnavailable } from "react-icons/cg";

const UnavailableData = ({ subject }) => {
  return (
    <div className="w-full mx-auto min-h-[50vh] flex justify-center items-center">
      <div className="w-[20rem] flex flex-col items-center justify-center py-8 px-4 text-center bg-dark_trans_purple rounded-lg shadow-md">
        <CgUnavailable className="w-12 h-12 dark:text-gray-400 text-gray-700" />
        <h3 className="text-xl font-medium mt-4 text-gray-700 dark:text-gray-200">
          {subject} are not available
        </h3>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Please try again later
        </p>
      </div>
    </div>
  );
};

export default UnavailableData;
