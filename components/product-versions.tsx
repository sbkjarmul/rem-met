import Image from "next/image";

import Container from "@/components/ui/container";

interface ProductVersionCard {
  name: string;
  version: string;
  description: string;
  imageUrl: string;
}

const ProductVersionCard = ({
  name,
  version,
  description,
  imageUrl,
}: ProductVersionCard) => {
  return (
    <div className="flex flex-col gap-8 w-full bg-gray-100 px-6 py-16 justify-center items-center">
      <div className="flex flex-col gap-2 items-center">
        <h3 className="text-4xl flex items-center gap-2">
          <span className="text-gray-600 font-medium">{name}</span>
          <span className="text-gray-500 font-normal">{version}</span>
        </h3>
        <p className="text-gray-500 text-center text-sm whitespace-pre-line">
          {description}
        </p>
      </div>
      <div className="relative w-full aspect-square">
        <Image
          src={imageUrl}
          alt={`${name} ${version}. ${description}`}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

interface ProductVersionsSectionProps {
  header: React.ReactNode;
  imageUrl: string;
  imageAlt: string;
  productVersions: ProductVersionCard[];
}

const ProductVersionsSection = ({
  header,
  imageUrl,
  imageAlt,
  productVersions,
}: ProductVersionsSectionProps) => {
  const size = productVersions.length;

  return (
    <section className="flex flex-col justify-end relative bg-gray-900 text-gray-100">
      <Container className="relative z-1 flex flex-col justify-center gap-20 py-16 md:py-20 md:pb-0">
        <div className="flex flex-col gap-10 items-center">
          {header}

          <div className="relative w-full aspect-[3/1] hidden md:block">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </Container>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${size} w-full gap-[1px] bg-gray-300 border border-gray-300`}
      >
        {productVersions.map((version) => (
          // TODO: Add unique key
          <ProductVersionCard key={version.name + Math.random()} {...version} />
        ))}
      </div>
    </section>
  );
};

export default ProductVersionsSection;
