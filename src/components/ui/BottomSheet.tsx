import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {useRef, useState, type ReactNode} from "react";
import {cn} from "@/lib/cn";

gsap.registerPlugin(useGSAP);

interface BottomSheetProps {
  render: () => ReactNode;
  onClose?: () => void;
}

const BottomSheet = ({render, onClose}: BottomSheetProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const bg = useRef(null);
  const block = useRef(null);

  useGSAP(() => {
    if (isOpen) {
      gsap.to(bg.current, {duration: 0.3, opacity: 0.15});
      gsap.to(block.current, {opacity: 1, duration: 0.3, translateY: "0"});
    } else {
      gsap.to(bg.current, {duration: 0.3, opacity: 0});
      gsap.to(block.current, {
        opacity: 0,
        duration: 0.3,
        translateY: "100%",
        onComplete: () => {
          if (onClose) onClose();
        }
      });
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={cn(
          !isOpen && "pointer-events-none",
          "w-full h-screen fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black z-40 opacity-0"
        )}
        onClick={() => setIsOpen(false)}
        ref={bg} />
      <div
        className="fixed inset-x-0 bottom-0 h-80 bg-white rounded-t-4xl z-60 flex flex-col items-center px-3 py-3 translate-y-[100%] opacity-0"
        ref={block}>
        <div className="bg-black/15 rounded-full w-20 h-1.5" />
        {render()}
      </div>
    </>
  );
};

export default BottomSheet;
