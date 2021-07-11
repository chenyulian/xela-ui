import Dialog from "./Dialog.vue";
import {createApp, h} from "vue";
export const openDialog = (options) => {
    const {title, content, ok, cancel} = options;
    const div = document.createElement("div");
    document.body.appendChild(div);

    const close = () => {
        dialog.unmount();
        div.remove();
    }

    const dialog = createApp({
        render() {
            return h(
                // @ts-ignore
                Dialog,
                {
                    visible: true,
                    "onUpdate:visible": (newVisible) => {
                        if(newVisible === false) {
                            close();
                        }
                    },
                    ok
                },
                {
                    title,content
                }
            );
        },
    });
    dialog.mount(div);
}