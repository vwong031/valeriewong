import React from "react"; 

export default function Button({ text }) { 
  return ( 
    <button 
      // Removed border utilities: 'border-2 border-black'
      // Added 'shadow-[0_0_24px_rgba(127,127,127,0.44)]' for the custom shadow
      // Added 'bg-white' or 'bg-[#F0F0F0]' to ensure the button has a background
      className="text-black bg-white hover:border-2 hover:border-hoverBlue hover:border-hoverBlue hover:shadow-button-glow rounded-3xl px-14 py-4 shadow-[0_0_24px_rgba(127,127,127,0.44)]"
    >
      {text}
    </button> 
  );
}
