import { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GamingActivityCard = ({ gamingActivities }) => (
    <div className="bg-white pb-4 w-full md:w-[220px] h-[300px] md:h-[350px] shadow-md rounded-md flex flex-col items-center">
        {gamingActivities.map((gamingActivity, index) => (
            <div
                key={index}
                className="w-full h-[225px] md:h-[275px] mb-2 md:mb-4 last:mb-0 rounded-md bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${gamingActivity.icon})` }}
            ></div>
        ))}
        <div className="text-center">
            {gamingActivities.map((gamingActivity, index) => (
                <p key={index} className="text-xs md:text-sm font-semibold mb-1 md:mb-2">
                    {gamingActivity.title}
                </p>
            ))}
        </div>
    </div>
);

GamingActivityCard.propTypes = {
    gamingActivities: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
        })
    ).isRequired,
};

const GamingActivity = ({ gamingActivities }) => {
    const [startIndex, setStartIndex] = useState(0);

    const nextCards = () => {
        setStartIndex((prevIndex) =>
            Math.min(prevIndex + 1, gamingActivities.length - 1)
        );
    };

    const prevCards = () => {
        setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    return (
        <div className="m-2 md:m-4 flex justify-center relative">
            <button
                onClick={prevCards}
                disabled={startIndex === 0}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md disabled:opacity-50 z-10"
            >
                <ChevronLeft size={20} />
            </button>
            <div className="flex flex-nowrap overflow-x-auto md:overflow-x-visible space-x-2 md:space-x-4 px-8 md:px-0">
                {gamingActivities.slice(startIndex, startIndex + 4).map((dayActivities, index) => (
                    <GamingActivityCard
                        key={startIndex + index + 1}
                        gamingActivities={dayActivities}
                    />
                ))}
            </div>
            <button
                onClick={nextCards}
                disabled={startIndex >= gamingActivities.length - 4}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md disabled:opacity-50 z-10"
            >
                <ChevronRight size={20} />
            </button>
        </div>
    );
};

GamingActivity.propTypes = {
    gamingActivities: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                icon: PropTypes.string.isRequired,
            })
        )
    ).isRequired,
};

export default GamingActivity;