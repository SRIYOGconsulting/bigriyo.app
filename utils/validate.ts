import { countryCodes } from "@/constants";

const minLength = 2;
const maxLength = 50;
const digit = /[0-9]/;
const upperCase = /[A-Z]/;
const lowerCase = /[a-z]/;
const nameRegex = /^[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF\s'-]+$/;
const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const isEmailInvalid = (email: string): string | null => {
  if (!emailRegex.test(email.trim())) return "Invalid Email!";
  return null;
};

export const isNameInvalid = (name: string): string | null => {
  const trimmed = name.trim();

  if (trimmed.length < minLength) return `Name must be at least ${minLength} characters.`;
  if (trimmed.length > maxLength) return `Name must not exceed ${maxLength} characters.`;
  if (!nameRegex.test(trimmed)) return "Name contains invalid characters.";
  return null;
};

export const isPasswordInvalid = (password: string): string | null => {
  if (password.length < 8) return "Password must be at least 8 characters long.";
  if (!upperCase.test(password)) return "Password must contain at least one uppercase letter.";
  if (!lowerCase.test(password)) return "Password must contain at least one lowercase letter.";
  if (!digit.test(password)) return "Password must contain at least one number.";
  if (!specialChars.test(password)) return "Password must contain at least one special character.";
  return null;
};

export const isPhoneNumberInvalid = (country: string, phone: string): string | null => {
  const dialCodeMatch = country.match(/\(\+([\d-]+)\)/);
  if (!dialCodeMatch) return "Invalid country selection.";

  const targetRule = countryCodes[dialCodeMatch[1].replace("-", "")];
  if (!targetRule) return "Unsupported country code selected.";

  let cleaned = phone.replace(/[\s\-\(\)]/g, "");
  if (cleaned.startsWith("+")) cleaned = cleaned.slice(1);

  let nationalNumber = cleaned.startsWith(targetRule.dialCode) ? cleaned.slice(targetRule.dialCode.length) : cleaned;
  nationalNumber =
    nationalNumber.startsWith("0") && nationalNumber.length > targetRule.minLength
      ? nationalNumber.slice(1)
      : nationalNumber;

  if (!/^\d+$/.test(nationalNumber)) return "Phone number must contain digits only.";
  if (nationalNumber.length < targetRule.minLength || nationalNumber.length > targetRule.maxLength)
    return `Invalid number length for selected country (+${targetRule.dialCode}).`;
  if (!targetRule.pattern.test(nationalNumber)) return `Invalid phone number format for (+${targetRule.dialCode}).`;
  return null;
};
