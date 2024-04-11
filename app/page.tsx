import { Import } from "lucide-react";
import Slider from "../components/swiper";
import { FaInstagram, FaGithub, FaLinkedinIn} from "react-icons/fa";
import { BsSubstack } from "react-icons/bs";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
  return (
<main className="w-full h-screen p-4 ">
  {/* 3 grid columns */}
<div className="grid grid-cols-3 w-full h-1/5 relative" >
  
<Image
        src="/images/Logo.png"
        alt="Description of the image"
        width={100}
        height={100}
        className=""
      />

      <h1 className="text-4xl text-center text-pretty">DARCIO MASSALA</h1>

<ThemeToggle />
</div>

  <div className="grid grid-cols-3 w-full h-4/5 ">
    <div> 
      {/* logo + About Me + Carousel Companies */}

      <div className="flex flex-col gap-3 h-full p-2">
        {/* cards */}
      <Card className="w-auto h-3/5">
        <CardTitle>About Me</CardTitle>
        <CardHeader>Software Engineer</CardHeader>
        <CardDescription> qwerty</CardDescription>
      </Card>
      <Card className="w-auto h-2/5">
        <CardTitle>Past Companies</CardTitle>
      </Card>
      </div>
    </div>
    <div className="p-2 h-full">
      <Slider></Slider>
      <Card className="h-4/5 relative">
        <CardContent>

            
        </CardContent>
      </Card>
      <div className="flex flex-row space-x-5 pt-4">
        <Card className="h-16 w-16 flex items-center justify-center">
          <FaInstagram className="h-12 w-12"></FaInstagram>
          </Card>
        <Card className="h-16 w-16 flex items-center justify-center"><FaGithub className="h-12 w-12"></FaGithub>
          </Card>
        <Card className="h-16 w-16 flex items-center justify-center"><FaLinkedinIn className="h-12 w-12"></FaLinkedinIn>
          </Card>
          <Card className="h-16 w-16 flex items-center justify-center"><BsSubstack className="h-12 w-12"></BsSubstack>
          </Card>
      </div>
    </div>
    <div className="p-2 h-full flex flex-col gap-3">
      <Card className="w-auto h-3/5">
      <CardTitle>
          Passion Projects
        </CardTitle>
      </Card>
      <Card className="w-auto h-1/5">
      <CardTitle>
          Tech Stack
        </CardTitle>
      </Card>
      <Card className="w-auto h-1/5">
        <CardTitle>
          Download CV
        </CardTitle>
      </Card>
    </div>
  </div>
</main>
  );
}
