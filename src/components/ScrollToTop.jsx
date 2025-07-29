import { useEffect } from "react";

const ScrollToTop = ({ router }) => {
  useEffect(() => {
    const unsubscribe = router.subscribe(() => {
      window.scrollTo(0, 0);
    });

    return () => {
      unsubscribe(); // Cleanup on unmount
    };
  }, [router]);

  return null;
};

export default ScrollToTop;
