import Image from "next/image";

import SpecificationTable from "./specification-table";
import { type SpecificationTableItem } from "./interfaces";
import { cn } from "@/lib/utils";

interface SpecificationBoxProps {
  title: string;
  description: string;
  data: SpecificationTableItem[];
  imageSrc: string;
  imageAlt: string;
  isReversed?: boolean;
}

const SpecificationBox = ({
  title,
  description,
  data,
  imageSrc,
  imageAlt,
  isReversed = false,
}: SpecificationBoxProps) => {
  return (
    <section
      className={cn("flex flex-col md:flex-row gap-10 w-full", {
        "flex-col md:flex-row-reverse": isReversed,
      })}
    >
      <div className="relative aspect-square w-full md:w-1/2">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain"
        />
      </div>

      <aside className="flex flex-col gap-16 w-full md:w-1/2 justify-start items-start">
        <div className="flex flex-col gap-2 justify-start items-start">
          <h3 className="text-3xl font-medium text-brand-blue-200">{title}</h3>
          <p className="text-gray-600 text-md md:text-sm text-left">
            {description}
          </p>
        </div>

        <SpecificationTable data={data} />
      </aside>
    </section>
  );
};

export default SpecificationBox;
