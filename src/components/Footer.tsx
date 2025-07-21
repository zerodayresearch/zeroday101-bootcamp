import React from 'react';
import { Shield, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-red-500/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <Shield className="h-6 w-6 text-red-500" />
            <div>
              <h3 className="text-lg font-bold text-red-500">Zeroday101 Bootcamp</h3>
              <p className="text-xs text-gray-500">Part of Zeroday Operations</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm mb-2">
              © 2025 Zeroday Operations. All rights reserved.
            </p>
            <div className="flex items-center justify-center md:justify-end space-x-4 text-xs text-gray-500">
              <a
                href="https://opzero.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-400 transition-colors duration-200 flex items-center space-x-1"
              >
                <span>part of operation opzero.ru</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            "Hacking adalah gaya hidup yang meliputi bagaimana cara kita berfikir, menganalisa dan bertindak"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;