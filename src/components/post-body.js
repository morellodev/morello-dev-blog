// Styles
import postBodyStyles from "@/styles/components/post-body.module.css";

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={postBodyStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <style jsx>{`
        div :global(.remark-highlight) {
          border: 1px solid #dddddd;
          border-radius: 0.3em;
          margin: 0.5em 0;
          overflow: auto;
        }

        div :global(.remark-highlight pre[class*="language-"]) {
          margin: 0;
          overflow: initial;
          float: left;
          min-width: 100%;
        }

        div :global(.remark-highlight-code-line) {
          background-color: #feb;
          display: block;
          margin-right: -1em;
          margin-left: -1em;
          padding-right: 1em;
          padding-left: 0.75em;
          border-left: 0.25em solid #f99;
        }

        div :global(.remark-highlight pre[class*="language-"].line-numbers) {
          padding-left: 2.8em;
        }
      `}</style>
    </div>
  );
}
