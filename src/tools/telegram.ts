import { ENV } from "../app/env";

export async function sendMessageToTelegramBot(
    message: string,
    configuration?: {
        format: "MarkdownV2" | "HTML";
    }
) {
    if (
        !ENV.TELEGRAM_TOKEN ||
        !ENV.TELEGRAM_RECIPIENT_IDENTIFIERS ||
        !ENV.TELEGRAM_RECIPIENT_IDENTIFIERS.length
    ) {
        return;
    }

    for (const id of ENV.TELEGRAM_RECIPIENT_IDENTIFIERS) {
        const url = `https://api.telegram.org/bot${ENV.TELEGRAM_TOKEN}/sendMessage?chat_id=${id}&text=${encodeURIComponent(message)}${configuration?.format ? `&parse_mode=${configuration.format}` : ""}`;
        await fetch(url, {
            method: "GET",
        });
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}
