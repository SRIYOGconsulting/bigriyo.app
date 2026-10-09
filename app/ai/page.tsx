import type { Metadata } from "next";
import Ribbon from "@/components/ui/Ribbon";

export const metadata: Metadata = {
  title: "AI Usage Policy | BIGRIYO",
  description: "Read BIGRIYO's Artificial Intelligence Usage Policy."
};

const AIUsagePolicy = () => {
  return (
    <>
      {/* Header / Ribbon */}
      <Ribbon name="AI Usage Policy" showFontSize={true} />

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 lg:px-0 my-12">
        <section className="rounded-xl p-6 shadow-md border border-border space-y-6">
          <p className="leading-relaxed">
            <span className="font-medium">Version:</span> 1.2
            <br />
            <span className="font-medium">Effective Date:</span> July 2026
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-secondary mb-2">1. Purpose</h2>
            <p className="leading-relaxed">
              This policy explains how BIGRIYO designs, develops, and uses Artificial Intelligence (AI) across its
              repair service platform. It ensures AI is used responsibly, securely, and transparently while protecting
              the privacy and rights of customers and service professionals.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-secondary mb-2">2. Scope</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Voice-to-text booking</li>
              <li>AI service provider matching</li>
              <li>Personalized service recommendations</li>
              <li>Custom promotional offers</li>
              <li>Seasonal service suggestions</li>
              <li>AI chatbot support</li>
              <li>Smart worker dispatch</li>
              <li>DIY helpdesk assistance</li>
              <li>Language translation and text-to-speech</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-secondary mb-2">3. Guiding Principles</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Human oversight over AI decisions</li>
              <li>Transparency when AI is used</li>
              <li>Data privacy and security</li>
              <li>Fair and unbiased recommendations</li>
              <li>Compliance with Nepal's privacy laws</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-secondary mb-2">4. Acceptable Use</h2>
            <p className="leading-relaxed mb-2">AI may be used to:</p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Recommend services</li>
              <li>Match customers with professionals</li>
              <li>Provide chatbot assistance</li>
              <li>Translate and transcribe content</li>
            </ul>
            <p className="leading-relaxed mb-2">AI must not be used to:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Make irreversible decisions without human review</li>
              <li>Discriminate against users or service providers</li>
              <li>Provide medical or legal advice</li>
              <li>Use customer data beyond its intended purpose</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-secondary mb-2">5. AI Features</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Voice-to-Text Booking</li>
              <li>Smart Service Matching</li>
              <li>Personalized Recommendations</li>
              <li>Custom Offers</li>
              <li>Seasonal Recommendations</li>
              <li>AI Booking Chatbot</li>
              <li>Worker Dispatch</li>
              <li>DIY Helpdesk</li>
              <li>Multilingual Communication</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-secondary mb-2">6. Human Oversight</h2>
            <p className="leading-relaxed">
              Important decisions such as account suspension, payment processing, and worker deactivation always require
              human review.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-secondary mb-2">7. Data Privacy</h2>
            <p className="leading-relaxed">
              BIGRIYO protects personal information in accordance with Nepal's privacy laws. Voice recordings, location
              data, and personal information are processed securely and only for the intended purpose.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-secondary mb-2">8. Quality Assurance</h2>
            <p className="leading-relaxed">
              AI systems are regularly tested for accuracy, fairness, security, and performance. Any issues are reviewed
              and corrected before deployment.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-secondary mb-2">9. Policy Updates</h2>
            <p className="leading-relaxed">
              This policy may be updated as AI technologies evolve. The latest version will always be available on the
              BIGRIYO website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-secondary mb-2">10. Contact</h2>
            <p className="leading-relaxed">
              If you have any questions regarding this AI Usage Policy, please contact BIGRIYO Customer Support.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIUsagePolicy;
