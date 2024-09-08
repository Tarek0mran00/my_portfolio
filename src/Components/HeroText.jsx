import { m, LazyMotion, domAnimation } from "framer-motion";

const HeroText = () => {
  const name = "TAREK ?";

  return (
    <div
      className="noselect w-fit h-fit text-gray-800 absolute z-10 flex flex-col justify-center items-center rounded-full"
      id="repulse-div"
    >
      <LazyMotion features={domAnimation} strict>
        <m.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-center flex justify-center items-center flex-col opacity-100 text-6xl sm:text-8xl cursor-default"
          style={{ fontFamily: "Anton, sans-serif", color: "#FFFFFF" }} // Ensure font and color
        >
          <m.span
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="text-gray-200" // Light gray color
          >
            WHO'S{" "}
          </m.span>
          <m.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            {name.split("").map((char, index) => {
              if (char === " ") {
                return " ";
              }
              return (
                <span
                  key={index}
                  className="text-gray-100 bounce" // Very light gray color
                  style={{ fontSize: "1.5em", fontWeight: "bold" }}
                >
                  {char}
                </span>
              );
            })}
          </m.div>
        </m.h1>
      </LazyMotion>
    </div>
  );
};

export default HeroText;
