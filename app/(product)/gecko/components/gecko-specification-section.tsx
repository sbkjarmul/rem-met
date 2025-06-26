import Image from "next/image";
import { AccentText } from "@/components/ui/accent-text";
import Container from "@/components/ui/container";
import useTranslations from "@/hooks/useTranslations";
import { cn } from "@/lib/utils";

interface SpecificationTableItemProps {
  name: string;
  value: string | React.ReactNode;
  index: number;
}

const SpecificationTableItem = ({
  name,
  value,
  index,
}: SpecificationTableItemProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-[200px_1fr] gap-2 text-sm",
        index % 2 === 0 ? "bg-gray-200" : "bg-gray-300",
        "text-gray-600"
      )}
    >
      <div className="p-2">{name}</div>
      <div className="p-2 whitespace-pre-line">{value}</div>
    </div>
  );
};

interface SpecificationTableProps {
  data: { name: string; value: string | React.ReactNode }[];
}

const SpecificationTable = ({ data }: SpecificationTableProps) => {
  const t = useTranslations("gecko");

  return (
    <div className="flex flex-col gap-2 text-left ">
      <h4 className="text-md font-medium text-brand-blue-200">
        {t("specification.table.title")}
      </h4>
      <div>
        {data.map((item, index) => (
          <SpecificationTableItem key={item.name} index={index} {...item} />
        ))}
      </div>
    </div>
  );
};

const GeckoSpecificationSection = () => {
  const t = useTranslations("gecko");

  return (
    <section className="flex flex-col justify-end relative bg-gray-300 text-gray-800 py-20">
      <Container className="relative z-1 flex flex-col justify-center gap-20">
        <div className="flex flex-col gap-10 ">
          <div className="flex flex-col gap-2 items-center text-center">
            <AccentText className="text-brand-blue-200">
              {t("specification.accent")}
            </AccentText>
            <h2 className="text-4xl font-medium gap-2 flex items-center uppercase">
              {t("specification.title")}
            </h2>
          </div>

          <section className="flex flex-col md:flex-row gap-10 w-full">
            <div className="relative aspect-square w-1/2">
              <Image
                src="/images/products/rem-met-gecko-air-panel.png"
                alt={t("specification.panel.alt")}
                fill
                className="object-contain"
              />
            </div>

            <aside className="flex flex-col gap-16 w-1/2 justify-start items-start">
              <div className="flex flex-col gap-2 justify-start items-start">
                <h3 className="text-3xl font-medium text-brand-blue-200">
                  {t("specification.panel.title")}
                </h3>
                <p className="text-gray-600 text-sm text-left">
                  {t("specification.panel.description")}
                </p>
              </div>

              <SpecificationTable
                data={[
                  {
                    name: t("specification.panel.table.height"),
                    value: t("specification.panel.table.height.value"),
                  },
                  {
                    name: t("specification.panel.table.width"),
                    value: t("specification.panel.table.width.value"),
                  },
                  {
                    name: t("specification.panel.table.colors"),
                    value: (
                      <div className="flex gap-1 items-center h-full">
                        <div className="w-5 h-5 bg-yellow-500 rounded-full border-1 border-gray-300" />
                        <div className="w-5 h-5 bg-black rounded-full border-1 border-gray-400" />
                        <div className="w-5 h-5 bg-brand-blue-200 rounded-full border-1 border-gray-400" />
                        <div className="w-5 h-5 bg-green-600 rounded-full border-1 border-gray-400" />
                      </div>
                    ),
                  },
                ]}
              />
            </aside>
          </section>

          <section className="flex flex-col md:flex-row gap-10 w-full">
            <aside className="flex flex-col gap-16 w-1/2 justify-start items-start">
              <div className="flex flex-col gap-2 justify-start items-start">
                <h3 className="text-3xl font-medium text-brand-blue-200">
                  {t("specification.gates.title")}
                </h3>
                <p className="text-gray-600 text-sm text-left">
                  {t("specification.gates.description")}
                </p>
              </div>

              <SpecificationTable
                data={[
                  {
                    name: t("specification.gates.table.height"),
                    value: t("specification.gates.table.height.value"),
                  },
                  {
                    name: t("specification.gates.table.width"),
                    value: t("specification.gates.table.width.value"),
                  },
                  {
                    name: t("specification.gates.table.colors"),
                    value: (
                      <div className="flex gap-1 items-center h-full">
                        <div className="w-5 h-5 bg-yellow-500 rounded-full border-1 border-gray-300" />
                        <div className="w-5 h-5 bg-black rounded-full border-1 border-gray-400" />
                        <div className="w-5 h-5 bg-brand-blue-200 rounded-full border-1 border-gray-400" />
                        <div className="w-5 h-5 bg-green-600 rounded-full border-1 border-gray-400" />
                      </div>
                    ),
                  },
                ]}
              />
            </aside>

            <div className="relative aspect-square w-1/2">
              <Image
                src="/images/products/rem-met-gecko-air-gate.png"
                alt={t("specification.panel.alt")}
                fill
                className="object-contain"
              />
            </div>
          </section>

          <section className="flex flex-col md:flex-row gap-10 w-full">
            <div className="relative aspect-square w-1/2">
              <Image
                src="/images/products/rem-met-fence-post.png"
                alt={t("specification.posts.alt")}
                fill
                className="object-contain"
              />
            </div>

            <aside className="flex flex-col gap-16 w-1/2 justify-start items-start">
              <div className="flex flex-col gap-2 justify-start items-start">
                <h3 className="text-3xl font-medium text-brand-blue-200">
                  {t("specification.posts.title")}
                </h3>
                <p className="text-gray-600 text-sm text-left">
                  {t("specification.posts.description")}
                </p>
              </div>

              <SpecificationTable
                data={[
                  {
                    name: t("specification.posts.table.height"),
                    value: t("specification.posts.table.height.value"),
                  },
                  {
                    name: t("specification.posts.table.dimension"),
                    value: t("specification.posts.table.dimension.value"),
                  },
                  {
                    name: t("specification.posts.table.colors"),
                    value: (
                      <div className="flex gap-1 items-center h-full">
                        <div className="w-5 h-5 bg-yellow-500 rounded-full border-1 border-gray-300" />
                        <div className="w-5 h-5 bg-black rounded-full border-1 border-gray-400" />
                        <div className="w-5 h-5 bg-brand-blue-200 rounded-full border-1 border-gray-400" />
                        <div className="w-5 h-5 bg-green-600 rounded-full border-1 border-gray-400" />
                      </div>
                    ),
                  },
                ]}
              />
            </aside>
          </section>
        </div>
      </Container>
    </section>
  );
};

export default GeckoSpecificationSection;
