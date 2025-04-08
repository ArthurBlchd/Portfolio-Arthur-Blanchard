"use client";

import { ArrowDownCircle, Mail, Menu, X, Award, ExternalLink, ChevronRight, Linkedin, Search, CheckCircle2, Globe, Clock } from "lucide-react";
import { Mail as MailIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { useState, useRef } from "react";
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null); // Pour les services
  const [activeStep, setActiveStep] = useState<number | null>(null); // Pour Design Process

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error("Erreur lors du chargement de la vidéo:", e);
  };

  // Gestion de l'état actif des cartes (services)
  const handleCardClick = (id: number) => {
    setActiveCard(activeCard === id ? null : id);
  };

  // Gestion du survol (hover) pour les services
  const handleMouseEnter = (card: HTMLDivElement) => {
    if (!card.classList.contains("active")) {
      const overlay = card.querySelector(".overlay") as HTMLDivElement;
      overlay.style.width = "33%";
      const text = card.querySelector(".text-content") as HTMLDivElement;
      text.style.color = "#000";
    }
  };

  const handleMouseLeave = (card: HTMLDivElement) => {
    if (!card.classList.contains("active")) {
      const overlay = card.querySelector(".overlay") as HTMLDivElement;
      overlay.style.width = "0";
      const text = card.querySelector(".text-content") as HTMLDivElement;
      text.style.color = "transparent";
    }
  };

  // Gestion du clic pour Design Process
  const handleStepClick = (index: number) => {
    setActiveStep(activeStep === index ? null : index);
  };

  // Données des services
  const services = [
    { id: 1, icon: "WWW", title: "Website Creation", link: "#" },
    { id: 2, icon: "SEO", title: "Search Engine Optimization & Local SEO", link: "#" },
    { id: 3, icon: "ADS", title: "Google ADS Campaign", link: "#" },
    { id: 4, icon: "EMAIL", title: "Emailing & Copywriting", link: "#" },
  ];

  // Données des étapes du processus (Design Process)
  const designProcess = [
    {
      number: "01.",
      title: "Website Creation",
      context: "Developed for Alpes3D.com when I was student, I am also working every day on a Worpress for WineEmotion USA.",
      description:
        "I've designed and developed clean, responsive websites with a focus on user experience and conversion. By implementing intuitive navigation, high quality images, fast-loading pages, and clear CTAs. I've used the CMS Wordpess for this. I've added lead magnets and functionality to improver the user experiences as ROI Calculator, Map of the customers.",
      keywords: ["Local SEO", "Competitor Analysis", "Market Research"],
    },
    {
      number: "02.",
      title: "Local SEO",
      context: "Developed for Alpes3D, a small local company in the field of pest control.",
      description:
        "I enhanced the company's local search presence by fully optimizing their Google My Business profile with accurate business details, high-quality images, and strategic keywords. I also encouraged satisfied customers to leave positive reviews, boosting local ranking and trust (+210 reviews with cards that send directly to the Google my business) Additionally. These efforts increased local search impressions by 40% and boosted customer calls and website visits by 25% within three months.",
      keywords: ["Wordpress", "CMS", "Development"],
    },
    {
      number: "03.",
      title: "SEO",
      context: "For Alpes3D, small local company in the field of pest control and currently for WineEmotion USA.",
      description:
        "I've created pages for every services offer by Alpes3D that targeted business keywords + city. These pages were on 1st page of Google, and some on Top 3. For WineEmotion USA, I've wrote high quality content pages for SEO to target business keywords and blog posts. I've get new backlinks from our partners and press releases. I took care of the speed of the website to be very functionnal. Results: SEO is the main channel of acquisition with + 1.5K clicks per months.",
      keywords: ["Redaction SEO", "Netlinking", "Technical SEO"],
    },
    {
      number: "04.",
      title: "Google ADS",
      context: "Currently working on a campaign for WineEmotion USA + wrote Ads for Alpes3D",
      description:
        "I wrote the campaign and learn how to run a Google Ads Campaign with an expert that worked in agency. Currently, I am setting up a campaign for WineEmotion USA.",
      keywords: ["Campaign", "Paid Marketing", "Ads"],
    },
    {
      number: "05.",
      title: "Emailing",
      context: "For WineEmotion USA, using MailChimp",
      description:
        "I launched sveral campaign to target more than 5000 contacts. I've warmed up the domain and clean the datas. Results: 98% Successful Deliveries, 43% Open Rate",
      keywords: ["Emailing", "Open Rate"],
    },
  ];

  // Composant pour l'icône "+"
  const CardIcon = () => (
    <div className="relative w-6 h-6">
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -translate-y-1/2" />
      <div className="absolute top-0 left-1/2 h-full w-0.5 bg-white transform -translate-x-1/2" />
    </div>
  );

  return (
    <main className="min-h-screen bg-[#1C1C1C] overflow-x-hidden">
      <div
        className="relative"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          backgroundColor: "#1C1C1C",
        }}
      >
        {/* Header avec grille */}
        <header className="z-50">
          <div className="max-w-full md:max-w-[1400px] mx-auto px-4 md:px-12 py-0 mt-8">
            <div className="flex items-center justify-between">
              {/* Bouton Hamburger (visible sur mobile uniquement) */}
              <div className="md:hidden">
                <button onClick={toggleMenu} className="text-gray-300 hover:text-white">
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>

              {/* Navigation */}
              <nav
                className={`${
                  isMenuOpen ? "block" : "hidden"
                } md:flex md:items-center absolute md:static top-0 left-0 w-full md:w-auto bg-[#1C1C1C] md:bg-transparent z-40 px-4 py-0 md:p-0 transition-all duration-300 ease-in-out`}
              >
                <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
                  <li>
                    <Link
                      href="#METHOD"
                      className="text-gray-300 hover:text-white transition-colors text-sm md:text-base"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Method
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#WHATIDO"
                      className="text-gray-300 hover:text-white transition-colors text-sm md:text-base"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#TOOLS"
                      className="text-gray-300 hover:text-white transition-colors text-sm md:text-base"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Tools
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#WHATIDID"
                      className="text-gray-300 hover:text-white transition-colors text-sm md:text-base"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      What I did
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#about"
                      className="text-gray-300 hover:text-white transition-colors text-sm md:text-base"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About Me
                    </Link>
                  </li>
                  <li>
  <a
    href="/resume.pdf" // path to your resume file
    download
    className="text-gray-300 hover:text-white transition-colors text-sm md:text-base"
    onClick={() => setIsMenuOpen(false)}
  >
    Download Resume
  </a>
