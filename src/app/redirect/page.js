import Button from "../components/Button";
import Link from "next/link";

export default function Redirect() {
  return (
    <div className="h-screen gap-y-5 flex flex-col justify-center items-center">
      <div>
        Image
      </div>
      <div className="flex flex-col items-center">
        <div>
          Oops!
        </div>
        <div>
          You clicked the wrong button!
        </div>
      </div>
      <Link href="/homepage">
        <Button text={"BACK"} />
      </Link>
    </div>
  );
}
