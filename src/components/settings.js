import React from "react";

const Settings = () => {
  return (
    <div className="relative min-h-screen bg-white text-gray-900 font-nunito overflow-x-hidden">
      {/* Floating Orbs */}
      <div className="absolute top-[-20px] left-[10%] w-[150px] h-[150px] bg-gradient-to-br from-[#aec6c3] to-[#66b2af] rounded-full shadow-xl animate-float z-0"></div>
      <div className="absolute top-[40%] right-[-40px] w-[180px] h-[180px] bg-gradient-to-br from-[#008080] to-[#66b2af] rounded-full shadow-xl animate-float z-0"></div>
      <div className="absolute top-[60px] right-[25%] w-[160px] h-[160px] bg-gradient-to-br from-[#66b2af] to-[#aec6c3] rounded-full shadow-xl animate-float z-0"></div>
      <div className="absolute bottom-[-30px] left-[8%] w-[220px] h-[220px] bg-gradient-to-br from-[#66b2af] to-[#008080] rounded-full shadow-xl animate-float z-0"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[140px] h-[140px] bg-gradient-to-br from-[#aec6c3] to-[#66b2af] rounded-full shadow-xl animate-float z-0"></div>

      <main className="relative max-w-3xl mx-auto py-16 px-4 flex flex-col gap-8">
        <header className="text-center">
          <h1 className="text-4xl font-playfair font-bold">Settings</h1>
          <p className="text-gray-600 text-lg mt-2">
            Adjust your journey with <em>Therapa</em> just the way you like it.
          </p>
        </header>

        {/* Privacy Settings */}
        <section className="bg-white shadow-lg rounded-lg p-6 relative z-10">
          <h2 className="text-xl font-playfair font-bold">Privacy Settings</h2>
          <p className="text-gray-600 text-sm mt-1">
            Manage your cookie and tracking preferences below.
          </p>
          <div className="mt-4 bg-gray-50 rounded-lg p-4">
            <h3 className="">Necessary cookies</h3>
            <p className="text-gray-500 text-sm">Required for the website to function properly. Cannot be disabled.</p>
          </div>
          <div className="mt-4 bg-gray-50 rounded-lg p-4 flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <h3 className="">Analytics cookies</h3>
              <label className="relative inline-block w-10 h-6">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <span className="absolute inset-0 bg-gray-300 rounded-full transition peer-checked:bg-teal-600"></span>
                <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-4"></span>
              </label>
            </div>
            <p className="text-gray-500 text-sm">Helps us understand how visitors interact with our website through anonymous analytics insights.</p>
          </div>
        </section>

        {/* Subscription Settings */}
        <section className="bg-white shadow-lg rounded-lg p-6 relative z-10">
          <h2 className="text-xl font-playfair font-bold">Subscription Settings</h2>
          <p className="text-gray-600 text-sm mt-1">
            Your subscription is currently <strong>canceled</strong> but remains active until <strong>February 28, 2025</strong>.
          </p>
          <button className="mt-4 bg-teal-600 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg hover:-translate-y-1 transition">
            Upgrade
          </button>
        </section>

        {/* Danger Zone */}
        <section className="bg-white shadow-lg rounded-lg p-6 border border-red-100 relative z-10">
          <h2 className="text-xl font-playfair font-bold text-red-600">Danger Zone</h2>
          <p className="text-red-800 text-sm mt-1">These actions cannot be undone. Proceed with caution.</p>

          <div className="mt-4 bg-red-50 border border-red-100 rounded-lg p-4">
            <h3 className="font-semibold text-red-600">Reset chat history</h3>
            <p className="text-gray-600 text-sm">Clears all previous conversations and starts fresh.</p>
            <button className="mt-2 bg-red-600 text-white px-4 py-1.5 rounded-full font-semibold shadow-md hover:shadow-lg hover:-translate-y-1 transition">
              Reset history
            </button>
          </div>

          <div className="mt-4 bg-red-50 border border-red-100 rounded-lg p-4">
            <h3 className="font-semibold text-red-600">Delete account</h3>
            <p className="text-gray-600 text-sm">Permanently deletes your account and all related data.</p>
            <button className="mt-2 bg-red-600 text-white px-4 py-1.5 rounded-full font-semibold shadow-md hover:shadow-lg hover:-translate-y-1 transition">
              Delete account
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Settings;