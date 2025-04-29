import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Clock, Bell } from "lucide-react";

interface ProductPreviewCardsProps {
  className?: string;
}

const ProductPreviewCards = ({ className = "" }: ProductPreviewCardsProps) => {
  return (
    <div className={`grid md:grid-cols-3 gap-6 ${className}`}>
      {/* Eligibility Report Card */}
      <Card className="overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="p-4 bg-pr-blue text-white font-medium font-semib flex items-center space-x-2">
          <Check className="h-5 w-5" />
          <span>Your PR Eligibility Report</span>
        </CardHeader>
        <CardContent className="p-6">
          <div className="mb-4">
            <div className="text-lg text-pr-gray font-semibold mb-2">Current Eligibility</div>
            <div className="bg-green-100 text-green-800 rounded-md px-3 py-2 inline-block text-sm font-medium">
              Eligible for 3 programs now
            </div>
          </div>
          
          <div className="mb-4">
            <div className="text-lg text-pr-gray font-semibold mb-2">Potential Programs</div>
            <div className="bg-yellow-100 text-yellow-800 rounded-md px-3 py-2 inline-block text-sm font-medium">
              2 more by improving IELTS
            </div>
          </div>
          
          <div className="w-full h-20 bg-gray-100 rounded flex items-center justify-center text-gray-400">
            [Detailed report preview]
          </div>
        </CardContent>
      </Card>
      
      {/* Timeline Card */}
      <Card className="overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="p-4 bg-pr-blue text-white font-medium flex items-center space-x-2">
          <Clock className="h-5 w-5" />
          <span>Your PR Timeline</span>
        </CardHeader>
        <CardContent className="p-6">
          <div className="relative pb-12">
            {/* Timeline */}
            <div className="absolute h-full w-0.5 bg-gray-200 left-4"></div>
            
            {/* Timeline Point 1 */}
            <div className="relative flex items-start mb-6">
              <div className="h-8 w-8 rounded-full border-2 border-pr-blue bg-white flex items-center justify-center z-10 absolute left-0">
                <div className="h-4 w-4 rounded-full bg-pr-blue"></div>
              </div>
              <div className="ml-12">
                <h4 className="font-medium text-pr-gray mb-1">Current Status</h4>
                <p className="text-sm text-gray-500">Express Entry - CEC Eligible</p>
              </div>
            </div>
            
            {/* Timeline Point 2 */}
            <div className="relative flex items-start mb-6">
              <div className="h-8 w-8 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center z-10 absolute left-0">
                <div className="h-4 w-4 rounded-full bg-gray-300"></div>
              </div>
              <div className="ml-12">
                <h4 className="font-medium text-pr-gray mb-1">In 3 months</h4>
                <p className="text-sm text-gray-500">Provincial Nominee Eligibility</p>
              </div>
            </div>
            
            {/* Timeline Point 3 */}
            <div className="relative flex items-start">
              <div className="h-8 w-8 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center z-10 absolute left-0">
                <div className="h-4 w-4 rounded-full bg-gray-300"></div>
              </div>
              <div className="ml-12">
                <h4 className="font-medium text-pr-gray mb-1">In 6 months</h4>
                <p className="text-sm text-gray-500">PR Status Potential</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Alerts Card */}
      <Card className="overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="p-4 bg-pr-blue text-white font-medium flex items-center space-x-2">
          <Bell className="h-5 w-5" />
          <span>Program Alerts</span>
        </CardHeader>
        <CardContent className="p-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
            <div className="flex items-start">
              <div className="text-xl mr-3">🎉</div>
              <div>
                <h4 className="font-medium text-green-800 mb-1">New Eligibility!</h4>
                <p className="text-sm text-green-700">You now qualify for the Atlantic Immigration Pilot!</p>
                <p className="text-xs text-gray-500 mt-1">2 days ago</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start">
              <div className="text-xl mr-3">📊</div>
              <div>
                <h4 className="font-medium text-blue-800 mb-1">Score Update</h4>
                <p className="text-sm text-blue-700">Your Express Entry CRS score increased by 15 points!</p>
                <p className="text-xs text-gray-500 mt-1">1 week ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductPreviewCards;
