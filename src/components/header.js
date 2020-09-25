import Link from "next/link";

// Components
import Avatar from "./avatar";
import Logo from "./logo";

export default function Header({ author }) {
  return (
    <header className="flex items-center justify-between h-16 mt-12 md:mt-16">
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      {author && <Avatar picture={author.avatar} />}
    </header>
  );
}
