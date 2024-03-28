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
    title: "Can coffee make you a better developer?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    url: "/map", // Example URL for navigation
  },
  {
    id: 2,
    imageUrl: math,
    title: "The benefits of remote work",
    description:
      "Discover the advantages of remote work and how it can improve productivity and work-life balance.",
    url: "/math",
  },
  {
    id: 3,
    imageUrl: science,
    title: "Introduction to React Hooks",
    description:
      "Learn about React Hooks and how they simplify state management and side effects in React applications.",
    url: "/science",
  },
  {
    id: 4,
    imageUrl: art,
    title: "Mastering CSS Grid Layout",
    description:
      "Unlock the power of CSS Grid Layout and create responsive and flexible layouts for your web projects.",
    url: "/art",
  },
  {
    id: 5,
    imageUrl: history,
    title: "The art of debugging in JavaScript",
    description:
      "Explore strategies and techniques for effective debugging in JavaScript to squash bugs more efficiently.",
    url: "/history",
  },
  {
    id: 6,
    imageUrl: knowledge,
    title: "Getting started with TypeScript",
    description:
      "Get up and running with TypeScript and enhance your JavaScript projects with static typing and other features.",
    url: "/knowledge",
  },
];

export default cardData;
