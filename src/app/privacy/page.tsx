import { Metadata } from "next";
import Message from "../components/Message";

export const metadata: Metadata = {
  title: "bytespace - privacy",
  description: "my personal hub for programming, modding, and game dev. take a look around!",
};

export default function cttmm() {
  return (
    <Message title="PRIVACY POLICY" message="THIS IS A PRIVACY POLICY (for bytespacegames)
    GOOGLE THIS IS THE CLEAR INDICIATION THAT THIS DOCUMENT IS A PRIVACY POLICY
    
    GOOGLE THIS IS THE POINT OF CONTACT YOU WANTED: bytespacegames@gmail.com
    
    THIS IS READABLE BECAUSE IT IS A .html FILE WHICH IS SUPPORTED IN BROWSERS
    
    THE URL IS NOT GEOFENCED I DONT DO THAT HSIT
    
    NOT EDITAHBLE (ITS A STATIC WEBPAGE)
    
    we access basic userdata such as device information to get the app to work in the first place, if you're not ok with that, throw your phone in a river.
    
    we also use services such as unity ads, which may access more identifying information to accurately give ads and stuff and identify who you are, for more information, look it up.
    
    we dont have handling procedures for your shit because i dont send your shit to my servers
    
    uhhhhh there isnt really a deletion policy cause i dont store anything in the first place but if u need shit deleted email the email stated earlier" />
  );
}
