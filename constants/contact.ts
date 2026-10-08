import { ValidationRule } from "@/types";

export const countries = [
  "Nepal (+977)",
  "Afghanistan (+93)",
  "Albania (+355)",
  "Algeria (+213)",
  "Andorra (+376)",
  "Angola (+244)",
  "Antigua and Barbuda (+1-268)",
  "Argentina (+54)",
  "Armenia (+374)",
  "Australia (+61)",
  "Austria (+43)",
  "Azerbaijan (+994)",
  "Bahrain (+973)",
  "Bangladesh (+880)",
  "Barbados (+1-246)",
  "Belarus (+375)",
  "Belgium (+32)",
  "Belize (+501)",
  "Benin (+229)"
];

export const countryCodes: Record<string, ValidationRule> = {
  "977": { dialCode: "977", minLength: 7, maxLength: 10, pattern: /^(?:9[78]\d{8}|0?[1-9]\d{6,7})$/ }, // Nepal
  "93": { dialCode: "93", minLength: 9, maxLength: 9, pattern: /^[2-7]\d{8}$/ }, // Afghanistan
  "355": { dialCode: "355", minLength: 8, maxLength: 9, pattern: /^(?:4[2-9]\d{6}|6[7-9]\d{7})$/ }, // Albania
  "213": { dialCode: "213", minLength: 9, maxLength: 9, pattern: /^[5-7]\d{8}$/ }, // Algeria
  "376": { dialCode: "376", minLength: 6, maxLength: 6, pattern: /^[3-8]\d{5}$/ }, // Andorra
  "244": { dialCode: "244", minLength: 9, maxLength: 9, pattern: /^[29]\d{8}$/ }, // Angola
  "1268": { dialCode: "1268", minLength: 7, maxLength: 7, pattern: /^[467]\d{6}$/ }, // Antigua and Barbuda
  "54": { dialCode: "54", minLength: 10, maxLength: 11, pattern: /^(?:9?\d{10})$/ }, // Argentina
  "374": { dialCode: "374", minLength: 8, maxLength: 8, pattern: /^[1-9]\d{7}$/ }, // Armenia
  "61": { dialCode: "61", minLength: 9, maxLength: 9, pattern: /^[23478]\d{8}$/ }, // Australia
  "43": { dialCode: "43", minLength: 4, maxLength: 13, pattern: /^[1-9]\d{3,12}$/ }, // Austria
  "994": { dialCode: "994", minLength: 9, maxLength: 9, pattern: /^[1-9]\d{8}$/ }, // Azerbaijan
  "973": { dialCode: "973", minLength: 8, maxLength: 8, pattern: /^[13679]\d{7}$/ }, // Bahrain
  "880": { dialCode: "880", minLength: 10, maxLength: 10, pattern: /^1[3-9]\d{8}$/ }, // Bangladesh
  "1246": { dialCode: "1246", minLength: 7, maxLength: 7, pattern: /^[2-9]\d{6}$/ }, // Barbados
  "375": { dialCode: "375", minLength: 9, maxLength: 9, pattern: /^[1-9]\d{8}$/ }, // Belarus
  "32": { dialCode: "32", minLength: 8, maxLength: 9, pattern: /^[1-9]\d{7,8}$/ }, // Belgium
  "501": { dialCode: "501", minLength: 7, maxLength: 7, pattern: /^[2-8]\d{6}$/ }, // Belize
  "229": { dialCode: "229", minLength: 8, maxLength: 8, pattern: /^[2-9]\d{7}$/ } // Benin
};
