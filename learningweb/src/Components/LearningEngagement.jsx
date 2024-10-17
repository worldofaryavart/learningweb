import { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight, Clock, Gamepad2 } from 'lucide-react';

const LearningEngagement = ({ activities, gamingActivities }) => {
    const [activeTab, setActiveTab] = useState('activity');

    const renderMetrics = () => (
        <div className="bg-red-800 text-white p-3 overflow-hidden">
            <div className="flex animate-scroll whitespace-nowrap space-x-8">
                {[...Array(5)].map((_, index) => (
                    <div key={index} className="flex space-x-8 items-center text-sm">
                        <p>
                            <span className="text-yellow-300 text-lg">★</span> Total Logins - 9458
                        </p>
                        <p>
                            <span className="text-yellow-300 text-lg">★</span> Branch Activity - 895
                        </p>
                        <p>
                            <span className="text-yellow-300 text-lg">★</span> Floor Activity - 453
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
    
    const renderTabs = () => (
        <div className="mt-6 flex justify-center">
            <div className="bg-white rounded-full p-1 flex items-center shadow-md">
                <button 
                    className={`flex items-center px-24 py-3 rounded-full text-lg transition-colors duration-300 ${
                        activeTab === 'activity' 
                            ? 'bg-green-800 text-white' 
                            : 'text-green-800'
                    }`}
                    onClick={() => setActiveTab('activity')}
                >
                    <Clock className="mr-2" size={24} />
                    Activity
                </button>
                <button 
                    className={`flex items-center px-24 py-3 rounded-full text-lg transition-colors duration-300 ${
                        activeTab === 'gaming' 
                            ? 'bg-green-800 text-white' 
                            : 'text-green-800'
                    }`}
                    onClick={() => setActiveTab('gaming')}
                >
                    <Gamepad2 className="mr-2" size={24} />
                    Gaming
                </button>
            </div>
        </div>
    );

    const renderCards = () => {
        const currentActivities = activeTab === 'activity' ? activities : gamingActivities;
        return (
            <div className="m-4 flex justify-center space-x-4 relative">
                <button className="absolute left-7 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md">
                    <ChevronLeft size={24} />
                </button>
                {currentActivities.map((activity, index) => (
                    <div key={index} className="bg-white p-4 w-[190px] h-[300px] shadow-md rounded-md flex flex-col items-center">
                        <p className="font-bold text-sm text-yellow-500 mb-2">Day {index + 1}</p>
                        <img src={activity.icon} alt={activity.title} className="w-16 h-16 mb-2" />
                        <p className="text-xs text-center mb-2">{activity.title}</p>
                        <button className="bg-red-600 text-white px-4 py-1 text-xs rounded">
                            Learn Now
                        </button>
                    </div>
                ))}
                <button className="absolute right-7 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md">
                    <ChevronRight size={24} />
                </button>
            </div>
        );
    };

    return (
        <>
        <h2 className="text-center text-4xl font-bold mb-4 text-[#8B0000] pt-2">Learning Engagement</h2>
        <div className="bg-gray-100 pb-6">
            {renderMetrics()}
            {renderTabs()}
            {renderCards()}
        </div>
        </>
    );
}

LearningEngagement.propTypes = {
    activities: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
    gamingActivities: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default LearningEngagement;