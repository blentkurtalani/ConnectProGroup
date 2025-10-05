import React, { useState } from 'react';

export const AdBanner: React.FC = () => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="sticky top-20 z-40 bg-gray-900/90 border-b border-white/10 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center">
        <a href="#" className="font-medium hover:text-green-400 transition-colors duration-200">
          Ads: //////////////////////////////////////////////////!
        </a>
        <button
          aria-label="Mbyll banerin"
          className="ml-3 text-gray-400 hover:text-gray-200 transition-colors duration-200"
          onClick={() => setVisible(false)}
        >
          ×
        </button>
      </div>
    </div>
  );
};


