import Header from "../components/header";
import CardComponent from "../components/card";
import cardData from "../data/homeCardData";
import { motion } from "framer-motion";

function smoothScrollToTarget(targetId: any) {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  }
}

function Home() {
  return (
    <>
      <div>
        <Header />
        <div className="flex flex-col items-center justify-center h-[850px] bg-black text-white p-56">
          <h1 className="text-[60px] mb-8 whitespace-nowrap">
            Experience EDU+: Where Learning Meets Fun!
          </h1>
          <h4 className="text-[30px] text-center">
            Take quizzes, challenge friends, track scores, share results, and
            enjoy seamless fun!
          </h4>
          <a href="#tester" onClick={() => smoothScrollToTarget("tester")}>
            <motion.button className="border border-white rounded-full px-4 py-2 mt-48 transition-all hover:bg-white hover:text-black">
              Interactive Exploration Quiz
            </motion.button>
          </a>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="h-screen mb-4"
          id="tester"
        >
          <div className="flex items-center justify-center p-4 text-bold text-[50px]">
            Quiz topics
          </div>
          <div className="grid grid-cols-3 grid-rows-2 px-12 h-auto justify-items-center items-center space-y-4 space-x-4">
            {cardData.map((item) => (
              <div key={item.id}>
                <CardComponent
                  imageUrl={item.imageUrl}
                  title={item.title}
                  description={item.description}
                  url={item.url}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}
export default Home;
