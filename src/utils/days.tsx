const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sext', 'Sab'];

const today = new Date();

const todayFormatted = today.getDay();

const sortedDays = days
  .slice(todayFormatted)
  .concat(days.slice(0, todayFormatted));

export default sortedDays;

