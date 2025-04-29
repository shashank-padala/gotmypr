"use client";

export default function Footer() {
  return (
    <footer className="bg-pr-gray text-white">
      <div className="section-container py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">GotMyPR</h3>
            <p className="text-sm text-white/80">
              Discover your fastest path to Canadian Permanent Residence with personalized immigration pathway recommendations.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/80 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-white/80 hover:text-white">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/80 hover:text-white">
                  Immigration Programs
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white">
                  PR Pathways
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white">
                  PR Success Stories
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/80 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} GotMyPR.com. All rights reserved.</p>
          <p className="mt-2">
            This site provides information only. It is not a substitute for professional immigration advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
