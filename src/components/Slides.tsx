import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonImg,
  IonSlide,
} from "@ionic/react";
import "./Slides.css";

const Slides = (props: any) => {
  return (
    <IonSlide>
      <IonCard>
        <IonImg src={props.image} />
        <IonCardHeader>
          <IonCardTitle>{props.title}</IonCardTitle>
        </IonCardHeader>

        <div className="content-container">
          <div className="prep-time--container">
            <p className="prep-time">Prep Time ⏱</p>
            <p className="value">{props.time}min</p>
          </div>
          <div className="price-per-serving--container">
            <p className="price-per-serving">Price per Serving 🍴</p>
            <p className="value">{props.price}</p>
          </div>
          <div className="health-score--container">
            <p className="health-score">Health Score ❤️</p>
            <p className="value">{props.score}</p>
          </div>
        </div>
        <div className="bottom">
          <p className="vegan">{props.vegan ? "🌿VEGAN" : " "}</p>
          <p className="go-to-recipe">Go to Recipe ⟶</p>
        </div>
      </IonCard>
    </IonSlide>
  );
};

export default Slides;
