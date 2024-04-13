import { Import } from "lucide-react";
import Slider from "../components/swiper";
import { FaInstagram, FaGithub, FaLinkedinIn} from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
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
import { siteConfig } from "./siteConfig/site-config";

const GridItems = new Array(36).fill(0);

const GridItems2 = [
  { text: 'Tech Stack', colSpan: 2, rowSpan: 2, colStart: 1, rowStart: 1 },
  { text: 'Random', colSpan: 1, rowSpan: 2, colStart: 1, rowStart: 3 },
  { text: 'View Works', colSpan: 3, rowSpan: 2, colStart: 1, rowStart: 5 },
  { text: 'CV Download + Email', colSpan: 2, rowSpan: 2, colStart: 3, rowStart: 1 },
  { text: 'LinkedIn', colSpan: 1, rowSpan: 1, colStart: 5, rowStart: 1 },
  { text: 'Github', colSpan: 1, rowSpan: 1, colStart: 6, rowStart: 1 },
  { text: 'Instagram', colSpan: 1, rowSpan: 1, colStart: 5, rowStart: 2 },
  { text: 'Twitter', colSpan: 1, rowSpan: 1, colStart: 6, rowStart: 2 },
  { text: 'Darcio Massala', colSpan: 3, rowSpan: 2, colStart: 2, rowStart: 3 },
  { text: 'Random Picture', colSpan: 2, rowSpan: 2, colStart: 5, rowStart: 3 },
  { text: 'About Me', colSpan: 3, rowSpan: 2, colStart: 4, rowStart: 5 },
];

export default function Home() {
  return (
<main className="w-full h-screen p-4 ">
  {/* 3 grid columns */}
<div className="grid grid-cols-3 w-full min-h-14" >
  
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
<div className="flex-1 p-4 h-full">
<div className="grid grid-cols-6 grid-rows-6 gap-4 h-5/6">
        {GridItems2.map((item, index) => (
            <Card
                key={index}
                className={`col-span-${item.colSpan} row-span-${item.rowSpan} col-start-${item.colStart} row-start-${item.rowStart}`}
            >
                {item.text}
            </Card>
        ))}
    </div>
</div>

</main>
  );
}
