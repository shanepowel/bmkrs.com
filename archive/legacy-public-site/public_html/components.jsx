const { useState } = React;
const { Motion, spring, presets } = ReactMotion;

function FadeInSection({ children }) {
  return <div className="fade-in-section">{children}</div>;
}

function HamburgerButton() {
  const [toggle, setToggle] = useState(false);
  const style = {
    overflow: "visible",
    cursor: "pointer",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
  };

  return (
    <svg
      viewBox="0 0 96 96"
      height="1.6em"
      onClick={() => setToggle(!toggle)}
      style={style}
    >
      <Motion
        style={{
          x: spring(toggle ? 1 : 0, presets.wobbly),
          y: spring(toggle ? 0 : 1, presets.wobbly),
        }}
      >
        {({ x, y }) => (
          <g
            id="navicon"
            fill="none"
            stroke="currentColor"
            strokeWidth="14"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line
              transform={`translate(${x * 12}, ${x * -7}) rotate(${
                x * 45
              }, 7, 26)`}
              x1="7"
              y1="26"
              x2="89"
              y2="26"
            />
            <line
              transform={`translate(${x * 12}, ${x * 7}) rotate(${
                x * -45
              }, 7, 70)`}
              x1="7"
              y1="70"
              x2="89"
              y2="70"
            />
            <line
              transform={`translate(${x * -96})`}
              opacity={y}
              x1="7"
              y1="48"
              x2="89"
              y2="48"
            />
          </g>
        )}
      </Motion>
    </svg>
  );
}

function getRootElement() {
  let root = document.getElementById("root");
  if (!root) {
    root = document.createElement("div");
    root.id = "root";
    document.body.prepend(root);
  }

  const children = Array.from(document.body.children);
  children.forEach((node) => {
    if (node !== root && node.tagName !== "SCRIPT") {
      node.remove();
    }
  });

  return root;
}

window.BmkrsComponents = {
  FadeInSection,
  HamburgerButton,
  getRootElement,
};
