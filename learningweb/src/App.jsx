// import { ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';
import LearningWeekBanner from './Components/AnimatedBanner'
import LearningPlatformPage from './Components/LearningWeb'
import Navbar from './Components/Navbar'
import './index.css'
import VideoGallerySlider from './Components/Slider';
import LearningEngagement from './Components/LearningEngagement';

function App() {
  const cards = [
    {
      'image': 'images/card1.png',
      'label': 'card1',
    },
    {
      'image': 'images/card2.png',
      'label': 'card2',
    },
    {
      'image': 'images/card3.png',
      'label': 'card3',
    },
    {
      'image': 'images/card4.png',
      'label': 'card4',
    },
    {
      'image': 'images/card5.png',
      'label': 'card5',
    },
  ];

  const activities = [
    { title: "Authentic Leadership", icon: "activity1.svg" },
    { title: "Data Analytics", icon: "activity3.svg" },
    { title: "Influencing the Ecosystem", icon: "activity2.svg" },
    { title: "Macroeconomics", icon: "activity4.svg" },
    // { title: "Macro", icon: "activity5.svg" },
  ];

  const gamingActivities = [
    // Similar structure to activities, but for gaming content
    { title: "Authentic Leadership", icon: "/path/to/trophy-icon.png" },
    { title: "Data Analytics", icon: "/path/to/analytics-icon.png" },
    { title: "Influencing the Ecosystem", icon: "/path/to/ecosystem-icon.png" },
    { title: "Macroeconomics", icon: "/path/to/economics-icon.png" },
  ];

  const videoGalleryData = [
    {
      'image': 'images/img1.jpeg',
      'label': 'img1',
      'date': '12 Sep, 2024'
    },
    {
      'image': 'images/img2.jpeg',
      'label': 'img2',
      'date': '15 Oct, 2024',
    },
    {
      'image': 'images/img3.jpeg',
      'label': 'img3',
      'date': '10 Oct, 2024'
    },
  ];
  return (
    <>
      <Navbar />
      <div className='p-20'>
        <LearningWeekBanner />
        <div className="flex justify-center mt-8 space-x-4">
          {cards.map((card, index) => (
            <div key={index} className="p-2 text-center text-xs">
              <img
                src={card.image}
                alt={card.label}
                className="h-[214px] w-[270px] object-cover"
              />
            </div>
          ))}
        </div>

        <VideoGallerySlider videos={videoGalleryData} />
        
        <LearningEngagement activities={activities} gamingActivities={gamingActivities} />
        <div className="bg-[#571937] h-[600px] text-white text-center">
          <p className="text-xs">Explore our app to keep the</p>
          <p className="text-yellow-400 text-lg font-bold">mashaal of knowledge burning bright</p>
          <p className="text-xs">as you discover other features that enhance your learning journey and ignite your passion for growth!</p>
        </div>
        <VideoGallerySlider videos={videoGalleryData} />


      </div>
      <LearningPlatformPage />
    </>
  )
}

export default App