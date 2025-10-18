import { ENV } from "../app/env";

export async function sendMessageToTelegramBot(
    message: string,
    configuration?: {
        format: "MarkdownV2" | "HTML";
    }
) {
    const recipients = ENV.TELEGRAM_RECIPIENT_IDENTIFIERS;
    if (!recipients || !recipients.length) return;

    for (const id of recipients) {
        const url = `https://api.telegram.org/bot${process.env.REACT_APP_TELEGRAM_TOKEN}/sendMessage?chat_id=${id}&text=${encodeURIComponent(message)}${configuration?.format ? `&parse_mode=${configuration.format}` : ""}`;
        await fetch(url, {
            method: "GET",
        });
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}
