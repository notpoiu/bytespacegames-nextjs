import Message from "./components/Message";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "bytespace - home",
  description: "my personal hub for programming, modding, and game dev. take a look around!",
};

export default function Home() {
  return (
    <Message title="home" message="bytespacegames is my personal hub for programming, modding, and game dev. take a look around!" />
  );
}
