import {
  MoleskineIcon,
  FrontViewIcon,
  PaperMapIcon,
  VersionsIcon,
} from "@/components/icons";
import { AccentText } from "@/components/ui/accent-text";
import Container from "@/components/ui/container";
import useTranslations from "@/hooks/useTranslations";

const IconWrapper = ({ children }: { children: React.ReactNode }) => {
  const clipPathStyle = {
    clipPath: "polygon(0% 65%, 25% 100%, 85% 100%, 100% 35%, 75% 0%, 15% 0%)",
  };

  return (
    <div>
      <div
        style={clipPathStyle}
        className="bg-brand-blue-200 text-white flex justify-center items-center gap-2 w-[75px] h-[60px] md:w-[100px] md:h-[80px]"
      >
        <span className="w-[36px] md:w-[48px]">{children}</span>
      </div>
    </div>
  );
};

interface WhatYouGetItemProps {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
}

const WhatYouGetItem = ({ title, description, icon }: WhatYouGetItemProps) => {
  return (
    <div className="flex flex-row gap-4 md:gap-10 items-start justify-start">
      <IconWrapper>{icon}</IconWrapper>

      <div className="flex flex-col w-[320px] gap-1">
        <h4 className="text-md md:text-xl font-medium text-gray-600">
          {title}
        </h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

const Design3dWhatYouGetSection = () => {
  const t = useTranslations("design3d");

  return (
    <section className="flex flex-col relative min-h-[600px] bg-gray-200">
      <Container className="relative z-1 flex flex-row gap-10 flex-1 h-full">
        <div className="flex flex-col w-1/2 gap-20 items-center justify-center py-16 md:py-20 flex-1 ">
          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-2">
              <AccentText className="text-gray-500 text-center">
                {t("what.accent")}
              </AccentText>
              <h2 className="text-3xl text-gray-600 font-medium md:hidden text-center">
                {t("what.title")}
              </h2>
              <h2 className="text-5xl text-gray-600 hidden md:block text-center">
                {t("what.title")}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[400px_400px] grid-rows-[auto_auto]  gap-x-20 gap-y-10 sm:gap-y-10">
            <WhatYouGetItem
              icon={<FrontViewIcon size={40} />}
              title={t("what.feature1.text")}
              description={t("what.feature1.subtext")}
            />
            <WhatYouGetItem
              icon={<VersionsIcon size={40} />}
              title={t("what.feature2.text")}
              description={t("what.feature2.subtext")}
            />
            <WhatYouGetItem
              icon={<PaperMapIcon size={40} />}
              title={t("what.feature3.text")}
              description={t("what.feature3.subtext")}
            />
            <WhatYouGetItem
              icon={<MoleskineIcon size={40} />}
              title={t("what.feature4.text")}
              description={t("what.feature4.subtext")}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Design3dWhatYouGetSection;
