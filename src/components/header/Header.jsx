import React, { useEffect, useState } from "react";
import "./header.css";
const Header = () => {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
      tp.push(["setCookieDomain", "cristhianbuiza.github.io"]);
    }, 1000);
  }, []);

  const PianoLogin = () => {
    setLoading(true);
    window.tp.push([
      "init",
      function () {
        window.tp.pianoId.show({
          disableSignUp: true, // habilitar formulario registro
          displayMode: "inline", //inline
          screen: "login", // plantilla login - registro -
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
          loggedOut: function () {
            // callback cierra sesion
            console.log("el usuario ah salido!");
            //Set the CSS and HTML here for what the signup button should look like when the user is logged out //e.g. unhide the sign in button, hide the signout button
          },
        });
      },
    ]);
    setLoading(false);
  };
  const PianoRegister = () => {
    setLoading(true);
    window.tp.push([
      "init",
      function () {
        window.tp.pianoId.show({
          disableSignUp: false, // habilitar formulario registro
          displayMode: "inline", //inline
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
            setTimeout(() => {
              setNameUser(data.user.given_name);
            }, 1000);
          },
          loggedOut: function () {
            // callback cierra sesion
            console.log("el usuario ah salido!");
            //Set the CSS and HTML here for what the signup button should look like when the user is logged out //e.g. unhide the sign in button, hide the signout button
          },
        });
      },
    ]);
    setLoading(false);
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
    setLoading(true);
    window.tp.push([
      "init",
      function () {
        window.tp.myaccount.show({
          displayMode: "inline",
          containerSelector: "#login-form",
        });
      },
    ]);
    setLoading(false);
  };

  return (
    <div>
      <header className="nav">
        <div className="logo">
          <h1>Piano-Demo</h1>
        </div>
        <div className="nav-right">
          <a className="btn btn-primary" onClick={PianoLogin}>
            Login
          </a>
          <a className="btn btn-primary" onClick={PianoRegister}>
            Registro
          </a>
          <a className="btn btn-primary" onClick={PianoLogout}>
            Logout
          </a>
          <a className="btn btn-primary" onClick={PianoProfile}>
            Profile
          </a>
        </div>
      </header>
      {loading ? (
        <div className="container">
          <h1>Hola, {nameUser}</h1>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
