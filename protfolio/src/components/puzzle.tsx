import { motion } from "framer-motion";

const PuzzleIcons = () => {
  const generateRandomPosition = () => {
    const maxX = 2000; // Maximum X-coordinate within the container
    const maxY = 1000; // Maximum Y-coordinate within the container

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    return { x: randomX, y: randomY };
  };

  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const count = 100;
  const puzzleIcons = [];

  for (let i = 0; i < count; i++) {
    const { x, y } = generateRandomPosition();
    const fill = generateRandomColor(); // Generate random fill color
    puzzleIcons.push(
      <motion.svg
        key={i}
        className={"absolute h-12 w-12 z-10"}
        viewBox="0 0 65 65"
        xmlns="http://www.w3.org/2000/svg"
        whileHover={{ rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        style={{ top: `${y}px`, left: `${x}px` }}
      >
        <motion.path
          d="M62.3,30.5 L53.3,21.5 C53.3,23.8 52.5,26 50.7,27.8 C47.3,31.2 41.8,31.2 38.3,27.8 C34.8,24.4 34.9,18.9 38.3,15.4 C40,13.7 42.3,12.8 44.6,12.8 L33.9,2.1 C33,1.2 31.4,1.2 30.5,2.1 L20.6,12 C20.6,9.7 19.8,7.5 18,5.7 C14.6,2.3 9.1,2.3 5.6,5.7 C2.2,9.1 2.2,14.6 5.6,18.1 C7.3,19.8 9.6,20.7 11.9,20.7 L2,30.6 C1.1,31.5 1.1,33.1 2,34 L11.2,43.2 L11.2,43.2 C11.2,38.3 15.2,34.3 20.1,34.3 C25,34.3 29,38.3 29,43.2 C29,48.1 25,52.1 20.1,52.1 L20.1,52.1 L30.3,62.3 C31.2,63.2 32.8,63.2 33.7,62.3 L62,34 C63.2,33 63.2,31.4 62.3,30.5 L62.3,30.5 Z"
          stroke={fill}
          fill={fill} // Set fill color to the generated random color
          strokeWidth="2"
        />
      </motion.svg>
    );
  }

  return <div className="relative">{puzzleIcons}</div>;
};

export default PuzzleIcons;
