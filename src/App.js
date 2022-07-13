import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    (function (src) {
      var a = document.createElement("script");
      a.type = "text/javascript";
      a.async = true;
      a.src = src;
      var b = document.getElementsByTagName("script")[0];
      b.parentNode.insertBefore(a, b);
    })("//sandbox.tinypass.com/xbuilder/experience/load?aid=PeVZORGJsu");
  }, []);

  const PianoLogin = () => {
    console.log("login");
    const tp = window.tp || [];
    tp.push([
      "init",
      function () {
        tp.pianoId.show({
          disableSignUp: false, // habilitar formulario registro
          displayMode: "modal", //inline
          screen: "register", // plantilla login - registro -
          containerSelector: "#login-form", // contenedor o div donde mostrara plantilla
          loggedIn: function (data) {
            // callback  inicia sesion
            console.log(
              "user ",
              data.user,
              " logged in with token",
              data.token
            );
          },
          //Set the CSS and HTML here for what the signup button should look like when the user is logged in
          //e.g. unhide the signout button, hide the sign-in button

          loggedOut: function () {
            // callback cierra sesion
            console.log("user logged out");
            //Set the CSS and HTML here for what the signup button should look like when the user is logged out //e.g. unhide the sign in button, hide the signout button
          },
        });
      },
    ]);
  };

  const PianoProfile = () => {
    const tp = window["tp"] || [];
    tp.push([
      "init",
      function () {
        tp.myaccount.show({
          displayMode: "inline",
          containerSelector: "#my-account",
        });
      },
    ]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Bienvenido a mi Sitio</p>
        <a
          className="App-link"
          href="#"
          rel="noopener noreferrer"
          onClick={PianoLogin}
        >
          Iniciar
        </a>

        <button onClick={PianoProfile}> Mi Perfil </button>
      </header>
    </div>
  );
}

export default App;
