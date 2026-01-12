"use client";

import PairCard from "@components/ui/cards/PairCard";
import {scheduleMockData} from "@/constants";
import {parse, isWithinInterval, isBefore, differenceInMinutes} from "date-fns";

const parseTime = (timeStr: string) => {
  return parse(timeStr, "HH:mm", new Date());
};

const CurrentPair = () => {
  const now = new Date();

  let activePair = null;
  let nextPair = null;
  let statusText = "Нет пар";
  let activeIcon = "/assets/images/close.svg";

  for (const pair of scheduleMockData) {
    const [startStr, endStr] = pair.time.split(" - ");
    const startDate = parseTime(startStr);
    const endDate = parseTime(endStr);

    if (isWithinInterval(now, {start: startDate, end: endDate})) {
      activePair = pair;
      statusText = "Идет пара";
      activeIcon = "/assets/images/active-icon.svg";
      break;
    }

    if (isBefore(now, startDate) && !nextPair) {
      nextPair = pair;
    }
  }

  const displayPair = activePair || nextPair;

  if (!activePair && nextPair) {
    activeIcon = "/assets/images/forward.svg";
    statusText = `След пара`;
  }

  const renderProgressBubbles = () => {
    const pairsToDisplay = scheduleMockData.length > 0
      ? scheduleMockData
      : [];

    if (pairsToDisplay.length === 0) {
      return Array.from({length: 3}, (_, index) => (
        <div key={`empty-${index}`}
             className="w-full h-full rounded-full bg-custom-gray relative overflow-hidden">
          <p className="absolute inset-0 flex items-center justify-center text-sm font-bold text-black/15 z-10">
            {index + 1}
          </p>
          <div
            className="bg-custom-yellow h-full rounded-full transition-all duration-500"
            style={{width: '0%'}}
          ></div>
        </div>
      ));
    }

    return pairsToDisplay.map((pair) => {
      const [startStr, endStr] = pair.time.split(" - ");
      const startDate = parseTime(startStr);
      const endDate = parseTime(endStr);

      let progressPercentage = 0;

      if (isWithinInterval(now, {start: startDate, end: endDate})) {
        const totalDuration = differenceInMinutes(endDate, startDate);
        const elapsed = differenceInMinutes(now, startDate);
        progressPercentage = Math.min(100, Math.max(0, (elapsed / totalDuration) * 100));
      } else if (isBefore(endDate, now)) {
        progressPercentage = 100;
      }

      const isPast = isBefore(endDate, now);

      return (
        <div key={pair.id}
             className="w-full h-full rounded-full bg-custom-gray relative overflow-hidden">
          <p className="absolute inset-0 flex items-center justify-center text-sm font-bold text-black/15 z-10">
            {pair.pairNumber}
          </p>
          <div
            className="bg-custom-yellow h-full rounded-full transition-all duration-500"
            style={{width: isPast ? '100%' : `${progressPercentage}%`}}
          ></div>
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full gap-1 flex">

        <div className="w-full h-11 flex gap-1">
          {renderProgressBubbles()}
        </div>

        <div className="w-60 h-11 rounded-full bg-custom-gray px-1 flex items-center">
          <div className="h-8 w-8 rounded-full bg-white flex justify-center items-center shrink-0">
            <img
              alt="icon"
              src={activeIcon}
              className="w-3.5 h-3.5"
            />
          </div>
          <div className="w-full flex items-center justify-center">
            <p className="text-sm text-black font-medium -mt-0.5 whitespace-nowrap px-2">
              {statusText}
            </p>
          </div>
        </div>
      </div>

      {displayPair ? (
        <PairCard
          name={displayPair.subject}
          cab={displayPair.cabinet}
          teacher={displayPair.teacher}
          time={displayPair.time}
        />
      ) : (
        <div className="w-full p-4 h-45 flex flex-col items-center justify-center bg-custom-gray rounded-[2.25rem] font-medium text-black/50 gap-1">
          <span className="text-3xl">😴</span>
          Нет пар
        </div>
      )}
    </div>
  );
};

export default CurrentPair;
