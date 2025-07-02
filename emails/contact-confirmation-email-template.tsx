import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { box, button, container, footer, hr, main, paragraph } from "./styles";

interface ContactConfirmationEmailTemplateProps {
  fullName: string;
  companyName?: string;
  description: string;
}

export const ContactConfirmationEmailTemplate = ({
  fullName,
  description = "Szukamy wsparcia kreatywnego przy rebrandingu naszej marki – NaturaNova to firma zajmująca się produkcją naturalnych kosmetyków opartych na lokalnych składnikach. Potrzebujemy nowej identyfikacji wizualnej (logo, paleta kolorów, typografia), odświeżenia opakowań produktów oraz zaprojektowania nowej strony internetowej z e-sklepem. Zależy nam na estetyce minimalistycznej, bliskiej naturze, ale jednocześnie nowoczesnej i przyjaznej użytkownikowi. Chcielibyśmy także współpracować przy strategii komunikacji wizualnej w social mediach.",
}: ContactConfirmationEmailTemplateProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>Sprawdź szczegóły</Preview>
      <Container style={container}>
        <Section style={box}>
          <Img
            src={`https://rem-met.vercel.app/images/logos/rem-met-logo-light-mode.png`}
            width="200"
            height="40"
            alt="REM-MET"
          />
          <Hr style={hr} />
          <Text style={paragraph}>Szanowny/a {fullName},</Text>
          <Text style={paragraph}>
            Dziękujemy za skontaktowanie się z firmą REM-MET. Otrzymaliśmy Twoje
            zapytanie dotyczące:
          </Text>
          <Text style={{ ...paragraph, fontWeight: "bold", display: "inline" }}>
            Opis zlecenia:
          </Text>
          <Text style={{ ...paragraph, display: "inline" }}>{description}</Text>
          <Hr style={hr} />
          <Text style={paragraph}>
            Wkrótce skontaktujemy się z Tobą, aby omówić szczegóły. A tymczasem
            sprawdź naszą ofertę:
          </Text>
          <Button style={button} href="https://rem-met.com">
            Zobacz naszą ofertę
          </Button>
          <Text style={paragraph}>Z poważaniem,</Text>
          <Text style={paragraph}>Zespół REM-MET</Text>
          <Hr style={hr} />
          <Text style={footer}>
            REM-MET, ul. Żytnia 17, 37-450 Stalowa Wola
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ContactConfirmationEmailTemplate;
