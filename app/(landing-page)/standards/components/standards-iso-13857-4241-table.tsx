import Image from "next/image";

import { cn } from "@/lib/utils";
import useTranslations from "@/hooks/useTranslations";

const TableWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full overflow-x-auto">{children}</div>;
};

const Table = ({ children }: { children: React.ReactNode }) => {
  return (
    <table className="min-w-[1000px] w-full h-fit border-separate border-spacing-2 -mx-2">
      {children}
    </table>
  );
};

const TableHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <th
      className={cn(
        "text-gray-100 p-4 bg-brand-blue-200 font-normal",
        className
      )}
    >
      {children}
    </th>
  );
};

const TableCell = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <td
      className={cn(
        "text-gray-900 p-4 bg-gray-200 font-normal text-center relative h-full",
        className
      )}
    >
      {children}
    </td>
  );
};

const TableCellNested = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-gray-200 flex items-center justify-center h-full w-full flex-1",
        className
      )}
    >
      {children}
    </div>
  );
};

const TableCellImage = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <td className={cn("bg-white font-normal relative w-80 p-4", className)}>
      <div className="flex items-center justify-center h-full w-full">
        {children}
      </div>
    </td>
  );
};

const TableRow = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <tr className={cn("w-full", className)}>{children}</tr>;
};

