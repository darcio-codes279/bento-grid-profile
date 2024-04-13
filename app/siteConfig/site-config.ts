export type layout = {
    colSpan: number,
    rowSpan: number,
    colStart: number,
    rowStart: number,
    text?: string
}

export type GridItemType = "About Me" | "Tech Stack" | "Random" 
                            | "View Works" | "CV Download + Email" | "LinkedIn" 
                            | "Github" | "Instagram" | "Twitter" | "Darcio Massala" | "Random Picture";

export interface GridItemInterface {
    type: GridItemType;
    layout: layout;
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

const GridItems : GridItemInterface[] = [
    {
        layout: {
            colSpan: 2,
            rowSpan: 2,
            colStart: 1,
            rowStart: 1
        },
        type: "Tech Stack",
        title: "Tech Stack",
    },
    {
        layout: {
            colSpan: 1,
            rowSpan: 2,
            colStart: 1,
            rowStart: 3
        },
        type: "Random",
        title: "Random",
    },
    {
        layout: {
            colSpan: 3,
            rowSpan: 2,
            colStart: 1,
            rowStart: 5
        },
        type: "View Works",
        title: "View Works",
    },
    {
        layout: {
            colSpan: 2,
            rowSpan: 2,
            colStart: 3,
            rowStart: 1
        },
        type: "CV Download + Email",
        title: "CV Download + Email",
    },
    {
        layout: {
            colSpan: 1,
            rowSpan: 1,
            colStart: 5,
            rowStart: 1
        },
        type: "LinkedIn",
        title: "LinkedIn",
    },
    {
        layout: {
            colSpan: 1,
            rowSpan: 1,
            colStart: 6,
            rowStart: 1
        },
        type: "Github",
        title: "Github",
    },
    {
        layout: {
            colSpan: 1,
            rowSpan: 1,
            colStart: 5,
            rowStart: 3
        },
        type: "Instagram",
        title: "Instagram",
    },
    {
        layout: {
            colSpan: 1,
            rowSpan: 1,
            colStart: 6,
            rowStart: 2
        },
        type: "Twitter",
        title: "Twitter",
    },
    {
        layout: {
            colSpan: 3,
            rowSpan: 2,
            colStart: 2,
            rowStart: 3
        },
        type: "Darcio Massala",
        title: "Darcio Massala",
    },
    {
        layout: {
            colSpan: 2,
            rowSpan: 2,
            colStart: 5,
            rowStart: 3
        },
        type: "Random Picture",
        title: "Random Picture",
    },
    {
        layout: {
            colSpan: 3,
            rowSpan: 2,
            colStart: 4,
            rowStart: 5
        },
        type: "About Me",
        title: "About Me",
    },

]

export const siteConfig = {
    name: "Darcio Massala",
    title: "Modern Engineer",
    bio: "https://kollectif.com",
    location: "Manchester, UK",
    email: "darciomassala@gmail.com",
    items: GridItems,
} as const