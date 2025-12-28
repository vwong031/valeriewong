import ColorButton from "./ColorButton";

export default function Nav() {
  return (
    <div className="flex items-center justify-between px-8 py-6 text-2xl text-white">
      <div className="bg-palmLeaf">VKW</div>
      <div className="bg-antiqueWhite border-antiqueWhite mx-auto w-1/3 rounded-3xl border border-2 text-black">
        <button className="w-1/5">Home</button>
        <button className="w-1/5">About</button>
        <button className="w-1/5">Work</button>
        <button className="w-1/5">Projects</button>
        <button className="w-1/5">Fun</button>
      </div>
      <div>
        <ColorButton text="Contact Me"></ColorButton>
      </div>
    </div>
  );
}
