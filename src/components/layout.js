// Components
import Meta from "./meta";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">{children}</div>
    </>
  );
}
