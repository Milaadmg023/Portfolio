export default async function send_msg(msg : {msg : [name : string, email : string, message : string]}) {
    const [name, email, message] = msg.msg
    console.log(name, email, message);
    const botToken = "7340918456:AAHvwKkRilV5tx8WsOnLMPNnKmbxSTTKIH0";
    const chatId = '5542406420';

    const text = `👤 Name: ${name}\n📧 Email: ${email}\n✉️ Message: ${message}`;
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`;

    try {
        const response = await fetch(url);
        console.log(response);
        if (response.ok) {
            alert('پیام شما با موفقیت ارسال شد:)');
        } else {
            alert('خطا در ارسال پیام');
        }
    } catch (error) {
        console.error(error);
    }

}