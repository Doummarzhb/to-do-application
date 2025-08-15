import React from "react";
import Header from "./header";
import type {LayoutProps} from '../types/task';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#23262C] font-poppins overflow-hidden ">
      <div className="bg-[#23262C] text-white w-full max-w-[1280px]  min-h-screen   rounded-[32px] overflow-hidden mb-8 ">
        
        <Header />
        
       
        <main className="pt-6 pb-4 px-4 flex-1">
            {/* pt-6 pb-4 pl-2 pr-2 flex-1" h-[812px] */}
            {children}
</main>
      </div>
    </div>
  );
};

export default Layout;
