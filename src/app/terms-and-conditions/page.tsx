import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms governing your use of Bench Gym Log.",
};

export default function TermsAndConditions() {
  return (
    <LegalLayout title="Terms & Conditions" effectiveDate="January 1, 2026">
      <p>
        These Terms and Conditions ("Terms") govern your access to and use of
        the Bench Gym Log mobile and web applications and related services
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
        terminate accounts that violate these Terms.
      </p>

      <h2>Use of the Service</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Service for any unlawful purpose;</li>
        <li>
          Attempt to reverse-engineer, decompile, or otherwise tamper with
          the Service;
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
        If you publish a workout publicly, you grant other users a license
        to view, save, and clone that workout within the Service.
      </p>

      <h2>Premium Membership</h2>
      <p>
        Bench offers an optional Premium membership with monthly, annual,
        and lifetime billing options. Subscriptions are processed through
        the Apple App Store, Google Play, or our payment processor and are
        subject to the terms of those platforms. Subscriptions renew
        automatically unless cancelled at least 24 hours before the end of
        the current billing period. You can manage or cancel your
        subscription at any time in your platform's subscription settings.
      </p>

      <h2>Fitness Disclaimer</h2>
      <p>
        Bench is a workout-tracking tool and does not provide medical or
        professional fitness advice. You should consult a qualified
        healthcare provider before starting any new exercise program.
        Bench is not responsible for any injury or health consequence
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
        any other reason at our discretion.
      </p>

      <h2>Disclaimers</h2>
      <p>
        The Service is provided "as is" and "as available" without any
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
        These Terms are governed by the laws of the State of California,
        without regard to its conflict of laws principles. Any dispute
        arising under these Terms will be resolved in the state or federal
        courts located in California.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about these Terms, please contact us at{" "}
        <a href="mailto:support@benchgymlog.com">support@benchgymlog.com</a>.
      </p>
    </LegalLayout>
  );
}
