import React from 'react';

interface SocialLoginButtonsProps {
  onGoogleClick?: () => void;
  onMicrosoftClick?: () => void;
  onAppleClick?: () => void;
}

export const SocialLoginButtons: React.FC<SocialLoginButtonsProps> = ({
  onGoogleClick,
  onMicrosoftClick,
  onAppleClick,
}) => {
  return (
    <div className="flex items-center justify-between gap-3 sm:gap-4 w-full">
      {/* Google Button */}
      <button
        type="button"
        onClick={onGoogleClick}
        className="flex-1 h-[52px] sm:h-[68px] border border-[#F5F3F3] hover:border-purple-200 bg-white rounded-[13px] sm:rounded-[18px] flex items-center justify-center transition-all duration-200 hover:shadow-sm active:scale-[0.98]"
        title="Sign in with Google"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
          />
        </svg>
      </button>

      {/* Microsoft Button */}
      <button
        type="button"
        onClick={onMicrosoftClick}
        className="flex-1 h-[52px] sm:h-[68px] border border-[#F5F3F3] hover:border-purple-200 bg-white rounded-[13px] sm:rounded-[18px] flex items-center justify-center transition-all duration-200 hover:shadow-sm active:scale-[0.98]"
        title="Sign in with Microsoft"
      >
        <div className="grid grid-cols-2 gap-[2px] w-5 h-5 sm:w-6 sm:h-6">
          <div className="bg-[#F25022] w-full h-full rounded-[1px]" />
          <div className="bg-[#7FBA00] w-full h-full rounded-[1px]" />
          <div className="bg-[#00A4EF] w-full h-full rounded-[1px]" />
          <div className="bg-[#FFB900] w-full h-full rounded-[1px]" />
        </div>
      </button>

      {/* Apple Button */}
      <button
        type="button"
        onClick={onAppleClick}
        className="flex-1 h-[52px] sm:h-[68px] border border-[#F5F3F3] hover:border-purple-200 bg-white rounded-[13px] sm:rounded-[18px] flex items-center justify-center transition-all duration-200 hover:shadow-sm active:scale-[0.98]"
        title="Sign in with Apple"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-black" viewBox="0 0 170 170">
          <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.14-1.9-14.4-6.07-3.27-2.61-7.18-7.2-11.73-13.77-6.55-9.47-11.83-20.2-15.86-32.19-4.03-11.98-6.04-23.41-6.04-34.28 0-15.24 3.78-27.87 11.33-37.89 7.55-10.02 17.06-15.16 28.53-15.43 4.34-.13 9.38 1.13 15.13 3.78 5.75 2.65 9.77 4.02 12.06 4.12 1.63.13 5.48-1.22 11.55-4.03 6.07-2.81 11.27-4.11 15.6-3.89 12.2.82 22.01 5.48 29.43 13.98-10.88 6.56-16.19 15.69-15.93 27.39.26 9.09 3.86 16.73 10.8 22.92 6.94 6.19 15.02 9.7 24.23 10.53-2.39 7.02-5.46 13.88-9.2 20.57zM119.22 31.81c0-7.3 2.68-14.35 8.04-21.16 5.36-6.81 12.07-10.65 20.13-11.53.26 1.01.39 1.8.39 2.38 0 7.42-2.73 14.59-8.19 21.52-5.46 6.93-12.33 10.83-20.61 11.7-.13-1.04-.2-2.01-.2-2.91z" />
        </svg>
      </button>
    </div>
  );
};
