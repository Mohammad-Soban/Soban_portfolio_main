import React from 'react';
import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillsSection';
import { ContactSection } from '../components/ContactSection';
import {
  useRoleCycler,
  useMouseTracking,
  useScrollAnimations,
  useDarkMode,
  useContactForm,
  useScheduleModal,
  useResumeDownload,
  useContactActions,
} from '../hooks/usePortfolio';

// Lazy load remaining components for better performance
const ProjectsSection = React.lazy(() => import('../components/ProjectsSection'));
const ExperienceSection = React.lazy(() => import('../components/ExperienceSection'));
const CertificationsSection = React.lazy(() => import('../components/CertificationsSection'));
const Footer = React.lazy(() => import('../components/Footer'));
const ScheduleModal = React.lazy(() => import('../components/ScheduleModal'));

export default function Index() {
  // Custom hooks for state management and business logic
  const currentRole = useRoleCycler();
  const mousePosition = useMouseTracking();
  const isVisible = useScrollAnimations();
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const { formData, handleInputChange, handleFormSubmit } = useContactForm();
  const scheduleModal = useScheduleModal();
  const handleResumeDownload = useResumeDownload();
  const { handleCall, handleWhatsApp } = useContactActions();

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <Navigation
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        onResumeDownload={handleResumeDownload}
      />

      {/* Hero Section */}
      <HeroSection
        currentRole={currentRole}
        mousePosition={mousePosition}
        isDarkMode={isDarkMode}
        onResumeDownload={handleResumeDownload}
      />

      {/* About Section */}
      <AboutSection isVisible={isVisible} />

      {/* Lazy-loaded sections wrapped in Suspense */}
      <React.Suspense fallback={<div className="h-20 flex items-center justify-center">Loading...</div>}>
        <ProjectsSection isVisible={isVisible} />
        <ExperienceSection isVisible={isVisible} />
      </React.Suspense>

      {/* Skills Section */}
      <SkillsSection isVisible={isVisible} />

      {/* Certifications Section */}
      <React.Suspense fallback={<div className="h-20 flex items-center justify-center">Loading...</div>}>
        <CertificationsSection />
      </React.Suspense>

      {/* Contact Section */}
      <ContactSection
        isVisible={isVisible}
        formData={formData}
        onInputChange={handleInputChange}
        onFormSubmit={handleFormSubmit}
        onCall={handleCall}
        onWhatsApp={handleWhatsApp}
        onScheduleModal={() => scheduleModal.setShowScheduleModal(true)}
      />

      {/* Footer */}
      <React.Suspense fallback={null}>
        <Footer />
      </React.Suspense>

      {/* Schedule Modal */}
      <React.Suspense fallback={null}>
        <ScheduleModal
          showModal={scheduleModal.showScheduleModal}
          onClose={() => scheduleModal.setShowScheduleModal(false)}
          selectedDate={scheduleModal.selectedDate}
          setSelectedDate={scheduleModal.setSelectedDate}
          selectedTime={scheduleModal.selectedTime}
          setSelectedTime={scheduleModal.setSelectedTime}
          onWhatsApp={scheduleModal.handleScheduleWhatsApp}
          onEmail={scheduleModal.handleScheduleEmail}
        />
      </React.Suspense>
    </div>
  );
}
