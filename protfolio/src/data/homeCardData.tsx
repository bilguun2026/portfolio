import map from "../assets/map.jpg";
import math from "../assets/math1.jpg";
import science from "../assets/science.jpeg";
import art from "../assets/map.jpeg";
import history from "../assets/history.jpeg";
import knowledge from "../assets/knowledge.jpeg";

const cardData = [
  {
    id: 1,
    imageUrl: map,
    title: "Цэргийн алба",
    description:
      "Энэхүү асуултууд нь таныг хэр Монголын цэргийн албаны тухай мэддэг вэ гэдгийг шалгах асуултууд байх болно.",
    url: "/map",
  },
  {
    id: 2,
    imageUrl: math,
    title: "Галт зэвсэг",
    description:
      "Та галт зэвсгийн талаар сайн мэдэх үү? Өөрийгөө сориод үзээрэй. Хэцүүхэн байх болов уу.",
    url: "/math",
  },
  {
    id: 3,
    imageUrl: science,
    title: "Шинжлэх ухаан",
    description:
      "Шинжлэх ухааны салбар бол хамгийн баялаг хязгааргүйд тооцогддог. Шинжлэх ухаанд хайртай бол өөрийгөө сориод үз.",
    url: "/science",
  },
  {
    id: 4,
    imageUrl: art,
    title: "Тактик",
    description:
      "Дайнд хэрхэн тулалддагийг ойлгоход туслах цэргийн үндсэн стратеги, хөдөлгөөнүүд, жигүүр, отолт зэргийг багтаасан болно.",
    url: "/art",
  },
  {
    id: 5,
    imageUrl: history,
    title: "Түүх",
    description:
      '"Эх түүхээ мэдэхгүй хүн ойд төөрсөн сармагчин лугаа адил". Эдгээр асуултууд нь машид сонрирхолтой байх болно.',
    url: "/history",
  },
  {
    id: 6,
    imageUrl: knowledge,
    title: "Мэдлэг",
    description:
      "Дэлхий ертөнцийн талаар суралцахад тань туслах баримт, ойлголт, мэдээлэл зэрэг янз бүрийн сэдвүүдийн талаархи ерөнхий ойлголтыг таньд олгоно.",
    url: "/knowledge",
  },
];

export default cardData;
