import {
  IonContent,
  IonPage,
  IonButton,
  IonItem,
  IonLabel,
  IonInput,
} from "@ionic/react";
import { useHistory } from "react-router";
import { useState } from "react";
import Axios from "axios";

const Signup: React.FC = () => {
  let hs = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    let formData = new FormData();

    formData.append("action", "SIGNUP");
    formData.append("name", name);
    formData.append("email", email);
    formData.append("username", username);
    formData.append("password", password);

    Axios.post(
      "http://localhost/Harman/Node/iconic/r-curd/server/axios.php",
      formData
    )
      .then((result: any) => {
        console.log(result.data);
      })
      .catch((err: any) => {
        console.log(err);
      });
    // hs.push("/login");
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="myContainer">
          <div className="myWrap">
            <div>
              <h1 className="mainTitle">Sign Up</h1>
            </div>
            <div className="m1-5">
              <IonItem>
                <IonLabel position="floating">Full Name</IonLabel>
                <IonInput
                  type="text"
                  value={name}
                  name="name"
                  onIonChange={(e: any) => setName(e.detail.value)}
                ></IonInput>
              </IonItem>
            </div>
            <div className="m1-5">
              <IonItem>
                <IonLabel position="floating">Email</IonLabel>
                <IonInput
                  type="text"
                  name="email"
                  value={email}
                  onIonChange={(e: any) => setEmail(e.detail.value)}
                ></IonInput>
              </IonItem>
            </div>
            <div className="m1-5">
              <IonItem>
                <IonLabel position="floating">Username</IonLabel>
                <IonInput
                  type="text"
                  name="username"
                  value={username}
                  onIonChange={(e: any) => setUsername(e.detail.value)}
                ></IonInput>
              </IonItem>
            </div>
            <div className="m1-5">
              <IonItem>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput
                  type="password"
                  name="password"
                  value={password}
                  onIonChange={(e: any) => setPassword(e.detail.value)}
                ></IonInput>
              </IonItem>
            </div>
            <div className="m1-5">
              <IonButton expand="full" onClick={() => handleSignup()}>
                Signup
              </IonButton>
            </div>
            <div className="m1-5" onClick={() => hs.push("/login")}>
              Login here
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Signup;
