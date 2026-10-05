"use client";

import useCookie from "@/context/Cookie";

const CookieConsent = () => {
  const { visible, accept, decline } = useCookie();
  if (!visible) return null;

  return (
    <div className="fixed bottom-2 left-2 right-2 z-20 w-auto md:w-72 bg-secondary rounded-xl p-5 text-secondary-foreground shadow-xl fade-in">
      <p className="text-sm leading-relaxed text-center">
        We use cookies to improve your experience. By continuing to use this site, you agree to our use of cookies.
      </p>
      <div className="mt-4 flex w-full items-center justify-center gap-4">
        <button
          className="rounded-lg bg-white px-4 py-2 text-sm transition hover:bg-gray-100 text-black"
          onClick={decline}>
          Decline
        </button>
        <button
          className="rounded-lg bg-white text-black px-4 py-2 text-sm transition hover:bg-gray-200"
          onClick={accept}>
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
