import React, { useState } from 'react';
import { AuthHeroSection } from './AuthHeroSection';
import { SocialLoginButtons } from './SocialLoginButtons';
import { AuthInput } from './AuthInput';
import { UserCheck, Briefcase } from 'lucide-react';

interface LoginPageProps {
  onNavigate: (route: string) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('/dashboard');
  };

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-4 sm:p-6 lg:p-12 relative overflow-x-hidden">

      {/* Main Container */}
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 mx-auto">

        {/* LEFT COLUMN */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <AuthHeroSection />
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full lg:w-[450px] shrink-0 flex justify-center">

          {/* Authentication Card */}
          <div
            className="
              w-full
              max-w-[450px]
              bg-white/90
              backdrop-blur-[18px]
              border-[3px]
              border-[#DECEFF]
              rounded-[32px]
              sm:rounded-[38px]
              lg:rounded-[41.6px]
              p-6
              sm:p-8
              lg:p-9
              shadow-[0_52px_78px_-19.5px_rgba(79,55,138,0.08)]
              flex
              flex-col
              space-y-6
            "
          >

            {/* Logo */}
            <div className="flex justify-start">
              <div
                className="
                  w-[54px]
                  h-[54px]
                  sm:w-[59px]
                  sm:h-[59px]
                  rounded-[18px]
                  bg-gradient-to-br
                  from-[#6D28D9]
                  via-[#7C3AED]
                  to-[#8B5CF6]
                  flex
                  items-center
                  justify-center
                  shadow-[0_0_27px_rgba(124,58,237,0.35)]
                "
              >
                <span className="text-white font-bold text-[22.7px]">
                  M
                </span>
              </div>
            </div>

            {/* Header */}
            <div className="flex flex-col space-y-1.5">
              <h2 className="text-[24px] sm:text-[28.9px] font-bold text-[#1F2937] leading-tight tracking-tight">
                Welcome Back
              </h2>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#6B7280] leading-normal">
                Sign in to access your healthcare dashboard.
              </p>
            </div>

            {/* Social Login Divider */}
            <div className="relative w-full flex items-center justify-center my-1">
              <div className="w-full border-t border-[#F0EDFF]" />

              <span className="absolute bg-white px-3 text-[12.5px] sm:text-[13.6px] font-bold text-[#1C1C1C] whitespace-nowrap">
                Login with Others
              </span>
            </div>

            {/* Social Buttons */}
            <SocialLoginButtons
              onGoogleClick={() => onNavigate('/dashboard')}
              onMicrosoftClick={() => onNavigate('/dashboard')}
              onAppleClick={() => onNavigate('/dashboard')}
            />

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">

              <AuthInput
                placeholder="User name/Email Address"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />

              <AuthInput
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              {/* PRIMARY SIGN IN BUTTON */}
              <button
                type="submit"
                className="
                  w-full
                  h-[50px]
                  sm:h-[53.2px]
                  bg-gradient-to-r
                  from-[#6D28D9]
                  via-[#7C3AED]
                  to-[#8B5CF6]
                  text-white
                  font-bold
                  text-[14.3px]
                  rounded-[16.3px]
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-200
                  hover:brightness-105
                  hover:shadow-[0_8px_24px_rgba(124,58,237,0.25)]
                  active:scale-[0.99]
                  shadow-[0_5px_16px_rgba(124,58,237,0.18)]
                  mt-2
                "
              >
                Sign In
              </button>
            </form>

            {/* Forgot Password / Create Account */}
            <div className="flex items-center justify-between text-[12px] sm:text-[12.6px] font-bold pt-1">

              <button
                type="button"
                onClick={() => onNavigate('/forgot-password')}
                className="text-[#7C3AED] hover:text-[#5B21B6] transition-colors"
              >
                Forgot Password?
              </button>

              <button
                type="button"
                onClick={() => onNavigate('/create-account')}
                className="text-[#7C3AED] hover:text-[#5B21B6] transition-colors"
              >
                Create Account
              </button>

            </div>

            {/* Register */}
            <div className="text-center text-[11.3px] text-[#232C2B] pt-1">
              Don't have an account?{' '}

              <button
                type="button"
                onClick={() => onNavigate('/create-account')}
                className="text-[#6D28D9] font-semibold hover:text-[#5B21B6] hover:underline"
              >
                Register
              </button>
            </div>

            {/* Doctor / Employee Login */}
            <div className="grid grid-cols-2 gap-3 pt-2">

              <button
                type="button"
                onClick={() => onNavigate('/dashboard')}
                className="
                  h-[48px]
                  sm:h-[53.4px]
                  bg-gradient-to-r
                  from-[#6D28D9]
                  to-[#7C3AED]
                  text-white
                  font-bold
                  text-[11.7px]
                  rounded-[16.3px]
                  flex
                  items-center
                  justify-center
                  gap-1.5
                  transition-all
                  duration-200
                  hover:brightness-105
                  hover:shadow-[0_7px_20px_rgba(124,58,237,0.22)]
                  active:scale-[0.98]
                  px-2
                  shadow-sm
                "
              >
                <UserCheck className="w-4 h-4 text-white shrink-0" />
                <span>Doctor Login</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('/dashboard')}
                className="
                  h-[48px]
                  sm:h-[53.4px]
                  bg-gradient-to-r
                  from-[#6D28D9]
                  to-[#7C3AED]
                  text-white
                  font-bold
                  text-[11.7px]
                  rounded-[16.3px]
                  flex
                  items-center
                  justify-center
                  gap-1.5
                  transition-all
                  duration-200
                  hover:brightness-105
                  hover:shadow-[0_7px_20px_rgba(124,58,237,0.22)]
                  active:scale-[0.98]
                  px-2
                  shadow-sm
                "
              >
                <Briefcase className="w-4 h-4 text-white shrink-0" />
                <span>Employee Login</span>
              </button>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};