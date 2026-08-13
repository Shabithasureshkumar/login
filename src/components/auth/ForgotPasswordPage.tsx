import React, { useState } from 'react';
import { AuthHeroSection } from './AuthHeroSection';
import { ArrowLeft, ArrowRight, AtSign } from 'lucide-react';

interface ForgotPasswordPageProps {
  onNavigate: (route: string) => void;
}

export const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = ({ onNavigate }) => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen w-full bg-[#FFFFFF] flex items-center justify-center p-4 sm:p-6 lg:p-12 relative overflow-x-hidden">
      
      {/* Container 1440px viewport centered */}
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 mx-auto">
        
        {/* LEFT COLUMN: HERO AREA (Identical to Login) */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <AuthHeroSection />
        </div>

        {/* RIGHT COLUMN: FORGOT PASSWORD CARD */}
        <div className="w-full lg:w-[450px] shrink-0 flex justify-center">
          <div className="w-full max-w-[450px] bg-white/90 backdrop-blur-[18px] border-[3px] border-[#DECEFF] rounded-[32px] sm:rounded-[38px] lg:rounded-[41.6px] p-6 sm:p-10 lg:p-11 shadow-[0_52px_78px_-19.5px_rgba(79,55,138,0.08)] flex flex-col space-y-8">
            
            {/* Heading & Description */}
            <div className="flex flex-col items-center text-center space-y-3">
              <h2 className="text-[26px] sm:text-[32px] lg:text-[35.1px] font-bold text-[#1D1B20] leading-tight tracking-[-0.7px]">
                Forgot Your Password?
              </h2>
              <p className="text-[14px] sm:text-[16.5px] lg:text-[18px] text-[#494551] leading-[1.62]">
                Enter your registered email address or mobile number and we'll send a secure verification code.
              </p>
            </div>

            {/* Form */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                
                {/* Email / Phone Field */}
                <div className="flex flex-col space-y-2">
                  <label className="text-[14.5px] sm:text-[16.9px] font-medium text-[#494551] tracking-[0.17px]">
                    Email Address or Mobile Number
                  </label>
                  <div className="relative flex items-center w-full">
                    <div className="absolute left-4 text-[#6B7280]">
                      <AtSign className="w-5 h-5 opacity-70" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="e.g. evelyn.reed@mediflow.pro"
                      value={emailOrPhone}
                      onChange={(e) => setEmailOrPhone(e.target.value)}
                      className="w-full h-[60px] sm:h-[72.8px] bg-white border-[1.3px] border-[#6B7280] focus:border-[#6B38D4] rounded-[20.8px] pl-12 pr-4 text-[#19182C] placeholder-[#CBC4D2] text-[15px] sm:text-[16px] outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Primary Button */}
                <button
                  type="submit"
                  className="w-full h-[60px] sm:h-[72.8px] bg-gradient-to-b from-[#AD89F8] to-[#5C24FF] text-white font-semibold text-[17px] sm:text-[19.5px] rounded-[20.8px] flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-95 active:scale-[0.99] shadow-[0_13px_19.5px_-3.9px_rgba(79,55,138,0.2)] mt-2"
                >
                  <span>Send Verification Code</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            ) : (
              /* Success Confirmation */
              <div className="flex flex-col items-center text-center space-y-4 py-4">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-[#6B38D4]">
                  <ArrowRight className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#1D1B20]">Verification Code Sent!</h3>
                <p className="text-sm text-[#494551]">
                  We sent a code to <span className="font-semibold text-purple-900">{emailOrPhone}</span>. Please check your inbox.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="text-sm font-semibold text-[#6B38D4] hover:underline pt-2"
                >
                  Resend Code
                </button>
              </div>
            )}

            {/* Back to Login Action */}
            <div className="pt-4 border-t border-white/30 flex justify-center">
              <button
                type="button"
                onClick={() => onNavigate('/login')}
                className="flex items-center gap-2 text-[#6B38D4] font-semibold text-[16px] sm:text-[19.5px] hover:text-[#5C24FF] transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Login</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
