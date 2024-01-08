import { definePluginSettings } from "@api/Settings";
import { OptionType } from "@utils/types";

export const settings = definePluginSettings({
    authenticDisplay: {
        type: OptionType.BOOLEAN,
        description: "If enabled, hides the first line of text, being a duplicate of the section, since you cant select those.",
        default: false
    }
});