import type {PairCardProps} from "@/types";
import InfoCard from "@components/ui/cards/InfoCard.tsx";

const PairCard = ({name, teacher, time, cab}: PairCardProps) => {
  return (
    <InfoCard
      title={name}
      subtitle={teacher}
      badges={[
        {name: time, id: 1},
        {name: cab, id: 2},
      ]}
    />
  );
};

export default PairCard;