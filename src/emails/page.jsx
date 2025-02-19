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
import * as React from "react";

export const Email = ({ from, message, name }) => {
  const previewText = `${name} üzenetet küldött neked.`;
  const mailto = `mailto:${from}`;

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Preview>{previewText}</Preview>
          <Section style={{ paddingBottom: "20px" }}>
            <Img
              src="https://pskwihdbzhlxchuwxken.supabase.co/storage/v1/object/public/alapok//arlistalogobg.webp"
              alt="Rozin Rebeka Logo"
              width="220px"
              height="200px"
              style={{ margin: "0 auto" }}
            />
          </Section>
          <Section style={{ paddingBottom: "20px" }}>
            <Text style={heading}>{name} ezt írta neked:</Text>
            <Text style={messageStyle}>{message}</Text>
          </Section>
          <Button style={button} href={mailto}>
            Válasz küldése
          </Button>
        </Container>
      </Body>
    </Html>
  );
};

export default Email;

const main = {
  backgroundColor: "#ffffff",
  fontFamily: "Playfair Display, serif",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
  maxWidth: "100%",
  textAlign: "center",
};

const heading = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#333",
};

const messageStyle = {
  fontSize: "18px",
  padding: "16px",
  backgroundColor: "#f2f3f3",
  borderRadius: "8px",
  textAlign: "center",
};

const button = {
  backgroundColor: "#8B5E3C",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  padding: "12px 24px",
  textDecoration: "none",
  display: "inline-block",
};

const footer = {
  color: "#9ca299",
  fontSize: "14px",
};
