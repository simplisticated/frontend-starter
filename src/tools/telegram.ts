export async function sendMessageToTelegramBot(
    message: string,
    format?: "MarkdownV2" | "HTML"
) {
    const recipients = (
        process.env.REACT_APP_TELEGRAM_RECIPIENT_IDENTIFIERS ?? ""
    ).split(",");

    for (const id of recipients) {
        const url = `https://api.telegram.org/bot${process.env.REACT_APP_TELEGRAM_TOKEN}/sendMessage?chat_id=${id}&text=${message}&${format ? `parse_mode=${format}` : ""}`;
        await fetch(url, {
            method: "GET",
        });
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}
