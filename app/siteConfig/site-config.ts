export type Gridlayout = {
    colSpan: number,
    rowSpan: number,
    colStart: number,
    rowStart: number,
    title?: string
}

export type GridItemType = "About Me" | "Tech Stack" | "Random" 
                            | "View Works" | "CV Download + Email" | "LinkedIn" 
                            | "Github" | "Instagram" | "Twitter" | "Avatar" | "Random-2";

export interface GridItemInterface {
    type: GridItemType;
    layout: Gridlayout;
    title: string;
    icon?: string;
    iconColor?: string
    link?: string;
    image?: string;
    description?: string;
    color?: string;
    buttonTitle?: string;
    buttonSecondaryTitle?: string;
    buttonColor?: string;
    buttonSecondaryColor?: string;
    buttonLink?: string;
    // swiper
    content?: string;

}

const GridItems = [
    {
        title: 'Tech Stack',
        colSpan: 3,
        rowSpan: 2,
        colStart: 1,
        rowStart: 1,
        type: 'Tech Stack',
    },    
    {
        title: 'CV Download + Email',
        colSpan: 2,
        rowSpan: 2,
        colStart: 4,
        rowStart: 1,
        type: 'CV Download + Email',
    }, 
    {
        title: 'LinkedIn',
        colSpan: 1,
        rowSpan: 1,
        colStart: 6,
        rowStart: 1,
        type: 'LinkedIn',
    },   
    {
        title: 'Github',
        colSpan: 1,
        rowSpan: 1,
        colStart: 7,
        rowStart: 1,
        type: 'Github',
    },
    {
        title: 'Instagram',
        colSpan: 1,
        rowSpan: 1,
        colStart: 6,
        rowStart: 2,
        type: 'Instagram',
    },
    {
        title: 'Twitter',
        colSpan: 1,
        rowSpan: 1,
        colStart: 7,
        rowStart: 2,
        type: 'Twitter',
    },
    {
        title: 'Random',
        colSpan: 2,
        rowSpan: 2,
        colStart: 1,
        rowStart: 3,
        type: 'Random',
    },

    {
        title: 'Avatar',
        colSpan: 3,
        rowSpan: 2,
        colStart: 2,
        rowStart: 3,
        type: 'Avatar',
    },
    {
        title: 'Random-2',
        colSpan: 2,
        rowSpan: 2,
        colStart: 6,
        rowStart: 3,
        type: 'Random-2',
    },
    {
        title: 'View Works',
        colSpan: 3,
        rowSpan: 2,
        colStart: 2,
        rowStart: 3,
        type: 'View Works',
    },
    {
        title: 'About Me',
        colSpan: 3,
        rowSpan: 2,
        colStart: 2,
        rowStart: 3,
        type: 'About Me',
    },
    {
        title: 'Buy me a coffee',
        colSpan: 1,
        rowSpan: 1,
        colStart: 6,
        rowStart: 1,
        type: 'Buy me a coffee',
    },
    {
        title: 'Emoji',
        colSpan: 1,
        rowSpan: 1,
        colStart: 7,
        rowStart: 1,
        type: 'Emoji',
    },
];

export const siteConfig = {
    name: "DARCIO MASSALA",
    title: "Modern Engineer",
    bio: "https://kollectif.com",
    location: "Manchester, UK",
    email: "darciomassala@gmail.com",
    items: GridItems,
} as const