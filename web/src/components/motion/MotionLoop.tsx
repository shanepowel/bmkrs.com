export function MotionLoop() {
  return (
    <figure className="motion-loop" aria-labelledby="motion-loop-caption">
      <div className="motion-loop__diagram" aria-hidden="true">
        <div className="motion-loop__orbit" />
        <div className="motion-loop__core">
          <span>in</span>
          <strong>production</strong>
        </div>
        <span className="motion-loop__label motion-loop__label--top">observe</span>
        <span className="motion-loop__label motion-loop__label--right">prioritise</span>
        <span className="motion-loop__label motion-loop__label--bottom">ship</span>
        <span className="motion-loop__label motion-loop__label--left">learn</span>
      </div>
      <figcaption id="motion-loop-caption" className="motion-loop__caption">
        a continuous cycle of improvement around the live product.
      </figcaption>
    </figure>
  );
}
