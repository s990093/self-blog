import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html center>
      <div className="flex flex-col justify-center items-center h-full">
        <div className="relative flex items-center justify-center w-20 h-20">
          <div className="absolute w-16 h-16 border-4 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin"></div>
          <div className="absolute w-16 h-16 border-4 border-opacity-10 border-gray-300 rounded-full"></div>
        </div>
        <p className="mt-4 text-blue-500 text-lg font-semibold">Loading...</p>
      </div>
    </Html>
  );
};

export default Loader;
