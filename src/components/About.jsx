import aboutImg from "../assets/About_Dimas.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 pt-8">
      <h2 className="mb-16 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap items-start px-4 lg:px-12">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 p-4"
        >
          <div className="flex items-start justify-center">
            <img className="rounded-2xl w-full max-w-[500px] h-[500px] object-cover" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col space-y-4"> 
            <p className="text-base leading-relaxed">{ABOUT_TEXT.paragraph1}</p>
            <p className="text-base leading-relaxed">{ABOUT_TEXT.paragraph2}</p>
            <p className="text-base leading-relaxed">{ABOUT_TEXT.paragraph3}</p>
            <p className="text-base leading-relaxed">{ABOUT_TEXT.paragraph4}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
