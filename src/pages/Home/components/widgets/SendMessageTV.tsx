import Card from "@components/ui/cards/Card.tsx";

const SendMessageTV = () => {
  return (
    <Card classname="bg-custom-gray">
      <p className="text-black text-base font-medium">Сообщение на ТВ с расписанием</p>
      <form className="w-full mt-3 flex gap-2">
        <label className="w-full">
          <input className="h-18 w-full bg-white rounded-3xl px-4" />
        </label>
        <button className="max-w-26.5 w-full flex justify-center items-center bg-custom-yellow cursor-pointer rounded-3xl">
          <img src="/assets/images/airplane.svg"
               className="w-5.5 h-5.5"
               alt="icon" />
        </button>
      </form>
    </Card>
  );
};

export default SendMessageTV;