import { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ActivityCard = ({ day, activities }) => (
    <div className="bg-white pb-4 px-4 w-[220px] h-[350px] shadow-md rounded-md flex flex-col items-center ">
        <p className="bg-yellow-200 font-bold text-sm text-red-600 mb-2 px-2 py-1">Day {day}</p>
        {activities.map((activity, index) => (
            <div key={index} className="w-full mb-4 last:mb-0">
                <img src={activity.icon} alt={activity.title} className="w-16 h-16 mx-auto mb-2" />
                <p className="text-sm text-center font-semibold mb-2">{activity.title}</p>
                <button className="bg-red-600 text-white px-4 py-1 text-xs rounded block mx-auto transition-transform duration-300 hover:scale-105 hover:bg-red-700">
                    Learn Now
                </button>
            </div>
        ))}
    </div>
);

ActivityCard.propTypes = {
    day: PropTypes.number.isRequired,
    activities: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
        })
    ).isRequired,
};

const ActivityCards = ({ activities }) => {
    const [startIndex, setStartIndex] = useState(0);

    const nextCards = () => {
        setStartIndex((prevIndex) =>
            Math.min(prevIndex + 1, activities.length - 4)
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
            {activities.slice(startIndex, startIndex + 4).map((dayActivities, index) => (
                <ActivityCard
                    key={startIndex + index + 1}
                    day={startIndex + index + 1}
                    activities={dayActivities}
                />
            ))}
            <button
                onClick={nextCards}
                disabled={startIndex >= activities.length - 4}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md disabled:opacity-50"
            >
                <ChevronRight size={24} />
            </button>
        </div>
    );
};

ActivityCards.propTypes = {
    activities: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                icon: PropTypes.string.isRequired,
            })
        )
    ).isRequired,
};

export default ActivityCards;