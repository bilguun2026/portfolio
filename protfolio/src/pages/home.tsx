import Header from "../components/header";
import CardComponent from "../components/card";
import cardData from "../data/homeCardData";
import { motion } from "framer-motion";
import PuzzleIcons from "../components/puzzle";

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
      <div className="font-benzin">
        <Header />
        <div className="flex flex-col items-center justify-center h-[850px] bg-[#000000] text-white p-56 relative overflow-hidden">
          <h1 className="text-[35px] mb-8 whitespace-nowrap z-20 bg-black  rounded-2xl px-4 py-2">
            EDU+ тэй туршлагаж: Хаана хөгжилтөй байна тэнд суралц!
          </h1>

          <h4 className="text-[20px] text-center z-20">
            Асуулт асууж, найз нөхдөөр сорих, оноо авах, үр дүнг нь хуваалцах,
            тасралтгүй хөгжилтэй өнгөрүүлээрэй!
          </h4>

          <a
            href="#tester"
            className="z-20"
            onClick={() => smoothScrollToTarget("tester")}
          >
            <motion.button className="border bg-[#45F6F6] rounded-full px-4 py-2 mt-48 text-black transition-all hover:text-white z-20">
              Interactive Exploration Quiz
            </motion.button>
          </a>
          <div className="absolute top-0 left-0 z-10">
            <PuzzleIcons />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="h-screen mb-4"
          id="tester"
        >
          <div className="flex items-center justify-center text-bold text-[30px] pt-24 pb-8">
            <div className="border border-[#45F6F6] rounded-full px-4 py-2 transition-all hover:bg-[#45F6F6] hover:text-white ">
              Quiz topics
            </div>
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
