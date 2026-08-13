import React from 'react';
import { Sparkles, Video, FileText, Activity, Brain, Mic, PhoneOff, Check } from 'lucide-react';
import heroDoctorImg from '../../assets/images/hero_doctor.jpg';

export const AuthHeroSection: React.FC = () => {
  return (
    <div className="relative w-full max-w-[870px] min-h-[716px] flex flex-col justify-between select-none py-2 px-2 sm:px-4">
      {/* Background Perspective Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl opacity-60">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-perspective-grid" />
      </div>

      {/* Radial Purple Glow Behind Doctor */}
      <div className="absolute top-[20%] left-[45%] -translate-x-1/2 w-[480px] h-[480px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(167,139,250,0.45)_0%,_rgba(167,139,250,0)_70%)] pointer-events-none blur-xl" />

      {/* Main Grid Content Area */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center min-h-[716px]">
        
        {/* Left Column Text & Feature Items */}
        <div className="lg:col-span-6 flex flex-col space-y-6 sm:space-y-7 z-20">
          
          {/* Logo / Branding */}
          <div className="flex items-center gap-3">
            <div className="w-[42px] h-[42px] rounded-[18.8px] bg-gradient-to-br from-[#823FEB] to-[#AD74FF] flex items-center justify-center shadow-[0_0_41.8px_rgba(185,100,240,0.4)]">
              <Activity className="w-5 h-5 text-white stroke-[2.5]" />
            </div>
            <span className="text-[21px] font-extrabold tracking-[-0.52px] text-[#19182C]">
              Med<span className="text-gradient-purple">nevo</span>
            </span>
          </div>

          {/* Main Headline */}
          <div className="pt-2">
            <h1 className="text-[44px] sm:text-[56px] lg:text-[62px] leading-[1.08] font-extrabold tracking-[-1.57px] text-[#19182C]">
              Healthcare <br />
              That <br />
              Understands <br />
              <span className="text-gradient-purple">You Better.</span>
            </h1>
          </div>

          {/* Supporting Text */}
          <p className="text-[15px] sm:text-[16.7px] leading-[1.62] text-[#626079] max-w-[420px]">
            Intelligent, secure, and always-on care. AuraHealth blends AI-driven insights with real specialists to deliver healthcare designed around you.
          </p>

          {/* 3 Feature Bullets */}
          <div className="flex flex-col space-y-3.5 pt-2">
            {/* Feature 1 */}
            <div className="flex items-center gap-3.5">
              <div className="w-[46px] h-[46px] rounded-[18.8px] bg-white/60 backdrop-blur-[8.4px] border border-white/80 flex items-center justify-center shadow-sm">
                <Brain className="w-5 h-5 text-[#6B38D4]" />
              </div>
              <div>
                <h4 className="text-[14.6px] font-semibold text-[#19182C] leading-tight">AI Health Insights</h4>
                <p className="text-[12.5px] text-[#626079]">Personalized analysis in seconds</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-3.5">
              <div className="w-[46px] h-[46px] rounded-[18.8px] bg-white/60 backdrop-blur-[8.4px] border border-white/80 flex items-center justify-center shadow-sm">
                <Video className="w-5 h-5 text-[#6B38D4]" />
              </div>
              <div>
                <h4 className="text-[14.6px] font-semibold text-[#19182C] leading-tight">Virtual Consultations</h4>
                <p className="text-[12.5px] text-[#626079]">Talk to specialists anywhere</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-3.5">
              <div className="w-[46px] h-[46px] rounded-[18.8px] bg-white/60 backdrop-blur-[8.4px] border border-white/80 flex items-center justify-center shadow-sm">
                <FileText className="w-5 h-5 text-[#6B38D4]" />
              </div>
              <div>
                <h4 className="text-[14.6px] font-semibold text-[#19182C] leading-tight">Prescriptions & Reports</h4>
                <p className="text-[12.5px] text-[#626079]">Digital records, instantly</p>
              </div>
            </div>
          </div>

        </div>

        {/* Center / Right Hero Doctor Image & Floating Cards Area */}
        <div className="lg:col-span-6 relative flex justify-center items-center min-h-[580px] lg:min-h-[716px] w-full mt-4 lg:mt-0">
          
          {/* Doctor Portrait Image */}
          <div className="relative w-[340px] sm:w-[420px] lg:w-[510px] h-[520px] sm:h-[620px] lg:h-[716px] rounded-[36px] lg:rounded-b-[174px] overflow-hidden shadow-[0_21px_30px_rgba(0,0,0,0.12)] border border-white/30 z-10 flex items-end">
            <img
              src={heroDoctorImg}
              alt="Indian female doctor holding tablet"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* FLOATING CARD 1: AI Symptom Checker (Top Right) */}
          <div className="absolute top-[8%] right-[-10px] sm:right-[10px] lg:right-[-20px] z-30 w-[240px] sm:w-[251px] p-4 rounded-[18.8px] bg-white/75 backdrop-blur-[21px] border border-white/80 shadow-[0_12.5px_41.8px_-12.5px_rgba(99,88,152,0.18)] flex flex-col space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-[38px] h-[38px] rounded-[14.6px] bg-[#6B38D4]/10 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#6B38D4]" />
              </div>
              <div>
                <h5 className="text-[14.6px] font-semibold text-[#19182C] leading-tight">AI Symptom Checker</h5>
                <p className="text-[12.5px] text-[#626079]">Analysis complete</p>
              </div>
            </div>
            
            <div className="pt-1.5 flex flex-col space-y-1.5">
              <div className="flex justify-between items-center text-[12.5px]">
                <span className="text-[#626079] font-medium">Match confidence</span>
                <span className="text-[#6B38D4] font-semibold">92%</span>
              </div>
              <div className="w-full h-[8.3px] bg-[#F4EFFE] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#804EFA] to-[#C85DE0] rounded-full w-[92%]" />
              </div>
            </div>
          </div>

          {/* FLOATING CARD 2: Health Score (Middle Right) */}
          <div className="absolute top-[48%] right-[-15px] sm:right-[5px] lg:right-[-35px] z-30 w-[220px] sm:w-[234px] p-4 rounded-[18.8px] bg-white/75 backdrop-blur-[21px] border border-white/80 shadow-[0_12.5px_41.8px_-12.5px_rgba(99,88,152,0.18)] flex flex-col space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-[38px] h-[38px] rounded-[14.6px] bg-[#6B38D4]/10 flex items-center justify-center">
                  <Activity className="w-4 h-4 text-[#6B38D4]" />
                </div>
                <span className="text-[14.6px] font-semibold text-[#19182C]">Health Score</span>
              </div>
              <span className="text-[25.1px] font-extrabold text-gradient-purple leading-none">82</span>
            </div>

            <div className="pt-1">
              <svg className="w-full h-7 text-[#804EFA]" viewBox="0 0 200 40" fill="none">
                <path
                  d="M0 30 Q 40 10, 80 25 T 160 15 T 200 5"
                  stroke="url(#purpleGradientPath)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="purpleGradientPath" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#804EFA" />
                    <stop offset="1" stopColor="#C85DE0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p className="text-[12.5px] text-[#626079]">+6 pts this week</p>
          </div>

          {/* FLOATING CARD 3: Prescription Generated (Bottom Left) */}
          <div className="absolute bottom-[16%] left-[-15px] sm:left-[0px] lg:left-[-40px] z-30 w-[220px] sm:w-[234px] p-4 rounded-[18.8px] bg-white/75 backdrop-blur-[21px] border border-white/80 shadow-[0_12.5px_41.8px_-12.5px_rgba(99,88,152,0.18)] flex items-center gap-3">
            <div className="w-[38px] h-[42px] rounded-[14.6px] bg-[#6B38D4]/10 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5 text-[#6B38D4]" />
            </div>
            <div>
              <h5 className="text-[14.6px] font-semibold text-[#19182C] leading-snug">Prescription <br />Generated</h5>
              <p className="text-[12.5px] text-[#626079]">Ready to download</p>
            </div>
          </div>

          {/* FLOATING CARD 4: Live Consultation (Bottom Right) */}
          <div className="absolute bottom-[2%] right-[-10px] sm:right-[15px] lg:right-[-25px] z-30 w-[240px] sm:w-[251px] p-4 rounded-[18.8px] bg-white/75 backdrop-blur-[21px] border border-white/80 shadow-[0_12.5px_41.8px_-12.5px_rgba(99,88,152,0.18)] flex flex-col space-y-3">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-[42px] h-[42px] rounded-full bg-gradient-to-br from-[#823FEB] to-[#AD74FF] text-white font-bold text-[14.6px] flex items-center justify-center">
                  AR
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />
              </div>
              <div>
                <h5 className="text-[14.6px] font-semibold text-[#19182C] leading-tight">Dr. Anya Rao</h5>
                <p className="text-[12.5px] text-[#6B38D4] font-medium">Live consultation</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-1 border-t border-purple-100/60">
              <button type="button" className="w-[38px] h-[38px] rounded-full bg-[#F4EFFE] flex items-center justify-center text-[#626079] hover:bg-purple-100 transition-colors">
                <Mic className="w-4 h-4" />
              </button>
              <button type="button" className="w-[38px] h-[38px] rounded-full bg-[#823FEB] shadow-[0_0_15px_rgba(130,63,235,0.4)] flex items-center justify-center text-white hover:bg-purple-600 transition-colors">
                <Video className="w-4 h-4" />
              </button>
              <button type="button" className="w-[38px] h-[38px] rounded-full bg-[#E53935] flex items-center justify-center text-white hover:bg-red-700 transition-colors">
                <PhoneOff className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
