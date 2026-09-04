// import React, { useState } from "react";
// import {
//   HiOutlineShieldCheck,
//   HiOutlineLightningBolt,
//   HiOutlineDeviceMobile,
//   HiOutlineCurrencyRupee,
//   HiOutlineChevronRight,
//   HiOutlineCheckCircle,
//   HiOutlineGlobeAlt,
//   HiOutlineMenu,
//   HiOutlineX,
// } from "react-icons/hi";
// import {
//   FaTractor,
//   FaStore,
//   FaHandHoldingUsd,
//   FaGooglePlay,
//   FaLeaf,
// } from "react-icons/fa";

// export default function Home() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [selectedRole, setSelectedRole] = useState("farmer");

//   const stats = [
//     { label: "Farmers & Merchants", value: "350,000+" },
//     { label: "Credit Facilitated", value: "₹2,500+ Cr" },
//     { label: "Districts Covered", value: "500+" },
//     { label: "Disbursal Speed", value: "< 24 Hours" },
//   ];

//   const roleContent = {
//     farmer: {
//       badge: "For Farmers & Cultivators",
//       title: "Credit designed for crop cycles and harvest timelines.",
//       description:
//         "Access fast equipment financing, input loans for seeds & fertilizers, and seasonal working capital with flexible repayment schedules aligned with your harvest.",
//       features: [
//         "Low interest rates starting from 10.5% p.a.",
//         "Repayment matching crop harvesting seasons",
//         "Financing for tractors, harvesters & solar pumps",
//         "Minimal documentation with Aadhaar & land records",
//       ],
//       cta: "Apply for Farmer Credit",
//       icon: <FaTractor className="text-3xl text-emerald-600" />,
//     },
//     retailer: {
//       badge: "For Agri-Retailers & Dealers",
//       title: "Fuel your agri-business with inventory & credit limits.",
//       description:
//         "Get revolving credit lines to stock top seed, fertilizer, and pesticide brands. Manage farmer dues seamlessly with digital Khata tracking.",
//       features: [
//         "Pre-approved credit limits up to ₹50 Lakhs",
//         "Zero-collateral digital application workflow",
//         "Embedded digital ledger & payment collection",
//         "Direct manufacturer supply chain tie-ups",
//       ],
//       cta: "Grow Your Store Credit",
//       icon: <FaStore className="text-3xl text-emerald-600" />,
//     },
//     institutional: {
//       badge: "For Enterprises & Co-operatives",
//       title: "Digitize and finance your entire agricultural value chain.",
//       description:
//         "Connect suppliers, distributors, and farm clusters through integrated credit scoring, verified rural data sets, and automated settlement engines.",
//       features: [
//         "Custom supply-chain financing models",
//         "Deep rural credit score algorithms",
//         "Automated reconciliation & API integration",
//         "Risk-mitigated escrow disbursement mechanisms",
//       ],
//       cta: "Partner With Us",
//       icon: <FaHandHoldingUsd className="text-3xl text-emerald-600" />,
//     },
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">
//       {/* Top Banner */}
//       <div className="bg-emerald-900 px-4 py-2 text-center text-xs font-medium text-emerald-100 sm:text-sm">
//         🌾 Empowering Rural Bharat with low-cost digital credit & smarter farm inputs.
//         <span className="ml-2 underline font-semibold cursor-pointer">
//           Check Loan Eligibility →
//         </span>
//       </div>

//       {/* Navbar */}
//       <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
//         <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
//           <a href="#" className="flex items-center gap-2">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md shadow-emerald-500/20">
//               <FaLeaf className="text-xl" />
//             </div>
//             <div>
//               <span className="text-xl font-bold tracking-tight text-emerald-950">
//                 Jai<span className="text-emerald-600">Kisan</span>
//               </span>
//               <span className="hidden sm:block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
//                 Rural Financial Services
//               </span>
//             </div>
//           </a>

