import React, { useRef, useEffect } from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  onInView: (id: string) => void;
  threshold?: number | number[];
}

const Section: React.FC<SectionProps> = ({ id, children, onInView, threshold = 0.5 }) => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onInView(id);
        }
      },
      { threshold }
    );

    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      // observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        // observer.unobserve(currentSectionRef);
      }
    };
  }, [id, onInView, threshold]);

  return (
    <section ref={sectionRef} id={id}>
      {children}
    </section>
  );
};

export default Section;
