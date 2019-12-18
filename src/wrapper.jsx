import React, { useReducer } from "react";
import picjpg01 from "./images/pic01.jpg";
import picjpg02 from "./images/pic02.jpg";
import jpg01 from "./images/gallery/thumbs/01.jpg";
import jpg02 from "./images/gallery/thumbs/02.jpg";
import jpg03 from "./images/gallery/thumbs/03.jpg";
import jpg04 from "./images/gallery/thumbs/04.jpg";
import jpg05 from "./images/gallery/thumbs/05.jpg";
import jpg06 from "./images/gallery/thumbs/06.jpg";
import jpg07 from "./images/gallery/thumbs/07.jpg";
import jpg08 from "./images/gallery/thumbs/08.jpg";
import jpg09 from "./images/gallery/thumbs/09.jpg";
import jpg10 from "./images/gallery/thumbs/10.jpg";
import Simulator from "./components/Simulator";
import {
  SimulatorReducer,
  SimulatorInitialState,
  SimulatorState,
  MIN_MONEY,
  MAX_MONEY,
  AVAILABLE_MONTHS
} from "./components/Simulator/SimulatorReducer";
import {
  Select,
  MenuItem,
  InputLabel,
  Typography,
  Paper,
  Box,
  FormControl,
  RadioGroup,
  Radio,
  Grid,
  Slider,
  FormControlLabel
} from "@material-ui/core";
import FileUpload from "./components/FileUpload";
const scrollTo = selector => {
  document.querySelector(selector).scrollIntoView({
    behavior: "smooth"
  });
};

