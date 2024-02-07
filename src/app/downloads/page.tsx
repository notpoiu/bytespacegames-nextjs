import Message from '../components/Message';
import './downloads.css';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "bytespace - downloads",
  description: "my personal hub for programming, modding, and game dev. take a look around!",
};

export default function downloads() {
    return (
        <div className="messagediv">
            <h1>downloads</h1>
            <p>Click to ten mod manager: <a href='https://www.dropbox.com/s/id53tkx5usmll5n/Click%20To%20Ten%20Mod%20Manager%20v1.6.zip?dl=1'>download</a> | <a href="/cttm">all</a>
            
            <br></br>
            
            OptiRenderer 1.8.9: <a href='https://www.dropbox.com/s/b3mvlyqo401eoyz/OptiRenderer.zip?dl=1'>download</a>
            </p>
        </div>
    )
}
