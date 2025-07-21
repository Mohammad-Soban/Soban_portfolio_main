import React from 'react';
import { Calendar, Mail, MessageCircle, Phone, X } from 'lucide-react';
import { CONTACT_INFO } from '../constants/portfolioData';

interface ScheduleModalProps {
  showModal: boolean;
  onClose: () => void;
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  selectedTime: string;
  setSelectedTime: (time: string) => void;
  onWhatsApp: () => void;
  onEmail: () => void;
}

const ScheduleModal: React.FC<ScheduleModalProps> = ({
  showModal,
  onClose,
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  onWhatsApp,
  onEmail,
}) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-black/50 backdrop-blur-sm transition-all duration-300">
      <div className="bg-white dark:bg-charcoal-800 rounded-3xl shadow-2xl max-w-md w-full mt-8 transform transition-all duration-300">
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold">Schedule a Call</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-charcoal-700 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6">
            <div className="bg-golden-50 dark:bg-charcoal-700 rounded-2xl p-4 md:p-6">
              <h4 className="font-semibold mb-3 md:mb-4 flex items-center text-sm md:text-base">
                <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2 text-golden-600" />
                Contact Information
              </h4>
              <p className="text-charcoal-600 dark:text-charcoal-300 mb-2 text-sm md:text-base">
                <strong>Phone:</strong> {CONTACT_INFO.phone}
              </p>
              <p className="text-charcoal-600 dark:text-charcoal-300 text-sm md:text-base">
                <strong>Email:</strong> {CONTACT_INFO.email}
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 flex items-center text-sm md:text-base">
                <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2 text-golden-600" />
                Preferred Date & Time (Optional)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full p-3 rounded-xl border border-golden-200 dark:border-charcoal-600 focus:outline-none focus:border-golden-400 bg-white dark:bg-charcoal-700"
                  min={new Date().toISOString().split("T")[0]}
                  style={{ fontSize: '16px' }}
                />
                <input
                  type="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full p-3 rounded-xl border border-golden-200 dark:border-charcoal-600 focus:outline-none focus:border-golden-400 bg-white dark:bg-charcoal-700"
                  style={{ fontSize: '16px' }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <button
                onClick={onWhatsApp}
                className="flex flex-col items-center justify-center p-3 md:p-4 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 mb-2" />
                <span className="text-xs md:text-sm font-medium">WhatsApp</span>
              </button>

              <button
                onClick={onEmail}
                className="flex flex-col items-center justify-center p-3 md:p-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5 md:w-6 md:h-6 mb-2" />
                <span className="text-xs md:text-sm font-medium">Email</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleModal;
