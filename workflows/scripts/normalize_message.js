// Takes Telegram message and produces a clean payload for GPT
const items = $input.all();

return items.map(item => {
  const msg = item.json.message || {};
  const from = msg.from || {};
  const chat = msg.chat || {};

  return {
    json: {
      userId: from.id,
      userName: from.first_name || from.username || "User",
      channel: "telegram",
      chatId: chat.id,
      text: msg.text || "",
    }
  };
});
