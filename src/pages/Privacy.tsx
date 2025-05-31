import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Information We Collect</h2>
                <p className="text-gray-600 mb-3">
                  Our The Bio Chef is designed with privacy in mind. We collect minimal information to provide our service:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Personal information you voluntarily provide (name, profession, hobbies, goals)</li>
                  <li>Platform preferences and bio customization settings</li>
                  <li>Usage analytics to improve our service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">How We Use Your Information</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>To generate personalized social media bios using AI</li>
                  <li>To improve and optimize our bio generation algorithms</li>
                  <li>To provide customer support when needed</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Data Storage and Security</h2>
                <div className="space-y-3 text-gray-600">
                  <p>
                    <strong>API Keys:</strong> Your OpenAI API key is stored locally in your browser and is never transmitted to our servers.
                  </p>
                  <p>
                    <strong>Personal Data:</strong> The information you provide for bio generation is processed securely and is not stored permanently on our servers.
                  </p>
                  <p>
                    <strong>Third-Party Services:</strong> We use OpenAI's API to generate bios. Please review OpenAI's privacy policy for their data handling practices.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Your Rights</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>You can clear your locally stored data at any time</li>
                  <li>You have the right to request deletion of any data we may have</li>
                  <li>You can contact us with any privacy concerns</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Contact Us</h2>
                <p className="text-gray-600">
                  If you have any questions about this Privacy Policy, please contact us through our Contact page.
                </p>
              </section>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <Link to="/">
              <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
