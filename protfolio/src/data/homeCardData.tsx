import map from "../assets/map.jpeg"
import math from "../assets/math.jpg"
import science from "../assets/science.jpeg"
import art from "../assets/art.jpeg"
import history from "../assets/history.jpeg"
import knowledge from "../assets/knowledge.jpeg"

const cardData = [
  {
    id: 1,
    imageUrl: map,
    title: "Газрын зураг",
    description:
      "Энэ хүү асуултууд нь таныг хэр олон улс орон мэддэг вэ гэдгийг шалгах хүндхэн асуултууд байх болно.",
    url: "/map", // Example URL for navigation
  },
  {
    id: 2,
    imageUrl: math,
    title: "Математик",
    description:
      "Та математиктаа хэр сайн бэ? Өөрийгөө сориод үзээрэй. Хэцүүхэн байх болов уу.",
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
    title: "Уран зураг",
    description:
      "Дэлхийн болон дотоодын алдартай уран зургууд байх болно. Өөөөрийгөөөөөн сорь.",
    url: "/art",
  },
  {
    id: 5,
    imageUrl: history,
    title: "Түүх",
    description:
      "Түүхийн хичээлдээ муу байсан ч хамаагүй ээ. Эдгээр асуултууд нь машид сонрирхолтой байх болно.",
    url: "/history",
  },
  {
    id: 6,
    imageUrl: knowledge,
    title: "Мэдлэг",
    description:
      "Та өөрийгөө хэр мэдлэгтэй гэж бодож байна. Миний бодлоор та тийм ч сайн мэдлэгтэй биш юм шиг л .... алив батлалдаа.",
    url: "/knowledge",
  },
];

export default cardData;
