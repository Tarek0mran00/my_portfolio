
import { m, LazyMotion, domAnimation } from "framer-motion";
import { skills } from "../Constants/constants";

const SkillsCards = () => {
  return (
    <div className="flex">
      <LazyMotion features={domAnimation} strict>
        {skills.map((skill, index) => (
          <m.div
            initial={{ scale: 0.8 }}
            animate={{
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            style={{ zIndex: `${index + 1}`, transition: "all 0.6s", backgroundColor: 'red' }} // Ensure background is red
            key={index}
            className="card w-[300px] h-[300px] flex flex-col items-center rounded-xl border-4 border-primary-400 cursor-pointer"
          >
            <div className="w-full h-[60px] flex items-center gap-2 p-1 flex-col text-white"> {/* Ensure text color is white */}
              <img
                className="h-[50px] flex justify-center items-center w-[50px] bg-grayscale-25 rounded-[50%] p-1 object-contain"
                src={skill.icon}
                alt={skill.title}
              />
              <span
                className="text-xl"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "bold",
                  color: 'white' // Ensure text color is white
                }}
              >
                {skill.title}
              </span>
              <span
                className="text-center bg-red-500 text-white rounded-xl text-sm p-4" // Ensure background and text color
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                  color: 'white' // Ensure text color is white
                }}
              >
                {skill.description}
              </span>
            </div>
          </m.div>
        ))}
      </LazyMotion>
    </div>
  );
};

export default SkillsCards;
