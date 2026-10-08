export interface ValidationRule {
  dialCode: string;
  minLength: number;
  maxLength: number;
  pattern: RegExp;
}
