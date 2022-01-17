import FoodManager from "./components/FoodManager/FoodManager";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex justify-center p-6">
        <FoodManager />

      </div>
      <Footer />
    </div>
  );
}

export default App;
