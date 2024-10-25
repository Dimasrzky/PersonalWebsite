import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Dimas_Image.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="relative border-b border-neutral-900 pb-4 lg:mb-16 overflow-hidden">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start p-4 lg:p-8">
            <motion.h2
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-5xl lg:text-7xl font-thin tracking-tight lg:mt-4"
            >
              Muhamad Dimas Rizky Darmawan
            </motion.h2>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Machine Learning
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center translate-y-21">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Kevin Rush"
              className="w-[400px] h-[400px] lg:w-[450px] lg:h-[450px] object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