//           <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
//             <a href="#solutions" className="hover:text-emerald-600 transition-colors">Solutions</a>
//             <a href="#features" className="hover:text-emerald-600 transition-colors">Features</a>
//             <a href="#impact" className="hover:text-emerald-600 transition-colors">Our Impact</a>
//             <a href="#app" className="hover:text-emerald-600 transition-colors">Mobile App</a>
//           </nav>

//           <div className="hidden sm:flex items-center gap-3">
//             <button className="flex items-center gap-1.5 rounded-full border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-emerald-600 hover:text-emerald-700 transition">
//               <HiOutlineGlobeAlt className="text-base" />
//               <span>EN / हिं</span>
//             </button>
//             <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-700 transition">
//               Apply Now
//             </button>
//           </div>

//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden"
//           >
//             {mobileMenuOpen ? <HiOutlineX className="text-2xl" /> : <HiOutlineMenu className="text-2xl" />}
//           </button>
//         </div>

//         {mobileMenuOpen && (
//           <div className="border-b border-slate-200 bg-white px-4 py-4 md:hidden">
//             <div className="flex flex-col gap-3 text-base font-medium text-slate-700">
//               <a href="#solutions" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
//               <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
//               <a href="#impact" onClick={() => setMobileMenuOpen(false)}>Our Impact</a>
//               <a href="#app" onClick={() => setMobileMenuOpen(false)}>Mobile App</a>
//               <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
//                 <button className="w-full rounded-lg bg-emerald-600 py-2.5 font-semibold text-white">
//                   Apply Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </header>

//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-white to-white py-16 sm:py-24">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid items-center gap-12 lg:grid-cols-12">
//             <div className="lg:col-span-7">
//               <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-100/60 px-3.5 py-1 text-xs font-semibold text-emerald-800">
//                 <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
//                 RBI Registered Lending Partners
//               </div>
//               <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
//                 Democratizing credit for <span className="text-emerald-600 underline decoration-emerald-300">Rural Bharat</span>.
//               </h1>
//               <p className="mt-5 max-w-2xl text-base text-slate-600 sm:text-lg">
//                 Fast, affordable financing and smart digital commerce tools built specifically for farmers, rural businesses, and agri-supply networks.
//               </p>

//               <div className="mt-8 flex flex-wrap items-center gap-4">
//                 <button className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 transition">
//                   Get Started Today
//                   <HiOutlineChevronRight />
//                 </button>
//                 <a
//                   href="#app"
//                   className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 hover:border-emerald-600 hover:text-emerald-700 transition"
//                 >
//                   <FaGooglePlay className="text-emerald-600" />
//                   Download Android App
//                 </a>
//               </div>

//               <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium">
//                 <div className="flex items-center gap-1.5">
//                   <HiOutlineShieldCheck className="text-lg text-emerald-600" />
//                   Bank-Grade Encryption
//                 </div>
//                 <div className="flex items-center gap-1.5">
//                   <HiOutlineLightningBolt className="text-lg text-emerald-600" />
//                   100% Paperless Digital KYC
//                 </div>
//                 <div className="flex items-center gap-1.5">
//                   <HiOutlineCurrencyRupee className="text-lg text-emerald-600" />
//                   Transparent Interest Rates
//                 </div>
//               </div>
//             </div>

//             <div className="lg:col-span-5">
//               <div className="relative mx-auto max-w-md rounded-2xl border border-emerald-100 bg-white p-6 shadow-xl shadow-emerald-950/5 sm:p-8">
//                 <div className="flex items-center justify-between border-b border-slate-100 pb-4">
//                   <div>
//                     <h2 className="text-base font-bold text-slate-900">Check Credit Limit</h2>
//                     <p className="text-xs text-slate-500">Takes less than 2 minutes</p>
//                   </div>
//                   <span className="rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
//                     Instant Check
//                   </span>
//                 </div>

