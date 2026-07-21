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
  title: "Terms of Service",
  description:
    "Terms governing your use of the LANA gaming rewards app, website, and related services.",
};

export default function TermsPage() {
  const { legal, name } = siteConfig;
  const mail = `mailto:${legal.supportEmail}`;

  return (
    <LegalDoc
      title="Terms of Service"
      description={`The agreement between you and ${name} for use of the app, website, and related services.`}
    >
      <LegalSection title="Agreement to These Terms">
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of the {name}{" "}
          mobile application, website, and related services operated by {legal.entityName} (
          &quot;{name}&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
        </p>
        <p>
          By accessing or using the Services, creating an account, downloading the APK or app, or
          participating in claims, tasks, referrals, or other features, you agree to be bound by
          these Terms. If you do not agree, do not use the Services.
        </p>
        <p>
          Your use of {name} is also governed by our{" "}
          <Link href="/privacy" className="text-accent-cyan hover:text-accent-bright">
            Privacy Policy
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="About LANA">
        <p>
          {name} is a gaming rewards platform that may include features such as daily claims,
          mission tasks, referral (&quot;Frens&quot;) networks, earn actions, progression tracking,
          and wallet or identity binding as the product evolves.
        </p>
        <p>
          Features, reward structures, availability, and eligibility may change over time as we
          improve and expand the Services.
        </p>
      </LegalSection>

      <LegalSection title="Eligibility and Acceptance">
        <p>To use {name}, you must:</p>
        <LegalList
          items={[
            "be at least 18 years old, or the age of legal capacity in your jurisdiction (whichever is higher)",
            "have the legal capacity to enter into a binding agreement",
            "provide accurate and complete information when creating an account",
            "use the Services only for lawful purposes and in accordance with these Terms",
          ]}
        />
        <p>
          If you use {name} on behalf of an organisation, you represent that you have authority to
          bind that organisation to these Terms.
        </p>
      </LegalSection>

      <LegalSection title="Accounts and Security">
        <LegalSubheading>Registration</LegalSubheading>
        <p>
          Some features require an account. You agree to provide accurate registration information
          and keep it updated.
        </p>
        <LegalSubheading>Credentials</LegalSubheading>
        <p>
          You are responsible for maintaining the confidentiality of your login details and for all
          activity under your account.
        </p>
        <LegalSubheading>Unauthorised access</LegalSubheading>
        <p>
          Notify us promptly at{" "}
          <a href={mail} className="text-accent-cyan hover:text-accent-bright">
            {legal.supportEmail}
          </a>{" "}
          if you suspect unauthorised access to your account.
        </p>
        <LegalSubheading>One person, fair use</LegalSubheading>
        <p>
          Unless we expressly allow otherwise, you may maintain only one personal account. Creating
          multiple accounts to manipulate rewards, referrals, claims, or rankings is prohibited.
        </p>
      </LegalSection>

      <LegalSection title="App Distribution and Downloads">
        <p>
          {name} may be distributed via direct APK download and, when available, app stores. When
          you install an APK outside an official store, you are responsible for enabling the
          necessary device permissions and for verifying that you obtained the file from our
          official channels.
        </p>
        <p>
          We recommend downloading only from links published on this website or other official{" "}
          {name} channels. We are not responsible for modified, spoofed, or third-party
          redistributed copies of the app.
        </p>
      </LegalSection>

      <LegalSection title="Rewards, Claims, and Progression">
        <p>
          Features such as daily claims, tasks, referrals, earn actions, scores, and other rewards
          are provided as part of a digital entertainment and engagement experience.
        </p>
        <LegalList
          items={[
            "Rewards, cooldowns, eligibility rules, and values may change at any time",
            "We do not guarantee uninterrupted availability of any claim window, task, or reward",
            "Completion of tasks or referrals does not create a vested right to any particular reward amount or payout",
            "Wallet binding or identity features (where available) do not guarantee withdrawals, conversions, or monetary value",
            "Any display of points, scores, or balances is subject to correction for errors, abuse, or technical issues",
          ]}
        />
        <p>
          Nothing in the Services constitutes financial, investment, or professional advice. Unless
          expressly stated in writing by {name}, in-app rewards are not currency and may have no
          cash value.
        </p>
      </LegalSection>

      <LegalSection title="Acceptable Use">
        <p>You agree not to:</p>
        <LegalList
          items={[
            "use the Services for any illegal or unauthorised purpose",
            "create multiple accounts, use bots, scripts, emulators, or automation to farm rewards",
            "exploit bugs, manipulate claims, referrals, rankings, or earn actions",
            "impersonate another person or misrepresent your affiliation",
            "interfere with or disrupt the Services, servers, or networks",
            "attempt to gain unauthorised access to accounts, systems, or data",
            "distribute malware or harmful code",
            "scrape or harvest data without our prior written permission",
            "harass, abuse, or harm other users or our team",
            "reverse engineer or circumvent security or access controls except where permitted by law",
          ]}
        />
        <p>
          We may investigate suspected abuse and suspend, restrict, or terminate accounts, wipe
          improperly obtained rewards, or take other action we reasonably consider necessary.
        </p>
      </LegalSection>

      <LegalSection title="User Content">
        <p>
          If you submit content to {name} (such as profile information, messages, or feedback), you
          retain ownership of that content, subject to the licence below. You grant {name} a
          worldwide, non-exclusive, royalty-free licence to host, store, use, reproduce, and display
          that content as needed to operate, improve, secure, and promote the Services.
        </p>
        <p>
          You represent that you have the rights to submit such content and that it does not
          infringe others&apos; rights or violate law.
        </p>
      </LegalSection>

      <LegalSection title="Intellectual Property">
        <p>
          The Services — including branding, logos, UI, software, text, graphics, and other original
          materials (excluding your User Content) — are owned by {name} or its licensors and are
          protected by intellectual property laws. You may not copy, modify, distribute, sell, or
          create derivative works from our materials without prior written permission.
        </p>
      </LegalSection>

      <LegalSection title="Third-Party Services">
        <p>
          The Services may link to or integrate third-party services (for example analytics,
          hosting, notification providers, wallets, or social platforms). We are not responsible for
          third-party services, content, or policies. Your use of those services is subject to their
          terms.
        </p>
      </LegalSection>

      <LegalSection title="Availability and Changes">
        <p>
          We aim to provide a reliable Platform but do not guarantee uninterrupted or error-free
          operation. We may change, suspend, or discontinue features, reward structures, UI, or
          access methods at any time. Where practical, we will provide notice of material changes.
        </p>
      </LegalSection>

      <LegalSection title="Disclaimers">
        <p>
          To the maximum extent permitted by law, the Services are provided on an &quot;as is&quot;
          and &quot;as available&quot; basis, without warranties of any kind, whether express or
          implied, including merchantability, fitness for a particular purpose, and
          non-infringement.
        </p>
        <p>
          We do not warrant that the Services will be uninterrupted, secure, or free of errors, or
          that rewards, progression, or any particular outcome will be achieved.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of Liability">
        <p>To the maximum extent permitted by law:</p>
        <p>
          LANA and its affiliates, directors, officers, employees, and agents will not be liable for
          any indirect, incidental, special, consequential, exemplary, or punitive damages,
          including loss of profits, data, goodwill, or opportunities.
        </p>
        <p>
          Nothing in these Terms excludes liability that cannot be excluded under applicable law.
        </p>
      </LegalSection>

      <LegalSection title="Indemnity">
        <p>
          You agree to indemnify, defend, and hold harmless {name} and its directors, officers,
          employees, and affiliates from and against claims, liabilities, damages, losses, and
          expenses (including reasonable legal fees) arising out of or related to your use of the
          Services, your User Content, your breach of these Terms, or your violation of any law or
          third-party rights.
        </p>
      </LegalSection>

      <LegalSection title="Suspension and Termination">
        <p>
          You may stop using the Services at any time. Where account deletion is available, you may
          request deletion subject to legal and operational retention requirements.
        </p>
        <p>
          We may suspend or terminate your access if you breach these Terms, create legal or
          security risk, abuse reward systems, or if we are required to do so by law. Upon
          termination, your right to use the Services ends; provisions that by their nature should
          survive (including IP, disclaimers, liability limits, and indemnity) will survive.
        </p>
      </LegalSection>

      <LegalSection title="Force Majeure">
        <p>
          {name} shall not be liable for delay or failure to perform due to causes beyond our
          reasonable control, including natural disasters, internet outages, war, civil unrest,
          labour disputes, government action, or system failures.
        </p>
      </LegalSection>

      <LegalSection title="Changes to These Terms">
        <p>
          We may update these Terms from time to time. We will update the Last Updated date and may
          provide additional notice for material changes. Your continued use of the Services after
          changes take effect constitutes acceptance of the updated Terms.
        </p>
      </LegalSection>

      <LegalSection title="Entire Agreement">
        <p>
          These Terms, together with the Privacy Policy and any other policies referenced herein,
          constitute the entire agreement between you and {name} regarding the Services and
          supersede prior agreements on the same subject matter. If any provision is held invalid,
          the remaining provisions remain in effect. Our failure to enforce a provision is not a
          waiver.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about these Terms:{" "}
          <a href={mail} className="text-accent-cyan hover:text-accent-bright">
            {legal.supportEmail}
          </a>
        </p>
      </LegalSection>
    </LegalDoc>
  );
}
