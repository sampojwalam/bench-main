import { pageMetadata } from "@/lib/metadata";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata = pageMetadata(
  "Terms & Conditions",
  "The terms governing your use of Bench Gym Log.",
  "/terms-and-conditions",
);

export default function TermsAndConditions() {
  return (
    <LegalLayout title="Terms & Conditions" effectiveDate="September 12, 2026">
      <p>
        These Terms and Conditions ("Terms") govern your access to and use of
        the Bench Gym Log website, mobile and web applications, and related services
        (collectively, the "Service"), provided by Bench LLC ("Bench", "we",
        "our", or "us"). By creating an account or using the Service, you
        agree to these Terms. If you do not agree, do not use the Service.
      </p>

      <h2>Eligibility</h2>
      <p>
        You must be at least 13 years old to use the Service. By using the
        Service, you represent that you meet this age requirement and that
        you have the legal capacity to enter into these Terms.
      </p>

      <h2>Your Account</h2>
      <p>
        You are responsible for safeguarding your account credentials and
        for all activity that occurs under your account. Notify us
        immediately if you suspect unauthorized use. We may suspend or
        terminate accounts that violate these Terms. Keep your device secure;
        rooting or jailbreaking may weaken its protections and affect the Service.
        Our <a href="/privacy-policy">Privacy Policy</a> explains how we handle
        personal information.
      </p>

      <h2>Use of the Service</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Service for any unlawful purpose;</li>
        <li>
          Copy, modify, reverse-engineer, decompile, extract source code from,
          or create derivative versions of the Service without authorization,
          except as permitted by applicable law;
        </li>
        <li>
          Upload or transmit content that is harmful, abusive, defamatory,
          or that infringes the rights of others;
        </li>
        <li>
          Use automated means (bots, scrapers, crawlers) to access or
          interact with the Service without our prior written consent;
        </li>
        <li>
          Interfere with the operation, security, or other users of the
          Service.
        </li>
      </ul>

      <h2>User Content</h2>
      <p>
        The Service lets you create, log, and share content — including
        workouts, exercises, messages, and profile information ("User
        Content"). You retain ownership of your User Content, but you grant
        Bench a worldwide, non-exclusive, royalty-free license to host,
        store, reproduce, and display your User Content as needed to
        operate the Service.
      </p>
      <p>
        If you publish a workout publicly, you permit others to view it,
        including through a public link without signing in, and to save or copy
        it within the Service. When you send content directly to another user,
        including a copy of a private routine, you permit the recipient to view
        and use that shared content within the Service. Share only content you
        have the right to share.
      </p>

      <h2>Premium Membership</h2>
      <p>
        Bench offers optional Premium access. Available plans, prices, and
        purchase terms are shown before you buy. Monthly and annual subscriptions
        renew automatically unless cancelled according to the purchase platform’s
        terms. A lifetime option, when offered, is a one-time purchase rather than
        a recurring subscription. Payments are handled by the Apple App Store,
        Google Play, or the payment processor used at checkout.
      </p>
      <p>
        Manage or cancel subscriptions through the platform where you purchased
        them, following its cancellation deadlines and instructions. Deleting
        your Bench account does not itself cancel a subscription. Refund requests
        are subject to the purchase platform’s process and applicable law.
      </p>

      <h2>Connectivity, Updates, and Availability</h2>
      <p>
        Some features require an Internet connection. You are responsible for
        your device, its power and connectivity, and any mobile data or roaming
        charges. If someone else pays for your connection, obtain their permission.
        We are not responsible for limitations caused by your device or connection,
        to the extent permitted by law.
      </p>
      <p>
        We may change features, supported devices, or operating-system requirements.
        Updates may be needed to continue using the Service, and compatibility
        with older systems is not guaranteed. We may discontinue parts of the
        Service, subject to applicable law and any obligations relating to purchases.
        Any charges for paid services will be clearly disclosed before purchase.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        The Service relies on third-party platforms and information. Their own
        terms may apply to your use of them, and we do not guarantee the accuracy
        or availability of third-party content. Relevant provider terms include:
      </p>
      <ul>
        <li><a href="https://policies.google.com/terms">Google and Google Play Services Terms</a></li>
        <li><a href="https://firebase.google.com/terms">Firebase Terms</a> and <a href="https://www.google.com/analytics/terms/">Google Analytics Terms</a></li>
        <li><a href="https://www.revenuecat.com/terms">RevenueCat Terms</a></li>
      </ul>

      <h2>Fitness Disclaimer</h2>
      <p>
        Bench is a workout-tracking tool and does not provide medical or
        professional fitness advice. You should consult a qualified
        healthcare provider before starting any new exercise program.
        To the extent permitted by applicable law, Bench is not responsible
        for any injury or health consequence
        resulting from your use of the Service.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        The Service, including its name, logo, design, software, and
        content (other than User Content), is owned by Bench LLC and
        protected by intellectual property laws. You may not use our
        trademarks or branding without our prior written consent.
      </p>

      <h2>Termination</h2>
      <p>
        You may stop using the Service at any time and delete your account
        from the in-app settings. We may suspend or terminate your access
        to the Service if we believe you have violated these Terms or for
        any other reason at our discretion, subject to applicable law. Upon
        termination, your right to use the Service ends and you must stop using it.
      </p>

      <h2>Disclaimers</h2>
      <p>
        To the extent permitted by applicable law, the Service is provided
        "as is" and "as available" without any
        warranties of any kind, express or implied. We do not warrant that
        the Service will be uninterrupted, error-free, or completely secure.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Bench LLC and its officers,
        directors, employees, and agents will not be liable for any
        indirect, incidental, special, consequential, or punitive damages
        arising out of or in connection with your use of the Service.
      </p>

      <p>
        Nothing in these Terms excludes liability or consumer rights that cannot
        lawfully be excluded or limited.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. We will notify you of
        material changes by posting the updated Terms in the Service and
        updating the effective date above. Continued use of the Service
        after changes are posted constitutes your acceptance of the updated
        Terms.
      </p>

      <h2>Governing Law</h2>
      <p>
        These Terms are governed by the laws of the State of Texas,
        without regard to its conflict of laws principles. Any dispute
        arising under these Terms will be resolved in the state or federal
        courts located in Texas, subject to any mandatory consumer protections
        or rights available under applicable law.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about these Terms, please contact us at{" "}
        <a href="mailto:help@benchgymlog.com">help@benchgymlog.com</a>.
      </p>
    </LegalLayout>
  );
}
