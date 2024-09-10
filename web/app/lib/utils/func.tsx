export const generateRandomPosition = () => {
  const angle = Math.random() * 360;
  const radius = 200; // Adjust the radius as needed

  const x = radius * Math.cos(angle * (Math.PI / 180));
  const y = radius * Math.sin(angle * (Math.PI / 180));

  return { x, y };
};

export const getDeviceType = (): number => {
  // 使用視口寬度來判斷裝置類型
  const width = window.innerWidth;

  if (width <= 767) {
    // 手機
    return 1;
  } else if (width <= 1024) {
    // 平板
    return 2;
  } else {
    // 電腦
    return 3;
  }
};
