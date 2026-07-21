import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalDoc,
  LegalList,
  LegalSection,
  LegalSubheading,
} from "@/components/legal/LegalDoc";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How LANA collects, uses, and protects personal data across the LANA app and website.",
};

export default function PrivacyPage() {
  const { legal, name } = siteConfig;
  const mail = `mailto:${legal.supportEmail}`;

  return (
    <LegalDoc
      title="Privacy Policy"
      description={`How ${name} collects, uses, stores, and protects your personal information.`}
    >
      <LegalSection title="Introduction">
        <p>
          {legal.entityName} (&quot;{name}&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) values your privacy
          and is committed to protecting your personal data.
        </p>
        <p>
          This Privacy Policy explains how we collect, use, store, share, and protect personal
          information when you use the {name} mobile application, this website, related landing
          pages, communications, and other services we operate (collectively, the
          &quot;Services&quot; or &quot;Platform&quot;).
        </p>
        <p>
          By using {name}, creating an account, downloading the app, or interacting with our
          Services, you acknowledge that your personal data will be handled as described in this
          Privacy Policy. Please also review our{" "}
          <Link href="/terms" className="text-accent-cyan hover:text-accent-bright">
            Terms of Service
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="Who We Are">
        <p>
          <strong className="text-foreground">Data Controller:</strong> {legal.entityName}
        </p>
        <p>
          Support Email:{" "}
          <a href={mail} className="text-accent-cyan hover:text-accent-bright">
            {legal.supportEmail}
          </a>
        </p>
        <p>
          For the purposes of applicable data protection laws, {name} is generally the data
          controller of the personal data described in this Privacy Policy.
        </p>
      </LegalSection>

      <LegalSection title="Scope of This Privacy Policy">
        <p>This Privacy Policy applies to personal data we collect when you:</p>
        <LegalList
          items={[
            "visit the LANA website or related landing pages",
            "download, install, or use the LANA mobile app",
            "create or use a LANA account",
            "complete tasks, claims, referrals, earn actions, or other in-app features",
            "connect or bind a wallet or identity feature (where available)",
            "contact support or communicate with us",
            "interact with our emails, ads, or social channels linked to LANA",
          ]}
        />
        <p>
          This policy does not apply to third-party websites, stores, wallets, payment processors,
          analytics providers, or other services linked from LANA. Those are governed by their own
          privacy policies.
        </p>
      </LegalSection>

      <LegalSection title="The Personal Data We Collect">
        <p>We may collect different categories of personal data depending on how you use LANA.</p>

        <LegalSubheading>Information you provide directly</LegalSubheading>
        <p>
          <strong className="text-foreground">Account and identity information</strong> may
          include: name or display name, email address, phone number (where requested), username,
          password (stored securely in hashed/encrypted form), country or approximate location, and
          account preferences.
        </p>
        <p>
          <strong className="text-foreground">Gameplay and rewards activity</strong> may include:
          claim history, task completion records, referral/invite activity, earn-action status,
          progression or score data, and related timestamps.
        </p>
        <p>
          <strong className="text-foreground">Wallet / identity binding</strong> (where enabled)
          may include wallet addresses or identifiers you choose to connect, and related binding
          status. We do not ask for and you should never share seed phrases or private keys.
        </p>
        <p>
          <strong className="text-foreground">Support and communications</strong> may include
          messages, emails, screenshots, and other details you send when contacting us.
        </p>

        <LegalSubheading>Information collected automatically</LegalSubheading>
        <p>When you visit the website or use the app, we may automatically collect:</p>
        <LegalList
          items={[
            "IP address and approximate location derived from IP",
            "device type, operating system, and app/browser version",
            "device identifiers and session information",
            "pages or screens viewed, feature usage, and interaction events",
            "timestamps, crash logs, and performance diagnostics",
            "referral source (how you arrived at the site or app)",
            "cookie identifiers or similar technologies on the website",
          ]}
        />

        <LegalSubheading>Information from third parties</LegalSubheading>
        <p>
          We may receive limited information from service providers such as analytics tools,
          authentication/infrastructure providers, email or notification services, fraud/security
          tools, and (where applicable) wallet or identity providers.
        </p>
      </LegalSection>

      <LegalSection title="How We Use Your Personal Data">
        <p>We use personal data to:</p>
        <LegalList
          items={[
            "create and manage accounts and authenticate users",
            "operate core features such as claims, tasks, referrals, earn actions, and progression",
            "deliver app and service functionality, including notifications related to your account",
            "detect abuse, multi-accounting, fraud, and security incidents",
            "improve product reliability, performance, and user experience",
            "respond to support requests and communicate important service updates",
            "comply with legal obligations and enforce our Terms of Service",
          ]}
        />
        <p>
          Where permitted by law and subject to your preferences, we may also send product updates
          or marketing communications. You can opt out of marketing at any time; we may still send
          essential service messages (for example security or account notices).
        </p>
        <p>
          <strong className="text-foreground">We do not sell your personal data.</strong>
        </p>
      </LegalSection>

      <LegalSection title="Legal Bases for Processing">
        <p>Depending on applicable law, we process data on one or more of the following bases:</p>
        <LegalList
          items={[
            "Contractual necessity — to provide the Services you request",
            "Legitimate interests — such as security, fraud prevention, product improvement, and support (balanced against your rights)",
            "Consent — where required (for example certain marketing or optional features)",
            "Legal obligation — where processing is required by law",
          ]}
        />
      </LegalSection>

      <LegalSection title="How We Share Personal Data">
        <p>We may share personal data only as needed in these circumstances:</p>
        <LegalList
          items={[
            "Service providers that help us host, operate, analyse, secure, or support the Platform",
            "Other users, only where a feature intentionally makes information visible (for example referral or ranking displays)",
            "Legal, regulatory, or protection purposes when required by law or to protect rights and safety",
            "Business transfers, such as a merger, acquisition, or asset sale, subject to appropriate safeguards",
          ]}
        />
        <p>
          Service providers are expected to process data only on our instructions and with
          appropriate safeguards.
        </p>
      </LegalSection>

      <LegalSection title="International Data Transfers">
        <p>
          {name} may serve users in multiple countries. Some service providers may process data
          outside your country of residence. Where personal data is transferred internationally, we
          take reasonable steps to apply appropriate safeguards consistent with applicable law.
        </p>
      </LegalSection>

      <LegalSection title="Data Retention">
        <p>
          We retain personal data only as long as reasonably necessary for the purposes described
          in this Policy, including to operate accounts, maintain rewards and integrity records,
          resolve disputes, enforce our Terms, improve security, and meet legal or accounting
          obligations. When data is no longer required, we may delete, anonymise, or de-identify it
          where practicable.
        </p>
      </LegalSection>

      <LegalSection title="Your Rights and Choices">
        <p>
          Depending on your location and applicable law, you may have rights to access, correct,
          delete, restrict, or object to certain processing of your personal data; withdraw consent
          where processing is based on consent; request portability of certain data; and opt out of
          marketing communications.
        </p>
        <p>
          To exercise these rights, contact us at{" "}
          <a href={mail} className="text-accent-cyan hover:text-accent-bright">
            {legal.supportEmail}
          </a>
          . We may need to verify your identity before fulfilling a request. Some rights may be
          limited where we are legally required to retain data, where fulfilling a request would
          affect others&apos; rights, or where another lawful exception applies.
        </p>
      </LegalSection>

      <LegalSection title="Cookies and Similar Technologies">
        <p>
          Our website may use cookies and similar technologies to keep sessions working, remember
          preferences, understand usage, improve performance, and support security. You can control
          cookies through your browser settings; disabling cookies may affect some site features.
        </p>
      </LegalSection>

      <LegalSection title="Data Security">
        <p>
          We use reasonable administrative, technical, and organisational measures to protect
          personal data, which may include secure authentication, encryption in transit, access
          controls, monitoring, and backups. No system is completely secure. You are responsible for
          using a strong password, protecting your credentials, and notifying us if you suspect
          account compromise.
        </p>
      </LegalSection>

      <LegalSection title="Children">
        <p>
          {name} is intended for users who meet the eligibility requirements in our Terms of
          Service (generally 18 years of age or the age of legal capacity in your jurisdiction). We
          do not knowingly collect personal data from children in violation of applicable law. If
          you believe a child has provided personal data improperly, contact us and we will take
          appropriate steps.
        </p>
      </LegalSection>

      <LegalSection title="Sensitive Information">
        <p>
          Please do not submit sensitive personal data (such as government ID numbers, biometric
          data, or health information) unless we specifically request it for a legitimate purpose.
          Never share wallet seed phrases or private keys with anyone, including LANA support.
        </p>
      </LegalSection>

      <LegalSection title="Changes to This Privacy Policy">
        <p>
          We may update this Privacy Policy from time to time. When we do, we will revise the Last
          Updated date above and, for material changes, may provide additional notice (for example
          in-app or on the website). Continued use of the Services after an update means you
          acknowledge the revised Policy.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about this Privacy Policy or your personal data can be sent to{" "}
          <a href={mail} className="text-accent-cyan hover:text-accent-bright">
            {legal.supportEmail}
          </a>
          .
        </p>
        <p>
          Where applicable under local law, you may also have the right to lodge a complaint with a
          relevant data protection authority.
        </p>
      </LegalSection>
    </LegalDoc>
  );
}
