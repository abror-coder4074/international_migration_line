import React from "react";
import { Globe } from "lucide-react";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-r from-blue-700 to-cyan-500 flex flex-col items-center justify-center text-white z-[9999]">
      <Globe className="animate-spin-slow w-12 h-12 mb-4" />
      <h1 className="text-2xl font-semibold tracking-wide">
        International Migration Line
      </h1>
    </div>
  );
};

export default Loader;
