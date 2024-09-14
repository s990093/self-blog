"use client";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

const pictures = Array.from({ length: 15 }, (_, i) => `${String(i + 1)}`);

export const pageAtom = atom(0);
export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

export const UI = () => {
  const [page] = useAtom(pageAtom);

  const prevPageRef = useRef<number | null>(null); // Adjust type if `page` is not a number

  useEffect(() => {
    // Check if the current page is different from the previous page
    if (prevPageRef.current !== null && prevPageRef.current !== page) {
      const audio = new Audio("/audios/page-flip-01a.mp3");
      audio.play();
    }

    // Update the ref with the current page value
    prevPageRef.current = page;
  }, [page]);

  return (
    <>
      {/* <div className="pointer-events-none select-none z-10 absolute  inset-0 flex justify-between flex-col">
        <div className="w-full overflow-auto pointer-events-auto flex justify-center"></div>
      </div> */}
    </>
  );
};
