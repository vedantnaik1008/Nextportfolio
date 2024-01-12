import { BiSolidUpArrow } from "react-icons/bi";

type Props={
    handleClick: () => void;
}

const GoTopBtn = ({ handleClick }: Props) => {
  return (
      <button
          onClick={handleClick}
          className='p-4 border-[#5a5a5a] border-[2px] text-white bg-[#181818]  rounded-md  fixed right-2 bottom-10 z-40 hover:opacity-70 transition-all duration-100'>
          <BiSolidUpArrow />
      </button>
  );
}

export default GoTopBtn
