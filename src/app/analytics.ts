import axios from "axios";

class Analytics {
    public async event(
        event: string,
        data?: {
            [id: string]: any;
        }
    ) {
        axios.post("https://analytics.best-production.workers.dev/event", {
            event,
            data,
        });
    }

    public pageView(pageIdentifier: string) {
        this.event("Page view", {
            "Page identifier": pageIdentifier,
        });
    }

    public externalLink(url: string) {
        this.event("External link", {
            URL: url,
        });
    }
}

const ANALYTICS = new Analytics();
export default ANALYTICS;
