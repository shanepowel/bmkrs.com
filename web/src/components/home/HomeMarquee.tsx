export function HomeMarquee({ items }: { items: string[] }) {
  const track = [...items, ...items];

  return (
    <div className="home-marquee" aria-hidden>
      <div className="home-marquee__track">
        {track.map((item, i) => (
          <span key={`${item}-${i}`} className="home-marquee__item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
