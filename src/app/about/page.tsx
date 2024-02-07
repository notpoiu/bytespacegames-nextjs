import { Metadata } from "next";
import Message from "../components/Message";

export const metadata: Metadata = {
    title: "bytespace - about",
    description: "about me and my projects",
};

export default function about() {
    return (
        <Message title="about" message="bytespacegames is just a name to group all of my personal projects together, expect games, tools, apps and apis to be hosted here." />
    )
}