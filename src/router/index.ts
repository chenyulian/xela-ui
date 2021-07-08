import {createWebHashHistory, createRouter} from "vue-router";
import Home from "../views/Home.vue";
import Doc from "../views/Doc.vue";
import SwitchDemo from "../components/demo/SwitchDemo.vue";
import DocDemo from "../components/demo/DocDemo.vue";
import ButtonDemo from "../components/demo/ButtonDemo.vue";
import AvatarDemo from "../components/demo/AvatarDemo.vue";
import DialogDemo from "../components/demo/DialogDemo.vue";
import InputDemo from "../components/demo/InputDemo.vue";
import SelectDemo from "../components/demo/SelectDemo.vue";
import TooltipDemo from "../components/demo/TooltipDemo.vue";
import LabelDemo from "../components/demo/LabelDemo.vue";
import AlertDemo from "../components/demo/AlertDemo.vue";


const history = createWebHashHistory();
export const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {path: "/doc", component: Doc, children: [
            {path: "", component: DocDemo},
            {path: "button", component: ButtonDemo},
            {path: "switch", component: SwitchDemo},
            {path: "dialog", component: DialogDemo},
            {path: "select", component: SelectDemo},
            {path: "input", component: InputDemo},
            {path: "avatar", component: AvatarDemo},
            {path: "tooltip", component: TooltipDemo},
            {path: "alert", component: AlertDemo},
            {path: "label", component: LabelDemo}
        ]} 
    ]
});
router.afterEach( route => {
    
});