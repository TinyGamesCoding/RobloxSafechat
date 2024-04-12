import { definePluginSettings } from "@api/Settings";
import { OptionType } from "@utils/types";

export const settings = definePluginSettings({
    authenticDisplay: {
        type: OptionType.BOOLEAN,
        description: "If enabled, hides the first line of text, being a duplicate of the section, since you cant select those.",
        default: false
    },
    safechatIcon: {
        type: OptionType.SELECT,
        description: "Select your safechat icon, which shows when opening safechat.",
        options: [
            {label: "Gray", value: "https://raw.githubusercontent.com/TinyGamesCoding/RobloxSafechat-Vencord/main/Images/safechat-monochrome.png", default: true},
            {label: "Blue", value: "https://raw.githubusercontent.com/TinyGamesCoding/RobloxSafechat-Vencord/main/Images/safechat-normal.png"},
            {label: "Green", value: "https://raw.githubusercontent.com/TinyGamesCoding/RobloxSafechat-Vencord/main/Images/safechat-green.png"},
            {label: "Pink", value: "https://raw.githubusercontent.com/TinyGamesCoding/RobloxSafechat-Vencord/main/Images/safechat-pink.png"},
            {label: "None", value: ""}
        ],
    }
});