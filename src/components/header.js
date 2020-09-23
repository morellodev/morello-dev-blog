import Link from "next/link";

// Components
import Avatar, { AvatarSize } from "./avatar";
import Logo from "./logo";

export default function Header({ author }) {
  return (
    <header className="flex items-center justify-between h-16 mt-16 mb-12">
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      {author && <Avatar picture={author.avatar} size={AvatarSize.LARGE} />}
    </header>
  );
}
