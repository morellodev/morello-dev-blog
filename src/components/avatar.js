import cn from "classnames";

export const AvatarSize = {
  SMALL: "sm",
  MEDIUM: "md",
  LARGE: "lg",
};

export default function Avatar({ name, picture, size = AvatarSize.MEDIUM }) {
  return (
    <div className="flex items-center space-x-4">
      {picture && (
        <img
          src={picture.url}
          className={cn("rounded-full", {
            "w-8 h-8": size === AvatarSize.SMALL,
            "w-12 h-12": size === AvatarSize.MEDIUM,
            "w-16 h-16": size === AvatarSize.LARGE,
          })}
          alt={name}
        />
      )}
      {name && <div className="text-xl font-bold">{name}</div>}
    </div>
  );
}
