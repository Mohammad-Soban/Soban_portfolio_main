import { useState, useEffect, useCallback } from 'react';
import { FormData, MousePosition, VisibilityState } from '../types/portfolio';
import { ROLES, CONTACT_INFO, ANIMATION_DELAYS } from '../constants/portfolioData';

export const useRoleCycler = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % ROLES.length);
    }, ANIMATION_DELAYS.ROLE_CYCLE);
    return () => clearInterval(interval);
  }, []);

  return ROLES[currentRole];
};

export const useMouseTracking = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return mousePosition;
};

export const useScrollAnimations = () => {
  const [isVisible, setIsVisible] = useState<VisibilityState>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 },
    );

    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return isVisible;
};

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return { isDarkMode, setIsDarkMode };
};

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(formData.subject || "Portfolio Contact");
    const body = encodeURIComponent(`
Hi Mohammad,

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}

Best regards,
${formData.name}
    `);

    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return { formData, handleInputChange, handleFormSubmit };
};

export const useScheduleModal = () => {
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleScheduleWhatsApp = useCallback(() => {
    const dateTimeMessage = selectedDate && selectedTime 
      ? `\n\nPreferred Date: ${new Date(selectedDate).toLocaleDateString()}\nPreferred Time: ${selectedTime}`
      : "";
    
    const message = encodeURIComponent(
      `Hi Mohammad! I would like to schedule a call to discuss a project opportunity.${dateTimeMessage}\n\nLooking forward to hearing from you!`
    );
    window.open(
      `https://wa.me/${CONTACT_INFO.phone.replace("+", "")}?text=${message}`,
      "_blank",
    );
    setShowScheduleModal(false);
  }, [selectedDate, selectedTime]);

  const handleScheduleEmail = useCallback(() => {
    const dateTimeMessage = selectedDate && selectedTime 
      ? `\n\nPreferred Date: ${new Date(selectedDate).toLocaleDateString()}\nPreferred Time: ${selectedTime}`
      : "";
    
    const subject = encodeURIComponent("Schedule Call Request");
    const body = encodeURIComponent(
      `Hi Mohammad,\n\nI would like to schedule a call to discuss a project opportunity.${dateTimeMessage}\n\nBest regards`
    );
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
    setShowScheduleModal(false);
  }, [selectedDate, selectedTime]);

  return {
    showScheduleModal,
    setShowScheduleModal,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    handleScheduleWhatsApp,
    handleScheduleEmail,
  };
};

export const useResumeDownload = () => {
  const handleResumeDownload = useCallback(() => {
    const fileId = "13TZV8_A0XpYt3u3z-tbo0WOhTUH1iejt";
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "Mohammad_Soban_Shaikh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return handleResumeDownload;
};

export const useContactActions = () => {
  const handleCall = useCallback(() => {
    window.location.href = `tel:${CONTACT_INFO.phone}`;
  }, []);

  const handleWhatsApp = useCallback(() => {
    const message = encodeURIComponent(
      "Hi Mohammad! I found your portfolio and would like to discuss a project opportunity.",
    );
    window.open(
      `https://wa.me/${CONTACT_INFO.phone.replace("+", "")}?text=${message}`,
      "_blank",
    );
  }, []);

  return { handleCall, handleWhatsApp };
};
