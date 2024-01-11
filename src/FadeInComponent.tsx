import React, { useEffect, useRef } from 'react';

interface FadeInElementProps {
  children: React.ReactNode;
}

const FadeInElement: React.FC<FadeInElementProps> = ({ children }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          elementRef.current?.classList.add('visible');
        } else {
          elementRef.current?.classList.remove('visible');
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return <div ref={elementRef} className="fade-in">{children}</div>;
};

// Use FadeInElement in your components like this:
// <FadeInElement>
//   ... Your component content ...
// </FadeInElement>

export default FadeInElement;
