import { parseISO, format } from "date-fns";

export default function Date({ dateString, pubdate }) {
  const date = parseISO(dateString);

  return (
    <time
      className="text-gray-600"
      dateTime={dateString}
      pubdate={pubdate ? "pubdate" : undefined}
    >
      {format(date, "LLLL	d, yyyy")}
    </time>
  );
}
