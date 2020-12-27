import Image from "next/image";

export default function Avatar({ name, picture }) {
  return (
    <a href="https://morello.dev" rel="noopener" target="_blank">
      <div className="flex items-center space-x-4">
        {picture && (
          <div className="w-12 h-12 md:w-16 md:h-16">
            <Image
              src={picture.url}
              alt={name}
              className="rounded-full"
              layout="intrinsic"
              width={64}
              height={64}
              priority
            />
          </div>
        )}
        {name && <div className="font-bold md:text-xl">{name}</div>}
      </div>
    </a>
  );
}
