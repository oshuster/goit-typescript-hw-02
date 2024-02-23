/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
// enum Days {
//   "MONDAY",
//   "TUESDAY",
//   "WEDNESDAY",
//   "THURSDAY",
//   "FRIDAY",
//   "SATURDAY",
//   "SUNDAY",
// }

// function isWeekend(day: Days): boolean {
//   if (day <= 4) {
//     return true;
//   }
//   return false;
// }

// isWeekend(Days.THURSDAY);

// V.2
// enum Days {
//   MONDAY = "true",
//   TUESDAY = "true",
//   WEDNESDAY = "true",
//   THURSDAY = "true",
//   FRIDAY = "true",
//   SATURDAY = "false",
//   SUNDAY = "false",
// }

// function isWeekend(day: Days): boolean {
//   if (day === "true") {
//     return true;
//   }
//   return false;
// }

// isWeekend(Days.SATURDAY);

//V.3

enum Days {
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
}

function isWeekend(day: Days): boolean {
  return day === Days.SATURDAY || day === Days.SUNDAY;
}

isWeekend(Days.SATURDAY);
