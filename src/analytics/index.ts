import initializeMixpanel from "./mixpanel";

class Analytics {
    private mixpanel = initializeMixpanel();

    public identifyUser(id: string) {
        this.mixpanel?.identify(id);
    }

    public setUserData(data: Partial<UserData>) {
        this.mixpanel?.people.set(data);
    }

    public trackEvent(
        event: string,
        data: {
            [id: string]: any;
        }
    ) {
        this.mixpanel?.track(event, data, {
            send_immediately: true,
        });
    }
}

const ANALYTICS = new Analytics();
export default ANALYTICS;

type UserData = {
    exampleValue: string;
};
