import { Carousel } from "@mantine/carousel";
import styles from "@styles/slider.module.css";
import { Button, Text, Title, Image } from "@mantine/core";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";
export default function CarouselDemo() {
  return (
    <Carousel
      classNames={{ viewport: styles.viewport }}
      nextControlIcon={<IconArrowRight size={30} />}
      previousControlIcon={<IconArrowLeft size={30} />}
      aligh="start"
      height="50vh"
      withIndicators
      loop
      styles={{
        flex: 1,
        indicator: {
          width: 12,
          height: 12,
          backgroundColor: "gray",
          borderRadius: "50%", // Круглые индикаторы
          opacity: 1, // Убедимся, что индикаторы полностью видимы
          "&[dataActive]": {
            backgroundColor: "yellow",
          },
          margin: "0 5px", // Добавим отступы между индикаторами
        },
        indicators: {
          position: "absolute",
          bottom: 10, // Сместим индикаторы вниз
          left: "50%",
          transform: "translateX(-50%)", // Центрируем индикаторы по горизонтали
          display: "flex",
          justifyContent: "center",
          zIndex: 1,
        },
        controls: {
          position: "absolute",
          top: "50%", // Центрирование по вертикали
          padding: 10,
          left: 0,
          right: 0,
          justifyContent: "space-between", // Расположим стрелки по краям
          transform: "translateY(-50%)", // Сместим их вертикально на середину
          zIndex: 1, // Убедимся, что они выше контента
        },
        control: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: "50%",
          color: "white",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          },
        },
      }}
    >
      <Carousel.Slide id="slide1">
        <div style={{ position: "relative", height: "100%", width: "100%" }}>
          <Image
            className={styles.sliderImage}
            src="images/carousel/carousel-1.png"
            alt="Hotel 1"
            layout="fill"
            objectfit="cover"
          />
        </div>
      </Carousel.Slide>
      <Carousel.Slide id="slide2">
        <div style={{ position: "relative", height: "100%", width: "100%" }}>
          <Image
            className={styles.sliderImage}
            src="images/carousel/carousel-2.png"
            alt="Hotel 1"
            layout="fill"
            objectfit="cover"
          />
        </div>
      </Carousel.Slide>
      <Carousel.Slide id="slide3">
        <div style={{ position: "relative", height: "100%", width: "100%" }}>
          <Image
            className={styles.sliderImage}
            src="images/carousel/carousel-3.png"
            alt="Hotel 1"
            layout="fill"
            objectfit="cover"
          />
        </div>
      </Carousel.Slide>
    </Carousel>
  );
}
