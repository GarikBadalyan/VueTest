
import {createRouter, createWebHashHistory} from "vue-router";
import TheComponentOne from "@/TheComponentOne";
import TheComponentTwo from "@/TheComponentTwo";
import TheComponentTree from "@/TheComponentTree";

export default createRouter({
    history:createWebHashHistory(),
    routes: [
        {path: '/one', component: TheComponentOne},
        {path: '/two/:nameCar?', component: TheComponentTwo},
        {path: '/three', component: TheComponentTree},
    ]
})


