import Card from "@components/ui/Card.tsx";

const TotalNumberScore = () => {
    return (
        <Card classname="bg-custom-gray flex flex-col">
            <p className="text-black text-base font-medium leading-[1.25rem]">Количество <br/> баллов</p>
            <p className="text-2xl font-medium text-black mt-12.5 ml-auto">156</p>
        </Card>
    );
}

export default TotalNumberScore;