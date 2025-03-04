"use client"; // Mark this as a Client Component

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ReviewBlock from "./ui/reviews";

const HorizontalScroll: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current) return;

    // Calculate the total width of the scroller content
    const scrollerContent = scrollerRef.current;
    const totalWidth = scrollerContent.scrollWidth / 2; // Since we duplicated the content

    // GSAP animation for infinite horizontal scroll
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(scrollerContent, {
      x: -totalWidth,
      duration: 20,
      ease: "none",
    });

    // Cleanup animation on component unmount
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <div
        ref={scrollerRef}
        style={{
          display: "flex",
          width: "200%",
        }}
      >
        {/* Duplicate content for seamless looping */}
        {[...Array(2)].map((_, i) => (
          <React.Fragment key={i}>
            <div style={{ width: "50%", padding: "20px" }}>
              <ReviewBlock/>
            </div>
            <div style={{ width: "50%", background: "lightcoral", padding: "20px" }}>
            <ReviewBlock/>
            </div>
            <div style={{ width: "50%", background: "lightgreen", padding: "20px" }}>
            <ReviewBlock/>
            </div>
            <div style={{ width: "50%", background: "lightyellow", padding: "20px" }}>
            <ReviewBlock/>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;