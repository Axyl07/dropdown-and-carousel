
import test from "./test";
import dropdown from "./dropdown";
import carousel from "./image-carousel";

carousel();
const openDropdown = document.querySelector('.openDropdown');
openDropdown.addEventListener('click', () => {
    dropdown();
})
test();