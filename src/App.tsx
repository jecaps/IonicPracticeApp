import {
  setupIonicReact,
  IonApp,
  IonContent,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonSlides,
  IonSlide,
} from "@ionic/react";
import {} from "ionicons/icons";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";

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
  const APP_ID = "c43e5a6e";
  const APP_KEY = "60924f310091be8c1fc7e326cb7d188c";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      console.log(data.hits);
      setRecipes(data.hits);
    };

    getRecipes();
  }, [query]);

  const updateSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const getSearch = (e: any) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <>
      <IonApp>
        <IonPage>
          <Header />

          <IonContent>
            <h1 className="popular--title">Popular Recipes</h1>
            <IonSlides pager={true} options={slideOpts}>
              <IonSlide>
                <IonCard>
                  <IonImg src="https://cdn.pixabay.com/photo/2019/12/20/02/23/india-4707493_1280.jpg" />
                  <IonCardHeader>
                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                    <IonCardTitle>Card Title</IonCardTitle>
                  </IonCardHeader>

                  <IonCardContent>
                    Keep close to Nature's heart... and break clear away, once
                    in awhile, and climb a mountain or spend a week in the
                    woods. Wash your spirit clean.
                  </IonCardContent>
                </IonCard>
              </IonSlide>
              <IonSlide>
                <IonCard>
                  <IonImg src="https://images.pexels.com/photos/248509/pexels-photo-248509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                  <IonCardHeader>
                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                    <IonCardTitle>Card Title</IonCardTitle>
                  </IonCardHeader>

                  <IonCardContent>
                    Keep close to Nature's heart... and break clear away, once
                    in awhile, and climb a mountain or spend a week in the
                    woods. Wash your spirit clean.
                  </IonCardContent>
                </IonCard>
              </IonSlide>
              <IonSlide>
                <IonCard>
                  <IonImg src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                  <IonCardHeader>
                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                    <IonCardTitle>Card Title</IonCardTitle>
                  </IonCardHeader>

                  <IonCardContent>
                    Keep close to Nature's heart... and break clear away, once
                    in awhile, and climb a mountain or spend a week in the
                    woods. Wash your spirit clean.
                  </IonCardContent>
                </IonCard>
              </IonSlide>
            </IonSlides>
            <h1 className="popular--title">Veggies Recipes</h1>
            <IonSlides pager={true} options={slideOpts}>
              <IonSlide>
                <IonCard>
                  <IonImg src="https://cdn.pixabay.com/photo/2019/12/20/02/23/india-4707493_1280.jpg" />
                  <IonCardHeader>
                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                    <IonCardTitle>Card Title</IonCardTitle>
                  </IonCardHeader>

                  <IonCardContent>
                    Keep close to Nature's heart... and break clear away, once
                    in awhile, and climb a mountain or spend a week in the
                    woods. Wash your spirit clean.
                  </IonCardContent>
                </IonCard>
              </IonSlide>
              <IonSlide>
                <IonCard>
                  <IonImg src="https://images.pexels.com/photos/248509/pexels-photo-248509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                  <IonCardHeader>
                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                    <IonCardTitle>Card Title</IonCardTitle>
                  </IonCardHeader>

                  <IonCardContent>
                    Keep close to Nature's heart... and break clear away, once
                    in awhile, and climb a mountain or spend a week in the
                    woods. Wash your spirit clean.
                  </IonCardContent>
                </IonCard>
              </IonSlide>
              <IonSlide>
                <IonCard>
                  <IonImg src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                  <IonCardHeader>
                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                    <IonCardTitle>Card Title</IonCardTitle>
                  </IonCardHeader>

                  <IonCardContent>
                    Keep close to Nature's heart... and break clear away, once
                    in awhile, and climb a mountain or spend a week in the
                    woods. Wash your spirit clean.
                  </IonCardContent>
                </IonCard>
              </IonSlide>
            </IonSlides>
          </IonContent>

          <div className="app-footer--container">
            <form className="search-form" onSubmit={getSearch}>
              <input
                className="search-bar"
                type="text"
                value={search}
                onChange={updateSearch}
                placeholder="Search Recipe"
              />
              <button className="search-button" type="submit">
                🔍︎
              </button>
            </form>
          </div>
        </IonPage>
      </IonApp>
    </>
  );
};

export default App;
