// Components
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import Date from "./date";
import PostTitle from "./post-title";

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.avatar} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage
          title={title}
          responsiveImage={coverImage.responsiveImage}
        />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block mb-6 md:hidden">
          <Avatar name={author.name} picture={author.avatar} />
        </div>
        <div className="mb-6 text-lg">
          <Date dateString={date} pubdate />
        </div>
      </div>
    </>
  );
}