const StandardsIso138574241Table = () => {
  const t = useTranslations("standards");

  return (
    <TableWrapper>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>{t("bodyPart")}</TableHeader>
            <TableHeader>{t("illustration")}</TableHeader>
            <TableHeader className="w-40">{t("hole")}</TableHeader>
            <TableHeader className="p-2">
              <div className="flex flex-col gap-2">
                <div>{t("safetyDistance")}</div>
                <div className="flex flex-row">
                  <span className="flex-1">{t("slot")}</span>
                  <span className="flex-1">{t("square")}</span>
                  <span className="flex-1">{t("circle")}</span>
                </div>
              </div>
            </TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>{t("fingertip")}</TableCell>

            <TableCellImage>
              <Image
                src="/images/standards/rem-met-iso-13857-image-1.svg"
                alt="Fingertip"
                height={200}
                width={150}
              />
            </TableCellImage>

            <TableCell className="flex flex-col gap-2 bg-transparent p-0">
              <TableCellNested className="flex items-center justify-center">
                {"e ≤ 4"}
              </TableCellNested>
              <TableCellNested className="flex items-center justify-center">
                {"4 < e ≤ 6"}
              </TableCellNested>
            </TableCell>

            <TableCell className="bg-transparent p-0">
              <div className="flex flex-col gap-2 h-full">
                <TableCellNested className="flex flex-row gap-2">
                  <TableCellNested className="flex-1">{"≥ 2"}</TableCellNested>
                  <TableCellNested className="flex-1">{"≥ 2"}</TableCellNested>
                  <TableCellNested className="flex-1">{"≥ 2"}</TableCellNested>
                </TableCellNested>

                <TableCellNested className="flex flex-row gap-2">
                  <TableCellNested className="flex-1">{"≥ 10"}</TableCellNested>
                  <TableCellNested className="flex-1">{"≥ 5"}</TableCellNested>
                  <TableCellNested className="flex-1">{"≥ 5"}</TableCellNested>
                </TableCellNested>
              </div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>{t("fingerTipToTheBase")}</TableCell>

            <TableCell className="bg-white flex items-center justify-center">
              <Image
                src="/images/standards/rem-met-iso-13857-image-2.svg"
                alt="Fingertip"
                height={200}
                width={150}
              />
            </TableCell>

            <TableCell className="bg-transparent p-0">
              <div className="flex flex-col gap-2 h-full">
                <TableCellNested className="flex items-center justify-center">
                  {"6 < e ≤ 8"}
                </TableCellNested>
                <TableCellNested className="flex items-center justify-center">
                  {"8 < e ≤ 10"}
                </TableCellNested>
              </div>
            </TableCell>

            <TableCell className="bg-transparent p-0">
              <div className="flex flex-col gap-2 h-full">
                <TableCellNested className="flex flex-row gap-2">
                  <TableCellNested className="flex-1">{"≥ 20"}</TableCellNested>
                  <TableCellNested className="flex-1">{"≥ 25"}</TableCellNested>
                  <TableCellNested className="flex-1">{"≥ 5"}</TableCellNested>
                </TableCellNested>

                <TableCellNested className="flex flex-row gap-2">
                  <TableCellNested className="flex-1">{"≥ 80"}</TableCellNested>
                  <TableCellNested className="flex-1">{"≥ 25"}</TableCellNested>
                  <TableCellNested className="flex-1">{"≥ 20"}</TableCellNested>
                </TableCellNested>
              </div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>{t("hand")}</TableCell>

            <TableCell className="bg-white flex items-center justify-center">
              <Image
                src="/images/standards/rem-met-iso-13857-image-3.svg"
                alt="Fingertip"
                height={150}
                width={150}
              />
            </TableCell>

            <TableCell className="bg-transparent p-0">
              <div className="flex flex-col gap-2 h-full">
                <TableCellNested className="h-full flex items-center justify-center flex-1">
                  {"10 < e ≤ 12"}
                </TableCellNested>
                <TableCellNested className="h-full flex items-center justify-center flex-1">
                  {"12 < e ≤ 20"}
                </TableCellNested>
                <TableCellNested className="h-full flex items-center justify-center flex-1">
                  {"20 < e ≤ 30"}
                </TableCellNested>
              </div>
            </TableCell>

            <TableCell className="bg-transparent p-0">
              <div className="flex flex-col gap-2 h-full">
                <TableCellNested className="flex flex-row gap-2 flex-1">
                  <TableCellNested>{"≥ 100"}</TableCellNested>
                  <TableCellNested>{"≥ 80"}</TableCellNested>
                  <TableCellNested>{"≥ 120"}</TableCellNested>
                </TableCellNested>

                <TableCellNested className="flex flex-row gap-2 flex-1">
                  <TableCellNested>{"≥ 120"}</TableCellNested>
                  <TableCellNested>{"≥ 120"}</TableCellNested>
                  <TableCellNested>{"≥ 120"}</TableCellNested>
                </TableCellNested>

                <TableCellNested className="flex flex-row gap-2 flex-1">
                  <TableCellNested>{"≥ 850"}</TableCellNested>
                  <TableCellNested>{"≥ 120"}</TableCellNested>
                  <TableCellNested>{"≥ 120"}</TableCellNested>
                </TableCellNested>
              </div>
            </TableCell>
          </TableRow>

          <TableRow className="bg-gray-900">
            <TableCell>{t("armToTheShoulder")}</TableCell>

            <TableCell className="bg-white flex items-center justify-center">
              <Image
                src="/images/standards/rem-met-iso-13857-image-4.svg"
                alt="Fingertip"
                height={100}
                width={150}
              />
            </TableCell>

            <TableCell className="bg-transparent p-0">
              <div className="flex flex-col gap-2 h-full">
                <TableCellNested className="h-full flex items-center justify-center p">
                  {"30 < e ≤ 40"}
                </TableCellNested>
                <TableCellNested className="h-full flex items-center justify-center">
                  {"40 < e ≤ 120"}
                </TableCellNested>
              </div>
            </TableCell>

            <TableCell className="bg-transparent p-0">
              <div className="flex flex-col gap-2 h-full">
                <TableCellNested className="flex flex-row">
                  <TableCellNested>{"≥ 850"}</TableCellNested>
                  <TableCellNested>{"≥ 200"}</TableCellNested>
                  <TableCellNested>{"≥ 12   0"}</TableCellNested>
                </TableCellNested>

                <TableCellNested className="flex flex-row flex-1">
                  <TableCellNested>{"≥ 850"}</TableCellNested>
                  <TableCellNested>{"≥ 850"}</TableCellNested>
                  <TableCellNested>{"≥ 850"}</TableCellNested>
                </TableCellNested>
              </div>
            </TableCell>
          </TableRow>
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default StandardsIso138574241Table;
