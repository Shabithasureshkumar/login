import React, { useState } from 'react';
import { SocialLoginButtons } from './SocialLoginButtons';
import { AuthInput } from './AuthInput';
import { User, Shield, Building2, Info, Lock, Check } from 'lucide-react';

interface CreateAccountPageProps {
  onNavigate: (route: string) => void;
}

export const CreateAccountPage: React.FC<CreateAccountPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    gender: 'Female',
    password: '',
    confirmPassword: '',
    clinicCode: 'CITY123',
    agreeTerms: false,
    consentAi: false,
    receiveReminders: true,
  });

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('/dashboard');
  };

  return (
    <div className="min-h-screen w-full bg-[#FFFFFF] flex flex-col items-center justify-start py-8 sm:py-12 px-4 relative">
      
      {/* Background Perspective Grid Pattern (Subtle) */}
      <div className="fixed inset-0 pointer-events-none opacity-40">
        <div className="w-full h-full bg-perspective-grid" />
      </div>

      {/* Main Registration Card */}
      <div className="relative z-10 w-full max-w-[680px] bg-white/95 backdrop-blur-[20px] border-[2px] border-[#DECEFF] rounded-[36px] sm:rounded-[44px] p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_-15px_rgba(79,55,138,0.1)] flex flex-col space-y-8 my-auto">
        
        {/* Header Title & Subtitle */}
        <div className="flex flex-col items-center text-center space-y-2.5">
          <h1 className="text-[28px] sm:text-[36px] font-extrabold text-[#000000] tracking-tight">
            Create your account
          </h1>
          <p className="text-[14px] sm:text-[15.5px] text-[#494551] max-w-[480px] leading-relaxed">
            Join to access your health records, chat with the AI Assistant, and book virtual visits.
          </p>
        </div>

        {/* Social Registration */}
        <div className="w-full space-y-5">
          <SocialLoginButtons
            onGoogleClick={() => onNavigate('/dashboard')}
            onMicrosoftClick={() => onNavigate('/dashboard')}
            onAppleClick={() => onNavigate('/dashboard')}
          />

          <div className="relative w-full flex items-center justify-center pt-1">
            <div className="w-full border-t border-[#E5E7EB]" />
            <span className="absolute bg-white px-4 text-[13px] font-medium text-[#6B7280]">
              or sign up with email
            </span>
          </div>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-8 w-full">
          
          {/* SECTION 1: Account Information */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2 text-[16px] font-bold text-[#19182C] border-b border-purple-100 pb-2">
              <User className="w-4 h-4 text-[#6B38D4]" />
              <span>Account Information</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AuthInput
                label="Full name"
                placeholder="Sarah Johnson"
                value={formData.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                required
              />

              <AuthInput
                type="email"
                label="Email address"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AuthInput
                type="tel"
                label="Phone number (optional)"
                placeholder="+1 555-123-4567"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
              />

              <AuthInput
                type="text"
                label="Date of birth"
                placeholder="MM/DD/YYYY"
                value={formData.dob}
                onChange={(e) => handleChange('dob', e.target.value)}
              />
            </div>

            {/* Gender Select */}
            <div className="flex flex-col space-y-1.5">
              <label className="text-[13.5px] font-medium text-[#494551]">
                Gender
              </label>
              <select
                value={formData.gender}
                onChange={(e) => handleChange('gender', e.target.value)}
                className="w-full h-[48px] sm:h-[52px] bg-[#F8F7FF] border border-[#EBE5FF] focus:border-[#8B5CF6] focus:bg-white rounded-[14px] sm:rounded-[16px] px-4 text-[#19182C] text-[14px] sm:text-[15px] outline-none transition-all duration-200"
              >
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Non-binary">Non-binary</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
              <p className="text-[12px] text-[#626079] pt-1">
                We use this to personalise your health recommendations. You can change it later.
              </p>
            </div>
          </div>

          {/* SECTION 2: Security */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2 text-[16px] font-bold text-[#19182C] border-b border-purple-100 pb-2">
              <Shield className="w-4 h-4 text-[#6B38D4]" />
              <span>Security</span>
            </div>

            <div className="flex flex-col space-y-2">
              <AuthInput
                type="password"
                label="Password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => handleChange('password', e.target.value)}
                required
              />
              <div className="flex items-center gap-1.5 text-[12px] text-[#626079]">
                <Info className="w-3.5 h-3.5 text-[#6B38D4] shrink-0" />
                <span>Requirements: 8+ chars, 1 uppercase, 1 number, 1 special char</span>
              </div>
            </div>

            <AuthInput
              type="password"
              label="Confirm password"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={(e) => handleChange('confirmPassword', e.target.value)}
              required
            />
          </div>

          {/* SECTION 3: Clinic Code */}
          <div className="flex flex-col space-y-3">
            <div className="flex items-center gap-2 text-[16px] font-bold text-[#19182C] border-b border-purple-100 pb-2">
              <Building2 className="w-4 h-4 text-[#6B38D4]" />
              <span>Clinic Code <span className="text-slate-400 font-normal">(Optional)</span></span>
            </div>

            <AuthInput
              placeholder="CITY123"
              value={formData.clinicCode}
              onChange={(e) => handleChange('clinicCode', e.target.value)}
              helperText="If your clinic gave you a code, enter it here to connect your records."
            />
          </div>

          {/* CONSENT BOX */}
          <div className="w-full bg-[#F9F7FE] border border-[#EDE9FE] rounded-[20px] p-5 sm:p-6 flex flex-col space-y-4">
            
            {/* Checkbox 1 */}
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={formData.agreeTerms}
                onChange={(e) => handleChange('agreeTerms', e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-purple-300 text-[#6B38D4] focus:ring-purple-500 cursor-pointer"
                required
              />
              <span className="text-[13.5px] sm:text-[14px] text-[#19182C] leading-snug">
                I agree to the{' '}
                <a href="#terms" onClick={(e) => e.preventDefault()} className="text-[#6B38D4] font-medium underline hover:text-purple-800">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#privacy" onClick={(e) => e.preventDefault()} className="text-[#6B38D4] font-medium underline hover:text-purple-800">
                  Privacy Policy
                </a>.
              </span>
            </label>

            {/* Checkbox 2 */}
            <div className="flex flex-col space-y-1 pl-7">
              <label className="flex items-start gap-3 cursor-pointer -ml-7">
                <input
                  type="checkbox"
                  checked={formData.consentAi}
                  onChange={(e) => handleChange('consentAi', e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-purple-300 text-[#6B38D4] focus:ring-purple-500 cursor-pointer"
                />
                <span className="text-[13.5px] sm:text-[14px] text-[#19182C] leading-snug">
                  I consent to the AI Health Assistant processing my health data to provide guidance.
                </span>
              </label>
              <a
                href="#data-protection"
                onClick={(e) => e.preventDefault()}
                className="text-[12.5px] text-[#6B38D4] font-medium hover:underline self-start pt-0.5"
              >
                How is my data protected?
              </a>
            </div>

            {/* Checkbox 3 */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.receiveReminders}
                onChange={(e) => handleChange('receiveReminders', e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-purple-300 text-[#6B38D4] focus:ring-purple-500 cursor-pointer"
              />
              <span className="text-[13.5px] sm:text-[14px] text-[#19182C] leading-snug">
                I would like to receive appointment reminders and health tips via email/SMS.
              </span>
            </label>

          </div>

          {/* Security Message */}
          <div className="flex items-center justify-center gap-2 text-center text-[12.5px] sm:text-[13px] text-[#626079] pt-1">
            <Lock className="w-3.5 h-3.5 text-[#6B38D4] shrink-0" />
            <span>Your data is encrypted, private, and never sold. You control who sees it.</span>
          </div>

          {/* Primary Submit Button */}
          <button
            type="submit"
            className="w-full h-[52px] sm:h-[58px] bg-[#3B227A] hover:bg-[#311A67] active:scale-[0.99] text-white font-bold text-[16px] sm:text-[17px] rounded-[18px] sm:rounded-[20px] transition-all duration-200 shadow-md"
          >
            Create Account
          </button>
        </form>

        {/* Footer Link */}
        <div className="text-center text-[13.5px] text-[#494551] pt-2">
          Already have an account?{' '}
          <button
            type="button"
            onClick={() => onNavigate('/login')}
            className="text-[#6B38D4] font-bold hover:underline"
          >
            Sign in
          </button>
        </div>

      </div>
    </div>
  );
};
