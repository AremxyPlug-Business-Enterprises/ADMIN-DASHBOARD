
export function Button({ children, onClick }) {
    return (
      <button
        onClick={onClick}
        className="bg-[#04177F] transition-all duration-300 hover:bg-[#04167fe8] text-[15px] lg:text-[1.3rem] md:text-[0.77rem] leading-[1.40625rem] lg:leading-[1.99rem] md:leading-[1.155rem] text-white w-[19.3125rem] h-[3.125rem] lg:w-[13.51rem] md:w-[7.825rem] lg:h-[3.661rem] md:h-[2.0875rem] py-[0.8325rem] lg:py-[0.83rem] md:py-[0.48rem] px-[1.664375rem] lg:px-[1.66rem] md:px-[0.9625rem] rounded-[0.3125rem] lg:rounded-[0.95rem] md:rounded-[0.5775rem] font-medium cursor-pointer .poppins"
      >
        {children}
      </button>
    );
}
  
export function StatusButton({ children, bgColor }) {
  return (
    <button
      style={{ backgroundColor: bgColor }}
      className=".poppins w-[6.625rem] h-[1.39rem] lg:w-[11.25rem] lg:h-[2.3rem] md:w-[6.5151625rem] md:h-[1.329rem] text-white rounded-[0.1325rem] lg:rounded-[0.3125rem] md:rounded-[0.18125rem] py-[0.1325rem] md:py-[0.289375rem] px-[0.265rem] md:px-[0.361875rem] cursor-pointer font-medium lg:text-base md:text-[0.7rem] items-center justify-center flex"
    >
      {children}
    </button>
  );
}

// py-[0.5rem] px-[1.5rem]