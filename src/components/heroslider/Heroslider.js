"use client";
import styles from "../../styles/slider.module.css";
import { MantineProvider } from "@mantine/core";
import CarouselDemo from "./CarouselDemo";
export default function Heroslider() {
  return (
    <div className={styles.sliderContainer}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <CarouselDemo />
      </MantineProvider>
    </div>
  );
}
