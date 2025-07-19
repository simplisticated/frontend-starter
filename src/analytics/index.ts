import initializeMixpanel from "./mixpanel";

class Analytics {
    private mixpanel = initializeMixpanel();

    public identify(id: string) {
        this.mixpanel?.identify(id);
    }

    public userData(data: Partial<UserData>) {
        this.mixpanel?.people.set(data);
    }

    public event(
        event: string,
        data?: {
            [id: string]: any;
        }
    ) {
        this.mixpanel?.track(event, data, {
            send_immediately: true,
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

type UserData = {
    exampleValue: string;
};
