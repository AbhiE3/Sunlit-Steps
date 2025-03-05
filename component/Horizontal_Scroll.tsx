"use client"; // Mark this as a Client Component

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ReviewBlock from "./ui/reviews";

const HorizontalScroll: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current) return;

    const scrollerContent = scrollerRef.current;
    const totalWidth = scrollerContent.scrollWidth / 2;

    const tl = gsap.timeline({ repeat: -1 });

    tl.to(scrollerContent, {
      x: -totalWidth,
      duration: 20,
      ease: "none",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center mt-6">Reviews</h2>

      <div
        ref={scrollerRef}
        style={{
          display: "flex",
          width: "200%",
          gap: "10px",
        }}
      >
        {[...Array(2)].map((_, i) => (
          <React.Fragment key={i}>
            <div style={{ width: "50%", padding: "20px",margin: "10px", borderRadius: "10px"}}>
              <ReviewBlock />
            </div>
            <div
              style={{
                width: "50%",
                padding: "20px",
                margin: "10px", 
                borderRadius: "10px", 
              }}
            >
              <ReviewBlock />
            </div>
            <div
              style={{
                width: "50%",
                padding: "20px",
                margin: "10px",
                borderRadius: "10px",
              }}
            >
              <ReviewBlock />
            </div>
            <div
              style={{
                width: "50%",
                padding: "20px",
                margin: "10px",
                borderRadius: "10px",
              }}
            >
              <ReviewBlock />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
