// components/MovieLinker.tsx
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFilm } from "react-icons/fa";
import { useSpring, animated } from "@react-spring/web";
import { useRouter } from "next/navigation";

const MovieLinker: React.FC = () => {
  const router = useRouter();

  const [props, api] = useSpring(() => ({
    transform: "scale(1)",
    config: { tension: 300, friction: 20 },
  }));

  const handle = () => {
    router.push("/movie");
  };

  return (
    <button onClick={handle}>
      <div className="flex items-center justify-center h-full text-white text-lg font-semibold space-x-2">
        <FaFilm size={24} />
        <animated.span style={props}>Explore Movies</animated.span>
      </div>
    </button>
  );
};

export default MovieLinker;
