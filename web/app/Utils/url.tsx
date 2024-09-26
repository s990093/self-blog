export const get_image_url = (
  basePath: "/assets/images",
  fileName: string,
  fileType: "jpg" | "png" | "jpeg"
): string => {
  // 定義圖片的相對位置

  // 構建完整的圖片路徑
  const imagePath = `${basePath}/${fileName}.${fileType}`;

  return imagePath;
};
