import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Bootstrap JavaScript
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Provider from "./context/product.jsx";
import { CartProvider } from "./context/cartContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <CartProvider>
          <App />
        </CartProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
