import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { box, container, footer, hr, main, paragraph } from "./styles";
import { baseUrl } from "./config";

interface ContactConfirmationEmailTemplateProps {
  fullName: string;
  companyName: string;
  description: string;
  email: string;
  phone: string;
}

export const ContactConfirmationEmailTemplate = ({
  fullName = "Jan Kowalski",
  companyName = "WtórStal",
  email = "jan.kowalski@gmail.com",
  phone = "123 456 789",
  description = "Szukamy wsparcia kreatywnego przy rebrandingu naszej marki – NaturaNova to firma zajmująca się produkcją naturalnych kosmetyków opartych na lokalnych składnikach. Potrzebujemy nowej identyfikacji wizualnej (logo, paleta kolorów, typografia), odświeżenia opakowań produktów oraz zaprojektowania nowej strony internetowej z e-sklepem. Zależy nam na estetyce minimalistycznej, bliskiej naturze, ale jednocześnie nowoczesnej i przyjaznej użytkownikowi. Chcielibyśmy także współpracować przy strategii komunikacji wizualnej w social mediach.",
}: ContactConfirmationEmailTemplateProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>Sprawdź szczegóły</Preview>
      <Container style={container}>
        <Section style={box}>
          <Img
            src={`https://rem-met.vercel.app/images/logos/rem-met-logo-light-mode.svg`}
            width="200"
            height="40"
            alt="REM-MET"
          />
          <Hr style={hr} />
          <Text style={paragraph}>Szanowni,</Text>
          <Text style={paragraph}>
            Właśnie otrzymaliśmy nowe zgłoszenie przez formularz kontaktowy.
            Poniżej znajdują się szczegóły:
          </Text>

          <div>
            <Text
              style={{ ...paragraph, fontWeight: "bold", display: "inline" }}
            >
              Nazwa firmy:
            </Text>
            <Text style={{ ...paragraph, display: "inline" }}>
              {companyName}
            </Text>
          </div>

          <div>
            <Text
              style={{ ...paragraph, fontWeight: "bold", display: "inline" }}
            >
              Imię i nazwisko:
            </Text>
            <Text style={{ ...paragraph, display: "inline" }}>{fullName}</Text>
          </div>

          <div>
            <Text
              style={{ ...paragraph, fontWeight: "bold", display: "inline" }}
            >
              Email:
            </Text>
            <Text style={{ ...paragraph, display: "inline" }}>{email}</Text>
          </div>

          <div>
            <Text
              style={{ ...paragraph, fontWeight: "bold", display: "inline" }}
            >
              Telefon:
            </Text>
            <Text style={{ ...paragraph, display: "inline" }}>{phone}</Text>
          </div>

          <div style={{ marginTop: "24px" }}>
            <Text
              style={{
                ...paragraph,
                fontWeight: "bold",
                display: "inline",
              }}
            >
              Opis zlecenia:
            </Text>
            <Text style={{ ...paragraph, display: "inline" }}>
              {description}
            </Text>
          </div>

          <Hr style={hr} />

          <Text style={footer}>
            Automatyczne powiadomienie – nie odpowiadaj na tego maila
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ContactConfirmationEmailTemplate;
