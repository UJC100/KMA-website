import { parse } from 'date-fns';


export function combineDateAndTimeToISO(date: string, time: string): string {
  if (!date || !time) {
    throw new Error('Both date and time are required.');
  }

  // Combine into a single string
  const combined = `${date} ${time}`; // e.g. "2025-07-02 12:30 PM"

  // Use date-fns to parse with format "yyyy-MM-dd hh:mm a"
  const parsed = parse(combined, 'yyyy-MM-dd hh:mm a', new Date());

  if (isNaN(parsed.getTime())) {
    throw new Error(`Invalid date/time combination: ${combined}`);
  }

  return parsed.toISOString();
}