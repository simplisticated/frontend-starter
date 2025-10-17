import mixpanel, { Mixpanel } from "mixpanel-browser";
import { ENV } from "../app/env";

export default function initializeMixpanel(): Mixpanel | null {
    if (!ENV.MIXPANEL_API_KEY) return null;
    mixpanel.init(ENV.MIXPANEL_API_KEY);
    return mixpanel;
}
