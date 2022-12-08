import { useState, useRef, useEffect } from 'react';

type FetchNextPage = () => Promise<void>;

/**
 * Add infinite scroll using the IntersectionObserver api.
 *
 * @param   fetchNextPage  Function to be called when reaching the last element during scroll.
 * @returns Ref value. Add this as ref for every list item.
 */
const useScrollIntersect = (
  fetchNextPage: FetchNextPage
): React.Dispatch<React.SetStateAction<HTMLElement>> => {
  const [lastElementRef, setlastElementRef] = useState<HTMLElement>(null);

  // infinite scroll observer
  const observer = useRef<IntersectionObserver>(
    new IntersectionObserver(async (entries: IntersectionObserverEntry[]) => {
      const first = entries[0];
      if (first.isIntersecting) {
        await fetchNextPage();
      }
    })
  );

  useEffect(() => {
    const currentElement = lastElementRef;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElementRef]);

  return setlastElementRef;
};

export {useScrollIntersect}
export default useScrollIntersect
