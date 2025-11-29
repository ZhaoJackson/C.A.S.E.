# CASE - Cognitive AI System

**CASE** is a minimalist Cognitive AI System designed to be your intelligent companion, powered by **n8n** and **GPT-4o**.

## 🧠 Architecture

- **Identity**: CASE (Cognitive AI System)
- **Interface**: Telegram
- **Core Intelligence**: OpenAI GPT-4o (via n8n)
- **Orchestration**: n8n
- **Capabilities**:
    - Multi-turn philosophical conversation
    - Intelligent music recommendation
    - Emotional analysis

## 📂 Project Structure

- **`workflows/`**: The active "Brain" of CASE.
  - `case_core.json`: **Main Workflow**. Import this into n8n.
  - `system_prompt.txt`: The system prompt for the AI.
  - `scripts/`: Helper logic.
- **`archive/`**: Legacy code and data (Python backend, old books, etc.).
- **`.env`**: Configuration.

## 🚀 Getting Started

1.  **n8n Setup**:
    - Import `workflows/case_core.json`.
    - Configure Telegram and OpenAI credentials.
    - Copy the content of `workflows/system_prompt.txt` into the AI node if needed (though it's embedded in the workflow).
2.  **Interact**:
    - Message your bot on Telegram to start a session with CASE.
