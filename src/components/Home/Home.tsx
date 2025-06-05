import styles from "@/styles/page.module.css";
import { Footer } from "@/components/Footer/Footer";
import { Typography } from "../Typography";

export const Home = () => {
  return (
    <div className={styles.page}>
      <Typography>
        Full-stack software engineer with 7+ years of experience building
        high-performance, scalable web and mobile applications across fintech,
        healthtech, and hospitality. Proven track record delivering
        production-ready software for clients like MGM Resorts, Alessa Cloud
        Solutions, and Symptai. Expertise in React, TypeScript, Node.js, CI/CD,
        and secure authentication. Known for writing clean code, mentoring
        teams, and driving full product lifecycle delivery in agile
        environments. Experienced in both monolithic and microservices
        architectures.
      </Typography>
      <Footer />
    </div>
  );
};
