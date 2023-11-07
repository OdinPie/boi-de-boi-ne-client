import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Text } from "./Style";


const FramerTextServices = () => {
  const { scrollYProgress } = useScroll();
  let x = useTransform(scrollYProgress, [0,1], [0, -400]);
  let opacity = useTransform(scrollYProgress, [0,1], [0, 200]);
  // const x = useMotionValue(0)
  // const xRange = [-200, -100, 100]
  // const opacityRange = [0, 1, 1]
  // const opacity = useTransform(x, xRange, opacityRange)
  return (
    
  <div className="relative my-20">
    <Text className="text-9xl font-tenor" style={{x}} initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}>OUR POPULAR</Text>
    <div className="leading-none">
    <motion.h1 className="text-[300px]  font-extrabold text-gray-300 -z-10 " style={{opacity}} initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}>SERVICES</motion.h1>
    <Text className="text-[300px] font-extrabold  text-gray-300 -z-10" style={{opacity}} initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}>SERVICES</Text>
    <Text className="text-[300px] font-extrabold  text-gray-300 -z-10" style={{opacity}} initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}>SERVICES</Text>
    <Text className="text-[300px] font-extrabold  text-gray-300 -z-10" style={{opacity}} initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}>SERVICES</Text>
    <Text className="text-[300px] font-extrabold  text-gray-300 -z-10" style={{opacity}} initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}>SERVICES</Text>
    <Text className="text-[300px] font-extrabold  text-gray-300 -z-10" style={{opacity}} initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}>SERVICES</Text>
    
    </div>
    
  </div>
  );
};

export default FramerTextServices;