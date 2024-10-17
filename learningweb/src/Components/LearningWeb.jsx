// import React from 'react';



const LearningPlatformPage = () => {
    return (
        <div className="bg-white min-h-screen">

            {/* Mashal's Travel History */}
            <div className="mt-8 mb-8">
                <h2 className="text-center text-xl font-bold mb-4">Our Mashal`&apos;` Travel History</h2>
                <div className="flex justify-center">
                    <div className="w-1/2">
                        <img src="/api/placeholder/300/300" alt="India Map" className="w-full" />
                    </div>
                    <div className="w-1/2 space-y-4 pl-4">
                        {['20,000+\nEmployees & engaged', '10+\nLocations Reached', '150+\nWorkshops Completed'].map((stat, index) => (
                            <div key={index} className="bg-green-700 text-white p-2">
                                <p className="whitespace-pre-line text-sm">{stat}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearningPlatformPage;