
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Resources from '../components/Resources';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import PracticalChallenges from '../components/PracticalChallenges';
import MentorshipSection from '../components/MentorshipSection';
import RoadmapSection from '../components/RoadmapSection';
import ChatbotAssistant from '../components/ChatbotAssistant';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PracticalChallenges />
        <RoadmapSection />
        <MentorshipSection />
        <Features />
        <HowItWorks />
        <Resources />
        <Testimonials />
        <CTA />
      </main>
      <ChatbotAssistant />
      <Footer />
    </div>
  );
};

export default Index;
