const items = $input.all();

return items.map(item => {
    let raw = item.json.data || item.json; // depends on node output setting
    let content = raw.choices?.[0]?.message?.content || raw.content || "";

    let parsed;
    try {
        parsed = JSON.parse(content);
    } catch (e) {
        parsed = {
            assistant_reply: content,
            action: "none",
            notes: "Failed to parse JSON, using raw content."
        };
    }

    return {
        json: {
            assistant_reply: parsed.assistant_reply || content,
            action: parsed.action || "none",
            notes: parsed.notes || "",
            // pass through original chatId and user info from previous node
            chatId: $item(0).$node["normalize_message"].json.chatId,
            userId: $item(0).$node["normalize_message"].json.userId,
            userName: $item(0).$node["normalize_message"].json.userName,
        }
    };
});
