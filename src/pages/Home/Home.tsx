import CurrentPair from "@/pages/Home/components/widgets/CurrentPair.tsx";
import AverageScore from "@/pages/Home/components/widgets/AverageScore.tsx";
import TotalNumberScore from "@/pages/Home/components/widgets/TotalNumberScore.tsx";
import CurrentPlace from "@/pages/Home/components/widgets/CurrentPlace.tsx";
import SendMessageTV from "@/pages/Home/components/widgets/SendMessageTV.tsx";

const Home = () => {
    return (
        <div className="flex gap-2 flex-col">
            <CurrentPair/>
            <AverageScore/>
            <div className="flex gap-2">
                <TotalNumberScore/>
                <CurrentPlace/>
            </div>
            <SendMessageTV/>
        </div>
    );
};

export default Home;