const Wrapper = () => {
  const [state, dispatch] = useReducer(SimulatorReducer, SimulatorInitialState);
  const charCount = state.money.toString().length;

  const Buttons = [
    "Pagar Tarjeta",
    "Dispensar Efectivo",
    "Hacer Transferencia",
    "Diferir compra especifica"
  ].map((message, i) => (
    <li>
      <button
        className={`button large ${state.type == i ? "primary" : ""}`}
        key={message}
        style={{ margin: "1rem", width: "80%" }}
        onClick={e => dispatch({ type: "set_type", payload: i })}
      >
        {message}
      </button>
    </li>
  ));

  return (
    <div id="wrapper">
      <section className="intro">
        <header>
          <h1>Taso</h1>
          <p>Deudas de tarjetas renegociadas.</p>
          <ul className="actions">
            <li>
              <a
                href="#first"
                className="arrow"
                onClick={e => {
                  e.preventDefault();
                  scrollTo("#second");
                }}
              >
                <span className="label">Next</span>
              </a>
            </li>
          </ul>
        </header>
        <div
          className="content"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className="fields" data-position="center">
            <h1>
              Quiero{" "}
              <input
                style={{ width: (charCount > 5 ? 5 : charCount) + "em" }}
                className="sim__input sim__text-input"
                type="text"
                value={state.money}
                onChange={e =>
                  dispatch({ type: "set_money", payload: e.target.value })
                }
              />
              a{" "}
              <FormControl>
                <Select
                  defaultValue={AVAILABLE_MONTHS[0]}
                  className="sim__input"
                  style={{ background: "none" }}
                  labelId="month-qty"
                  id="month-qty"
                  value={state.month}
                  onChange={e =>
                    dispatch({ type: "set_months", payload: e.target.value })
                  }
                >
                  {AVAILABLE_MONTHS.map(e => (
                    <MenuItem value={e}>{e}</MenuItem>
                  ))}
                </Select>
              </FormControl>{" "}
              meses sin intereses.
            </h1>
          </div>
        </div>
      </section>
      <section>
        <header>
          <h2 id="second">Escoge un Servicio</h2>
        </header>
        <div className="content">
          <ul
            className="actions"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {Buttons}
          </ul>
        </div>
      </section>
      <section id="first">
        <header>
          <h2>Ingresa tus datos</h2>
        </header>
        <div className="content">
          <form>
            <div className="fields" data-position="center">
              <div className="field">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={state.email}
                  onChange={e =>
                    dispatch({ type: "set_email", payload: e.target.value })
                  }
                />
              </div>
              <div className="field">
                <FileUpload
                  onChange={e => {
                    if (e.target.files.length > 0)
                      dispatch({ type: "set_ife", payload: e.target.files[0] });
                  }}
                  value={state.ife}
                  label={"IFE"}
                />
              </div>
              <div className="field">
                <FileUpload
                  onChange={e => {
                    if (e.target.files.length > 0)
                      dispatch({ type: "set_ine", payload: e.target.files[0] });
                  }}
                  value={state.ine}
                  label={"INE"}
                />
              </div>
            </div>
          </form>
        </div>
      </section>

      <section>
        <header>
          <h2>Feugiat consequat tempus ultrices</h2>
        </header>
        <div className="content">
          <p>
            <strong>Etiam tristique libero</strong> eu nibh porttitor amet
            fermentum. Nullam venenatis erat id vehicula ultrices sed ultricies
            condimentum.
          </p>
          <ul className="feature-icons">
            <li className="icon solid fa-laptop">Consequat tempus</li>
            <li className="icon solid fa-bolt">Etiam adipiscing</li>
            <li className="icon solid fa-signal">Libero nullam</li>
            <li className="icon solid fa-cog">Blandit condimentum</li>
            <li className="icon solid fa-map-marker-alt">Lorem ipsum dolor</li>
            <li className="icon solid fa-code">Nibh amet venenatis</li>
          </ul>
          <p>
            Vehicula ultrices sed ultricies condimentum. Magna sed etiam
            consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et
            dolor libero, feugiat magna tempus, sed et lorem adipiscing.
          </p>
        </div>
      </section>

      <section>
        <header>
          <h2>Ultrices erat magna sed condimentum</h2>
        </header>
        <div className="content">
          <p>
            <strong>Integer mollis egestas</strong> nam maximus erat id euismod
            egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.
          </p>

          <section>
            <header>
              <h3>Erat aliquam</h3>
              <p>
                Vehicula ultrices dolor amet ultricies et condimentum. Magna sed
                etiam consequat, et lorem adipiscing sed dolor sit amet,
                consectetur amet do eiusmod tempor incididunt ipsum suspendisse
                ultrices gravida.
              </p>
            </header>
            <div className="content">
              <div className="gallery">
                <a href="images/gallery/fulls/01.jpg" className="landscape">
                  <img src={jpg01} alt="" />
                </a>
                <a href="images/gallery/fulls/02.jpg">
                  <img src={jpg02} alt="" />
                </a>
                <a href="images/gallery/fulls/03.jpg">
                  <img src={jpg03} alt="" />
                </a>
                <a href="images/gallery/fulls/04.jpg" className="landscape">
                  <img src={jpg04} alt="" />
                </a>
              </div>
            </div>
          </section>

          <section>
            <header>
              <h3>Nisl consequat</h3>
              <p>
                Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
                aliquam sed facilisis ante interdum congue. Integer mollis, nisl
                amet convallis, porttitor magna ullamcorper, amet mauris. Ut
                magna finibus nisi nec lacinia ipsum maximus.
              </p>
            </header>
            <div className="content">
              <div className="gallery">
                <a href="images/gallery/fulls/05.jpg" className="landscape">
                  <img src="images/gallery/thumbs/05.jpg" alt="" />
                </a>
                <a href="images/gallery/fulls/06.jpg">
                  <img src="images/gallery/thumbs/06.jpg" alt="" />
                </a>
                <a href="images/gallery/fulls/07.jpg">
                  <img src="images/gallery/thumbs/07.jpg" alt="" />
                </a>
              </div>
            </div>
          </section>

          <section>
            <header>
              <h3>Lorem gravida</h3>
              <p>
                Proin aliquam facilisis ante interdum. Sed nulla amet lorem
                feugiat tempus aenean ornare velit lacus, ac varius sed enim
                lorem ullamcorper dolore. ac varius enim lorem ullamcorper
                dolore. Proin aliquam facilisis.
              </p>
            </header>
            <div className="content">
              <div className="gallery">
                <a href="images/gallery/fulls/08.jpg" className="portrait">
                  <img src="images/gallery/thumbs/08.jpg" alt="" />
                </a>
                <a href="images/gallery/fulls/09.jpg" className="portrait">
                  <img src="images/gallery/thumbs/09.jpg" alt="" />
                </a>
                <a href="images/gallery/fulls/10.jpg" className="landscape">
                  <img src="images/gallery/thumbs/10.jpg" alt="" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section>
        <header>
          <h2>Contáctanos</h2>
        </header>
        <div className="content">
          <p>
            <strong>Auctor commodo</strong> interdum et malesuada fames ac ante
            ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet
            dolor mattis sagittis.
          </p>
          <form>
            <div className="fields">
              <div className="field half">
                <input type="text" name="name" id="name" placeholder="Name" />
              </div>
              <div className="field half">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="field">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  rows="7"
                ></textarea>
              </div>
            </div>
            <ul className="actions">
              <li>
                <input
                  type="submit"
                  value="Send Message"
                  className="button primary"
                />
              </li>
            </ul>
          </form>
        </div>
        <footer>
          <ul className="items">
            <li>
              <h3>Email</h3>
              <a href="#">information@untitled.ext</a>
            </li>
            <li>
              <h3>Teléfono</h3>
              <a href="#">(000) 000-0000</a>
            </li>
            <li>
              <h3>Dirección</h3>
              <span>1234 Somewhere Road, Nashville, TN 00000</span>
            </li>
            <li>
              <h3>Redes Sociales</h3>
              <ul className="icons">
                <li>
                  <i className="fab fa-facebook-f"></i>
                </li>
                <li>
                  <a href="#" className="icon brands fa-facebook-f">
                    <span className="label">Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon brands fa-instagram">
                    <span className="label">Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon brands fa-linkedin-in">
                    <span className="label">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon brands fa-github">
                    <span className="label">GitHub</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon brands fa-codepen">
                    <span className="label">Codepen</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </footer>
      </section>

      <div className="copyright">
        &copy; Untitled. All rights reserved. Design:{" "}
        <a href="https://html5up.net">HTML5 UP</a>.
      </div>
    </div>
  );
};

export default Wrapper;
