import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [nameUser, setNameUser] = useState();

  useEffect(() => {
    (function (src) {
      var a = document.createElement("script");
      a.type = "text/javascript";
      a.async = true;
      a.src = src;
      var b = document.getElementsByTagName("script")[0];
      b.parentNode.insertBefore(a, b);
    })("//sandbox.tinypass.com/xbuilder/experience/load?aid=PeVZORGJsu");

    setTimeout(() => {
      const tp = window.tp || [];
      tp.push(["setCookieDomain", "cocotopia.github.io"]);
    }, 1000);
  }, []);

  const PianoLogin = () => {
    console.log("login");
    // const tp = window.tp || [];
    window.tp.push([
      "init",
      function () {
        window.tp.pianoId.show({
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
            setNameUser(data.user.given_name);
          },
          //Set the CSS and HTML here for what the signup button should look like when the user is logged in
          //e.g. unhide the signout button, hide the sign-in button

          loggedOut: function () {
            // callback cierra sesion
            console.log("el usuario ah salido!");
            //Set the CSS and HTML here for what the signup button should look like when the user is logged out //e.g. unhide the sign in button, hide the signout button
          },
        });
      },
    ]);
  };

  const PianoLogout = () => {
    // const tp = window.tp || [];
    window.tp.push([
      "init",
      function () {
        console.log("logout");
        window.tp.pianoId.logout();
        window.location.reload();
      },
    ]);
  };

  const PianoProfile = () => {
    // const tp = window["tp"] || [];
    window.tp.push([
      "init",
      function () {
        window.tp.myaccount.show({
          displayMode: "inline",
          containerSelector: "#my-account",
        });
      },
    ]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Bienvenido a mi Sitio {nameUser}</p>

        <a
          className="App-link"
          href="#"
          rel="noopener noreferrer"
          onClick={PianoLogin}
        >
          Iniciar
        </a>

        <button onClick={PianoProfile}> Mi Perfil </button>
        <button onClick={PianoLogout}> Salir </button>
      </header>
    </div>
  );
}

export default App;
