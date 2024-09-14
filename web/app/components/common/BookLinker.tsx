import { FaBook } from "react-icons/fa";
import { useSpring, animated } from "@react-spring/web";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/app/context/AppContext";
import ClickableIcon from "./ClickableIcon";
import HoverEffectDiv from "../Animation/HoverEffectDiv";

const BookLinker: React.FC = () => {
  const router = useRouter();
  const { addNotification } = useAppContext();

  const [props] = useSpring(() => ({
    transform: "scale(1)",
    config: { tension: 300, friction: 20 },
  }));

  const handle = () => {
    addNotification("Wait a moment ...");
    router.push("/book");
  };

  return (
    <button
      onClick={handle}
      className="block w-full p-4 rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-transform transform hover:scale-105 active:scale-95 cursor-pointer"
    >
      <div className="flex items-center justify-center h-full text-white text-lg font-semibold space-x-2">
        <FaBook size={24} />
        <animated.span style={props}>
          <HoverEffectDiv text="Explore Books" fontSize={20} />
        </animated.span>
        <div className="absolute top-[10px] right-[10px]">
          <ClickableIcon />
        </div>
      </div>
    </button>
  );
};

export default BookLinker;
