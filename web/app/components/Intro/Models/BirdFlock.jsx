import { Bird } from "./Brid/Bird";

export function BirdFlock() {
  const birds = [
    { startPosition: [-5, 2, 1], direction: 1 },
    { startPosition: [4, 2, -1], direction: 1 },
    { startPosition: [-10, 1, -1], direction: -1 },
    { startPosition: [-3, 4, -2], direction: 1 },
  ];

  return (
    <>
      {birds.map((bird, index) => (
        <Bird
          key={index}
          startPosition={bird.startPosition}
          direction={bird.direction}
        />
      ))}
    </>
  );
}
