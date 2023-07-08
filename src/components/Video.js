import React from "react";

export default function Video({src}) {
  return (
    <div>
      <iframe
        width="919"
        height="525"
        src={src}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
    </div>
  );
}
