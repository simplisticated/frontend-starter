/* eslint-disable @typescript-eslint/no-unused-vars */

import { isAppEnvironment } from "./app-environment";

function getString(key: string): string | null {
    return process.env[key] ?? null;
}

function getNumber(key: string): number | null {
    const stringValue = getString(key)?.trim();
    if (!stringValue) return null;
    const parsedNumber = Number(stringValue);
    return Number.isNaN(parsedNumber) ? null : parsedNumber;
}

function getBoolean(key: string): boolean | null {
    const stringValue = getString(key)?.trim().toLowerCase();
    if (!stringValue) return null;
    const TRUE = String(true).toLowerCase();
    const FALSE = String(false).toLowerCase();
    const isBoolean = [TRUE, FALSE].includes(stringValue);
    return isBoolean ? stringValue === TRUE : null;
}

function getStringList(key: string, divider: string = ","): string[] | null {
    const stringValue = getString(key)?.trim();
    if (!stringValue) return null;
    return stringValue.split(divider);
}

function getNumberList(key: string, divider: string = ","): number[] | null {
    const stringValue = getString(key)?.trim();
    if (!stringValue) return null;
    const stringList = stringValue.split(divider);
    return stringList
        .map(value => {
            const parsedNumber = Number(value);
            return Number.isNaN(parsedNumber) ? null : parsedNumber;
        })
        .filter(value => value !== null);
}

export const ENV = {
    CURRENT_ENVIRONMENT: (() => {
        const name = "REACT_APP_ENVIRONMENT";
        const value = getString(name);
        if (!isAppEnvironment(value)) {
            throw new Error(`${name} not found`);
        }
        return value;
    })(),
    MIXPANEL_API_KEY: getString("REACT_APP_MIXPANEL_API_KEY"),
    CONTACT_EMAIL: getString("REACT_APP_CONTACT_EMAIL"),
    TELEGRAM_TOKEN: getString("REACT_APP_TELEGRAM_TOKEN"),
    TELEGRAM_RECIPIENT_IDENTIFIERS: getNumberList(
        "REACT_APP_TELEGRAM_RECIPIENT_IDENTIFIERS"
    ),
};
