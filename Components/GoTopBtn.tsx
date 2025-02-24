
type Props={
    handleClick: () => void;
}

const GoTopBtn = ({ handleClick }: Props) => {
  return (
      <button
          onClick={handleClick}
          className='p-4 border-[#5a5a5a] border-[2px] text-white bg-[#181818]  rounded-md  fixed right-2 bottom-10 z-40 hover:opacity-70 transition-all duration-100'>
          <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 24 24'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z'></path>
          </svg>
      </button>
  );
}

export default GoTopBtn