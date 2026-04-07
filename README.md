# ActiveLog.ai ✨

It watches you log a workout, then suggests a deload week when your volume trend crosses a set threshold. This is a fitness agent that builds training and recovery plans by analyzing your activity patterns.

You don't need an app that nags you to log. You need something that pays attention when you do.

Fork this repository to deploy your own private fitness agent on Cloudflare Workers. It operates on your infrastructure, keeping your training logs and health data local. Zero dependencies. Open source MIT license.

Live instance: [activelog-ai.casey-digennaro.workers.dev](https://activelog-ai.casey-digennaro.workers.dev)

## Why This Exists
Most fitness tools sell generic plans. This was built for people who already train consistently and want an automated check on their volume trends—noticing when to back off or push harder. No upsells. No social features.

## Quick Start

1.  **Fork** this repository to your GitHub account. You own your copy.
2.  **Deploy** to Cloudflare Workers using Wrangler. No servers to manage.
3.  **Configure** by setting your own LLM API key as a secret.

```bash
# Fork and clone the repo
gh repo fork Lucineer/activelog-ai --clone
cd activelog-ai

# Deploy to Cloudflare Workers
npx wrangler login
npx wrangler secret put DEEPSEEK_API_KEY
npx wrangler deploy
```

Your agent will be available at your `*.workers.dev` URL. Start by logging a workout like `"Squat 3x5 @ 100kg"`.

## How It Works
1.  You log a workout in plain text.
2.  The agent parses it, updates your rolling volume and fatigue estimates, and stores the session.
3.  When your 4-week moving average for volume crosses a threshold (default is a 15% increase), it suggests a deload.
4.  It grounds advice in established frameworks like Linear Periodization and 5/3/1, which you can adjust in the seed data.

## Features
*   **Trend Analysis**: Tracks volume and intensity to identify overtraining and recovery needs.
*   **Private by Default**: No data leaves your worker except calls to your configured LLM API. We cannot read your logs.
*   **BYOK (Bring Your Own Keys)**: LLM API keys stored in Cloudflare Secrets.
*   **Multi-Activity Support**: Handles strength, running, conditioning, and sport-specific training.
*   **Fleet-Compatible**: Can optionally share anonymized, high-confidence patterns with other Cocapn vessels.

## One Honest Limitation
This agent does not sync with wearables, Apple Health, or Strava. It operates only on the workouts you manually log as text. It is designed for analysis, not real-time data ingestion.

## Architecture
A stateless agent on Cloudflare Workers. It uses a knowledge graph to connect training principles with your logged activities, applying a simple evaporation model to surface advice from session history.

---

<div style="text-align:center;padding:16px;color:#64748b;font-size:.8rem"><a href="https://the-fleet.casey-digennaro.workers.dev" style="color:#64748b">The Fleet</a> &middot; <a href="https://cocapn.ai" style="color:#64748b">Cocapn</a></div>