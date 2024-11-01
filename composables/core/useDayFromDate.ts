// composables/useDayFromDate.ts
import moment from 'moment';

export const useDayFromDate = () => {
  const getDayName = (dateString: string): string => {
    return moment(dateString).format('dddd'); // Returns full day name (e.g., "Friday")
  };

  const getDayNumber = (dateString: string): number => {
    return moment(dateString).day(); // Returns day number (0 for Sunday, 6 for Saturday)
  };

  return {
    getDayName,
    getDayNumber,
  };
};
