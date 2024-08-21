import i from "./i.jpg";
import r from "./refresh-button.png";
import "./css/style.css";
import {
  logoImg,
  reloadImg,
  search,
  searchBtn,
} from "./modules/dom.js";
import { apiCall } from "./modules/api.js";
reloadImg.src = r;
logoImg.src = i;
let loc;
searchBtn.addEventListener('click',(e) => {
  e.preventDefault();
 loc =  search.value;
apiCall(loc);
});


