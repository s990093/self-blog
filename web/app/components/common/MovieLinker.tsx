// components/MovieLinker.tsx
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFilm } from "react-icons/fa";
import { useSpring, animated } from "@react-spring/web";

const MovieLinker: React.FC = () => {
  // 使用 react-spring 來設定文字動畫
  const [props, api] = useSpring(() => ({
    transform: "scale(1)",
    config: { tension: 300, friction: 20 },
  }));

  return (
    <Link href="/movie" passHref>
      <motion.div
        className="block w-full p-4 rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-transform transform hover:scale-105 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => api.start({ transform: "scale(1.1)" })}
        onHoverEnd={() => api.start({ transform: "scale(1)" })}
      >
        <div className="flex items-center justify-center h-full text-white text-lg font-semibold space-x-2">
          <FaFilm size={24} />
          <animated.span style={props}>Explore Movies</animated.span>
        </div>
      </motion.div>
    </Link>
  );
};

export default MovieLinker;
