
export function Button({ children, onClick }) {
    return (
      <button
        onClick={onClick}
        className="bg-[#04177F] text-[0.9375rem] lg:text-[1.3rem] md:text-[0.77rem] leading-[1.40625rem] lg:leading-[1.99rem] md:leading-[1.155rem] text-white w-40 lg:w-[13.51rem] md:w-[7.825rem] h-[2.62875rem] lg:h-[3.661rem] md:h-[2.0875rem] py-[0.595625rem] lg:py-[0.83rem] md:py-[0.48rem] px-[1.094375rem] lg:px-[1.66rem] md:px-[0.9625rem] rounded-[0.47625rem] lg:rounded-[0.95rem] md:rounded-[0.5775rem] font-medium cursor-pointer poppins"
      >
        {children}
      </button>
    );
}
  
export function StatusButton({ children, bgColor }) {
  return (
    <button
      style={{ backgroundColor: bgColor }}
      className="poppins lg:w-[11.25rem] lg:h-[2.3rem] md:w-[6.5151625rem] md:h-[1.329rem] text-white lg:rounded-[0.3125rem] md:rounded-[0.18125rem] md:py-[0.289375rem] md:px-[0.361875rem] cursor-pointer font-medium lg:text-base md:text-[0.7rem] items-center justify-center flex"
    >
      {children}
    </button>
  );
}

// py-[0.5rem] px-[1.5rem]