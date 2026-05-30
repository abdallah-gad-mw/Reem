import { useEffect } from "react";

export function useSvgDrawingAnimation() {
  useEffect(() => {
    // Select path and geometry tags to draw lines dynamically
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const svg = entry.target as SVGElement;
          const paths = svg.querySelectorAll("path, circle, rect, line, polyline, polygon");
          
          paths.forEach((path: any) => {
            let length = 0;
            try {
              if (typeof path.getTotalLength === "function") {
                length = path.getTotalLength();
              } else {
                length = 150; // default backup length
              }
            } catch (e) {
              length = 150;
            }
            
            if (length === 0) length = 150;
            
            // Apply line-drawing stroke states
            path.style.transition = "none";
            path.style.strokeDasharray = `${length}`;
            path.style.strokeDashoffset = `${length}`;
            
            // Force redraw layout
            path.getBoundingClientRect();
            
            // Animate stroke and fill trigger
            path.style.transition = "stroke-dashoffset 1.3s cubic-bezier(0.4, 0, 0.2, 1), fill 0.8s ease-out";
            path.style.strokeDashoffset = "0";
          });
          
          // Keep active transitions smooth, but don't repeat infinitely
          observer.unobserve(svg);
        }
      });
    }, { threshold: 0.05, rootMargin: "0px 0px -50px 0px" });

    const grabAndObserveSvgs = () => {
      // Observe normal Lucide SVGs (skip our dedicated premium gigantic wordmarks)
      const svgs = document.querySelectorAll("svg:not(.gigantic-wordmark-svg)");
      svgs.forEach((svg) => {
        if (!svg.classList.contains("svg-observed")) {
          svg.classList.add("svg-observed");
          observer.observe(svg);
        }
      });
    };

    // Initial check
    grabAndObserveSvgs();

    // Check periodically for newly mounted SVGs (like modal popups and slider shifts)
    const interval = setInterval(grabAndObserveSvgs, 800);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);
}
