/**
 * ActiveLog.ai custom configuration loader.
 * Loads personality, rules, theme, and templates from KV.
 */
import type { Env } from '../src/types.js';

export interface ActiveLogConfig {
  personality: string;
  rules: any;
  theme: string;
  templates: Record<string, string>;
}

/**
 * Load ActiveLog.ai custom configuration from KV.
 */
export async function loadActiveLogConfig(env: Env): Promise<ActiveLogConfig> {
  try {
    const [personality, rulesRaw, theme] = await Promise.all([
      env.KV.get('config:personality') || '',
      env.KV.get('config:rules') || '[]',
      env.KV.get('config:theme') || '',
    ]);

    let rules: any[] = [];
    try {
      rules = JSON.parse(rulesRaw);
    } catch (e) {
      console.error('Failed to parse rules JSON:', e);
    }

    // Load templates
    const templateKeys = [
      'template:fitness_workout', 'template:fitness_nutrition', 'template:fitness_progress',
      'template:fitness_exercise', 'template:fitness_routine', 'template:fitness_goals',
      'template:fitness_recovery', 'template:fitness_motivation',
    ];
    const templates: Record<string, string> = {};
    const templateResults = await Promise.all(templateKeys.map(k => env.KV.get(k)));
    for (let i = 0; i < templateKeys.length; i++) {
      const key = templateKeys[i].replace('template:', '');
      if (templateResults[i]) templates[key] = templateResults[i]!;
    }

    return { personality, rules, theme, templates };
  } catch (error) {
    console.error('Failed to load ActiveLog config from KV:', error);
    return getDefaultConfig();
  }
}

/**
 * Get the default system prompt for ActiveLog.ai.
 */
export async function getSystemPrompt(env: Env): Promise<string> {
  const config = await loadActiveLogConfig(env);
  return config.personality || getDefaultConfig().personality;
}

/**
 * Get routing rules for ActiveLog.ai commands.
 */
export async function getRoutingRules(env: Env): Promise<any[]> {
  const config = await loadActiveLogConfig(env);
  return config.rules;
}

/**
 * Get theme CSS for ActiveLog.ai.
 */
export async function getThemeCSS(env: Env): Promise<string> {
  const config = await loadActiveLogConfig(env);
  return config.theme;
}

/**
 * Get template by key.
 */
export async function getTemplate(key: string, env: Env): Promise<string | null> {
  const val = await env.KV.get(`template:${key}`);
  return val;
}

/**
 * Default fallback configuration.
 */
function getDefaultConfig(): ActiveLogConfig {
  return {
    personality: `# ActiveLog.ai System Prompt

You are ActiveLog.ai — an experienced AI fitness coach and activity companion.
Help with workout planning, nutrition guidance, progress tracking, and training plans.
Be encouraging but evidence-based, adaptive to fitness levels, and goal-oriented. Remember user context and progress via the LOG.`,
    rules: [],
    theme: `/* ActiveLog.ai Theme - Fallback */
body.fitness-theme {
  background-color: #0a1a14;
  color: #f5f1e6;
  font-family: 'Inter', system-ui, sans-serif;
}`,
    templates: {}
  };
}
