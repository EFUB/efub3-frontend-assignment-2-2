import { selector } from "recoil";
import { scheduleState } from "./Atom";
import moment from "moment";

const uniqueDatesSelector = selector({
  key: "uniqueDatesSelector",
  get: ({ get }) => {
    const schedules = get(scheduleState);

    // 중복되지 않는 날짜를 저장할 배열
    const uniqueDatesArray = [];

    // 모든 일정에서 중복되지 않는 날짜를 추출하여 배열에 추가
    schedules.forEach((schedule) => {
      const formattedDate = moment(schedule.date).format("YYYY-MM-DD");
      if (!uniqueDatesArray.includes(formattedDate)) {
        uniqueDatesArray.push(formattedDate);
      }
    });

    return uniqueDatesArray;
  },
});

export default uniqueDatesSelector;
