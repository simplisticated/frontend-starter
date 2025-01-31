import mixpanel, { Mixpanel } from "mixpanel-browser";

export default function initializeMixpanel(): Mixpanel | null {
    const mixpanelApiKey = process.env.REACT_APP_MIXPANEL_API_KEY;
    if (!mixpanelApiKey) return null;
    mixpanel.init(mixpanelApiKey);
    return mixpanel;
}
