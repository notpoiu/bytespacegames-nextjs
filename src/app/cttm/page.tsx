import Message from "../components/Message";
import "@/app/cttm/cttmstyle.css";
import { Metadata } from "next";

const versions = {
    "v1.6": "https://www.dropbox.com/s/id53tkx5usmll5n/Click%20To%20Ten%20Mod%20Manager%20v1.6.zip?dl=1",
    "v1.5": "https://www.dropbox.com/s/ygjxm5lxa38j2ro/Click%20To%20Ten%20Mod%20Manager%20v1.5.zip?dl=1",
    "v1.4": "https://www.dropbox.com/s/wwpw3zkjativrfp/Click%20To%20Ten%20Mod%20Manager%20v1.4.zip?dl=1",
    "v1.3": "https://www.dropbox.com/s/758656esdrapjtz/Click%20To%20Ten%20Mod%20Manager%20v1.3.zip?dl=1",
    "v1.2": "https://www.dropbox.com/s/32f8neiflvlgy2r/Click%20To%20Ten%20Mod%20Manager%20v1.2.zip?dl=1",
    "v1.1": "https://www.dropbox.com/s/jwxzxaez5w44njd/Click%20To%20Ten%20Mod%20Manager%20v1.1.zip?dl=1",
    "v1.0": "https://www.dropbox.com/s/givfm74kcjtyxmp/Click%20To%20Ten%20Mod%20Manager%20v1.0.zip?dl=1",
}

export const metadata: Metadata = {
  title: "bytespace - cttmm",
  description: "my personal hub for programming, modding, and game dev. take a look around!",
};

export default function cttmm() {
  return (
    <div className="messagediv">
        <h1>click to ten mod manager</h1>
        <div className="cttmdownloadwrapper">
          {Object.keys(versions).map((version: string) => (
              <p key={version}>|<a href={versions[version as keyof typeof versions]}>{version}</a>|</p>
          ))}
        </div>
        <a href="/" className="backlink">back</a>
    </div>
  );
}
