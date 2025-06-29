import { cn } from "@/lib/utils";
import useTranslations from "@/hooks/useTranslations";

const TableRow = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("w-full flex text-xs", className)}>{children}</div>;
};

const TableCell = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center text-gray-900 text-center p-1 flex-1",
        className
      )}
    >
      {children}
    </div>
  );
};

const StandardsIso13857422Table = () => {
  const t = useTranslations("standards");

  return (
    <div className="w-full overflow-x-auto">
      <TableRow>
        <TableCell className="w-20 flex-none" />
        <TableCell className="font-medium text-2xl">B</TableCell>
        <TableCell>1000</TableCell>
        <TableCell>1200</TableCell>
        <TableCell>1400</TableCell>
        <TableCell>1600</TableCell>
        <TableCell>1800</TableCell>
        <TableCell>2000</TableCell>
        <TableCell>2200</TableCell>
        <TableCell>2400</TableCell>
        <TableCell>2500</TableCell>
      </TableRow>

      <TableRow>
        <TableCell className="w-20 flex-none font-medium text-2xl">A</TableCell>
        <TableCell className="flex-1 text-gray-100 bg-brand-blue-200">
          {t("iso13857.422.table.header")}
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell className="w-20 flex-none">2500</TableCell>
        <TableCell></TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
      </TableRow>

      <TableRow className="bg-gray-400">
        <TableCell className="w-20 flex-none bg-gray-100">2400</TableCell>
        <TableCell></TableCell>
        <TableCell>100</TableCell>
        <TableCell>100</TableCell>
        <TableCell>100</TableCell>
        <TableCell>100</TableCell>
        <TableCell>100</TableCell>
        <TableCell>100</TableCell>
        <TableCell>100</TableCell>
        <TableCell>100</TableCell>
        <TableCell>0</TableCell>
      </TableRow>

      <TableRow>
        <TableCell className="w-20 flex-none">2200</TableCell>
        <TableCell></TableCell>
        <TableCell>600</TableCell>
        <TableCell>600</TableCell>
        <TableCell>500</TableCell>
        <TableCell>500</TableCell>
        <TableCell>400</TableCell>
        <TableCell>350</TableCell>
        <TableCell>250</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
      </TableRow>

      <TableRow className="bg-gray-400">
        <TableCell className="w-20 flex-none bg-gray-100">2000</TableCell>
        <TableCell></TableCell>
        <TableCell>1100</TableCell>
        <TableCell>900</TableCell>
        <TableCell>700</TableCell>
        <TableCell>600</TableCell>
        <TableCell>500</TableCell>
        <TableCell>350</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
      </TableRow>

      <TableRow>
        <TableCell className="w-20 flex-none">1800</TableCell>
        <TableCell></TableCell>
        <TableCell>1100</TableCell>
        <TableCell>1000</TableCell>
        <TableCell>900</TableCell>
        <TableCell>900</TableCell>
        <TableCell>600</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
      </TableRow>

      <TableRow className="bg-gray-400">
        <TableCell className="w-20 flex-none bg-gray-100">1600</TableCell>
        <TableCell></TableCell>
        <TableCell>1300</TableCell>
        <TableCell>1000</TableCell>
        <TableCell>900</TableCell>
        <TableCell>900</TableCell>
        <TableCell>500</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
      </TableRow>

      <TableRow>
        <TableCell className="w-20 flex-none">1400</TableCell>
        <TableCell></TableCell>
        <TableCell>1300</TableCell>
        <TableCell>1000</TableCell>
        <TableCell>900</TableCell>
        <TableCell>800</TableCell>
        <TableCell>100</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
      </TableRow>

      <TableRow className="bg-gray-400">
        <TableCell className="w-20 flex-none bg-gray-100">1200</TableCell>
        <TableCell></TableCell>
        <TableCell>1400</TableCell>
        <TableCell>1000</TableCell>
        <TableCell>900</TableCell>
        <TableCell>500</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
      </TableRow>

      <TableRow>
        <TableCell className="w-20 flex-none">1000</TableCell>
        <TableCell></TableCell>
        <TableCell>1400</TableCell>
        <TableCell>900</TableCell>
        <TableCell>600</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
      </TableRow>

      <TableRow className="bg-gray-400">
        <TableCell className="w-20 flex-none bg-gray-100">800</TableCell>
        <TableCell></TableCell>
        <TableCell>1300</TableCell>
        <TableCell>500</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
      </TableRow>

      <TableRow>
        <TableCell className="w-20 flex-none">600</TableCell>
        <TableCell></TableCell>
        <TableCell>1200</TableCell>
        <TableCell>500</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
      </TableRow>

      <TableRow className="bg-gray-400">
        <TableCell className="w-20 flex-none bg-gray-100">400</TableCell>
        <TableCell></TableCell>
        <TableCell>1200</TableCell>
        <TableCell>300</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
      </TableRow>

      <TableRow>
        <TableCell className="w-20 flex-none">200</TableCell>
        <TableCell></TableCell>
        <TableCell>1200</TableCell>
        <TableCell>200</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
      </TableRow>

      <TableRow className="bg-gray-400">
        <TableCell className="w-20 flex-none bg-gray-100">0</TableCell>
        <TableCell></TableCell>
        <TableCell>1100</TableCell>
        <TableCell>200</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
      </TableRow>
    </div>
  );
};

export default StandardsIso13857422Table;
