import Link from "next/link";

// Components
import Logo from "./logo";

export default function Header() {
  return (
    <div className="mt-8 mb-20">
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
    </div>
  );
}
