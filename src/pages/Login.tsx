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
import axios from "axios";

const Login: React.FC = () => {
  let hs = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    let formData = new FormData();

    formData.append("action", "LOGIN");
    formData.append("username", username);
    formData.append("password", password);

    axios
      .post(
        "http://localhost/Harman/Node/iconic/r-curd/server/axios.php",
        formData
      )
      .then((result: any) => {
        if (result.data != null) {
          hs.push("/home");
        } else {
          alert("Invalid Username and password");
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="myContainer">
          <div className="myWrap">
            <div>
              <h1 className="mainTitle">Login</h1>
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
              <IonButton expand="full" onClick={() => handleLogin()}>
                Login
              </IonButton>
            </div>
            <div className="m1-5" onClick={() => hs.push("/signup")}>
              Register here
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
