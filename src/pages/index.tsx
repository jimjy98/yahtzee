import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import UpperSection from "components/UpperSection";
import LowerSection from "components/LowerSection";

const bonusScore = 35;

export default function Home() {
  return (
    <div className="container">
      <UpperSection />
      <LowerSection />
    </div>
  );
}
