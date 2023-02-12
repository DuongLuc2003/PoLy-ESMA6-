import classes from './main.module.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import HomePage from './pages/homepage';
import About from './pages/about';
import {render,router} from './utilities/index';
import product from './pages/product';
import notfound from './pages/notfound';
import ProductDetailPage from './pages/productdetail';
const app = document.querySelector("#app");
router.on('/',() => render(HomePage,app));
router.on('/about',() => render(About,app));
router.on('/product',() => render(product,app));
router.on('/product/:id',({data}) => render(() => ProductDetailPage(data),app));
router.on(()=>render(notfound,app));
router.resolve();

