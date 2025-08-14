import React from "react";
import Header from "./header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#23262C] font-poppins">
      <div className="bg-[#23262C] text-white w-[1280px] h-[812px] rounded-[32px] overflow-hidden">
        
        <Header />
        
       
        <main className="pt-6 pb-4 pl-2 pr-2 flex-1">
            
  {children}
</main>
      </div>
    </div>
  );
};

export default Layout;
