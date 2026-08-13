import React from 'react';
import {
  Sparkles,
  Video,
  FileText,
  Activity,
  Brain,
  Mic,
  PhoneOff,
} from 'lucide-react';

import heroDoctorImg from '../../assets/images/hero_doctor.png';

export const AuthHeroSection: React.FC = () => {
  return (
    <div
      className="
        relative
        w-full
        max-w-[900px]
        min-h-[680px]
        lg:min-h-[720px]
        flex
        flex-col
        justify-center
        select-none
        px-2
        sm:px-4
      "
    >

      {/* =========================================================
          HERO CENTER PURPLE GLOW
      ========================================================= */}
      <div
        className="
          absolute
          top-[22%]
          left-[54%]
          -translate-x-1/2
          -translate-y-1/2
          w-[500px]
          h-[500px]
          rounded-full
          bg-purple-hero-glow
          blur-3xl
          pointer-events-none
          z-0
          hero-breathing-glow
        "
      />

      {/* =========================================================
          INTERNAL GRID — SUBTLE
      ========================================================= */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
          overflow-hidden
          rounded-[40px]
          opacity-30
          z-0
        "
      >
        <div className="absolute inset-0 bg-perspective-grid" />
      </div>

      {/* =========================================================
          MAIN HERO GRID
      ========================================================= */}
      <div
        className="
          relative
          z-10
          grid
          grid-cols-1
          lg:grid-cols-12
          gap-4
          xl:gap-6
          items-center
          min-h-[680px]
          lg:min-h-[720px]
        "
      >

        {/* =======================================================
            LEFT CONTENT
        ======================================================= */}
        <div
          className="
            lg:col-span-6
            flex
            flex-col
            justify-center
            space-y-5
            sm:space-y-6
            z-20
            pr-0
            lg:pr-4
          "
        >

          {/* BRAND */}
          <div className="flex items-center gap-3">

            <div
              className="
                w-[40px]
                h-[40px]
                rounded-[15px]
                bg-gradient-to-br
                from-[#6D28D9]
                via-[#7C3AED]
                to-[#8B5CF6]
                flex
                items-center
                justify-center
                shadow-[0_0_30px_rgba(124,58,237,0.30)]
              "
            >
              <Activity
                className="w-[19px] h-[19px] text-white stroke-[2.5]"
              />
            </div>

            <span
              className="
                text-[20px]
                sm:text-[21px]
                font-extrabold
                tracking-[-0.5px]
                text-[#19182C]
              "
            >
              Med
              <span className="text-gradient-purple">
                nevo
              </span>
            </span>

          </div>

          {/* =====================================================
              HEADLINE
          ===================================================== */}
          <div className="pt-1">

            <h1
              className="
                text-[42px]
                sm:text-[50px]
                md:text-[56px]
                lg:text-[58px]
                xl:text-[62px]
                leading-[1.06]
                font-extrabold
                tracking-[-1.7px]
                text-[#19182C]
              "
            >
              Healthcare
              <br />

              That
              <br />

              Understands
              <br />

              <span className="text-gradient-purple">
                You Better.
              </span>
            </h1>

          </div>

          {/* =====================================================
              DESCRIPTION
          ===================================================== */}
          <p
            className="
              text-[14px]
              sm:text-[15px]
              lg:text-[15.5px]
              leading-[1.6]
              text-[#626079]
              max-w-[390px]
            "
          >
            Intelligent, secure, and always-on care. Mednevo blends
            AI-driven insights with real specialists to deliver
            healthcare designed around you.
          </p>

          {/* =====================================================
              FEATURES
          ===================================================== */}
          <div className="flex flex-col space-y-3 pt-1">

            {/* FEATURE 1 */}
            <div className="flex items-center gap-3">

              <div
                className="
                  w-[42px]
                  h-[42px]
                  rounded-[15px]
                  bg-white/75
                  backdrop-blur-md
                  border
                  border-[#E8DEFF]
                  flex
                  items-center
                  justify-center
                  shadow-[0_6px_20px_rgba(124,58,237,0.06)]
                "
              >
                <Brain className="w-[18px] h-[18px] text-[#6D28D9]" />
              </div>

              <div>
                <h4 className="text-[13.5px] font-semibold text-[#19182C]">
                  AI Health Insights
                </h4>

                <p className="text-[11.5px] text-[#626079]">
                  Personalized analysis in seconds
                </p>
              </div>

            </div>

            {/* FEATURE 2 */}
            <div className="flex items-center gap-3">

              <div
                className="
                  w-[42px]
                  h-[42px]
                  rounded-[15px]
                  bg-white/75
                  backdrop-blur-md
                  border
                  border-[#E8DEFF]
                  flex
                  items-center
                  justify-center
                  shadow-[0_6px_20px_rgba(124,58,237,0.06)]
                "
              >
                <Video className="w-[18px] h-[18px] text-[#6D28D9]" />
              </div>

              <div>
                <h4 className="text-[13.5px] font-semibold text-[#19182C]">
                  Virtual Consultations
                </h4>

                <p className="text-[11.5px] text-[#626079]">
                  Talk to specialists anywhere
                </p>
              </div>

            </div>

            {/* FEATURE 3 */}
            <div className="flex items-center gap-3">

              <div
                className="
                  w-[42px]
                  h-[42px]
                  rounded-[15px]
                  bg-white/75
                  backdrop-blur-md
                  border
                  border-[#E8DEFF]
                  flex
                  items-center
                  justify-center
                  shadow-[0_6px_20px_rgba(124,58,237,0.06)]
                "
              >
                <FileText className="w-[18px] h-[18px] text-[#6D28D9]" />
              </div>

              <div>
                <h4 className="text-[13.5px] font-semibold text-[#19182C]">
                  Prescriptions & Reports
                </h4>

                <p className="text-[11.5px] text-[#626079]">
                  Digital records, instantly
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* =======================================================
            DOCTOR AREA
        ======================================================= */}
        <div
          className="
            lg:col-span-6
            relative
            flex
            justify-center
            items-center
            min-h-[560px]
            lg:min-h-[720px]
            w-full
            mt-2
            lg:mt-0
          "
        >

          {/* =====================================================
              DOCTOR GLOW
          ===================================================== */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[390px]
              h-[560px]
              rounded-full
              bg-[radial-gradient(ellipse_at_center,_rgba(124,58,237,0.20)_0%,_rgba(139,92,246,0.08)_45%,_transparent_72%)]
              blur-2xl
              pointer-events-none
              z-0
              hero-image-glow
            "
          />

          {/* =====================================================
              DOCTOR IMAGE
          ===================================================== */}
          <div
            className="
              relative
              z-10
              w-[300px]
              sm:w-[370px]
              md:w-[420px]
              lg:w-[470px]
              xl:w-[510px]
              h-[500px]
              sm:h-[590px]
              md:h-[640px]
              lg:h-[690px]
              xl:h-[720px]
              rounded-[36px]
              lg:rounded-b-[170px]
              overflow-hidden
              border
              border-white/40
              flex
              items-end
              doctor-image-float
            "
          >

            <img
              src={heroDoctorImg}
              alt="Indian female doctor holding tablet"
              className="
                w-full
                h-full
                object-cover
                object-top
              "
            />

          </div>

          {/* =====================================================
              CARD 1 — AI SYMPTOM CHECKER
          ===================================================== */}
          <div
            className="
              absolute
              top-[7%]
              right-[0px]
              sm:right-[10px]
              lg:right-[-5px]
              xl:right-[-15px]
              z-30
              w-[220px]
              sm:w-[240px]
              xl:w-[250px]
              p-3.5
              rounded-[18px]
              bg-white/80
              backdrop-blur-[22px]
              border
              border-white/90
              shadow-[0_15px_45px_rgba(80,50,150,0.14)]
              flex
              flex-col
              space-y-2
              float-card
            "
          >

            <div className="flex items-center gap-2.5">

              <div
                className="
                  w-[36px]
                  h-[36px]
                  rounded-[13px]
                  bg-[#7C3AED]/10
                  flex
                  items-center
                  justify-center
                "
              >
                <Sparkles className="w-[15px] h-[15px] text-[#6D28D9]" />
              </div>

              <div>
                <h5 className="text-[13px] font-semibold text-[#19182C]">
                  AI Symptom Checker
                </h5>

                <p className="text-[11px] text-[#626079]">
                  Analysis complete
                </p>
              </div>

            </div>

            <div className="pt-1 flex flex-col space-y-1">

              <div className="flex justify-between text-[11px]">

                <span className="text-[#626079]">
                  Match confidence
                </span>

                <span className="text-[#6D28D9] font-semibold">
                  92%
                </span>

              </div>

              <div className="w-full h-[7px] bg-[#F1ECFF] rounded-full overflow-hidden">

                <div
                  className="
                    h-full
                    w-[92%]
                    rounded-full
                    bg-gradient-to-r
                    from-[#6D28D9]
                    via-[#7C3AED]
                    to-[#A855F7]
                    progress-glow
                  "
                />

              </div>

            </div>

          </div>

          {/* =====================================================
              CARD 2 — HEALTH SCORE
          ===================================================== */}
          <div
            className="
              absolute
              top-[43%]
              right-[-5px]
              sm:right-[5px]
              lg:right-[-15px]
              xl:right-[-25px]
              z-30
              w-[205px]
              sm:w-[225px]
              xl:w-[235px]
              p-3.5
              rounded-[18px]
              bg-white/80
              backdrop-blur-[22px]
              border
              border-white/90
              shadow-[0_15px_45px_rgba(80,50,150,0.14)]
              flex
              flex-col
              space-y-2
              float-card-slow
            "
          >

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-2">

                <div
                  className="
                    w-[36px]
                    h-[36px]
                    rounded-[13px]
                    bg-[#7C3AED]/10
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Activity className="w-[15px] h-[15px] text-[#6D28D9]" />
                </div>

                <span className="text-[13px] font-semibold text-[#19182C]">
                  Health Score
                </span>

              </div>

              <span className="text-[23px] font-extrabold text-gradient-purple">
                82
              </span>

            </div>

            <svg
              className="w-full h-7"
              viewBox="0 0 200 40"
              fill="none"
            >
              <path
                d="M0 30 Q 40 10, 80 25 T 160 15 T 200 5"
                stroke="url(#purpleGradientPath)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />

              <defs>
                <linearGradient
                  id="purpleGradientPath"
                  x1="0"
                  y1="0"
                  x2="200"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6D28D9" />
                  <stop offset="0.5" stopColor="#7C3AED" />
                  <stop offset="1" stopColor="#A855F7" />
                </linearGradient>
              </defs>
            </svg>

            <p className="text-[11px] text-[#626079]">
              +6 pts this week
            </p>

          </div>

          {/* =====================================================
              CARD 3 — PRESCRIPTION
          ===================================================== */}
          <div
            className="
              absolute
              bottom-[15%]
              left-[-5px]
              sm:left-[5px]
              lg:left-[-20px]
              xl:left-[-35px]
              z-30
              w-[205px]
              sm:w-[225px]
              xl:w-[235px]
              p-3.5
              rounded-[18px]
              bg-white/80
              backdrop-blur-[22px]
              border
              border-white/90
              shadow-[0_15px_45px_rgba(80,50,150,0.14)]
              flex
              items-center
              gap-3
              float-card-delay-1
            "
          >

            <div
              className="
                w-[38px]
                h-[40px]
                rounded-[13px]
                bg-[#7C3AED]/10
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              <FileText className="w-[18px] h-[18px] text-[#6D28D9]" />
            </div>

            <div>

              <h5 className="text-[13px] font-semibold text-[#19182C] leading-snug">
                Prescription
                <br />
                Generated
              </h5>

              <p className="text-[10.5px] text-[#626079]">
                Ready to download
              </p>

            </div>

          </div>

          {/* =====================================================
              CARD 4 — LIVE CONSULTATION
          ===================================================== */}
          <div
            className="
              absolute
              bottom-[2%]
              right-[0px]
              sm:right-[10px]
              lg:right-[-10px]
              xl:right-[-20px]
              z-30
              w-[220px]
              sm:w-[240px]
              xl:w-[250px]
              p-3.5
              rounded-[18px]
              bg-white/80
              backdrop-blur-[22px]
              border
              border-white/90
              shadow-[0_15px_45px_rgba(80,50,150,0.14)]
              flex
              flex-col
              space-y-3
              float-card-delay-2
            "
          >

            <div className="flex items-center gap-3">

              <div className="relative">

                <div
                  className="
                    w-[40px]
                    h-[40px]
                    rounded-full
                    bg-gradient-to-br
                    from-[#6D28D9]
                    via-[#7C3AED]
                    to-[#8B5CF6]
                    text-white
                    font-bold
                    text-[13px]
                    flex
                    items-center
                    justify-center
                    shadow-[0_5px_18px_rgba(124,58,237,0.25)]
                  "
                >
                  AR
                </div>

                <div
                  className="
                    absolute
                    bottom-0
                    right-0
                    w-[11px]
                    h-[11px]
                    bg-emerald-500
                    rounded-full
                    border-2
                    border-white
                  "
                />

              </div>

              <div>

                <h5 className="text-[13px] font-semibold text-[#19182C]">
                  Dr. Anya Rao
                </h5>

                <p className="text-[10.5px] text-[#6D28D9] font-medium">
                  Live consultation
                </p>

              </div>

            </div>

            <div
              className="
                flex
                items-center
                justify-center
                gap-3
                pt-2
                border-t
                border-purple-100/70
              "
            >

              {/* MIC */}
              <button
                type="button"
                className="
                  w-[36px]
                  h-[36px]
                  rounded-full
                  bg-[#F3EFFF]
                  flex
                  items-center
                  justify-center
                  text-[#626079]
                  hover:bg-[#E9DEFF]
                  transition-all
                "
              >
                <Mic className="w-[15px] h-[15px]" />
              </button>

              {/* VIDEO */}
              <button
                type="button"
                className="
                  w-[36px]
                  h-[36px]
                  rounded-full
                  bg-[#7C3AED]
                  shadow-[0_0_18px_rgba(124,58,237,0.35)]
                  flex
                  items-center
                  justify-center
                  text-white
                  hover:bg-[#6D28D9]
                  transition-all
                "
              >
                <Video className="w-[15px] h-[15px]" />
              </button>

              {/* END CALL */}
              <button
                type="button"
                className="
                  w-[36px]
                  h-[36px]
                  rounded-full
                  bg-[#E53935]
                  flex
                  items-center
                  justify-center
                  text-white
                  hover:bg-[#C62828]
                  transition-all
                "
              >
                <PhoneOff className="w-[15px] h-[15px]" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};