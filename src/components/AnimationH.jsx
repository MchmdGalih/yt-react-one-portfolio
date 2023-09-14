import React from "react";
import Typed from "typed.js";

export const Animation = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["I am a Frontend Developer"],
      typeSpeed: 100,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <h2 className="text-3xl sm:text-5xl font-bold text-white">
      <span ref={el} />
    </h2>
  );
};
