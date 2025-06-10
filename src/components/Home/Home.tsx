import styles from "@/styles/page.module.css";
import { Footer } from "@/components/Footer/Footer";
import { Typography } from "../Typography";

export const Home = () => {
  return (
    <div className={styles.page}>
      <Typography>
        Full-Stack Software Engineer with 6 years of experience delivering
        scalable web and mobile applications using React, React Native,
        TypeScript and Node.js. Currently contributing to high-impact projects
        at MGM Resorts International, one of the top global hospitality
        companies grossing $17B annually, where I build and maintain performant,
        user-focused digital solutions. Skilled in end-to-end development,
        RESTful/GraphQL API integration, and Agile collaboration to drive
        continuous delivery and innovation.
      </Typography>
      <Typography>
        More coming soon! This is a work in progress, so please check back
      </Typography>

      <Footer />
    </div>
  );
};
