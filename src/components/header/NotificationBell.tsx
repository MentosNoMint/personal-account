import {useState} from "react";
import BottomSheet from "@components/ui/BottomSheet.tsx";

const NotificationBell = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && (
        <BottomSheet
          render={() => (
            <div className="w-full h-full flex justify-center items-center">
              <span className="font-medium text-base text-black">Уведомления отсутствуют</span>
            </div>
          )}
          onClose={() => setIsOpen(false)}
        />
      )}
      <button type="button"
              className="w-16 bg-white rounded-3xl h-full shrink-0 flex items-center justify-center cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
      >
        <img src="/assets/images/bell.svg"
             className="w-4 h-4 opacity-80"
             alt="icon" />
      </button>
    </>
  );
};

export default NotificationBell;