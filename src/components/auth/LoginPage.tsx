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
    <div className="relative min-h-screen w-full bg-white flex items-center justify-center px-4 py-6 sm:px-6 lg:px-8 xl:px-10 overflow-hidden">

      {/* =========================================================
          FULL PAGE PURPLE PERSPECTIVE GRID
      ========================================================= */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
          z-0
          bg-perspective-grid-full
          opacity-70
        "
      />

      {/* =========================================================
          SOFT PURPLE BACKGROUND GLOW
      ========================================================= */}
      <div
        className="
          absolute
          left-[20%]
          top-[35%]
          -translate-x-1/2
          -translate-y-1/2
          w-[520px]
          h-[520px]
          rounded-full
          bg-purple-hero-glow
          blur-3xl
          pointer-events-none
          z-0
        "
      />

      <div
        className="
          absolute
          right-[18%]
          top-[40%]
          w-[420px]
          h-[420px]
          rounded-full
          bg-purple-soft-orb
          blur-3xl
          pointer-events-none
          z-0
        "
      />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-[1500px]
          min-h-[720px]
          flex
          flex-col
          lg:flex-row
          items-center
          justify-between
          gap-8
          xl:gap-12
          mx-auto
        "
      >

        {/* =======================================================
            LEFT HERO
        ======================================================= */}
        <div
          className="
            w-full
            lg:w-[64%]
            xl:w-[66%]
            flex
            justify-center
            items-center
          "
        >
          <AuthHeroSection />
        </div>

        {/* =======================================================
            RIGHT LOGIN
        ======================================================= */}
        <div
          className="
            w-full
            lg:w-[390px]
            xl:w-[420px]
            2xl:w-[440px]
            shrink-0
            flex
            justify-center
            items-center
          "
        >

          {/* =====================================================
              AUTH CARD
          ===================================================== */}
          <div
            className="
              auth-card
              relative
              w-full
              max-w-[440px]
              rounded-[30px]
              sm:rounded-[34px]
              lg:rounded-[38px]
              p-6
              sm:p-7
              lg:p-8
              xl:p-9
              flex
              flex-col
              space-y-5
              lg:space-y-5.5
              shadow-purple-lg
            "
          >

            {/* Soft card glow */}
            <div
              className="
                absolute
                -inset-[1px]
                rounded-[inherit]
                pointer-events-none
                border
                border-[#DCCBFF]/70
              "
            />

            {/* =================================================
                LOGO
            ================================================= */}
            <div className="relative z-10 flex justify-start">

              <div
                className="
                  w-[52px]
                  h-[52px]
                  sm:w-[56px]
                  sm:h-[56px]
                  rounded-[17px]
                  bg-gradient-to-br
                  from-[#6D28D9]
                  via-[#7C3AED]
                  to-[#8B5CF6]
                  flex
                  items-center
                  justify-center
                  shadow-[0_0_28px_rgba(124,58,237,0.30)]
                "
              >
                <span className="text-white font-bold text-[22px]">
                  M
                </span>
              </div>

            </div>

            {/* =================================================
                HEADER
            ================================================= */}
            <div className="relative z-10 flex flex-col space-y-1">

              <h2
                className="
                  text-[25px]
                  sm:text-[27px]
                  lg:text-[29px]
                  font-bold
                  text-[#1F2937]
                  leading-tight
                  tracking-tight
                "
              >
                Welcome Back
              </h2>

              <p
                className="
                  text-[12.5px]
                  sm:text-[13.5px]
                  lg:text-[14px]
                  text-[#6B7280]
                  leading-relaxed
                "
              >
                Sign in to access your healthcare dashboard.
              </p>

            </div>

            {/* =================================================
                SOCIAL LOGIN DIVIDER
            ================================================= */}
            <div className="relative z-10 w-full flex items-center justify-center">

              <div className="w-full border-t border-[#EDE8FA]" />

              <span
                className="
                  absolute
                  bg-white/95
                  px-3
                  text-[11px]
                  sm:text-[12px]
                  font-semibold
                  text-[#24212F]
                  whitespace-nowrap
                "
              >
                Login with Others
              </span>

            </div>

            {/* =================================================
                SOCIAL BUTTONS
            ================================================= */}
            <div className="relative z-10">

              <SocialLoginButtons
                onGoogleClick={() => onNavigate('/dashboard')}
                onMicrosoftClick={() => onNavigate('/dashboard')}
                onAppleClick={() => onNavigate('/dashboard')}
              />

            </div>

            {/* =================================================
                LOGIN FORM
            ================================================= */}
            <form
              onSubmit={handleSubmit}
              className="relative z-10 flex flex-col space-y-3.5"
            >

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

              {/* SIGN IN */}
              <button
                type="submit"
                className="
                  auth-primary-button
                  w-full
                  h-[49px]
                  sm:h-[52px]
                  rounded-[15px]
                  flex
                  items-center
                  justify-center
                  text-white
                  font-bold
                  text-[13px]
                  sm:text-[14px]
                  mt-1
                  transition-all
                  duration-300
                "
              >
                Sign In
              </button>

            </form>

            {/* =================================================
                FORGOT + CREATE
            ================================================= */}
            <div
              className="
                relative
                z-10
                flex
                items-center
                justify-between
                text-[11px]
                sm:text-[12px]
                font-semibold
              "
            >

              <button
                type="button"
                onClick={() => onNavigate('/forgot-password')}
                className="purple-link"
              >
                Forgot Password?
              </button>

              <button
                type="button"
                onClick={() => onNavigate('/create-account')}
                className="purple-link"
              >
                Create Account
              </button>

            </div>

            {/* =================================================
                REGISTER
            ================================================= */}
            <div
              className="
                relative
                z-10
                text-center
                text-[10.5px]
                sm:text-[11px]
                text-[#5F5B69]
              "
            >
              Don't have an account?{' '}

              <button
                type="button"
                onClick={() => onNavigate('/create-account')}
                className="
                  text-[#6D28D9]
                  font-semibold
                  hover:text-[#5B21B6]
                  hover:underline
                  transition-colors
                "
              >
                Register
              </button>

            </div>

            {/* =================================================
                DOCTOR / EMPLOYEE LOGIN
            ================================================= */}
            <div
              className="
                relative
                z-10
                grid
                grid-cols-2
                gap-2.5
                pt-1
              "
            >

              {/* Doctor */}
              <button
                type="button"
                onClick={() => onNavigate('/dashboard')}
                className="
                  auth-secondary-button
                  h-[48px]
                  sm:h-[51px]
                  rounded-[15px]
                  text-white
                  font-bold
                  text-[10.5px]
                  sm:text-[11px]
                  flex
                  items-center
                  justify-center
                  gap-1.5
                  px-2
                  transition-all
                  duration-300
                "
              >
                <UserCheck className="w-[15px] h-[15px] shrink-0" />
                <span>Doctor Login</span>
              </button>

              {/* Employee */}
              <button
                type="button"
                onClick={() => onNavigate('/dashboard')}
                className="
                  auth-secondary-button
                  h-[48px]
                  sm:h-[51px]
                  rounded-[15px]
                  text-white
                  font-bold
                  text-[10.5px]
                  sm:text-[11px]
                  flex
                  items-center
                  justify-center
                  gap-1.5
                  px-2
                  transition-all
                  duration-300
                "
              >
                <Briefcase className="w-[15px] h-[15px] shrink-0" />
                <span>Employee Login</span>
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};