import { parseISO, format } from "date-fns";

export default function Date({ dateString, pubdate }) {
  const date = parseISO(dateString);

  return (
    <time dateTime={dateString} pubdate={pubdate ? "pubdate" : undefined}>
      {format(date, "LLLL	d, yyyy")}
    </time>
  );
}
