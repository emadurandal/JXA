import { browser } from "./browser";

browser().then((output) => {
    console.log(output)
}).catch(error => {
    console.error(error);
});

