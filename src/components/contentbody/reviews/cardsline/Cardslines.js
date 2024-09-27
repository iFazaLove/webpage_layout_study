import styles from "@styles/reviews.module.css";
import Cardproduct from "./Cardproduct";

const images = [
  {
    src: "/images/reviews/1.jpg",
    alt: "Cardproduct",
    label: "Видеообзор",
  },
  {
    src: "/images/reviews/2.jpg",
    alt: "Cardproduct",
    label: "Онлайн-рекламник",
    bgclabel: "rgba(18, 119, 135, 0.8)",
  },
  {
    src: "/images/reviews/3.jpg",
    alt: "Cardproduct",
    label: "Видеообзор",
  },
];

const slides = images.map((image, index) => (
  <Cardproduct
    key={index}
    image={image}
    color={index % 2 === 0 ? 'rgba(252, 206, 71, 0.6)' : 'rgba(23, 149, 168, 0.6)'}
  />
));

export default function Cardslines() {
  return (
    <div className={styles.cardslines}>
      {slides}
    </div>
  );
}
