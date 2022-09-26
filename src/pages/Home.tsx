import { IonContent, IonPage } from "@ionic/react";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="myContainer">
          <div className="myWrap">Home</div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
