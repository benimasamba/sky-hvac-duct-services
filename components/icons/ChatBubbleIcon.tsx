
import React from 'react';

const ChatBubbleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.722.372c-1.07.107-2.132.642-2.897 1.393l-2.247 2.247c-.373.373-.86.58-1.38.58s-1.007-.207-1.38-.58l-2.247-2.247c-.765-.751-1.827-1.286-2.897-1.393l-3.722-.372c-1.134-.1-1.98-.957-1.98-2.193v-4.286c0-.97.616-1.813 1.5-2.097M16.5 9.75l-6 6m0-6l6 6" />
  </svg>
);

export default ChatBubbleIcon;