//                 <form className="mt-5 space-y-4" onSubmit={(e) => e.preventDefault()}>
//                   <div>
//                     <label className="block text-xs font-semibold text-slate-700">I am a</label>
//                     <div className="mt-1.5 grid grid-cols-2 gap-2">
//                       <button
//                         type="button"
//                         onClick={() => setSelectedRole("farmer")}
//                         className={`rounded-lg border px-3 py-2 text-xs font-semibold transition ${
//                           selectedRole === "farmer"
//                             ? "border-emerald-600 bg-emerald-50 text-emerald-800"
//                             : "border-slate-200 text-slate-600 hover:bg-slate-50"
//                         }`}
//                       >
//                         🌾 Farmer
//                       </button>
//                       <button
//                         type="button"
//                         onClick={() => setSelectedRole("retailer")}
//                         className={`rounded-lg border px-3 py-2 text-xs font-semibold transition ${
//                           selectedRole === "retailer"
//                             ? "border-emerald-600 bg-emerald-50 text-emerald-800"
//                             : "border-slate-200 text-slate-600 hover:bg-slate-50"
//                         }`}
//                       >
//                         🏪 Agri Retailer
//                       </button>
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-xs font-semibold text-slate-700">Mobile Number</label>
//                     <div className="mt-1.5 flex rounded-lg border border-slate-300 overflow-hidden focus-within:border-emerald-600">
//                       <span className="inline-flex items-center bg-slate-100 px-3 text-xs text-slate-500">
//                         +91
//                       </span>
//                       <input
//                         type="tel"
//                         placeholder="98765 43210"
//                         className="w-full px-3 py-2.5 text-sm outline-none"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-xs font-semibold text-slate-700">Pincode / District</label>
//                     <input
//                       type="text"
//                       placeholder="e.g. 411001 (Pune)"
//                       className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-600"
//                     />
//                   </div>

//                   <button className="w-full rounded-xl bg-emerald-600 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-700 transition">
//                     Check Eligibility via OTP
//                   </button>

//                   <p className="text-center text-[11px] text-slate-400">
//                     By continuing, you agree to our Terms & Data Sharing Policy.
//                   </p>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Counter */}
//       <section id="impact" className="border-y border-slate-200 bg-white py-10">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-8">
//             {stats.map((item, idx) => (
//               <div key={idx} className="text-center">
//                 <p className="text-3xl font-extrabold text-emerald-600 sm:text-4xl">{item.value}</p>
//                 <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">{item.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Segmented Solutions Tabs */}
//       <section id="solutions" className="py-20 bg-slate-50">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-600">Our Products</h2>
//             <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
//               Tailored Financial Solutions for the Agri Ecosystem
//             </p>
//             <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-500 sm:text-base">
//               Whether you are growing crops, selling agricultural machinery, or running a village retail outlet, we have financing shaped for you.
//             </p>
//           </div>

//           <div className="mt-8 flex justify-center gap-2">
//             {[
//               { key: "farmer", label: "Farmers & Cultivators" },
//               { key: "retailer", label: "Agri-Dealers & Retailers" },
//               { key: "institutional", label: "Corporate & Co-ops" },
//             ].map((tab) => (
//               <button
//                 key={tab.key}
//                 onClick={() => setSelectedRole(tab.key)}
//                 className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition ${
//                   selectedRole === tab.key
//                     ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
//                     : "bg-white text-slate-600 border border-slate-200 hover:border-emerald-300"
//                 }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>

//           <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm">
//             <div className="grid items-center gap-8 lg:grid-cols-12">
//               <div className="lg:col-span-7 space-y-4">
//                 <div className="flex items-center gap-3">
//                   <div className="rounded-xl bg-emerald-50 p-3">
//                     {roleContent[selectedRole].icon}
//                   </div>
//                   <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
//                     {roleContent[selectedRole].badge}
//                   </span>
//                 </div>
//                 <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
//                   {roleContent[selectedRole].title}
//                 </h3>
//                 <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
//                   {roleContent[selectedRole].description}
//                 </p>

