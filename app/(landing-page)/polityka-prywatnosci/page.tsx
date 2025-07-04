const Heading2 = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="text-2xl font-medium text-gray-300">{children}</h1>;
};

const Text = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-sm text-gray-400">{children}</p>;
};

const List = ({ children }: { children: React.ReactNode }) => {
  return <ul className="list-disc list-inside">{children}</ul>;
};

const ListItem = ({ children }: { children: React.ReactNode }) => {
  return <li className="text-sm text-gray-500">{children}</li>;
};

const PrivacyPolicyPage = () => {
  return (
    <section className="container mx-auto px-4 py-40 min-h-scree flex flex-col gap-4">
      <h1 className="text-2xl font-medium text-brand-blue-100">
        POLITYKA PRYWATNOŚCI REM-MET
      </h1>

      <Heading2>1. Administrator Danych</Heading2>
      <Text>
        Administratorem danych osobowych jest: REM-MET Mateusz Ozga ul. Żytnia
        17, 37-450 Stalowa Wola NIP: 865-12-23-076 REGON: 831314991 Adres
        e-mail: biuro@rem-met.com Strona internetowa: www.rem-met.com
      </Text>

      <Heading2>2. Zakres i cel przetwarzania danych</Heading2>
      <Text>Przetwarzamy następujące kategorie danych osobowych:</Text>
      <List>
        <ListItem>
          W przypadku formularza kontaktowego: imię i nazwisko, adres e-mail,
          numer telefonu, adres firmy oraz treść zapytania
        </ListItem>
        <ListItem>
          W przypadku newslettera: adres e-mail i opcjonalnie imię
        </ListItem>
      </List>
      <Text>Dane przetwarzamy w celu:</Text>
      <List>
        <ListItem>Realizacji zapytań ofertowych i świadczenia usług</ListItem>
        <ListItem>
          Wysyłki informacji handlowych (w przypadku wyrażenia zgody)
        </ListItem>
        <ListItem>
          Analizy ruchu na stronie internetowej i poprawy jej funkcjonalności
        </ListItem>
      </List>
      <Text>Podstawą prawną przetwarzania danych jest:</Text>
      <List>
        <ListItem>
          Konieczność wykonania umowy (art. 6 ust. 1 lit. b RODO)
        </ListItem>
        <ListItem>Zgoda (art. 6 ust. 1 lit. a RODO)</ListItem>
        <ListItem>
          Uzasadniony interes administratora (art. 6 ust. 1 lit. f RODO)
        </ListItem>
      </List>

      <Heading2>3. Odbiorcy danych</Heading2>
      <Text>Dane osobowe mogą być udostępniane:</Text>
      <List>
        <ListItem>Upoważnionym pracownikom i współpracownikom REM-MET</ListItem>
        <ListItem>
          Podmiotom świadczącym usługi na rzecz REM-MET, w tym:
        </ListItem>
        <List>
          <ListItem>ENTEI Design (utrzymanie strony internetowej)</ListItem>
          <ListItem>Dostawcom narzędzi analitycznych (Vercel, Hotjar)</ListItem>
        </List>
      </List>
      <Text>Dane nie są przekazywane poza Europejski Obszar Gospodarczy.</Text>

      <Heading2>4. Okres przechowywania danych</Heading2>
      <Text>Dane osobowe będą przechowywane przez okres:</Text>
      <List>
        <ListItem>
          W przypadku formularzy kontaktowych - 24 miesiące od ostatniego
          kontaktu
        </ListItem>
        <ListItem>W przypadku newslettera - do czasu odwołania zgody</ListItem>
        <ListItem>
          W przypadku danych analitycznych - zgodnie z okresami określonymi
          przez dostawców narzędzi
        </ListItem>
      </List>

      <Heading2>5. Prawa osób, których dane dotyczą</Heading2>
      <Text>Przysługuje Państwu prawo do:</Text>
      <List>
        <ListItem>Dostępu do swoich danych</ListItem>
        <ListItem>Sprostowania danych</ListItem>
        <ListItem>Usunięcia danych</ListItem>
        <ListItem>Ograniczenia przetwarzania</ListItem>
        <ListItem>Wniesienia sprzeciwu wobec przetwarzania</ListItem>
        <ListItem>Przenoszenia danych</ListItem>
        <ListItem>
          Wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych
        </ListItem>
        <ListItem>Cofnięcia zgody w dowolnym momencie</ListItem>
      </List>

      <Heading2>6. Bezpieczeństwo danych</Heading2>
      <Text>Zastosowaliśmy następujące środki bezpieczeństwa:</Text>
      <List>
        <ListItem>Certyfikat SSL zabezpieczający transmisję danych</ListItem>
        <ListItem>Regularne aktualizacje systemów</ListItem>
        <ListItem>Ograniczony dostęp do danych</ListItem>
        <ListItem>Politykę minimalizacji danych</ListItem>
      </List>

      <Heading2>8. Kontakt</Heading2>
      <Text>
        W sprawach dotyczących ochrony danych osobowych prosimy o kontakt pod
        adresem e-mail: biuro@rem-met.com.
      </Text>

      <Heading2>9. Postanowienia końcowe</Heading2>
      <Text>
        Polityka prywatności wchodzi w życie z dniem 1 lipca 2025 roku.
        Administrator zastrzega sobie prawo do wprowadzania zmian w polityce
        prywatności. Wszelkie zmiany będą publikowane na stronie internetowej
        www.rem-met.com.
      </Text>
    </section>
  );
};

export default PrivacyPolicyPage;
