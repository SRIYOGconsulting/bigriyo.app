import { CalendarEventMap } from "@/types/calendar";

export const shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export const calendarEvents: CalendarEventMap = {
  // January (0)
  0: {
    1: "New Year’s Day",
    24: "International Day of Education",
    27: "International Holocaust Remembrance Day"
  },

  // February (1)
  1: {
    4: "World Cancer Day",
    11: "International Day of Women and Girls in Science",
    20: "World Day of Social Justice"
  },

  // March (2)
  2: {
    8: "International Women’s Day",
    20: "International Day of Happiness",
    21: "International Day for the Elimination of Racial Discrimination",
    22: "World Water Day"
  },

  // April (3)
  3: {
    7: "World Health Day",
    22: "Earth Day",
    25: "World Malaria Day"
  },

  // May (4)
  4: {
    3: "World Press Freedom Day",
    15: "International Day of Families",
    31: "World No Tobacco Day"
  },

  // June (5)
  5: {
    5: "World Environment Day",
    12: "World Day Against Child Labour",
    20: "World Refugee Day"
  },

  // July (6)
  6: {
    11: "World Population Day",
    18: "Nelson Mandela International Day",
    30: "World Day Against Trafficking in Persons"
  },

  // August (7)
  7: {
    9: "International Day of the World’s Indigenous Peoples",
    12: "International Youth Day",
    19: "World Humanitarian Day"
  },

  // September (8)
  8: {
    8: "International Literacy Day",
    21: "International Day of Peace",
    27: "World Tourism Day"
  },

  // October (9)
  9: {
    1: "International Day of Older Persons",
    4: "World Animal Day",
    5: "World Teachers’ Day",
    10: "World Mental Health Day",
    16: "World Food Day",
    24: "United Nations Day"
  },

  // November (10)
  10: {
    10: "World Science Day",
    14: "World Diabetes Day",
    20: "Universal Children’s Day"
  },

  // December (11)
  11: {
    1: "World AIDS Day",
    10: "Human Rights Day",
    25: "Christmas Day"
  }
};
