import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { siteConfig } from '@/app/siteConfig/site-config';
siteConfig

const GridContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <div className="grid grid-cols-7 grid-rows-7 gap-4 h-full p-5">

    
      {siteConfig.items.map((item, index) => {
        const classNames = [
          `col-span-${item.colSpan}`,
          `row-span-${item.rowSpan}`,
          `col-start-${item.colStart}`,
          `row-start-${item.rowStart}`,
        ].join(' ');
        return (
          <Card key={item.title + index} className={classNames}>
            <CardTitle>{item.title}</CardTitle>
            <CardContent>
              <CardDescription></CardDescription>
            </CardContent>
            <CardFooter>
              {/* Add any footer content here */}
            </CardFooter>
          </Card>
        );
      })}
      </div>
    </>
  );
};

export default GridContainer