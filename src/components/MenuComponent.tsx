import {
  IonContent,
  IonHeader,
  IonMenu,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonAvatar,
  IonList,
  IonFooter,
} from "@ionic/react";
const MenuComponent: React.FC = () => {
  return (
    <IonMenu contentId="main-content">
      <IonHeader>
        <IonToolbar>
          <IonItem style={{ padding: "0.5rem" }}>
            <IonAvatar slot="start">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg"
              />
            </IonAvatar>

            <IonLabel>Demo</IonLabel>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList className="m1-5" lines="full">
          <IonItem>
            <IonLabel>Profile</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Settings</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
      <IonFooter className="ion-no-border">
        <IonToolbar>
          <IonTitle>Logout</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonMenu>
  );
};

export default MenuComponent;
