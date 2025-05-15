export const setupScrollAnimation = (): void => {
  const revealElements = document.querySelectorAll('.reveal');
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    },
    {
      root: null,
      threshold: 0.1,
    }
  );
  
  revealElements.forEach((el) => observer.observe(el));
};

export const setupHeaderScroll = (): void => {
  const header = document.querySelector('.sticky-header');
  
  if (!header) return;
  
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  
  // Clean up
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};