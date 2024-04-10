import { Import } from "lucide-react";
import Slider from "../components/swiper";
import { FaInstagramSquare, FaGithub, FaLinkedin} from "react-icons/fa";
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

      <h1 className="text-4xl text-white text-center text-pretty">DARCIO MASSALA</h1>

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
      <Card className="h-4/5 relative">
        <CardContent>
          <div className="absolute inset-0">
            <Slider></Slider>
          </div>
        </CardContent>
      </Card>
      <div className="flex flex-row gap-3">
        <Card>hi3</Card>
        <Card>hi4</Card>
        <Card>hi5</Card>
      </div>
    </div>
    <div className="p-2 h-full">
      <div className="flex grow-1">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      </div>
    </div>
  </div>
</main>
  );
}
