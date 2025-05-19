
export default function Home() {
  return (
    <div className="bg-black text-white font-sans min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-16 bg-[#111418] flex flex-col items-center py-4 space-y-6">
        <div className="text-teal-400 text-2xl">◎</div>
        <div className="text-teal-400">✔</div>
        <div className="text-teal-400">🚗</div>
        <div className="text-teal-400">AI</div>
        <div className="text-teal-400">📊</div>
        <div className="text-teal-400">💰</div>
        <button className="text-sm text-gray-400 mt-auto mb-2">Sign up</button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-10 py-6">
        {/* Top Navigation */}
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-2xl font-bold">AGRINEXUS</h1>
          <nav className="space-x-6 text-gray-300">
            <a href="#">About</a>
            <a href="#">Solutions</a>
            <a href="#">AI</a>
            <a href="#">Design</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
            <a href="#" className="text-teal-400">Sign Up</a>
          </nav>
        </header>

        {/* Cards Grid */}
        <div className="grid grid-cols-3 gap-6">
          {[
            { title: "Smart Farm", desc: "Monitor and manage your smart farming operations." },
            { title: "Logistics System", desc: "Optimize required export documents for each country." },
            { title: "Contract Center", desc: "Automate and manage agricultural contracts." },
            { title: "Crop Revenue Prediction", desc: "Estimate annual crop revenue based on region and crop." },
            { title: "Export Documentation", desc: "Generate required export documents for each country." },
            { title: "Customer Retargeting", desc: "Automate marketing based on customer behavior." },
            { title: "Accounting & System", desc: "Update and improve features in real time." },
            { title: "Active Users", desc: "1.234 online", isStat: true },
            { title: "Self-Learning System", desc: "Update and improve features in real time." },
          ].map((card, index) => (
            <div key={index} className="bg-[#1c1f26] p-6 rounded-xl shadow-md flex flex-col justify-between">
              <h2 className="text-lg font-semibold">{card.title}</h2>
              {card.isStat ? (
                <p className="text-2xl text-teal-400">{card.desc}</p>
              ) : (
                <>
                  <p className="text-sm text-gray-400">{card.desc}</p>
                  <button className="mt-3 text-sm text-teal-400">View</button>
                </>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
