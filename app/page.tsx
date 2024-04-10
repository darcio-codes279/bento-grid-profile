import { Import } from "lucide-react";
import Slider from "./components/swiper";
import { FaInstagramSquare, FaGithub, FaLinkedin} from "react-icons/fa";

export default function Home() {
  return (
<main className="flex flex-1 w-full h-screen">
  {/* Top */}
    <div className="flex-1 p-3 grow w-full">
    <div className="flex items-center justify-center bg-blue-500 rounded-md h-16">
      {/* <img src="public/images/Logo.png" alt="logo" /> */}
      <img src={"public/images/Logo.png"} alt="logo" />
    </div>
    <div className="flex flex-1 w-full h-5/6 gap-1 flex-row">
            {/* {Left} */}
            <div className="flex-1 p-3 w-1/3"> 
              <div className="flex items-center justify-center bg-green-500 rounded-md h-5/6">Left
              {/* {About Me} */}
              {/* {Companies/Clients worked for} */}
              </div>
            </div>
            {/* {Center} */}
            <div className="flex-1 p-3 w-1/3"> 
              <div className="flex items-center justify-center bg-slate-700 rounded-md h-4/6">
              <div className="h-fit">
              {/* <img className="rounded-md h-fit" src="/images/IMG_36262.JPG" alt="Image Description" /> */}
              </div>
              {/* {Image carousel} */}
              {/* {3 Social icons} */}
              </div>
            <div className="flex flex-row gap-5 items-center justify-center pt-3">
              <div className="flex items-center justify-center bg-slate-500 rounded-md w-28 h-28 p-5"><FaInstagramSquare style={{ fontSize: '2em' }}  /></div>
              <div className="flex items-center justify-center bg-slate-500 rounded-md w-28 h-28 p-5"><FaGithub style={{ fontSize: '2em' }} /></div>
              <div className="flex items-center justify-center bg-slate-500 rounded-md w-28 h-28 p-5"><FaLinkedin style={{ fontSize: '2em' }} /></div>
            </div>

            </div>
            {/* {Right} */}
            <div className="flex-1 p-3 w-1/3"> 
              <div className="flex items-center justify-center bg-slate-500 rounded-md h-5/6">Right
              {/* {Passion Projects - Accordion with Github links} */}
              {/* {Tech Stack - automatic slider} */}
              {/* {Download CV button to upload CV PDF} */}
              </div>
          </div>
    </div>
    </div>




</main>
  );
}
