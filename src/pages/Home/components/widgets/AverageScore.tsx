import Card from "@components/ui/cards/Card.tsx";

const AverageScore = () => {
  return (
    <Card classname="bg-custom-gray">
      <p className="text-black text-base font-medium">Средний балл</p>
      <div className="w-full flex items-center mt-7">
        <div className="relative h-18 w-full">
          <div className="h-full w-full flex bg-white rounded-3xl absolute" />
          <div className="absolute w-45 rounded-3xl bg-custom-yellow h-full" />
        </div>
        <p className="font-medium text-black text-2xl pl-5 mr-1">4.5</p>
      </div>
    </Card>
  );
};


export default AverageScore;