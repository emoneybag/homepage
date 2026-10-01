import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
  pixelBasedPreset,
} from "react-email";

interface ContactFormEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactFormEmail({
  name,
  email,
  subject,
  message,
}: ContactFormEmailProps) {
  return (
    <Html lang="en">
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
        }}
      >
        <Head />

        <Body className="m-0 bg-gray-100 p-0 font-sans">
          <Preview>
            New contact form message from {name}
          </Preview>

          <Container className="mx-auto my-0 max-w-xl px-5 py-10">
            {/* Header */}
            <Section className="rounded-t-lg bg-[#050b17] px-8 py-7">
              <Heading className="m-0 text-2xl font-bold text-white">
                S<span className="text-[#3b82f6]">&</span>R
              </Heading>

              <Text className="m-0 mt-1 text-[10px] font-medium tracking-[4px] text-gray-400">
                GROUP
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="bg-white px-8 py-8">
              <Heading className="m-0 text-2xl font-bold text-gray-900">
                New contact form message
              </Heading>

              <Text className="mt-3 text-sm leading-6 text-gray-600">
                Someone has submitted a new message through the S&R
                Group website.
              </Text>

              {/* Contact Details */}
              <Section className="mt-7 rounded-lg bg-gray-50 px-5 py-4">
                <Text className="m-0 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Name
                </Text>

                <Text className="m-0 mt-1 text-sm font-medium text-gray-900">
                  {name}
                </Text>

                <Text className="m-0 mt-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Email
                </Text>

                <Text className="m-0 mt-1 text-sm font-medium text-gray-900">
                  {email}
                </Text>

                <Text className="m-0 mt-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Subject
                </Text>

                <Text className="m-0 mt-1 text-sm font-medium text-gray-900">
                  {subject}
                </Text>
              </Section>

              {/* Message */}
              <Section className="mt-7">
                <Text className="m-0 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Message
                </Text>

                <Section className="mt-3 rounded-lg border border-solid border-gray-200 bg-white px-5 py-4">
                  <Text className="m-0 whitespace-pre-line text-sm leading-7 text-gray-800">
                    {message}
                  </Text>
                </Section>
              </Section>

              <Hr className="my-8 border-solid border-gray-200" />

              <Text className="m-0 text-xs leading-5 text-gray-500">
                Reply to this email to respond directly to{" "}
                {name}.
              </Text>
            </Section>

            {/* Footer */}
            <Section className="rounded-b-lg bg-gray-50 px-8 py-5">
              <Text className="m-0 text-center text-xs text-gray-400">
                © {new Date().getFullYear()} S&R Group
              </Text>

              <Text className="m-0 mt-1 text-center text-xs text-gray-400">
                Website Design & Development
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}