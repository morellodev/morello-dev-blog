import Link from "next/link";

// Components
import CoverImage from "./cover-image";
import Date from "./date";

export default function HeroPost({ title, coverImage, date, slug, excerpt }) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage
          responsiveImage={coverImage.responsiveImage}
          title={title}
          slug={slug}
        />
      </div>
      <div className="mb-20 md:mb-24">
        <h3 className="mb-4 text-4xl leading-tight lg:text-6xl">
          <Link href={`/posts/${slug}`}>
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>
        <div className="mb-4 text-lg">
          <Date dateString={date} />
        </div>
        <p className="text-xl leading-tight">{excerpt}</p>
      </div>
    </section>
  );
}
