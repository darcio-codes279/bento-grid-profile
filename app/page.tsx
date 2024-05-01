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
import GridItem from "@/components/gridcontainer";
import GridContainer from "@/components/gridcontainer";
import Avatar from "@/components/grid-items/avatar";

const GridItems = new Array(36).fill(0);

// const GridItems2 = [
//   { text: 'Tech Stack', colSpan: 2, rowSpan: 2, colStart: 1, rowStart: 1 },
//   { text: 'Random', colSpan: 1, rowSpan: 2, colStart: 1, rowStart: 3 },
//   { text: 'View Works', colSpan: 3, rowSpan: 2, colStart: 1, rowStart: 5 },
//   { text: 'CV Download + Email', colSpan: 2, rowSpan: 2, colStart: 3, rowStart: 1 },
//   { text: 'LinkedIn', colSpan: 1, rowSpan: 1, colStart: 5, rowStart: 1 },
//   { text: 'Github', colSpan: 1, rowSpan: 1, colStart: 6, rowStart: 1 },
//   { text: 'Instagram', colSpan: 1, rowSpan: 1, colStart: 5, rowStart: 2 },
//   { text: 'Twitter', colSpan: 1, rowSpan: 1, colStart: 6, rowStart: 2 },
//   { text: 'Darcio Massala', colSpan: 3, rowSpan: 2, colStart: 2, rowStart: 3 },
//   { text: 'Random Picture', colSpan: 2, rowSpan: 2, colStart: 5, rowStart: 3 },
//   { text: 'About Me', colSpan: 3, rowSpan: 2, colStart: 4, rowStart: 5 }
// ];

// const GridItems3 = [
//   { text: 'Tech Stack', colSpan: 2, rowSpan: 2, colStart: 1, rowStart: 1 },
//   { text: 'Random', colSpan: 1, rowSpan: 2, colStart: 1, rowStart: 3 },
//   { text: 'View Works', colSpan: 3, rowSpan: 2, colStart: 1, rowStart: 5 },
//   { text: 'CV Download + Email', colSpan: 2, rowSpan: 2, colStart: 3, rowStart: 1 },
//   { text: 'LinkedIn', colSpan: 1, rowSpan: 1, colStart: 5, rowStart: 1 },
//   { text: 'Github', colSpan: 1, rowSpan: 1, colStart: 6, rowStart: 1 },
//   { text: 'Instagram', colSpan: 1, rowSpan: 1, colStart: 5, rowStart: 2 },
//   { text: 'Twitter', colSpan: 1, rowSpan: 1, colStart: 6, rowStart: 2 },
//   { text: 'Darcio Massala', colSpan: 3, rowSpan: 2, colStart: 2, rowStart: 3 },
//   { text: 'Random Picture', colSpan: 2, rowSpan: 2, colStart: 5, rowStart: 3 },
//   { text: 'About Me', colSpan: 3, rowSpan: 2, colStart: 4, rowStart: 5 }
// ];

const GridItems4 = [
  { text: 'Tech Stack', colSpan: 3, rowSpan: 2, colStart: 1, rowStart: 1 },
  { text: 'CV Download + Email', colSpan: 2, rowSpan: 2, colStart: 4, rowStart: 1 },
  { text: 'LinkedIn', colSpan: 1, rowSpan: 1, colStart: 6, rowStart: 1 },
  { text: 'Github', colSpan: 1, rowSpan: 1, colStart: 7, rowStart: 1 },
  { text: 'Instagram', colSpan: 1, rowSpan: 1, colStart: 6, rowStart: 2 },
  { text: 'Twitter', colSpan: 1, rowSpan: 1, colStart: 7, rowStart: 2 },
  { text: 'Random', colSpan: 2, rowSpan: 2, colStart: 1, rowStart: 3 },
  { text: 'Darcio Massala', colSpan: 3, rowSpan: 2, colStart: 2, rowStart: 3 },
  { text: 'Random-2', colSpan: 2, rowSpan: 2, colStart: 6, rowStart: 3 },
  { text: 'View Works', colSpan: 3, rowSpan: 2, colStart: 2, rowStart: 3 },
  { text: 'About Me', colSpan: 3, rowSpan: 2, colStart: 2, rowStart: 3 },
  { text: 'Buy me a coffee', colSpan: 1, rowSpan: 1, colStart: 6, rowStart: 1 },
  { text: 'Emoji', colSpan: 1, rowSpan: 1, colStart: 7, rowStart: 1 },
];
export default function Home() {
  return (
<main className="w-full h-screen p-4 ">
  {/* 3 grid columns */}
<div className="grid grid-cols-3 w-full min-h-16" >
  
<Image
        src="/images/Logo.png"
        alt="Description of the image"
        width={100}
        height={100}
      />

      <h1 className="text-4xl text-center text-pretty">{siteConfig.name}</h1>
<ThemeToggle />
</div>
{siteConfig.items.map((item, index) => {
  return (
        <GridContainer key={`${item.title}-${index}`}>
          {item.type === 'Avatar' ? 
          <Avatar item={item.title}></Avatar> : 
          <div>Not implemented yet</div>}
        </GridContainer>
  );
})}
{/* <GridContainer>
</GridContainer> */}

</main>
  );
}
