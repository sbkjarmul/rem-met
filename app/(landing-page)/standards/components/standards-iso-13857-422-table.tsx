import { cn } from "@/lib/utils";
import useTranslations from "@/hooks/useTranslations";

const TableRow = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <tr className={cn("w-full flex text-xs", className)}>{children}</tr>;
};

const TableCell = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <td
      className={cn(
        "flex items-center justify-center text-gray-900 text-center p-1 flex-1",
        className
      )}
    >
      {children}
    </td>
  );
};

const TableHeader = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <td
      className={cn(
        "flex items-center justify-center text-gray-900 text-center p-1 flex-1",
        className
      )}
    >
      {children}
    </td>
  );
};

const StandardsIso13857422Table = () => {
  const t = useTranslations("standards");

  return (
    <table className="w-full">
      <thead>
        <TableRow>
          <TableHeader className="w-12 md:w-20 flex-none" />
          <TableHeader className="w-20 font-medium text-lg leading-none md:text-2xl">
            B
          </TableHeader>
          <TableHeader>1000</TableHeader>
          <TableHeader>1200</TableHeader>
          <TableHeader>1400</TableHeader>
          <TableHeader>1600</TableHeader>
          <TableHeader>1800</TableHeader>
          <TableHeader>2000</TableHeader>
          <TableHeader>2200</TableHeader>
          <TableHeader>2400</TableHeader>
          <TableHeader>2500</TableHeader>
        </TableRow>
      </thead>

      <tbody>
        <TableRow>
          <TableCell className="w-12 md:w-20 flex-none font-medium text-lg leading-none md:text-2xl">
            A
          </TableCell>
          <TableCell className="flex-1 text-gray-100 bg-brand-blue-200">
            {t("iso13857.422.table.header")}
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="w-12 md:w-20 flex-none">2500</TableCell>
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
          <TableCell className="w-12 md:w-20 flex-none bg-gray-100">
            2400
          </TableCell>
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
          <TableCell className="w-12 md:w-20 flex-none">2200</TableCell>
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
          <TableCell className="w-12 md:w-20 flex-none bg-gray-100">
            2000
          </TableCell>
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
          <TableCell className="w-12 md:w-20 flex-none">1800</TableCell>
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
          <TableCell className="w-12 md:w-20 flex-none bg-gray-100">
            1600
          </TableCell>
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
          <TableCell className="w-12 md:w-20 flex-none">1400</TableCell>
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
          <TableCell className="w-12 md:w-20 flex-none bg-gray-100">
            1200
          </TableCell>
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
          <TableCell className="w-12 md:w-20 flex-none">1000</TableCell>
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
          <TableCell className="w-12 md:w-20 flex-none bg-gray-100">
            800
          </TableCell>
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
          <TableCell className="w-12 md:w-20 flex-none">600</TableCell>
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
          <TableCell className="w-12 md:w-20 flex-none bg-gray-100">
            400
          </TableCell>
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
          <TableCell className="w-12 md:w-20 flex-none">200</TableCell>
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
          <TableCell className="w-12 md:w-20 flex-none bg-gray-100">
            0
          </TableCell>
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
      </tbody>
    </table>
  );
};

export default StandardsIso13857422Table;
