import Button from "./Button";
import Link from "next/link";

export default function Redirect() {
  return (
    <div>
      <div>
        Image
      </div>
      <div>
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
