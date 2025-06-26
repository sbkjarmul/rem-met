import Image from "next/image";
import NextLink from "next/link";
import Button from "@/components/ui/button";

type MegaMenuProductCardProps = {
  title: string;
  name: string;
  imageSrc: string;
  imageAlt: string;
  buttonText: string;
  path: string;
};

const MegaMenuProductCard = ({
  title,
  name,
  imageSrc,
  imageAlt,
  buttonText,
  path,
}: MegaMenuProductCardProps) => {
  return (
    <div className="flex h-full w-full flex-col justify-center items-center dark:hover:bg-gray-800 hover:bg-white p-6 min-w-full">
      <div className="flex flex-col items-center">
        <p className="text-muted-foreground text-sm leading-tight">{title}</p>
        <div className="text-2xl font-medium">{name}</div>
      </div>
      <div className="relative aspect-video w-full">
        <Image src={imageSrc} alt={imageAlt} fill className="object-contain" />
      </div>
      <Button className="w-full">
        <NextLink href={path} className="w-full">
          {buttonText}
        </NextLink>
      </Button>
    </div>
  );
};

export default MegaMenuProductCard;
