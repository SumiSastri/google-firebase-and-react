---
layout: default
title: React router v6
parent: React Front End
nav_order: 5
---
# React router v6

Main changes:

1. Wrap App in `index.js` with the new Context for routing

```JavaScript
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();

```

2. `Switch` constructor changes to `Routes` and no elements can be placed between `Routes` and `Route` providers

3. `useHistory` replaced by `useNavigate` hook