//                 <div className="grid sm:grid-cols-2 gap-3 pt-2">
//                   {roleContent[selectedRole].features.map((feat, i) => (
//                     <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
//                       <HiOutlineCheckCircle className="text-lg text-emerald-600 shrink-0 mt-0.5" />
//                       <span>{feat}</span>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="pt-4">
//                   <button className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-700 transition">
//                     {roleContent[selectedRole].cta} →
//                   </button>
//                 </div>
//               </div>

//               <div className="lg:col-span-5">
//                 <div className="rounded-2xl bg-gradient-to-br from-emerald-800 to-emerald-950 p-6 text-white shadow-lg space-y-4">
//                   <div className="flex items-center justify-between border-b border-emerald-700/50 pb-3">
//                     <span className="text-xs uppercase tracking-wider text-emerald-300 font-semibold">
//                       Sample Loan Terms
//                     </span>
//                     <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] text-emerald-200">
//                       Standard Estimate
//                     </span>
//                   </div>
//                   <div>
//                     <p className="text-xs text-emerald-200">Loan Ticket Size</p>
//                     <p className="text-2xl font-bold text-white">₹50,000 – ₹25,00,000</p>
//                   </div>
//                   <div className="grid grid-cols-2 gap-3">
//                     <div>
//                       <p className="text-xs text-emerald-200">Repayment Period</p>
//                       <p className="text-sm font-semibold">6 to 36 Months</p>
//                     </div>
//                     <div>
//                       <p className="text-xs text-emerald-200">Processing Fee</p>
//                       <p className="text-sm font-semibold">Minimal (Up to 1.5%)</p>
//                     </div>
//                   </div>
//                   <div className="rounded-xl bg-emerald-900/60 p-3 text-xs text-emerald-100 border border-emerald-700/40">
//                     💡 Repayments can be deferred until post-harvest mandi sales.
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section id="features" className="py-20 bg-white">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-2xl mx-auto">
//             <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-600">Built for Bharat</h2>
//             <p className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
//               Why rural enterprises trust Jai Kisan
//             </p>
//           </div>

//           <div className="mt-14 grid gap-8 md:grid-cols-3">
//             <div className="rounded-2xl border border-slate-200 p-6 hover:shadow-md transition">
//               <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 mb-4">
//                 <HiOutlineLightningBolt className="text-2xl" />
//               </div>
//               <h3 className="text-lg font-bold text-slate-900">Zero Paperwork Disbursal</h3>
//               <p className="mt-2 text-sm text-slate-600">
//                 Complete your KYC using DigiLocker, Aadhaar OTP, and geo-verified farm coordinates without branch visits.
//               </p>
//             </div>

//             <div className="rounded-2xl border border-slate-200 p-6 hover:shadow-md transition">
//               <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 mb-4">
//                 <FaTractor className="text-2xl" />
//               </div>
//               <h3 className="text-lg font-bold text-slate-900">Crop-Cycle Structured EMI</h3>
//               <p className="mt-2 text-sm text-slate-600">
//                 Never worry about rigid monthly deductions. Align your installments directly with Kharif or Rabi harvests.
//               </p>
//             </div>

//             <div className="rounded-2xl border border-slate-200 p-6 hover:shadow-md transition">
//               <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 mb-4">
//                 <HiOutlineGlobeAlt className="text-2xl" />
//               </div>
//               <h3 className="text-lg font-bold text-slate-900">Regional Language Support</h3>
//               <p className="mt-2 text-sm text-slate-600">
//                 Access services and customer support in Marathi, Hindi, Telugu, Kannada, Gujarati, and English.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* App Download Banner */}
//       <section id="app" className="bg-emerald-900 py-16 text-white">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid items-center gap-10 md:grid-cols-2">
//             <div>
//               <span className="rounded-full bg-emerald-800 px-3 py-1 text-xs font-semibold text-emerald-300">
//                 Mobile-First Fintech
//               </span>
//               <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
//                 Get the Jai Kisan App on your Smartphone
//               </h2>
//               <p className="mt-4 text-sm text-emerald-100 leading-relaxed sm:text-base">
//                 Track your active loan status, manage khata transactions with local farmers, and receive timely agronomy advisory directly on Android.
//               </p>
//               <div className="mt-6 flex flex-wrap gap-4">
//                 <button className="flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-slate-900 shadow hover:bg-slate-100 transition">
//                   <FaGooglePlay className="text-2xl text-emerald-600" />
//                   <div className="text-left">
//                     <p className="text-[10px] uppercase font-bold text-slate-500">Get it on</p>
//                     <p className="text-sm font-extrabold text-slate-900">Google Play</p>
//                   </div>
//                 </button>
//               </div>
//             </div>

