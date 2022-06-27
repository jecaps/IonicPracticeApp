import { setupIonicReact, IonApp, IonContent, IonSlides } from "@ionic/react";
import {} from "ionicons/icons";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Slides from "./components/Slides";
import popularData from "./popularData";
import veganData from "./veganData";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

const App: React.FC = () => {
  const [popular, setPopular] = useState(popularData);
  const [vegan, setVegan] = useState(veganData);
  // const [popular, setPopular] = useState<any[]>([]);
  // const [vegan, setVegan] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  // useEffect(() => {
  //   const getPopular = async () => {
  //     const api = await fetch(
  //       `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=meat&number=6`
  //     );
  //     const data = await api.json();
  //     console.log(data);
  //     setPopular(data.recipes);
  //   };

  //   const getVegan = async () => {
  //     const api = await fetch(
  //       `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=vegan&number=6`
  //     );
  //     const data = await api.json();
  //     console.log(data);
  //     setVegan(data.recipes);
  //   };

  //   getPopular();
  //   getVegan();
  // }, [query]);

  const updateSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const getSearch = (e: any) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const popularSlideElement = popular.map((recipe) => {
    return (
      <Slides
        key={recipe.id}
        image={recipe.image}
        time={recipe.readyInMinutes}
        title={recipe.title}
        price={recipe.pricePerServing}
        score={recipe.healthScore}
        summary={recipe.summary}
        vegan={recipe.vegan}
      />
    );
  });

  const veganSlideElement = vegan.map((recipe) => {
    return (
      <Slides
        key={recipe.id}
        image={recipe.image}
        time={recipe.readyInMinutes}
        title={recipe.title}
        price={recipe.pricePerServing}
        score={recipe.healthScore}
        summary={recipe.summary}
        vegan={recipe.vegan}
      />
    );
  });

  return (
    <>
      <IonApp>
        <Header />

        <IonContent>
          <h1 className="popular--title">Popular Recipes</h1>
          <IonSlides pager={true} options={slideOpts}>
            {popularSlideElement}
          </IonSlides>
          <h1 className="popular--title">Veggies Recipes</h1>
          <IonSlides pager={true} options={slideOpts}>
            {veganSlideElement}
          </IonSlides>
        </IonContent>

        <Footer submit={getSearch} search={search} change={updateSearch} />
      </IonApp>
    </>
  );
};

export default App;
