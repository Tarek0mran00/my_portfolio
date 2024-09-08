import { m, LazyMotion, domAnimation } from "framer-motion";

const SectionTitle = (props) => {
  const { title, subtitle } = props;

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        initial={{ x: -350 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="text-primary-700 p-6 noselect"
      >
        <span
          className="opacity-90"  // Slightly less opaque for better contrast
          style={{
            textTransform: "uppercase",
            fontFamily: "Roboto Condensed, sans-serif",
            fontWeight: "700",
            color: "#BDC3C7", // Light Gray
          }}
        >
          {subtitle}
        </span>
        <h2
          className="tracking-wider text-6xl sm:text-7xl md:text-8xl"
          style={{
            fontFamily: "Oswald, sans-serif",
            color: "#ECF0F1", // Very Light Gray, close to white
          }}
        >
          {title.split("").map((char, index) => {
            if(char === " ") {
              return " ";
            }
            return <span key={index} className="bounce">{char}</span>
          })}
        </h2>
      </m.div>
    </LazyMotion>
  );
};

export default SectionTitle;
