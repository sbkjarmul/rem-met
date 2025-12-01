type MegaMenuServiceCardProps = {
  title: string;
  subtitle: string;
};

const MegaMenuServiceCard = ({ title, subtitle }: MegaMenuServiceCardProps) => {
  return (
    <div className="flex gap-4 p-4">
      <div className="flex flex-col">
        <h4 className="text-xl text-gray-100 font-medium">{title}</h4>
        <p className="text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
};

export default MegaMenuServiceCard;
