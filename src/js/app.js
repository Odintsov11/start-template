import * as flsFunctions from "./modules/functions.js";
import Swiper, { Navigation, Pagination } from 'swiper';

flsFunctions.isWebp();


const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
});