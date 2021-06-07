import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import CreateGame from "pages/CreateGame";

import 'font-awesome/css/font-awesome.min.css';

export default function Home() {
  return (
    <div className="container">
      <CreateGame />
    </div>
  );
}
