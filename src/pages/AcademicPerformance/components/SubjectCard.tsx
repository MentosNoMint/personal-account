import InfoCard from "@components/ui/cards/InfoCard.tsx";

const SubjectCard = () => {
  return (
    <InfoCard
      title="Русский язык"
      subtitle="256 ч"
      badges={[
        {name: "оценка 5", classname: "bg-custom-yellow", id: 1},
        {name: "1 курс", id: 2},
        {name: "1 семестр", id: 3},
      ]}
    />
  );
};

export default SubjectCard;