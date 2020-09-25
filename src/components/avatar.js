export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center space-x-4">
      {picture && (
        <img
          src={picture.url}
          className="w-12 h-12 rounded-full md:w-16 md:h-16"
          alt={name}
        />
      )}
      {name && <div className="font-bold md:text-xl">{name}</div>}
    </div>
  );
}
