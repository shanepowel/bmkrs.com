import Image from "next/image";
import Link from "next/link";
import { getShowcaseProjects } from "@/lib/content";

const disciplines = [
  { n: "01", title: "Strategy & direction", body: "Find the opportunity. Make the hard decisions. Give the next move a clear reason." },
  { n: "02", title: "Brand & experience", body: "Build a recognisable point of view and make every interaction feel considered." },
  { n: "03", title: "Digital products & AI", body: "Turn useful ideas into websites, platforms and intelligent tools people want to use." },
  { n: "04", title: "Technology & growth", body: "Connect the moving parts, improve what exists and keep making progress after launch." },
];

export default async function HomePage() {
  const projects = await getShowcaseProjects(4);
  const work = projects.slice(0, 4);

  return (
    <main className="hybrid-home">
      <section className="hybrid-hero">
        <div className="hybrid-hero__topline"><span>INDEPENDENT DIGITAL PRODUCT STUDIO</span><span>STRATEGY / DESIGN / TECHNOLOGY / AI</span></div>
        <div className="hybrid-hero__grid">
          <div className="hybrid-hero__copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> GOOD IDEAS, MADE REAL</p>
            <h1>Good ideas deserve better than a <em>slide deck.</em></h1>
            <div className="hybrid-hero__bottom">
              <p>We bring strategy, design and technology together to turn ambitious ideas into things that work in the real world.</p>
ֻǱ˞