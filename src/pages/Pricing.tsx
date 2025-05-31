import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Gem, Rocket, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
            <Gem className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Simple & Transparent Pricing
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that best fits your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm flex flex-col">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-semibold text-gray-800">Free</CardTitle>
              <p className="text-gray-600">Perfect for trying out the service</p>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow p-6">
              <div className="text-center mb-6">
                <span className="text-5xl font-bold text-gray-800">Ksh 0</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 text-gray-600 flex-grow mb-8">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> 5 Bio Generations/month</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Basic Customization</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Standard Support</li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-lg transition-all duration-200">
                Get Started Free
              </Button>
            </CardContent>
          </Card>

          {/* Pro Plan */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm flex flex-col border-2 border-purple-500 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">Popular</div>
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-semibold text-gray-800">Pro</CardTitle>
              <p className="text-gray-600">For power users and professionals</p>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow p-6">
              <div className="text-center mb-6">
                <span className="text-5xl font-bold text-gray-800">Ksh 500</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 text-gray-600 flex-grow mb-8">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Unlimited Bio Generations</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Advanced Customization</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Priority Support</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Access to New Features</li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-lg transition-all duration-200">
                Choose Pro
              </Button>
            </CardContent>
          </Card>

          {/* Enterprise Plan */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm flex flex-col">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-semibold text-gray-800">Enterprise</CardTitle>
              <p className="text-gray-600">Custom solutions for businesses</p>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow p-6">
              <div className="text-center mb-6">
                <span className="text-5xl font-bold text-gray-800">Ksh Custom</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 text-gray-600 flex-grow mb-8">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> All Pro Features</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Dedicated Account Manager</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Custom Integrations</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> SLA & Uptime Guarantee</li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-lg transition-all duration-200">
                Contact Sales
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500">
          <p>© {new Date().getFullYear()} The Bio Chef. Powered by OpenAI GPT-3.5 Turbo.</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing; 