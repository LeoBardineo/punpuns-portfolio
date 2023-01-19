import Header from "./components/Header/Header";
import WhoIM from "./components/WhoIM/WhoIM";
import AboutExperienceContainer from "./components/AboutExperienceContainer/AboutExperienceContainer";
import CardsContactContainer from "./components/CardsContactContainer/CardsContactContainer";
function App() {
  return (
    <div className="relative z-20 h-screen w-screen overflow-y-scroll bg-white font-Inter overflow-x-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-300 scrollbar-thumb-rounded-3xl">
      <Header />
      <div className="absolute top-0 left-0 w-full">
        <WhoIM />
        <AboutExperienceContainer />
        <CardsContactContainer />
      </div>
    </div>
  );
}

export default App;
