<p align="center">
  <img src="https://raw.githubusercontent.com/Lucineer/capitaine/master/docs/capitaine-logo.jpg" alt="Capitaine" width="120">
</p>

<h1 align="center">activelog-ai</h1>

<p align="center">An open-source AI agent for personalized training and nutrition planning.</p>

<p align="center">
  <a href="#quick-start">Quick Start</a> ·
  <a href="#features">Features</a> ·
  <a href="#limitations">Limitations</a> ·
  <a href="https://github.com/Lucineer/activelog-ai/issues">Issues</a>
</p>

---

activelog-ai is a self-hosted fitness assistant. It helps track workouts, suggests adjustments based on your progress, and provides nutrition guidance grounded in established principles. It runs on your own infrastructure, keeping your data local.

This is a Cocapn fleet vessel. You fork the code, deploy it, and it operates independently for you.

Live instance: https://activelog-ai.casey-digennaro.workers.dev

---

## Quick Start

Fork the repository to your own account. This ensures the agent runs on your infrastructure.

```bash
# Fork and deploy to Cloudflare Workers
gh repo fork Lucineer/activelog-ai --clone
cd activelog-ai
npx wrangler login
# Set your API keys as secrets
echo "YOUR_KEY" | npx wrangler secret put DEEPSEEK_API_KEY
npx wrangler deploy
```

Your instance will be available at your Workers.dev URL. You can now log workouts and ask for training advice.

## Features

*   **BYOK v2**: API keys are stored in Cloudflare Secrets, not in your code.
*   **Multi-model Support**: Configure it to use various LLM providers like DeepSeek, OpenAI, or local models.
*   **Session Context**: The agent maintains context from your previous conversations to provide coherent, long-term advice.
*   **Data Control**: Your logs and history are stored within your deployment and can be exported or deleted at any time.
*   **Basic Safeguards**: Includes configurable rate limiting and a standard `/health` endpoint.

## Limitations

The quality of advice is dependent on the configured language model and its training data. It is not a substitute for professional medical or coaching consultation, especially for managing injuries or complex health conditions.

---

<div align="center">
  <p>
    Part of the Cocapn Fleet. MIT Licensed. Built with Cloudflare Workers.
  </p>
  <p>
    <a href="https://the-fleet.casey-digennaro.workers.dev">The Fleet</a> ·
    <a href="https://cocapn.ai">Cocapn</a>
  </p>
  <p>
    Attribution: Superinstance & Lucineer (DiGennaro et al.).
  </p>
</div>