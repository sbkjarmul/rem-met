import Image from "next/image";
import { redirect } from "next/navigation";

type MobileMenuProductCardProps = {
  title: string;
  name: string;
  imageSrc: string;
  imageAlt: string;
  buttonText: string;
  path: string;
  onClick: () => void;
};

const MobileMenuProductCard = ({
  title,
  name,
  imageSrc,
  imageAlt,
  path,
  onClick,
}: MobileMenuProductCardProps) => {
  const handleClick = () => {
    onClick();
    redirect(path);
  };

  return (
    <div
      className="flex h-full w-full flex-col justify-center items-center p-6 min-w-full bg-brand-blue-300"
      onClick={handleClick}
    >
      <div className="flex flex-col items-center gap-2">
        <p className="text-gray-400 text-lg text-center uppercase leading-tight">
          {title}
        </p>
        <div className="text-4xl font-medium text-gray-200">{name}</div>
      </div>
      <div className="relative aspect-video w-full">
        <Image src={imageSrc} alt={imageAlt} fill className="object-contain" />
      </div>
    </div>
  );
};

export default MobileMenuProductCard;
