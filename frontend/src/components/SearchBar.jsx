import Container from "./Container";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  return (
    <>
      <Container>
        <div className="w-[60%] max-sm:w-full h-[3rem] flex items-center rounded-[30px] my-4 relative overflow-hidden">
          <input
            className="w-full h-full px-10 border-[6px] border-dark_trans_purple bg-inp_purple outline-none text-white font-inter font-extralight text-lg rounded-[30px] placeholder:text-gray-300"
            type="text"
            placeholder="Find the place you are looking for....."
          />
          <div className="bg-medium_dark_purple absolute right-[.5rem] flex justify-center items-center rounded-[30px] cursor-pointer">
            <IoSearchOutline className="w-12 h-8 text-light_purple" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default SearchBar;
