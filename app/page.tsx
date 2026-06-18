"use client";
import { useEffect, useState } from "react";
import ToogleTheme from "./components/toggletheme";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./components/ui/dropdown-menu";
import { Button } from "./components/ui/button";

export default function Home() {

  const [datetime, setdate] = useState(new Date());

  const [sizeval, setSize] = useState(10);
  const [currentchecked, setchecked] = useState(false);


  useEffect(() => {

    const interval = setInterval(() => {
      setdate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedtime = Intl.DateTimeFormat("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).format(datetime);

  const [sizeint, setClockSize] = useState<number>(100);

  const sizeClasses: Record<number, string> = {
    5: "text-[5px]",
    10: "text-[10px]",
    20: "text-[20px]",
    40: "text-[40px]",
    60: "text-[60px]",
    100: "text-[100px]",
    110: "text-[110px]",
    120: "text-[120px]",
    140: "text-[140px]",
    160: "text-[160px]",
    200: "text-[200px]",
    210: "text-[210px]"
  };

  return (
    <div className="bg-background text-foreground dark:bg-black dark:text-white bg-white text-black">
      <div className="flex flex-row flex-1 items-center justify-between ">
        <div className="flex flex-row flex-1 items-center justify-between ">
          <h1 className="text-2xl m-5 font-bold" suppressHydrationWarning>Time Now</h1>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="default">size :{sizeint}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background text-foreground dark:bg-gray-500/20 dark:text-white bg-white text-black rounded-sm border-solid">
              <DropdownMenuGroup>
                <DropdownMenuLabel>size</DropdownMenuLabel>
                <DropdownMenuCheckboxItem checked={sizeint === 5} onCheckedChange={() => setClockSize(5)}>5px</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={sizeint === 10} onCheckedChange={() => setClockSize(10)}>10px</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={sizeint === 20} onCheckedChange={() => setClockSize(20)}>20px</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={sizeint === 40} onCheckedChange={() => setClockSize(40)}>40px</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={sizeint === 60} onCheckedChange={() => setClockSize(60)}>60px</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={sizeint === 100} onCheckedChange={() => setClockSize(100)}>100px</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={sizeint === 110} onCheckedChange={() => setClockSize(110)}>110px</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={sizeint === 120} onCheckedChange={() => setClockSize(120)}>120px</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={sizeint === 140} onCheckedChange={() => setClockSize(140)}>140px</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={sizeint === 160} onCheckedChange={() => setClockSize(160)}>160px</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={sizeint === 200} onCheckedChange={() => setClockSize(200)}>200px</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={sizeint === 210} onCheckedChange={() => setClockSize(210)}>210px</DropdownMenuCheckboxItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="mr-4 ml-2">
          <ToogleTheme></ToogleTheme>
        </div>
      </div>

      <div className="flex flex-col flex-1 items-center justify-center ">

        <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16">

          <div className="">
            <h1 className={sizeClasses[sizeint]}>{formattedtime}</h1>
          </div>

        </main>

      </div>
    </div>
  );
}
