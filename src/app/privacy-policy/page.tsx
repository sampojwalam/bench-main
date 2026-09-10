import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Bench Gym Log collects, uses, and protects your information.",
};

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" effectiveDate="January 1, 2026">
      <p>
        This Privacy Policy describes how Bench LLC ("Bench", "we", "our",
        or "us") collects, uses, and shares information when you use the
        Bench Gym Log mobile and web applications and related services
        (collectively, the "Service"). By using the Service, you agree to the
        collection and use of information in accordance with this policy.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We collect the following categories of information when you use the
        Service:
      </p>
      <ul>
        <li>
          <strong>Account information.</strong> When you create an account,
          we collect your email address, display name, and (optionally) a
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
          type).
        </li>
        <li>
          <strong>Social interactions.</strong> If you choose to follow
          other users, send messages, or publish workouts publicly, that
          information becomes visible to other users in accordance with
          your privacy settings.
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
          <strong>With other users</strong> when you choose to publish
          workouts publicly, send messages, or interact through follower
          relationships;
        </li>
        <li>
          <strong>With service providers</strong> who help us operate the
          Service — including Firebase (authentication and storage),
          RevenueCat (subscription management), and analytics providers;
        </li>
        <li>
          <strong>When required by law</strong> or to protect the rights,
          property, or safety of Bench, our users, or others.
        </li>
      </ul>

      <h2>Data Retention</h2>
      <p>
        We retain your account and workout data for as long as your account
        is active. You can delete your account at any time from the
        Settings screen, which permanently removes your workout history and
        personal information from our systems, subject to limited records
        we may be required to retain for legal or accounting purposes.
      </p>

      <h2>Your Choices</h2>
      <ul>
        <li>
          <strong>Access and update.</strong> You can review and update
          your account information at any time from the in-app settings.
        </li>
        <li>
          <strong>Privacy settings.</strong> You can control what is shown
          on your public profile and who can interact with you.
        </li>
        <li>
          <strong>Account deletion.</strong> You can delete your account
          and all associated data from the Settings screen.
        </li>
      </ul>

      <h2>Children's Privacy</h2>
      <p>
        Bench is not directed to children under 13, and we do not knowingly
        collect personal information from children under 13. If you believe
        a child has provided us personal information, please contact us so
        we can remove it.
      </p>

      <h2>Security</h2>
      <p>
        We use industry-standard safeguards to protect your information,
        including encryption in transit and at rest. No method of
        transmission over the Internet is 100% secure, but we work
        continuously to protect your data.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify
        you of material changes by posting the updated policy in the
        Service and updating the effective date above. Continued use of the
        Service after changes are posted constitutes your acceptance of
        the updated policy.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy or our data
        practices, please contact us at{" "}
        <a href="mailto:support@benchgymlog.com">support@benchgymlog.com</a>.
      </p>
    </LegalLayout>
  );
}
