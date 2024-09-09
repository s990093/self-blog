export const generateRandomPosition = () => {
  const angle = Math.random() * 360;
  const radius = 200; // Adjust the radius as needed

  const x = radius * Math.cos(angle * (Math.PI / 180));
  const y = radius * Math.sin(angle * (Math.PI / 180));

  return { x, y };
};
