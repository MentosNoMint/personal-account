import Card from "@components/ui/cards/Card.tsx";

const CurrentPlace = () => {
  return (
    <Card classname="bg-custom-gray flex flex-col">
      <p className="text-black text-base font-medium leading-[1.25rem]">Место на <br /> кафедре</p>
      <p className="text-2xl font-medium text-black mt-12.5 ml-auto">12/120</p>
    </Card>
  );
};

export default CurrentPlace;