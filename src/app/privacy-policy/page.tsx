import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Bench Gym Log collects, uses, and protects your information.",
};

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" effectiveDate="September 12, 2026">
      <p>
        This Privacy Policy describes how Bench LLC ("Bench", "we", "our",
        or "us") collects, uses, and shares information when you use the
        Bench Gym Log website, mobile and web applications, and related services
        (collectively, the "Service"). Where consent is required by law,
        we will obtain it separately.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We collect the following categories of information when you use the
        Service:
      </p>
      <ul>
        <li>
          <strong>Account information.</strong> When you create an account,
          we collect your email address, name, username, and (optionally) a
          profile photo. If you sign in with Apple or Google, we receive
          basic profile information from that provider.
        </li>
        <li>
          <strong>Workout data.</strong> We store the workouts, exercises,
          sets, reps, weights, goals, and notes you log in the Service so
          that you can access your training history across devices.
        </li>
        <li>
          <strong>Usage data.</strong> We collect information about how you
          interact with the Service, including features used, pages viewed,
          and device information (operating system, app version, device
          type). Diagnostic logs may include IP addresses, app configuration,
          timestamps, error information, and other technical statistics.
        </li>
        <li>
          <strong>Social content.</strong> We store profile information,
          follower relationships, messages, and content you share, including
          routines, exercises, images, and completed workout logs.
        </li>
        <li>
          <strong>Purchases and support.</strong> We receive subscription and
          transaction information needed to manage Premium access, and information
          you provide when contacting support. Payment details are handled by
          the platform or processor used for your purchase.
        </li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide, maintain, and improve the Service;</li>
        <li>
          Sync your training history securely across the devices you use to
          access the Service;
        </li>
        <li>
          Enable social features such as following, messaging, and sharing
          workouts;
        </li>
        <li>Authenticate you and protect your account from unauthorized access;</li>
        <li>
          Process subscription payments and manage your Premium membership;
        </li>
        <li>Communicate with you about updates, security alerts, and support;</li>
        <li>Detect, prevent, and address technical issues or abuse.</li>
      </ul>

      <h2>How We Share Your Information</h2>
      <p>We do not sell your personal information. We share information only:</p>
      <ul>
        <li>
          <strong>Through public and shared content.</strong> Public profiles
          and published workouts can be viewed by other people, including through
          links opened without a Bench account. Messages and attachments are shared
          with their recipients. You can send copies of private routines, exercises,
          and completed logs in chat; recipients may retain or share what you send;
        </li>
        <li>
          <strong>With service providers</strong> who help us operate the
          Service — including Google/Firebase (authentication, hosting,
          storage, and analytics), RevenueCat (subscription management), and
          Algolia (search of public profiles and workouts). Providers process
          information to perform services for us, subject to their applicable
          contractual obligations;
        </li>
        <li>
          <strong>When required by law</strong> or to protect the rights,
          property, or safety of Bench, our users, or others.
        </li>
      </ul>

      <h2>Third-Party Providers</h2>
      <p>These providers explain their practices in their own policies:</p>
      <ul>
        <li><a href="https://policies.google.com/privacy">Google and Google Play Services Privacy Policy</a></li>
        <li><a href="https://firebase.google.com/support/privacy">Firebase Privacy and Security</a>, including Google Analytics for Firebase</li>
        <li><a href="https://www.revenuecat.com/privacy">RevenueCat Privacy Policy</a></li>
        <li><a href="https://www.algolia.com/policies/privacy/">Algolia Privacy Policy</a></li>
      </ul>

      <h2>Cookies and Browser Storage</h2>
      <p>
        The web Service and its providers may use cookies and similar browser
        storage to keep you signed in, remember preferences, and support service
        operation and analytics. You can manage cookies and site data through
        your browser settings. Blocking or clearing them may sign you out or
        prevent some features from working.
      </p>

      <h2>Data Retention</h2>
      <p>
        We retain information as needed to provide the Service and meet legal,
        security, and accounting obligations. Deleting your account in Settings
        does not automatically remove every associated record. To request deletion
        of all your personal data, email <a href="mailto:help@benchgymlog.com">help@benchgymlog.com</a>.
        We may need to verify your identity before handling a request. Some records
        may need to be retained for legal, security, or accounting obligations.
        Copies of content you have shared with others may remain with those recipients.
      </p>

      <h2>Your Choices</h2>
      <ul>
        <li>
          <strong>Access and update.</strong> You can review and update
          your account information at any time from the in-app settings.
        </li>
        <li>
          <strong>Sharing choices.</strong> You can edit your profile, choose
          whether to publish routines, and use available chat-request and blocking
          controls. A private routine can be shared directly in chat without
          publishing it.
        </li>
        <li>
          <strong>Account deletion.</strong> You can delete your account
          from Settings. For deletion of all associated personal data, email
          <a href="mailto:help@benchgymlog.com"> help@benchgymlog.com</a>.
        </li>
      </ul>

      <h2>Children's Privacy</h2>
      <p>
        Bench is not directed to children under 13, and we do not knowingly
        collect personal information from children under 13. If we learn that
        a child under 13 has provided personal information, we will take steps
        to delete it promptly. Parents or guardians who believe this has occurred
        should contact us.
      </p>

      <h2>Security</h2>
      <p>
        We use reasonable safeguards to protect your information. No method
        of Internet transmission or electronic storage is completely secure,
        and we cannot guarantee absolute security.
      </p>

      <h2>Links to Other Sites</h2>
      <p>
        The Service may contain links to websites we do not operate. Their
        content and privacy practices are governed by their own policies.
        Please review those policies before providing information to them.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify
        you of material changes by posting the updated policy in the
        Service and updating the effective date above. Where required, we
        will provide additional notice or obtain consent.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy or our data
        practices, please contact us at{" "}
        <a href="mailto:help@benchgymlog.com">help@benchgymlog.com</a>.
      </p>
    </LegalLayout>
  );
}
