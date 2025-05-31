import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Loader2, Sparkles, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PLATFORM_LIMITS = {
  Instagram: 150,
  "Twitter/X": 160,
  TikTok: 80,
  LinkedIn: 220,
  Facebook: 101,
};

const Index = () => {
  const [formData, setFormData] = useState({
    platform: "",
    name: "",
    profession: "",
    hobbies: "",
    goals: "",
    tone: "",
    includeEmojis: false,
    includeHashtags: false,
  });
  
  const [generatedBio, setGeneratedBio] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateBio = async () => {
    const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY;
    console.log('Generate bio called with API key:', openaiApiKey ? 'API key present' : 'No API key');
    
    if (!openaiApiKey) {
      toast({
        title: "Configuration Error",
        description: "OpenAI API key is not configured. Please contact support.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.platform || !formData.name || !formData.profession) {
      toast({
        title: "Missing Information",
        description: "Please fill in at least platform, name, and profession.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    try {
      const prompt = `Create a concise, engaging, and personalized bio in English for ${formData.platform} (character limit: ${PLATFORM_LIMITS[formData.platform as keyof typeof PLATFORM_LIMITS]}) based on:
      
Name: ${formData.name}
Profession/Role: ${formData.profession}
Hobbies/Interests: ${formData.hobbies || "Not specified"}
Goals/Personality: ${formData.goals || "Not specified"}
Tone: ${formData.tone || "friendly"}
Include Emojis: ${formData.includeEmojis ? "Yes" : "No"}
Include Hashtags: ${formData.includeHashtags ? "Yes" : "No"}

Return only the bio text, optimized for ${formData.platform}'s style and format.`;

      console.log('Making API request to OpenAI...');

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openaiApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'You are a social media expert who creates engaging, platform-optimized bios. Always stay within character limits and match the platform\'s style.'
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          max_tokens: 150,
          temperature: 0.7,
        }),
      });

      console.log('API response status:', response.status);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: { message: 'Unknown error' } }));
        console.error('API Error:', errorData);
        throw new Error(errorData.error?.message || `API request failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log('API response data:', data);
      
      const bio = data.choices[0].message.content.trim();
      setGeneratedBio(bio);
      
      toast({
        title: "Bio Generated!",
        description: "Your personalized bio is ready.",
      });
    } catch (error) {
      console.error('Error generating bio:', error);
      toast({
        title: "Generation Failed",
        description: error instanceof Error ? error.message : "Failed to generate bio. Please check your API key and try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedBio);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({
      title: "Copied!",
      description: "Bio copied to clipboard.",
    });
  };

  const getCharacterCount = () => generatedBio.length;
  const getCharacterLimit = () => formData.platform ? PLATFORM_LIMITS[formData.platform as keyof typeof PLATFORM_LIMITS] : 0;
  const isOverLimit = () => getCharacterCount() > getCharacterLimit();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            The Bio Chef
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Create compelling social media bios that perfectly capture your personality and professional essence
          </p>
          
          {/* Navigation Links */}
          <div className="flex justify-center space-x-6 text-sm">
            <a href="/about" className="text-purple-600 hover:text-purple-800 transition-colors">About</a>
            <a href="/contact" className="text-purple-600 hover:text-purple-800 transition-colors">Contact</a>
            <a href="/privacy" className="text-purple-600 hover:text-purple-800 transition-colors">Privacy</a>
            <a href="/terms" className="text-purple-600 hover:text-purple-800 transition-colors">Terms</a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-800">Tell Us About Yourself</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Platform Selection */}
              <div className="space-y-2">
                <Label htmlFor="platform">Platform *</Label>
                <Select value={formData.platform} onValueChange={(value) => handleInputChange('platform', value)}>
                  <SelectTrigger className="border-gray-200 focus:border-purple-400">
                    <SelectValue placeholder="Choose your platform" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(PLATFORM_LIMITS).map(platform => (
                      <SelectItem key={platform} value={platform}>
                        {platform} ({PLATFORM_LIMITS[platform as keyof typeof PLATFORM_LIMITS]} chars)
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    placeholder="e.g., Sarah"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="border-gray-200 focus:border-purple-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="profession">Profession/Role *</Label>
                  <Input
                    id="profession"
                    placeholder="e.g., Graphic Designer"
                    value={formData.profession}
                    onChange={(e) => handleInputChange('profession', e.target.value)}
                    className="border-gray-200 focus:border-purple-400"
                  />
                </div>
              </div>

              {/* Additional Info */}
              <div className="space-y-2">
                <Label htmlFor="hobbies">Hobbies/Interests</Label>
                <Input
                  id="hobbies"
                  placeholder="e.g., hiking, coffee lover, photography"
                  value={formData.hobbies}
                  onChange={(e) => handleInputChange('hobbies', e.target.value)}
                  className="border-gray-200 focus:border-purple-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="goals">Goals or Personality Traits</Label>
                <Input
                  id="goals"
                  placeholder="e.g., growth mindset, helping others, ambitious"
                  value={formData.goals}
                  onChange={(e) => handleInputChange('goals', e.target.value)}
                  className="border-gray-200 focus:border-purple-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tone">Tone (Optional)</Label>
                <Select value={formData.tone} onValueChange={(value) => handleInputChange('tone', value)}>
                  <SelectTrigger className="border-gray-200 focus:border-purple-400">
                    <SelectValue placeholder="Choose tone (default: friendly)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="friendly">Friendly</SelectItem>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="witty">Witty</SelectItem>
                    <SelectItem value="inspirational">Inspirational</SelectItem>
                    <SelectItem value="casual">Casual</SelectItem>
                    <SelectItem value="confident">Confident</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Switches */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="emojis">Include Emojis</Label>
                  <Switch
                    id="emojis"
                    checked={formData.includeEmojis}
                    onCheckedChange={(checked) => handleInputChange('includeEmojis', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="hashtags">Include Hashtags</Label>
                  <Switch
                    id="hashtags"
                    checked={formData.includeHashtags}
                    onCheckedChange={(checked) => handleInputChange('includeHashtags', checked)}
                  />
                </div>
              </div>

              <Button 
                onClick={generateBio} 
                disabled={isGenerating}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-lg transition-all duration-200"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Generate Bio
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Generated Bio */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-800">Your Generated Bio</CardTitle>
            </CardHeader>
            <CardContent>
              {generatedBio ? (
                <div className="space-y-4">
                  <div className="relative">
                    <Textarea
                      value={generatedBio}
                      onChange={(e) => setGeneratedBio(e.target.value)}
                      className={`min-h-[150px] resize-none border-gray-200 focus:border-purple-400 ${
                        isOverLimit() ? 'border-red-400 focus:border-red-400' : ''
                      }`}
                      placeholder="Your generated bio will appear here..."
                    />
                    <Button
                      onClick={copyToClipboard}
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2 h-8 w-8 p-0"
                    >
                      {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                  
                  {formData.platform && (
                    <div className="flex justify-between items-center text-sm">
                      <span className={`font-medium ${isOverLimit() ? 'text-red-600' : 'text-green-600'}`}>
                        {getCharacterCount()} / {getCharacterLimit()} characters
                      </span>
                      {isOverLimit() && (
                        <span className="text-red-600 text-xs">Exceeds {formData.platform} limit</span>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-gray-500">Fill out the form and click "Generate Bio" to create your personalized bio</p>
                </div>
              )}
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

export default Index;
