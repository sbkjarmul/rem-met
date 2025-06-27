import useTranslations from "@/hooks/useTranslations";
import { type SpecificationTableItem } from "./interfaces";
import { cn } from "@/lib/utils";

interface SpecificationTableItemProps extends SpecificationTableItem {
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
        "grid grid-cols-[100px_1fr] md:grid-cols-[200px_1fr] gap-2 text-sm",
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
  data: SpecificationTableItem[];
}

const SpecificationTable = ({ data }: SpecificationTableProps) => {
  const t = useTranslations("gecko");

  return (
    <div className="flex flex-col gap-2 text-left ">
      <h4 className="text-md font-medium text-brand-blue-200">
        <span className="hidden md:block">
          {t("specification.table.title")}
        </span>
        <span className="block md:hidden">
          {t("specification.table.title.mobile")}
        </span>
      </h4>
      <div>
        {data.map((item, index) => (
          <SpecificationTableItem
            key={item.name + Math.random()}
            index={index}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecificationTable;
