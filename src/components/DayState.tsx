import Image from "next/image";
import iconsCheck from "../img/check.svg";
import Iconsx from "../img/x.svg";
import iconsGreyMark from "../img/gray-mark.svg";

export default function DayState({ day }: { day: boolean | undefined }) {
  let image: [string, string, number?] = [iconsGreyMark, iconsGreyMark, 20];

  if (day === true) image = [iconsCheck, iconsCheck, 20];
  if (day === false) image = [Iconsx, Iconsx, 20];
  
  const [src, alt, size ] = image;
  return (
    <div className="flex items-center justify-center  h-9 ">
      <Image src={src} alt={alt} width={size} height={size}/>
    </div>
  )
}
