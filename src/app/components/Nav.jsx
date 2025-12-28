import Button from "./Button";

export default function Nav() {
  return (
    <div className="flex items-center justify-between bg-skyBlue px-8 py-6 text-white">
      <div className="bg-black">VKW</div>
      <div className="mx-auto w-1/3 rounded-3xl border border-2 bg-black">
        Home About Work Projects Fun
      </div>
      <Button text="Contact Me"></Button>
    </div>
  );
}
