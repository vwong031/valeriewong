import React from "react"; 

export default function Button({ text }) { 
  return ( 
    <button 
      className="text-black bg-white rounded-3xl px-14 py-4 
                 shadow-[0_0_24px_rgba(127,127,127,0.44)] 
                 hover:border-hoverBlue     
                 hover:shadow-button-glow
                 transition-all"             
    >
      {text}
    </button> 
  );
}
