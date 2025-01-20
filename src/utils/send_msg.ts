
export default async function send_msg(msg : {msg : [name : string, email : string, message : string]}) {
    const [name, email, message] = msg.msg
    const botToken = import.meta.env.VITE_BOT_TOKEN
    const chatId = '5542406420';

    const text = `👤 Name: ${name}\n📧 Email: ${email}\n✉️ Message: ${message}`;
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`;

    try {
        const response = await fetch(url);
        if (response.ok) {
            alert('پیام شما با موفقیت ارسال شد:)');
        } else {
            alert('خطا در ارسال پیام');
        }
    } catch (error) {
        console.error("error while sending message: " , error);
    }

}