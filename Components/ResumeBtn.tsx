import Link from "next/link";


const ResumeBtn = () => {
  return (
      <Link
          href='https://docs.google.com/document/d/19gKFPh6k6hPzpGovBxzPtXC9Axlyi7t8wPgsHQSdrnk/edit?usp=sharing'>
          <button className='btn-tweet hover:scale-105 bg-[#FFFFFF] shadow-[inset_0_-4px_0_0_rgba(0,0,0,.25)]  btn-lg  transition-all duration-300 ease-out'>
              Resume
          </button>
      </Link>
  );
}

export default ResumeBtn
