"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up";
  delay?: number;
  duration?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.8,
  className = "",
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    let isMounted = true;

    // Dynamically attempt GSAP if available, or fall back to high-performance IntersectionObserver
    const runAnimation = async () => {
      try {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        if (!isMounted || !el) return;

        let initialY = 0;
        let initialX = 0;
        let initialScale = 1;

        switch (animation) {
          case "fade-up":
            initialY = 40;
            break;
          case "slide-left":
            initialX = 50;
            break;
          case "slide-right":
            initialX = -50;
            break;
          case "scale-up":
            initialScale = 0.92;
            break;
          case "fade-in":
          default:
            break;
        }

        const ctx = gsap.context(() => {
          gsap.fromTo(
            el,
            {
              opacity: 0,
              y: initialY,
              x: initialX,
              scale: initialScale,
            },
            {
              opacity: 1,
              y: 0,
              x: 0,
              scale: 1,
              duration,
              delay,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
        }, el);

        return () => ctx.revert();
      } catch {
        // Fallback using IntersectionObserver if GSAP is resolving or offline
        if (!el) return;
        el.style.transition = `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`;
        el.style.opacity = "0";

        if (animation === "fade-up") el.style.transform = "translateY(30px)";
        else if (animation === "slide-left") el.style.transform = "translateX(30px)";
        else if (animation === "slide-right") el.style.transform = "translateX(-30px)";
        else if (animation === "scale-up") el.style.transform = "scale(0.94)";

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                el.style.opacity = "1";
                el.style.transform = "none";
                observer.unobserve(el);
              }
            });
          },
          { threshold: 0.15 }
        );

        observer.observe(el);
        return () => observer.disconnect();
      }
    };

    const cleanupPromise = runAnimation();

    return () => {
      isMounted = false;
      cleanupPromise.then((cleanup) => cleanup && cleanup());
    };
  }, [animation, delay, duration]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
