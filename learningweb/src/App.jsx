import React from 'react';
import LearningWeekBanner from './Components/AnimatedBanner';
import Navbar from './Components/Navbar';
import './index.css';
import LearningEngagement from './Components/LearningEngagement';
import MasalComponent from './Components/MasalComponent';
import Slider from './Components/Slider';
import MasalTravelHistory from './Components/LearningWeb';
import Footer from './Components/Footer';

function App() {
  const cards = [
    { 'image': 'images/card1.png', 'label': 'card1' },
    { 'image': 'images/card2.png', 'label': 'card2' },
    { 'image': 'images/card3.png', 'label': 'card3' },
    { 'image': 'images/card4.png', 'label': 'card4' },
    { 'image': 'images/card5.png', 'label': 'card5' },
  ];

  const activities = [
    [{ title: "Authentic Leadership", icon: "activity1.svg" }, { title: "Growth Mindset", icon: "activity5.svg" }],
    [{ title: "Data Analytics", icon: "activity3.svg" }, { title: "Digital Transformation", icon: "activity4.svg" }],
    [{ title: "Influencing the Ecosystem", icon: "activity2.svg" }],
    [{ title: "Macroeconomics", icon: "activity6.svg" }],
    [{ title: "Macroeconomics", icon: "activity6.svg" }],
  ];

  const gamingActivities = [
    [{ title: "OutSmart Your Opponent", icon: "images/games/outsmart.jpeg" }],
    [{ title: "Minecraft", icon: "images/games/minecraft.jpg" }],
    [{ title: "Grand Theft Auto V", icon: "images/games/gta.jpeg" }],
    [{ title: "Red Redemption 2", icon: "images/games/rd2.jpeg" }],
    [{ title: "Call of Duty", icon: "images/games/cod.jpeg" }],
  ];

  const videoGalleryData = [
    { 'image': 'images/img1.jpeg', 'label': 'img1', 'date': '12 Sep, 2024' },
    { 'image': 'images/img2.jpeg', 'label': 'img2', 'date': '15 Oct, 2024' },
    { 'image': 'images/img3.jpeg', 'label': 'img3', 'date': '10 Oct, 2024' },
  ];

  const imagesData = [
    { 'image': 'images/img1.jpeg', 'label': 'img1', 'date': '12 Sep, 2024' },
    { 'image': 'images/img2.jpeg', 'label': 'img2', 'date': '15 Oct, 2024' },
    { 'image': 'images/img3.jpeg', 'label': 'img3', 'date': '10 Oct, 2024' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <LearningWeekBanner cards={cards} />
          <section className="my-8">
            <Slider heading="Our Video Gallery" data={videoGalleryData} isvideo={true} />
          </section>
          <section className="my-8">
            <LearningEngagement activities={activities} gamingActivities={gamingActivities} />
          </section>
          <section className="my-8">
            <MasalComponent />
          </section>
          <section className="my-8">
            <Slider heading="Glimpse of HO and Branch Activities" data={imagesData} isvideo={false} />
          </section>
          <section className="my-8">
            <MasalTravelHistory />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;