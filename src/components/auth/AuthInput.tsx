import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: 'light' | 'bordered';
  leadingIcon?: React.ReactNode;
}

export const AuthInput: React.FC<AuthInputProps> = ({
  label,
  error,
  helperText,
  variant = 'light',
  type = 'text',
  className = '',
  leadingIcon,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  const baseInputStyles =
    variant === 'bordered'
      ? 'w-full h-[52px] sm:h-[58px] bg-white border border-[#6B7280]/40 focus:border-[#6B38D4] rounded-[16px] sm:rounded-[20px] px-4 text-[#19182C] placeholder-[#CBC4D2] text-[15px] sm:text-[16px] outline-none transition-all duration-200'
      : 'w-full h-[48px] sm:h-[52px] bg-[#F8F7FF] border border-[#EBE5FF] focus:border-[#8B5CF6] focus:bg-white rounded-[14px] sm:rounded-[16.3px] px-4 text-[#19182C] placeholder-[#9CA3AF] text-[14px] sm:text-[15px] outline-none transition-all duration-200';

  return (
    <div className="w-full flex flex-col space-y-1.5">
      {label && (
        <label className="text-[13.5px] sm:text-[14px] font-medium text-[#494551] tracking-[0.17px] flex items-center gap-1.5">
          {label}
        </label>
      )}
      <div className="relative flex items-center w-full">
        {leadingIcon && (
          <div className="absolute left-4 text-[#6B7280] pointer-events-none flex items-center justify-center">
            {leadingIcon}
          </div>
        )}

        <input
          type={inputType}
          className={`${baseInputStyles} ${leadingIcon ? 'pl-11' : ''} ${
            isPassword ? 'pr-11' : ''
          } ${className}`}
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 text-[#6B7280] hover:text-[#6B38D4] transition-colors p-1"
            title={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4 sm:w-4.5 sm:h-4.5 opacity-70" />
            ) : (
              <Eye className="w-4 h-4 sm:w-4.5 sm:h-4.5 opacity-70" />
            )}
          </button>
        )}
      </div>

      {helperText && !error && (
        <p className="text-[12px] sm:text-[12.5px] text-[#626079] leading-snug">
          {helperText}
        </p>
      )}

      {error && <p className="text-[12px] text-red-500 font-medium">{error}</p>}
    </div>
  );
};
