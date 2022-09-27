import React from "react";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import HeaderComponent from "../components/HeaderComponent";
import PostCardComponent from "../components/PostCardComponent";

const Home: React.FC = () => {
  return (
    <IonPage id="main-content">
      <HeaderComponent />
      <IonContent className="ion-padding">
        <PostCardComponent />
      </IonContent>
    </IonPage>
  );
};

export default Home;
