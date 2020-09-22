import { Image } from "react-datocms";
import Link from "next/link";
import cn from "classnames";

export default function CoverImage({ responsiveImage, slug, title }) {
  const image = (
    <Image
      data={responsiveImage}
      className={cn("shadow-sm", {
        "hover:shadow-md transition-shadow duration-200": slug,
      })}
    />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