</li>
                </ul>
              </nav>

              {/* Icônes et bouton Contact (toujours visibles) */}
              <div className="flex items-center space-x-3">
                <Link href="https://linkedin.com/in/arthur-blanchard-345693202" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
                </Link>
                <Button 
  className="rounded-full bg-gradient-to-br from-[#a8d325]/10 to-[#7a9c1b]/10 text-black hover:bg-gradient-to-br hover:from-[#a8d325]/20 hover:to-[#7a9c1b]/20 text-xs md:text-base px-4 py-2 md:px-6 md:py-3"
  onClick={() => window.location.href = "mailto:arthurbld49@gmail.com"}
>
  Envoyer un mail
</Button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section avec grille */}
        <section className="relative min-h-screen px-4 md:px-12 z-10 border-b border-gray-700 mt-16">
          <div className="max-w-[1400px] mx-auto w-full">
            {/* Line 1 */}
            <div className="flex flex-col md:flex-row items-center h-auto mb-4 md:mb-0">
              <div className="w-full md:w-[70%] mb-2 md:mb-0">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-6xl sm:text-6xl md:text-[6rem] lg:text-[8.5rem] xl:text-[9.5rem] font-black text-white uppercase tracking-tighter leading-[0.9]"
                  style={{ fontStretch: "condensed" }}
                >
                  Hi! I'm Arthur
                </motion.div>
              </div>

              <div className="hidden md:flex w-full md:w-[30%] relative justify-center md:justify-end">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="relative z-10"
                >
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    playsInline
                    muted
                    onError={handleVideoError}
                    className="w-64 md:w-[30vw] max-w-[300px] rounded-full"
                  >
                    <source src="/memoji.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </motion.div>
              </div>
            </div>

            {/* Line 2 */}
            <div className="flex flex-col md:flex-row items-center h-auto mt-4 md:mt-0 mb-8 md:mb-0">
              <div className="hidden md:flex w-full md:w-[20%] mt-2 md:mt-0">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-sm text-gray-400 max-w-[300px] text-center md:text-left"
                >
                  I enable businesses to achieve top search engine rankings, drive qualified traffic, and establish a strong online brand through SEO & Google Ads.
                </motion.p>
              </div>

              <div className="w-full md:w-[80%]">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-6xl sm:text-6xl md:text-[6rem] lg:text-[8.5rem] xl:text-[9.5rem] font-black text-white uppercase tracking-tighter leading-[0.9] text-left md:text-right"
                  style={{ fontStretch: "condensed" }}
                >
                  Digital Marketing
                </motion.p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white text-center"
          >
            <p className="text-sm uppercase tracking-widest mb-2">Learn More</p>
            <ArrowDownCircle className="w-8 h-8 mx-auto animate-bounce" />
          </motion.div>
        </section>
      </div>

      {/* Stats Section */}
      <section className="py-20 px-4 md:px-8 bg-[#1C1C1C]">
        <div className="max-w-[1400px] mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter text-center mb-20"
          >
            Boost your online visibility
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Stat 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-primary rounded-lg p-4 w-16 h-16 mx-auto mb-8 flex items-center justify-center">
                <Search className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-5xl md:text-6xl font-bold text-white mb-6">46%</h3>
              <p className="text-gray-400 text-lg">
                46% of all Google searches are looking for local information. Therefore, local SEO is an important factor for local businesses.
              </p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="bg-primary rounded-lg p-4 w-16 h-16 mx-auto mb-8 flex items-center justify-center">
                <Search className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-5xl md:text-6xl font-bold text-white mb-6">75%</h3>
              <p className="text-gray-400 text-lg">
                About 75% of users never go past the first page of search results. This highlights the crucial importance of good SEO positioning.
              </p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="bg-primary rounded-lg p-4 w-16 h-16 mx-auto mb-8 flex items-center justify-center">
                <Search className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-5xl md:text-6xl font-bold text-white mb-6">50%</h3>
              <p className="text-gray-400 text-lg">
                Over 50% of search queries contain long-tail keywords (more than 3 words). This highlights the importance of optimizing your site for more specific and conversational queries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="METHOD" className="py-20 px-4 md:px-8 bg-[#1C1C1C]">
        <div className="max-w-[1400px] mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter text-center mb-20"
          >    
            My Work Method
          </motion.h2>

          <div className="space-y-32">
            {/* Step 1 - Discover */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 items-start"
            >
              <div>
                <h3 className="text-6xl md:text-8xl font-bold text-white mb-6">01.</h3>
                <h4 className="text-4xl md:text-5xl font-bold text-white mb-8">Discover</h4>
                <div className="space-y-6 text-gray-400">
                  <p className="text-lg">
                    Before we start working together, I take the time to thoroughly understand your business, challenges, and goals. This step is essential to align my strategy with your specific needs, whether it's for SEO, Google Ads campaigns, or creating your website.
                  </p>
                  <p className="text-lg">
                    I conduct an in-depth analysis of your current online presence:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <span>State of your website (speed, structure, UX)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <span>Current SEO performance (ranking, keywords, backlinks)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <span>History of your ad campaigns (if applicable)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <span>Competitor analysis (strategies, positioning)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hidden md:block">
                {/* Placeholder for potential illustration */}
              </div>
            </motion.div>

            {/* Step 2 - Setup */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start md:items-center"
            >
              <div className="hidden md:block">
                {/* Placeholder for potential illustration */}
              </div>
              <div className="md:pl-6">
                <h3 className="text-6xl md:text-8xl font-bold text-white mb-6">02.</h3>
                <h4 className="text-4xl md:text-5xl font-bold text-white mb-8">Setup</h4>
                <div className="space-y-6 text-gray-400">
                  <p className="text-lg">
                    After conducting a thorough analysis of your situation, we move on to the Setup phase. This stage typically lasts about a week and a half but can be expedited in case of urgency to meet your deadlines.
                  </p>
                  <p className="text-lg">
                    The Setup phase focuses on implementing the recommendations discussed during our consultation. This involves: Setting up tracking systems to measure your site's performance, Creating and configuring targeted ad campaigns, Optimizing your website or creating strategic landing pages when necessary.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 3 - Analysis */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 items-start"
            >
              <div>
                <h3 className="text-6xl md:text-8xl font-bold text-white mb-6">03.</h3>
                <h4 className="text-4xl md:text-5xl font-bold text-white mb-8">Analysis, Report and Optimisation</h4>
                <div className="space-y-6 text-gray-400">
                  <p className="text-lg">
                    Once the strategy is in place, the work doesn't stop there. This phase is essential for maximizing results and ensuring sustained performance. I continuously analyze the collected data to measure the effectiveness of the implemented actions and identify new opportunities for improvement.
                  </p>
                  <p className="text-lg">
                    I make regular adjustments to optimize the strategy based on the results obtained and market changes. This includes improving processes, testing new approaches, and adjusting parameters to maximize return on investment.
                  </p>
                  <p className="text-lg">
                    I provide you with detailed and transparent reports to track performance progress and understand the impact of the actions taken.
                  </p>
                </div>
              </div>
              <div className="hidden md:block">
                {/* Placeholder for potential illustration */}
              </div>
            </motion.div>

{/* Bouton "Let's talk" centré */}
            <div className="flex justify-center py-12">
              <Button
                size="lg"
                className="bg-[#a7d427] hover:bg-[#96c01f] text-black rounded-full px-8 py-3 text-lg font-semibold transition-colors"
                onClick={() => window.location.href = "mailto:arthurbld49@gmail.com"} // Replace with your email
              >
                Let's talk
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section id="WHATIDO" className="py-20 px-4 md:px-8 bg-[#1C1C1C]">
        <div className="max-w-[1400px] mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter text-center mb-20"
          >    
            What I do
          </motion.h2>

          <div className="services-container">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: service.id * 0.2 }}
                className={`service-card ${activeCard === service.id ? "active" : ""}`}
                tabIndex={0}
                onClick={() => handleCardClick(service.id)}
                onMouseEnter={(e) => handleMouseEnter(e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCardClick(service.id);
                  }
                }}
              >
                <div className="overlay" />
                <div className="icon">{service.icon}</div>
                <div className="text-content">{service.title}</div>                            
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="TOOLS" className="py-20 px-4 md:px-8 bg-[#1C1C1C]">
        <div className="max-w-[1400px] mx-auto">
          {/* Titre */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter text-center mb-16"
          >
            The tools I use
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* GA4 & Semrush Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative rounded-2xl p-6 bg-[#222] border border-gray-700 hover:border-[#a8d325] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#a8d325]/10 to-[#7a9c1b]/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <Image
                  src="/analysis.png"
                  alt="GA4 & Semrush Icon"
                  width={40}
                  height={40}
                  className="mb-4"
                />
                <h3 className="text-2xl font-bold text-white mb-2">GA4 & Semrush</h3>
                <p className="text-gray-400 text-sm mb-4">I analyze your traffic and keywords.</p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/GA4_SEMRush.png"
                    alt="GA4 & Semrush Dashboard"
                    width={300}
                    height={180}
                    className="rounded-lg w-full"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Google Ads Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative rounded-2xl p-6 bg-[#222] border border-gray-700 hover:border-[#a8d325] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#a8d325]/10 to-[#7a9c1b]/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <Image
                  src="/googleads.png"
                  alt="Google Ads Icon"
                  width={40}
                  height={40}
                  className="mb-4"
                />
                <h3 className="text-2xl font-bold text-white mb-2">Google Ads</h3>
                <p className="text-gray-400 text-sm mb-4">I set up your ad campaigns.</p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/GoogleAds.png"
                    alt="Google Ads Logo"
                    width={300}
                    height={180}
                    className="rounded-lg w-full"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Google SGE Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative rounded-2xl p-6 bg-[#222] border border-gray-700 hover:border-[#a8d325] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#a8d325]/10 to-[#7a9c1b]/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <Image
                  src="/bar-chart.png"
                  alt="Google SGE Icon"
                  width={40}
                  height={40}
                  className="mb-4"
                />
                <h3 className="text-2xl font-bold text-white mb-2">Google SGE</h3>
                <p className="text-gray-400 text-sm mb-4">Optimization and analysis of the SEO campaign.</p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/GoogleSGE.png"
                    alt="Google SGE Dashboard"
                    width={300}
                    height={180}
                    className="rounded-lg w-full"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* WordPress Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative rounded-2xl p-6 bg-[#222] border border-gray-700 hover:border-[#a8d325] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#a8d325]/10 to-[#7a9c1b]/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <Image
                  src="/website.png"
                  alt="WordPress Icon"
                  width={40}
                  height={40}
                  className="mb-4"
                />
                <h3 className="text-2xl font-bold text-white mb-2">WordPress</h3>
                <p className="text-gray-400 text-sm mb-4">CMS for the creation and management of your website.</p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/Wordpress.png"
                    alt="WordPress Logo"
                    width={300}
                    height={180}
                    className="rounded-lg w-full"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Mailchimp Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative rounded-2xl p-6 bg-[#222] border border-gray-700 hover:border-[#a8d325] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#a8d325]/10 to-[#7a9c1b]/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <Image
                  src="/email.png"
                  alt="Mailchimp Icon"
                  width={40}
                  height={40}
                  className="mb-4"
                />
                <h3 className="text-2xl font-bold text-white mb-2">Mailchimp</h3>
                <p className="text-gray-400 text-sm mb-4">Communicate about your business and promote your offers.</p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/MailChimp.png"
                    alt="Mailchimp Logo"
                    width={300}
                    height={180}
                    className="rounded-lg w-full"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

{/* Design Process Section */}
<section id="WHATIDID" className="py-24 px-6 md:px-12 bg-[#1C1C1C]">
  <div className="max-w-[1400px] mx-auto">
    {/* Title */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tight">
        What I Did
      </h2>
      <p className="mt-4 text-lg text-neutral-400 max-w-lg leading-relaxed">
        After two experiences in companies, I have managed various SEO, SEA, and emailing campaigns, as well as website creation.
      </p>
    </motion.div>

    {/* Process List */}
    <div className="space-y-12">
      {designProcess.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="relative group cursor-pointer"
        >
          {/* Main Card */}
          <div
            className="relative border border-white/20 rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg bg-[#252525]"
            onClick={() => handleStepClick(index)}
          >
            {/* Gradient Overlay (No Blur) */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#a8d325]/20 to-[#7a9c1b]/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: activeStep === index ? 1 : 0,
                height: activeStep === index ? "100%" : 0,
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Card Content */}
            <div className="relative p-8 flex justify-between items-center z-10">
              <div className="flex items-center space-x-6">
                <div className="text-lg font-bold text-[#a8d325]">
                  {step.number}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white uppercase">
                  {step.title}
                </h3>
              </div>
              <CardIcon />
            </div>

            {/* Expanded Content */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: activeStep === index ? 1 : 0,
                height: activeStep === index ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden bg-[#1A1A1A]"
            >
              <div className="p-8 pt-0">
                {/* Context */}
                <p className="text-sm font-semibold text-[#a8d325] mb-2">
                  {step.context}
                </p>
                {/* Description */}
                <p className="text-lg text-neutral-300 mb-4 leading-relaxed">
                  {step.description}
                </p>
                {/* Keywords */}
                <div className="flex flex-wrap gap-3">
                  {step.keywords.map((keyword, i) => (
                    <span
                      key={i}
                      className="text-sm font-medium text-neutral-400 uppercase bg-[#303030] px-3 py-1 rounded-lg transition-all duration-300 hover:bg-[#a8d325] hover:text-black"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      
     {/* About Me Section */}
<section id="about" className="py-24 px-6 md:px-12 bg-[#1C1C1C]">
  <div className="max-w-[1400px] mx-auto">
    {/* Title */}
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tight text-center mb-16"
    >
      About Me
    </motion.h2>

    {/* Content */}
    <div className="flex flex-col md:flex-row gap-12">
      {/* Images (50% Width) */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        {/* Horizontal Image (Top) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          className="relative rounded-2xl overflow-hidden border border-gray-700 hover:border-[#a8d325] transition-all duration-300 shadow-lg"
        >
          <Image
            src="/Diplôme Master's Degree.png"
            alt="Arthur Working"
            width={600}
            height={400}
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </motion.div>

        {/* Two Vertical Images (Bottom) */}
        <div className="grid grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            className="relative rounded-2xl overflow-hidden border border-gray-700 hover:border-[#a8d325] transition-all duration-300 shadow-lg aspect-[3/4]"
          >
            <Image
              src="/Photo-pro.png"
              alt="Arthur in Urban Setting"
              width={300}
              height={400}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            className="relative rounded-2xl overflow-hidden border border-gray-700 hover:border-[#a8d325] transition-all duration-300 shadow-lg aspect-[3/4]"
          >
            <Image
              src="/Photo-perso.png"
              alt="Arthur in Urban Setting"
              width={300}
              height={400}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </div>
      </div>

      {/* Text (50% Width) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 flex flex-col justify-center"
      >
        <div className="space-y-6">
          <p className="text-lg text-neutral-300 leading-relaxed">
            Hello, my name is <span className="text-[#a8d325] font-semibold">Arthur</span>. My studies and experiences since 2021 have led me to become fascinated and passionate about the incredible world of digital marketing.
          </p>
          <p className="text-lg text-neutral-300 leading-relaxed">
            Since the beginning of my career, I have helped two companies increase their traffic, improve their conversions, and optimize their ROI. The campaigns I created have reached thousands of people and generated more revenue for my clients.
          </p>
          <p className="text-lg text-neutral-300 leading-relaxed">
            In addition to my work with these companies, I recently decided to expand my portfolio by starting my freelance journey. I hold a Master’s degree in communication and digital marketing, and I also completed a growth hacking training program to further enhance my skills in acquisition.
          </p>
          <p className="text-lg text-neutral-300 leading-relaxed">
            My personal goal is simple: to improve daily, enhance my performance, stay closely updated on the latest technological advancements, and find new, exciting projects.
          </p>
          <p className="text-lg text-neutral-300 leading-relaxed">
            Your success is my success.
          </p>
        </div>
      </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
