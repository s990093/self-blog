import { FaHandPointer } from "react-icons/fa";

export default function ClickableIcon() {
  return (
    <div
      className="mt-2 text-white text-xs rounded-md"
      style={{ transform: "rotate(-30deg)" }} // 旋轉 30 度
    >
      <FaHandPointer className="text-white w-6 h-6 animate-bounce cursor-pointer transition duration-300 ease-in-out transform hover:scale-110" />
    </div>
  );
}
