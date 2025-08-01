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
  description = "Testowe zlecenie.",
}: ContactConfirmationEmailTemplateProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>Sprawdź szczegóły</Preview>
      <Container style={container}>
        <Section style={box}>
          <Img
            src={`https://rem-met.vercel.app/images/logos/rem-met-logo-light-mode.png`}
            width="180"
            height="29"
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
