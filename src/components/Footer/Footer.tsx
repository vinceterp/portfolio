"use client";

import { Linkedin, Github } from "lucide-react";
import styles from "@/styles/page.module.css";
import { Icon } from "../Icon";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://linkedin.com/in/vinceterp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon size={40}>
          <Linkedin />
        </Icon>
      </a>
      <a
        href="https://github.com/vinceterp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon size={40}>
          <Github />
        </Icon>
      </a>
    </footer>
  );
};
