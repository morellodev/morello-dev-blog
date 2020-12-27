import Link from "next/link";

// Components
import CoverImage from "./cover-image";
import Date from "./date";

export default function HeroPost({ title, coverImage, date, slug, excerpt }) {
  return (
    <section>
      <div className="mt-12 mb-8 md:mt-24 md:mb-16">
        <CoverImage
          responsiveImage={coverImage.responsiveImage}
          title={title}
          slug={slug}
        />
      </div>
      <div className="mb-20 md:mb-24">
        <h3 className="mb-4 text-4xl font-bold leading-tight lg:text-6xl">
          <Link href={`/${slug}`}>
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>
        <div className="mb-4 text-lg">
          <Date dateString={date} />
        </div>
        <p className="text-lg md:text-xl">{excerpt}</p>
      </div>
    </section>
  );
}
