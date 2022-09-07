

export const getDaysMonths = (monthNum, year) => {

  debugger;

  let prevMonthNum = monthNum - 1;
  if (monthNum === 0) {
    prevMonthNum = 11;
  }

  let nextMonthNum = monthNum + 1;
  if (monthNum === 12) {
    nextMonthNum = 0;
  }

  let previous = getMonth(prevMonthNum, prevMonthNum === 11 ? year - 1 : year);
  let current = getMonth(monthNum, year);
  let next = getMonth(nextMonthNum, nextMonthNum <= 0 ? year + 1 : year);

  return {
    previous,
    current,
    next
  }
}

// let dias = {
//   0: "Domingo",
//   1: "Lunes",
//   2: "Martes",
//   3: "Miercoles",
//   4: "Jueves",
//   5: "Viernes",
//   6: "Sabado",
// };


export const getMonth = (monthNum, year) => {
  return {
    number: monthNum,
    startDay: new Date(year, monthNum, 1).getDay(),
    daysNumber: new Date(year, monthNum + 1, 0).getDate(),
  }


  // debugger;

  // var date = new Date(Date.UTC(year, monthNum, 1));


  // debugger;

  // let numDay = 0;
  // // let month = [];
  // let week = [];

  // let initialWeekDay = date.getUTCDay() === 0 ? 7 : date.getUTCDay();
  // if(initialWeekDay > 1) {
  //   date.setUTCDate(date.getUTCDate() - (initialWeekDay - 1));

  //   while (date.getUTCMonth() === (monthNum - 1)) {
  //     week.push(new Date(date));
  //     date.setUTCDate(date.getUTCDate() + 1);

  //     numDay++;
  //     if(numDay === 7) {
  //       month.push(week);
  //       week = [];
  //       numDay = 0;
  //     }
  //   }
  // }

  // while (date.getUTCMonth() === monthNum) {
  //   week.push(new Date(date));
  //   date.setUTCDate(date.getUTCDate() + 1);

  //   numDay++;
  //   if(numDay === 7) {
  //     month.push(week);
  //     week = [];
  //     numDay = 0;
  //   }
  // }

  // let lastWeekDay = date.getUTCDay() === 0 ? 7 : date.getUTCDay();
  // if (lastWeekDay !== 7) {
  //   while (date.getUTCMonth() === (monthNum + 1) && lastWeekDay <= 7) {
  //     week.push(new Date(date));
  //     date.setUTCDate(date.getUTCDate() + 1);
  //     lastWeekDay++;

  //     numDay++;
  //     if(numDay === 7) {
  //       month.push(week);
  //       week = [];
  //       numDay = 0;
  //     }
  //   }
  // }
  // debugger;

  // return month;


}


