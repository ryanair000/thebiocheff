import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Acceptance of Terms</h2>
                <p className="text-gray-600">
                  By accessing and using The Bio Chef service, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Service Description</h2>
                <p className="text-gray-600 mb-3">
                  The Bio Chef is a web-based service that helps users create personalized social media bios using artificial intelligence. The service includes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>AI-powered bio generation for multiple social media platforms</li>
                  <li>Customization options for tone, emojis, and hashtags</li>
                  <li>Platform-specific character limit optimization</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">User Responsibilities</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>You must provide your own valid OpenAI API key</li>
                  <li>You are responsible for all costs associated with your API usage</li>
                  <li>You must not use the service for illegal or harmful purposes</li>
                  <li>You must not attempt to reverse engineer or compromise the service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">API Usage and Costs</h2>
                <div className="space-y-3 text-gray-600">
                  <p>
                    This service requires you to provide your own OpenAI API key. All API usage costs are your responsibility. 
                    We recommend monitoring your OpenAI usage to avoid unexpected charges.
                  </p>
                  <p>
                    We are not responsible for any costs incurred through the use of your API key with our service.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Limitation of Liability</h2>
                <p className="text-gray-600">
                  The service is provided "as is" without warranties of any kind. We shall not be liable for any damages 
                  arising from the use of this service, including but not limited to API costs, data loss, or service interruptions.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Modifications</h2>
                <p className="text-gray-600">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. 
                  Continued use of the service constitutes acceptance of modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Contact Information</h2>
                <p className="text-gray-600">
                  For questions about these Terms of Service, please contact us through our Socials page.
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

export default Terms;
