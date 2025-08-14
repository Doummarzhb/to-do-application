import React from "react";

const Header: React.FC = () => {
  return (
    <div
      className="
      max-w-[1120px] h-[54px]
        mx-auto
        px-4
      "
    >
        
    {/* flex flex-col justify-between */}
      {/* <div className="flex flex-col"> */}
      {/* <div className="flex flex-col"> */}
        <h1
          className="
            text-[#F4F6FA]
            font-bold text-[24px] leading-[36px] tracking-[0]
            w-[260px] h-[36px]
          "
        >
          TO DO APP
        </h1>
        <p
          className="
            text-[#F4F6FA]
            font-normal text-[12px] leading-[18px] tracking-[0]
            w-[260px] h-[18px]
            opacity-50
          "
        >
          Stop Procrastinating , Start Organizing
        </p>
      {/* </div> */}


      <div className="w-[1120px] h-0 border border-[#F4F6FA] opacity-10" />
      
    </div>
  );
};

export default Header;
