import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Sefton Roofing & Property Maintenance — how we collect, use, and protect your personal data.",
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16 bg-white">
      <div className="container-lg">
        <Breadcrumb items={[{ label: "Privacy Policy" }]} />
        <div className="max-w-3xl mt-8">
          <h1 className="text-3xl font-black text-brand-navy mb-6">Privacy Policy</h1>
          <p className="text-slate-600 mb-4">
            Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </p>

          <div className="prose-roofing space-y-6">
            <div>
              <h2>1. Who We Are</h2>
              <p>
                {SITE.name} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a roofing and property
                maintenance company based at {SITE.address.street}, {SITE.address.city},{" "}
                {SITE.address.county}. You can contact us at {SITE.email} or {SITE.phoneDisplay}.
              </p>
            </div>

            <div>
              <h2>2. What Data We Collect</h2>
              <p>When you contact us or request a quote, we may collect:</p>
              <ul>
                <li>Name and contact details (phone, email, address)</li>
                <li>Details about your roofing enquiry or property</li>
                <li>Communications between you and our team</li>
              </ul>
              <p>We also collect standard web analytics data (page visits, device type) to improve our website.</p>
            </div>

            <div>
              <h2>3. How We Use Your Data</h2>
              <p>We use your data to:</p>
              <ul>
                <li>Respond to your enquiries and provide quotes</li>
                <li>Complete and follow up on roofing work</li>
                <li>Send relevant service communications (you can opt out at any time)</li>
                <li>Improve our website and services</li>
              </ul>
            </div>

            <div>
              <h2>4. Data Sharing</h2>
              <p>
                We do not sell your personal data. We may share it with our team members
                who need it to provide our services. We do not share your data with third-party
                marketers.
              </p>
            </div>

            <div>
              <h2>5. Your Rights</h2>
              <p>
                Under UK GDPR, you have the right to access, correct, or delete your personal data.
                To exercise these rights, contact us at {SITE.email}.
              </p>
            </div>

            <div>
              <h2>6. Contact</h2>
              <p>
                For privacy-related queries, contact {SITE.email} or write to us at{" "}
                {SITE.address.street}, {SITE.address.city}, {SITE.address.county}, {SITE.address.postcode}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
