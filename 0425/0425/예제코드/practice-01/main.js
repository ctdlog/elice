import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";

let app = document.querySelector("#app");
app.innerHTML = `
${Header}
${Main}
${Footer}
`;