//             <div className="flex justify-center">
//               <div className="w-full max-w-sm rounded-3xl border-4 border-emerald-700 bg-emerald-950 p-6 shadow-2xl">
//                 <div className="flex items-center justify-between border-b border-emerald-800 pb-3">
//                   <span className="text-xs font-bold text-emerald-300">Jai Kisan Mobile</span>
//                   <span className="text-[10px] text-emerald-400">v3.4.1</span>
//                 </div>
//                 <div className="mt-4 space-y-3">
//                   <div className="rounded-xl bg-emerald-900/80 p-3">
//                     <p className="text-xs text-emerald-300">Active Credit Line</p>
//                     <p className="text-xl font-bold text-white">₹3,40,000</p>
//                   </div>
//                   <div className="rounded-xl bg-emerald-900/80 p-3">
//                     <p className="text-xs text-emerald-300">Next Repayment Due</p>
//                     <p className="text-sm font-semibold text-white">15 Nov (Post Harvest)</p>
//                   </div>
//                   <button className="w-full rounded-lg bg-emerald-500 py-2 text-xs font-bold text-white hover:bg-emerald-600 transition">
//                     Quick Repay / View Ledger
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="border-t border-slate-200 bg-white py-12 text-slate-500">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
//             <div>
//               <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Products</h4>
//               <ul className="mt-4 space-y-2 text-xs sm:text-sm">
//                 <li><a href="#" className="hover:text-emerald-600">Tractor & Equipment Loans</a></li>
//                 <li><a href="#" className="hover:text-emerald-600">Input Financing</a></li>
//                 <li><a href="#" className="hover:text-emerald-600">Retailer Working Capital</a></li>
//                 <li><a href="#" className="hover:text-emerald-600">Digital Khata</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Company</h4>
//               <ul className="mt-4 space-y-2 text-xs sm:text-sm">
//                 <li><a href="#" className="hover:text-emerald-600">About Us</a></li>
//                 <li><a href="#" className="hover:text-emerald-600">Careers</a></li>
//                 <li><a href="#" className="hover:text-emerald-600">Impact Stories</a></li>
//                 <li><a href="#" className="hover:text-emerald-600">Media & Press</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Support & Compliance</h4>
//               <ul className="mt-4 space-y-2 text-xs sm:text-sm">
//                 <li><a href="#" className="hover:text-emerald-600">Grievance Redressal</a></li>
//                 <li><a href="#" className="hover:text-emerald-600">Lending Partners</a></li>
//                 <li><a href="#" className="hover:text-emerald-600">Privacy Policy</a></li>
//                 <li><a href="#" className="hover:text-emerald-600">Terms of Service</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Contact Us</h4>
//               <p className="mt-4 text-xs sm:text-sm">
//                 Toll Free: 1800-XXX-XXXX<br />
//                 support@jaikisan.app<br />
//                 Mumbai, Maharashtra, India
//               </p>
//             </div>
//           </div>

//           <div className="mt-12 border-t border-slate-100 pt-6 text-center text-xs text-slate-400">
//             <p>© {new Date().getFullYear()} Jai Kisan. All rights reserved. Loans are facilitated via RBI-regulated Banks and NBFC partners.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }