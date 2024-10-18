import { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GamingActivityCard = ({ gamingActivities }) => (
    <div className="bg-white pb-4 w-[220px] h-[350px] shadow-md rounded-md flex flex-col items-center">
        {gamingActivities.map((gamingActivity, index) => (
            <div
                key={index}
                className="w-full h-[350px] mb-4 last:mb-0 rounded-md bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${gamingActivity.icon})` }}
            ></div>
        ))}
        <div className="text-center">
            {gamingActivities.map((gamingActivity, index) => (
                <p key={index} className="text-sm font-semibold mb-2">
                    {gamingActivity.title}
                </p>
            ))}
        </div>
    </div>
);

GamingActivityCard.propTypes = {
    day: PropTypes.number.isRequired,
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
            Math.min(prevIndex + 1, gamingActivities.length - 4)
        );
    };

    const prevCards = () => {
        setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    return (
        <div className="m-4 flex justify-center space-x-4 relative">
            <button
                onClick={prevCards}
                disabled={startIndex === 0}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md disabled:opacity-50"
            >
                <ChevronLeft size={24} />
            </button>
            {gamingActivities.slice(startIndex, startIndex + 4).map((dayActivities, index) => (
                <GamingActivityCard
                    key={startIndex + index + 1}
                    gamingActivities={dayActivities}
                />
            ))}
            <button
                onClick={nextCards}
                disabled={startIndex >= gamingActivities.length - 4}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md disabled:opacity-50"
            >
                <ChevronRight size={24} />
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