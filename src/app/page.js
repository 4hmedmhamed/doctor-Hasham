import Image from "next/image";
import styles from "./page.module.css";
import MainPage from "./MainPage";
import Oursrvies from "./Oursrvies";
import Aboute from "./Aboute";
import Our_advantages from "./Our_advantages";
import Video from"./video/page"
import Questions from "./Questions";
export default function Home() {
  return (
    
   <>
       <MainPage></MainPage>
       <Oursrvies></Oursrvies>
       <Aboute></Aboute>
       <Our_advantages></Our_advantages>
       <Questions></Questions>
   </>
   

  );
}
