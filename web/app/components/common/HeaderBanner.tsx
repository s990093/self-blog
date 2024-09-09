// components/HeaderBanner.js
import Image from "next/image";
import styles from "./HeaderBanner.module.css"; // 可选，使用 CSS 模块进行样式设置

const HeaderBanner = () => {
  return (
    <div className={styles.banner}>
      <Image
        src="web/public/favicon.png"
        alt="网站头贴"
        layout="responsive"
        width={1200} // 设置图像的宽度
        height={400} // 设置图像的高度
      />
    </div>
  );
};

export default HeaderBanner;
