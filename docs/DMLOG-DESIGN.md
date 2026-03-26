# DMlog.ai - Themed Fork Design Document

## Overview

DMlog.ai is the first themed variant of log-origin, transforming the white-label AI gateway into a specialized Dungeon Master assistant for tabletop role-playing games (TTRPGs), with a primary focus on Dungeons & Dragons 5th Edition. This document serves as the comprehensive blueprint for the fork.

## 1. DMlog.ai Product Specification

### 1.1 Vision
An AI-powered Dungeon Master that never forgets, learns your table's style, and provides multiple DM "voices" to choose from—all while maintaining persistent memory across sessions via the LOG system.

### 1.2 Target Users

#### Primary Segments:
1. **Dungeon Masters (DMs)**
   - New DMs needing guidance and rule support
   - Experienced DMs seeking creative inspiration
   - Busy DMs wanting to offload prep work
   - Solo DMs running games for themselves

2. **Player Groups**
   - Established campaign groups (weekly/monthly sessions)
   - One-shot/Adventure League groups
   - West Marches-style open tables
   - Play-by-post asynchronous groups

3. **Solo Players**
   - Players exploring solo RPG experiences
   - Writers using TTRPGs for worldbuilding
   - Game designers testing adventures

### 1.3 Core User Flows

#### Flow 1: Campaign Setup
```
User → Create Campaign → Select Setting → Import/Generate Characters → Set Session Zero
```

#### Flow 2: Character Creation
```
User → New Character → Race/Class Selection → Ability Scores → Equipment → Backstory → Save to Campaign
```

#### Flow 3: Session Play
```
Start Session → Load Campaign → Scene Setup → Player Actions → DM Responses → Combat Management → Session Logging
```

#### Flow 4: Post-Session
```
End Session → Generate Recap → Update Character Sheets → Log XP/Loot → Schedule Next Session → Update Campaign Log
```

#### Flow 5: Between Sessions
```
Campaign Management → NPC Development → World Building → Encounter Design → Rule Lookup → Style Training
```

### 1.4 Key Differentiators

#### 1.4.1 Persistent Memory (The LOG Advantage)
- **Session-to-session continuity**: Remembers every NPC, location, plot thread, and player decision
- **Character development tracking**: Evolves NPCs and world based on player actions
- **Style learning**: Adapts DM voice to match table preferences over time
- **Campaign consistency**: Maintains tone, rules interpretations, and house rules

#### 1.4.2 Multi-DM Comparison (Draft Mode)
- **Parallel processing**: Generate multiple responses to the same situation
- **Style selection**: Choose between rules-lawyer, narrative, sandbox, or horror DM
- **Creative brainstorming**: See different narrative directions simultaneously
- **Learning tool**: Compare approaches to improve DM skills

#### 1.4.3 Player Subdomains
- **Personalized interfaces**: `alice.dmlog.ai`, `bob.dmlog.ai`
- **Character-centric views**: Each player sees their character sheet first
- **Private notes**: Players can take personal notes without sharing
- **Initiative tracking**: Individual turn notifications

### 1.5 Success Metrics

#### Engagement Metrics:
- Sessions per week per campaign
- Average session duration
- Character interactions per session
- Rule lookups per session

#### Quality Metrics:
- Player satisfaction (post-session ratings)
- DM prep time reduction
- Campaign completion rate
- Style adaptation accuracy

#### Technical Metrics:
- Response latency (< 2s for narrative, < 1s for rules)
- Memory accuracy (context window utilization)
- Uptime (99.9% target)
- Concurrent sessions support

## 2. Custom Personality Configuration

### 2.1 Core System Prompt

**Location:** `config/custom/system-prompt.md`

```markdown
# DMlog.ai System Prompt

## Identity
You are an experienced Dungeon Master with decades of experience running tabletop role-playing games. You specialize in Dungeons & Dragons 5th Edition but are familiar with many systems. You are patient, creative, and focused on creating memorable experiences for your players.

## Primary Goals
1. **Facilitate fun**: The game should be enjoyable for everyone at the table
2. **Maintain immersion**: Keep players engaged in the fictional world
3. **Be consistent**: Apply rules fairly and remember previous decisions
4. **Adapt to style**: Match the table's preferred playstyle (rules-heavy, narrative-first, etc.)
5. **Encourage creativity**: Reward player ingenuity and roleplaying

## Communication Style
- **Theatrical but clear**: Use descriptive language without being verbose
- **Rules-aware but flexible**: Know the rules well, but prioritize fun over strict adherence
- **Player-focused**: Center the narrative around player characters and their choices
- **Inclusive language**: Avoid stereotypes, be welcoming to all players
- **Safety first**: Use content warnings for potentially sensitive topics

## Knowledge Base
- **D&D 5e Rules**: Complete understanding of Player's Handbook, Dungeon Master's Guide, Monster Manual
- **Common Homebrew**: Familiar with popular house rules and community content
- **Adventure Structure**: Knows how to structure sessions, arcs, and campaigns
- **Worldbuilding**: Can create coherent settings, cultures, and histories
- **NPC Design**: Creates memorable characters with motivations and voices

## Safety Guidelines
- **Combat**: Descriptions should be exciting but not gratuitously violent
- **Horror**: Can be atmospheric and tense but not traumatizing
- **Romance**: Fade to black, focus on emotional connections
- **Real-world issues**: Handle sensitively or avoid entirely based on table preferences
- **Content warnings**: Always ask before introducing potentially sensitive content

## Memory Integration
You have access to the complete campaign LOG, which includes:
- All previous sessions
- Every NPC introduced
- Every location visited
- Every player decision
- All house rules established
- The table's preferred style

Use this memory to maintain consistency and build upon established narrative threads.
```

### 2.2 Tone Variations

**Location:** `config/custom/tones/`

#### 2.2.1 Rules-Lawyer DM (`tone-rules.md`)
```markdown
## Rules-Lawyer DM Tone
- Prioritizes mechanical accuracy
- Quotes rulebook page numbers when relevant
- Ensures balanced encounters
- Focuses on tactical combat
- Less descriptive, more procedural
```

#### 2.2.2 Narrative DM (`tone-narrative.md`)
```markdown
## Narrative DM Tone
- Focuses on story and character development
- Uses rich, atmospheric descriptions
- Prioritizes dramatic moments over rules
- Encourages roleplaying and character voices
- Flexible with rules for narrative payoff
```

#### 2.2.3 Sandbox DM (`tone-sandbox.md`)
```markdown
## Sandbox DM Tone
- Player-driven storytelling
- World reacts to player choices
- Multiple plot threads available
- Emphasizes exploration and discovery
- Minimal railroading
```

#### 2.2.4 Horror DM (`tone-horror.md`)
```markdown
## Horror DM Tone
- Builds tension and suspense
- Uses pacing and atmosphere
- Psychological horror over gore
- Isolation and helplessness themes
- Content warnings emphasized
```

### 2.3 Knowledge Configuration

**Location:** `config/custom/knowledge/`

#### 2.3.1 Rules Database (`rules-reference.md`)
```markdown
## D&D 5e Rules Reference
- Core rulebooks (PHB, DMG, MM)
- Official supplements (Xanathar's, Tasha's)
- Popular third-party content
- Sage Advice compendium
- Common rulings and interpretations
```

#### 2.3.2 Adventure Templates (`adventure-templates.md`)
```markdown
## Adventure Structures
- Five-room dungeons
- Mystery investigations
- Hex crawls
- Political intrigues
- Heist missions
- Survival scenarios
```

#### 2.3.3 World Elements (`world-elements.md`)
```markdown
## Worldbuilding Components
- Fantasy cultures and societies
- Magic systems and limitations
- Pantheons and religions
- Economic systems
- Historical timelines
- Geographic features
```

## 3. Custom Routing Rules

### 3.1 Routing Configuration

**Location:** `config/custom/routing-rules.json`

```json
{
  "routing": {
    "default": {
      "model": "cheap",
      "description": "Narrative continuation and general gameplay"
    },
    "commands": {
      "/attack": {
        "model": "escalation",
        "description": "Combat logic requires detailed rules knowledge and tactical thinking",
        "timeout": 10000,
        "maxTokens": 2000
      },
      "/describe": {
        "model": "cheap",
        "description": "Atmospheric descriptions don't need complex reasoning",
        "timeout": 5000,
        "maxTokens": 1000
      },
      "/rules": {
        "model": "escalation",
        "description": "Rules lookups need accuracy and citation",
        "timeout": 8000,
        "maxTokens": 1500
      },
      "/npc": {
        "model": "compare",
        "description": "Generate multiple NPC personality options",
        "timeout": 12000,
        "maxTokens": 2500,
        "comparisons": 3
      },
      "/loot": {
        "model": "cheap",
        "description": "Random table generation is straightforward",
        "timeout": 4000,
        "maxTokens": 800
      },
      "/rest": {
        "model": "cheap",
        "description": "Recovery mechanics are simple",
        "timeout": 3000,
        "maxTokens": 600
      },
      "/roll": {
        "model": "local",
        "description": "Dice rolling handled locally, no AI needed",
        "handler": "diceRoller",
        "timeout": 1000
      },
      "/map": {
        "model": "compare",
        "description": "Generate different map descriptions",
        "timeout": 10000,
        "maxTokens": 2000,
        "comparisons": 2
      },
      "/initiative": {
        "model": "cheap",
        "description": "Turn order management is procedural",
        "timeout": 3000,
        "maxTokens": 500
      },
      "/backstory": {
        "model": "escalation",
        "description": "Character backstories need world consistency",
        "timeout": 15000,
        "maxTokens": 3000
      },
      "/skillcheck": {
        "model": "cheap",
        "description": "DC calculation and skill resolution",
        "timeout": 4000,
        "maxTokens": 800
      },
      "/combat": {
        "model": "escalation",
        "description": "Full combat encounter management",
        "timeout": 20000,
        "maxTokens": 4000
      },
      "/shop": {
        "model": "cheap",
        "description": "Shop inventory and pricing",
        "timeout": 5000,
        "maxTokens": 1200
      },
      "/travel": {
        "model": "compare",
        "description": "Travel encounters and events",
        "timeout": 10000,
        "maxTokens": 2000,
        "comparisons": 2
      },
      "/puzzle": {
        "model": "escalation",
        "description": "Puzzle design requires creative thinking",
        "timeout": 15000,
        "maxTokens": 2500
      },
      "/lore": {
        "model": "escalation",
        "description": "World lore needs consistency with existing canon",
        "timeout": 12000,
        "maxTokens": 3000
      }
    }
  }
}
```

### 3.2 Command Handlers

**Location:** `config/custom/handlers/`

#### 3.2.1 Dice Roller (`dice-roller.js`)
```javascript
// Local dice rolling handler
export function diceRoller(command, context) {
  const match = command.match(/\/roll\s+(\d+)d(\d+)(?:\s*([+-]\s*\d+))?/i);
  if (!match) {
    return { error: "Invalid dice format. Use: /roll XdY[+/-Z]" };
  }
  
  const count = parseInt(match[1]);
  const sides = parseInt(match[2]);
  const modifier = match[3] ? eval(match[3].replace(/\s+/g, '')) : 0;
  
  if (count > 100) return { error: "Too many dice (max 100)" };
  if (sides > 100) return { error: "Dice too large (max d100)" };
  
  const rolls = [];
  let total = 0;
  
  for (let i = 0; i < count; i++) {
    const roll = Math.floor(Math.random() * sides) + 1;
    rolls.push(roll);
    total += roll;
  }
  
  total += modifier;
  
  return {
    result: total,
    rolls: rolls,
    modifier: modifier,
    expression: `${count}d${sides}${modifier >= 0 ? '+' : ''}${modifier !== 0 ? modifier : ''}`,
    formatted: `🎲 ${rolls.join(', ')} ${modifier !== 0 ? `(${modifier >= 0 ? '+' : ''}${modifier})` : ''} = **${total}**`
  };
}
```

#### 3.2.2 Initiative Tracker (`initiative-tracker.js`)
```javascript
// Initiative tracking handler
export function initiativeTracker(command, context) {
  const parts = command.split(/\s+/);
  const subcommand = parts[1];
  
  switch (subcommand) {
    case 'add':
      return addCombatant(parts.slice(2), context.campaign);
    case 'remove':
      return removeCombatant(parts[2], context.campaign);
    case 'next':
      return nextTurn(context.campaign);
    case 'reset':
      return resetInitiative(context.campaign);
    case 'list':
      return listInitiative(context.campaign);
    default:
      return rollInitiative(parts.slice(1), context.campaign);
  }
}
```

## 4. Custom UI Theme

### 4.1 Color Scheme

**Location:** `config/custom/theme/colors.css`

```css
:root {
  /* Primary Colors - Parchment & Leather */
  --color-parchment: #f5f1e6;
  --color-parchment-dark: #e8e0d0;
  --color-leather: #8b4513;
  --color-leather-light: #a0522d;
  --color-leather-dark: #5d2906;
  
  /* Accent Colors - Gold & Jewel Tones */
  --color-gold: #ffd700;
  --color-gold-dark: #b8860b;
  --color-ruby: #e0115f;
  --color-emerald: #50c878;
  --color-sapphire: #0f52ba;
  --color-amethyst: #9966cc;
  
  /* Background Colors */
  --color-bg-primary: #1a0f0a;
  --color-bg-secondary: #2c1810;
  --color-bg-tertiary: #3d2215;
  
  /* Text Colors */
  --color-text-primary: #f5f1e6;
  --color-text-secondary: #d4c4a8;
  --color-text-accent: #ffd700;
  --color-text-muted: #a8957a;
  
  /* Border Colors */
  --color-border-light: #5d2906;
  --color-border-medium: #8b4513;
  --color-border-heavy: #a0522d;
  
  /* Status Colors */
  --color-success: #50c878;
  --color-warning: #ffa500;
  --color-danger: #dc143c;
  --color-info: #0f52ba;
  
  /* Message Type Colors */
  --color-npc-speech: #e0115f;
  --color-player-speech: #0f52ba;
  --color-dm-narrative: #50c878;
  --color-dice-roll: #ffd700;
  --color-system: #9966cc;
}

/* Dark Mode (default) */
.dark-mode {
  --color-bg-primary: #1a0f0a;
  --color-bg-secondary: #2c1810;
  --color-bg-tertiary: #3d2215;
  --color-text-primary: #f5f1e6;
  --color-text-secondary: #d4c4a8;
}

/* Light Mode */
.light-mode {
  --color-bg-primary: #f5f1e6;
  --color-bg-secondary: #e8e0d0;
  --color-bg-tertiary: #d4c4a8;
  --color-text-primary: #1a0f0a;
  --color-text-secondary: #2c1810;
}
```

### 4.2 Typography

**Location:** `config/custom/theme/fonts.css`

```css
/* Google Fonts Import */
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=MedievalSharp&family=IM+Fell+English:ital@0;1&family=UnifrakturMaguntia&display=swap');

:root {
  /* Font Families */
  --font-heading: 'Cinzel', serif;
  --font-body: 'IM Fell English', serif;
  --font-accent: 'MedievalSharp', cursive;
  --font-decorative: 'UnifrakturMaguntia', cursive;
  
  /* Font Sizes */
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font
---

## 5. Prompt Templates

All templates follow a consistent structure: **system prompt** → **variable placeholders** → **example output**. Templates are stored in `config/custom/templates/` as `.md` files and rendered client-side before sending to the LLM.

---

### 5.1 `dnd_character` — Character Creation

#### System Prompt

```markdown
You are a knowledgeable D&D 5e Dungeon Master assistant. Help the player create a character
by generating a full character sheet based on their preferences. Use official 5e rules unless
the campaign specifies homebrew. Be creative with backstory while leaving hooks for the DM to
integrate into the campaign narrative.

Campaign setting: {{campaign_setting}}
Allowed sources: {{allowed_sources}}
Homebrew rules: {{homebrew_rules}}
```

#### Variables

| Variable | Description | Example |
|---|---|---|
| `{{character_name}}` | Player-chosen name (or blank for suggestion) | "Theron" |
| `{{race}}` | Race/subrace | "Wood Elf" |
| `{{class}}` | Class | "Ranger" |
| `{{subclass}}` | Subclass (if known) | "Gloom Stalker" |
| `{{level}}` | Starting level | "3" |
| `{{stat_method}}` | standard_array, point_buy, or rolled | "standard_array" |
| `{{campaign_setting}}` | World/region | "The Forgotten Realms" |
| `{{allowed_sources}}` | Permitted books | "PHB, Tasha's" |
| `{{backstory_hook}}` | Player-provided backstory seed | "raised by wolves" |

#### Example Output

```
## Theron the Gloom Stalker

**Race:** Wood Elf | **Class:** Ranger 3 (Gloom Stalker)
**Background:** Outlander

### Ability Scores (Standard Array: 15, 14, 13, 12, 10, 8)
STR 8 (-1) | DEX 15 (+2) | CON 14 (+2) | INT 10 (+0) | WIS 13 (+1) | CHA 12 (+1)

### Combat Stats
- HP: 28 | AC: 14 (studded leather)
- Speed: 35 ft | Initiative: +2 | Proficiency: +2
- Hit Dice: 3d10

### Saving Throws: STR +1, DEX +4
### Skills: Athletics +1, Perception +5, Stealth +4, Survival +5, Nature +3, Animal Handling +3

### Starting Equipment
- Studded leather armor, longbow, 20 arrows, shortsword, two handaxes
- Explorer's pack, bedroll, mess kit, tinderbox, torches (10), rations (10), waterskin
- Hunting trap, trophy from kill (wolf pelt cloak)

### Features & Traits
- **Darkvision** 60 ft | **Fey Ancestry** | **Mask of the Wild**
- **Favored Enemy: Fiends** — advantage on tracks/intelligence checks, +2 damage
- **Natural Explorer: Forest** — difficult terrain ignored, foraging doubled, initiative adv
- **Gloom Stalker:** 30 ft darkvision, +1 initiative, 1st turn extra attack (Dread Ambusher)

### Spells Known
1st Level (4 slots): Hunter's Mark, Cure Wounds, Thunderous Smite, Ensnaring Strike

### Backstory
Theron was found as a toddler at the edge of the Chondalwood, cradled in the roots of an
ancient oak beside a she-wolf who had clearly been nursing him. The wood elf druids who
discovered him named him Theron—"of the hunt"—and raised him among the pack. He never learned
who left him there, and the wolf who adopted him was killed by something he refuses to discuss.
He tracks relentlessly, fights silently, and trusts animals more than people.
```

---

### 5.2 `dnd_combat` — Combat Encounter Management

#### System Prompt

```markdown
You are a D&D 5e combat tracker and adjudicator. Track initiative order, resolve attacks,
calculate damage, process saving throws, and manage death saves. Follow the full combat round
structure strictly. Ask for clarification on ambiguous actions. Use passive perception for
surprise detection. Apply advantage/disadvantage as appropriate.

Current encounter: {{encounter_name}}
Party level: {{party_level}}
Combat state: {{combat_state}}
```

#### Variables

| Variable | Description |
|---|---|
| `{{encounter_name}}` | Scene/encounter identifier |
| `{{party_level}}` | Average party level |
| `{{party_members}}` | Names, classes, HP, AC, conditions |
| `{{enemies}}` | Monster stat blocks |
| `{{combat_state}}` | Current round, turn, active effects |
| `{{environment}}` | Terrain, lighting, obstacles |
| `{{homebrew_rules}}` | Flanking variant, etc. |

#### Combat Round Structure (built into template)

```
ROUND {{round_number}}
═════════════════════════════════════════════════════
INITIATIVE ORDER:
  1. {{char1}} ({{init1}}) — HP: {{hp1}}/{{maxhp1}} | AC: {{ac1}} | Conditions: {{cond1}}
  2. {{char2}} ({{init2}}) — HP: {{hp2}}/{{maxhp2}} | AC: {{ac2}} | Conditions: {{cond2}}
  ...

--- Turn: {{current_char}} ---

> **Action:** {{action_description}}
> **Attack Roll:** 1d20+{{bonus}} = {{roll}} ({{hit_or_miss}} vs AC {{target_ac}})
> **Damage:** {{damage_formula}} = {{damage}} ({{damage_type}})
> **Target:** {{target_name}} → HP: {{new_hp}}/{{max_hp}}

[If save required:]
> **Saving Throw:** {{save_type}} DC {{dc}} — 1d20+{{save_bonus}} = {{save_roll}} ({{success_or_failure}})
> **Effect:** {{effect_description}}

--- End Turn: {{current_char}} ---
```

#### Few-Shot Example

```
> **Action:** Theron attacks the bandit with his longbow
> **Attack Roll:** 1d20+4 = 17 (Hit vs AC 13)
> **Damage:** 1d8+2 = 7 (piercing)
> **Target:** Bandit → HP: 2/9

---

> **Action:** Bandit attacks Theron with a scimitar
> **Attack Roll:** 1d20+4 = 9 (Miss vs AC 14)
> **Damage:** 0
```

---

### 5.3 `dnd_npc` — NPC Generation

#### System Prompt

```markdown
Generate a vivid, memorable D&D 5e NPC suitable for the campaign setting. The NPC should feel
like a person the players will remember—give them distinctive speech patterns, a hidden depth,
and a reason to exist in the world. Include everything the DM needs to roleplay them
convincingly at the table.

Setting: {{campaign_setting}}
Location: {{location}}
NPC role: {{npc_role}}
```

#### Variables

| Variable | Description |
|---|---|
| `{{campaign_setting}}` | World/region |
| `{{location}}` | Where the NPC is found |
| `{{npc_role}}` | Innkeeper, quest giver, villain, etc. |
| `{{race}}` | Specific race or random |
| `{{alignment}}` | Suggested or random |
| `{{cr}}` | Combat capability (if applicable) |

#### Example Output

```
## Mira "Soot" Vaskar

**Race:** Tiefling | **Age:** 38 | **Alignment:** Chaotic Good
**Occupation:** Blacksmith & underground arms dealer
**Location:** The Slag Quarter, Baldur's Gate

### Appearance
A stocky tiefling woman with ashen-gray skin and small curved horns that look like they've been
filed down for practicality. Her forearms are scarred from years of hammer strikes gone awry.
She wears a heavy leather apron over a stained linen shirt, and her hair is cropped short and
always has a faint metallic smell. One eye is amber, the other milky white—she's half-blind.

### Personality
- **Trait:** "I judge people by how they treat their tools, not their words."
- **Trait:** "I have a dark sense of humor and a louder laugh than you'd expect."
- **Ideal:** **Freedom.** Chains are meant to be broken—whether they're on wrists or laws.
- **Bond:** "The old dwarven smith who taught me vanished. I'll find him or his killer."
- **Flaw:** "I'll sell weapons to anyone if the gold is right. I don't ask what they're for."
- **Secret:** She's forging replicas of a legendary dwarven warhammer to draw out the thieves
  who stole the original from her mentor.

### Speaking Style
Gruff, direct, frequently uses smithing metaphors. Drops consonants when tired. Laughs like a
barking dog. Switches to Infernal when angry.

> "You want a blade? Fine. But I don't sell to folk who can't hold one proper. Show me your
> calluses or get out of my forge."
>
> *(If the party is polite)*: "Huh. You actually waited for me to finish my work before
> talking. That's... rare. Sit down. I've got ale somewhere."

### Stat Block (if combat-capable)
Medium humanoid (tiefling), Chaotic Good
AC 15 (chain shirt) | HP 44 (8d8 + 8) | Speed 30 ft
STR 14 (+2) | DEX 12 (+1) | CON 13 (+1) | INT 10 (+0) | WIS 11 (+0) | CHA 16 (+3)
**Hellish Resistance.** Resistance to fire damage.
**Actions:** Multiattack (2 warhammer), Hellish Rebuke (1/day), Searing Smite (1/day)
```

---

### 5.4 `dnd_description` — Scene & Atmosphere

#### System Prompt

```markdown
You are a masterful descriptive narrator for a D&D 5e campaign. Paint immersive scenes using
all five senses. Set mood through environmental details, not exposition. Use environmental
storytelling—show the party clues through what they observe. Match the campaign's established
tone and the DM's intended atmosphere. Keep descriptions evocative but concise (3-5 sentences
for quick scenes, a short paragraph for major moments).

Campaign tone: {{campaign_tone}}
Intended mood: {{mood}}
Location: {{location}}
Time/weather: {{time_and_weather}}
```

#### Variables

| Variable | Description |
|---|---|
| `{{location}}` | Where the party is |
| `{{mood}}` | Ominous, wonder, tense, cozy, eerie, etc. |
| `{{campaign_tone}}` | Grimdark, heroic, whimsical, etc. |
| `{{time_and_weather}}` | Dawn, rain, fog, midnight, etc. |
| `{{party_state}}` | Wounded, rested, lost, etc. |
| `{{plot_hooks}}` | Clues to weave into description |

#### Example Output

```
**The Sunken Crypt — Descent**

The stone stairs spiral down into a damp darkness that swallows your torchlight after ten feet.
The air grows thick and cold, carrying the mineral tang of groundwater and something older—
sweet and faintly metallic, like pennies left in rain. Water drips somewhere below, each drop
echoing longer than it should. Your boots find algae-slick steps, and every so often a
crab-carved relief in the wall seems to watch you pass with hollow stone eyes. At the bottom,
the passage opens into a vaulted chamber where bioluminescent moss clings to a shattered
pillar, casting everything in a sickly blue-green glow. A skeleton in rusted chain mail sits
propped against the far wall, one hand still curled around an empty waterskin, the other
pointing toward the darkness beyond.
```

---

### 5.5 `dnd_rules` — Rule Lookups

#### System Prompt

```markdown
You are a D&D 5e rules reference. Answer rules questions accurately, citing the Player's
Handbook (PHB), Dungeon Master's Guide (DMG), Monster Manual (MM), or other official sources
by section number when possible. Explain edge cases clearly. If multiple interpretations exist,
present the most common ruling and note alternatives. Do not invent rules.

Available sources: {{sources}}
Homebrew overrides: {{homebrew_rules}}
```

#### Variables

| Variable | Description |
|---|---|
| `{{rule_query}}` | The specific question |
| `{{sources}}` | Books available at the table |
| `{{homebrew_rules}}` | Any campaign-specific rule modifications |

#### Few-Shot Examples

**Query:** "How does grappling work?"

```
Grappling (PHB p.195):
1. Use the Attack action to make a special melee attack: Athletics vs target's Athletics or
   Acrobatics (target chooses).
2. On hit, the target is grappled (escape: Athletics/Acrobatics vs your Athletics).
3. The condition means speed becomes 0. It does NOT prevent attacks, spells, or reactions.
4. You can move at half speed while grappling (dragging the target).
5. The condition ends if you are incapacitated, if an effect removes the grappled creature
   from your reach, or if the creature escapes.

Edge case: You can grapple and shove in the same turn via Extra Attack, or with two-weapon
fighting if your DM allows shoves as "light weapon attacks" (common but not RAW for all).

Note: Unlike restrained, grappled does NOT give advantage on attacks against the target.
```

**Query:** "How does stealth work in combat?"

```
Stealth (PHB pp.177-178, p.195):
- Make a Dexterity (Stealth) check when you try to hide.
- You can't hide from a creature that can see you clearly.
- You give away your position if you make noise (Thunderwave = nope).
- In combat: you must take the Hide action (which replaces one of your attacks) to attempt
  to hide. Success means attackers have disadvantage against you until you're found.

Common questions:
- "If I'm invisible, do I automatically hide?" No, but you have advantage on the check and
  creatures can't see you (effectively giving them disadvantage to find you).
- "Does attacking reveal me?" Yes. The instant you make an attack, your position is known,
  even if you have Greater Invisibility (the target knows where the attack came from).
```

---

### 5.6 `dnd_loot` — Treasure Generation

#### System Prompt

```markdown
Generate a treasure hoard appropriate to the challenge rating of the defeated enemies. Follow
the DMG treasure tables as a baseline but add flavor—every hoard should have at least one
interesting mundane item and one story hook woven into the treasure. Scale magic items by
rarity to the party's level.

CR: {{cr}}
Party size: {{party_size}}
Party level: {{party_level}}
```

#### Variables

| Variable | Description |
|---|---|
| `{{cr}}` | Challenge rating of the defeated creature(s) |
| `{{party_size}}` | Number of characters |
| `{{party_level}}` | Average level (for magic item scaling) |
| `{{treasure_type}}` | Individual, hoard, or specific |
| `{{setting}}` | For flavor-appropriate items |

#### Example Output

```
## Treasure: CR 5 Guardian — The Sunken Crypt

### Currency
- 230 gp
- 14 pp
- A tarnished silver compass that always points toward the nearest water source (50 gp value)

### Magic Items
- **+1 Dagger** (Uncommon) — The hilt is carved from bone and wrapped in frayed silk.
  Engraved: *"For Sariel, who never missed."*
- **Potion of Water Breathing** (Uncommon) — Stoppered with coral. One dose, 1 hour duration.

### Mundane Items of Note
- A waterproof scroll tube containing a partial map of underground rivers, annotated in
  an unknown language (DC 15 Intelligence check to recognize it as a mix of Aquan and Draconic).
- A set of masterwork thieves' tools with initials "V.T." etched into the leather case.
- 40 feet of silk rope, still in good condition despite the damp.

### Story Hooks
- The dagger belonged to someone named Sariel—maybe someone in the nearby village knew them?
- The map suggests this crypt connects to a larger network. Where do the rivers lead?
- V.T.'s tools are too fine for a common thief. A professional was here before the party.
```

---

### 5.7 `dnd_rest` — Rest Mechanics

#### System Prompt

```markdown
Track rest mechanics for the party. Process short rests (hit dice spending, feature recovery)
and long rests (full recovery, spell slot restoration, watches). Apply any campaign-specific
rest variants. Remind players of features that recharge on each rest type.

Rest variant: {{rest_variant}}
```

#### Variables

| Variable | Description |
|---|---|
| `{{party}}` | Current HP, HD, conditions, features for each member |
| `{{rest_type}}` | short or long |
| `{{rest_variant}}` | Gritty Realism, Epic Heroism, or standard |
| `{{environment}}` | Safety of rest location |
| `{{time_available}}` | Hours available for rest |

#### Example Output

```
## Short Rest — 1 Hour

### Theron (Ranger 3) — Resting in the Guard Tower
- **Current HP:** 8/28
- **Hit Dice available:** 2d10
  - Spends 1d10+2 = 7 → HP: 15/28
  - Spends 1d10+2 = 12 → HP: 27/28 (max)
  - Hit Dice remaining: 0/3
- **Features recovered:** Horde Breaker, Natural Explorer (already per-encounter)
- **Spell slots:** No slots recovered on short rest
- **Conditions:** None

### Mira (Fighter 3) — Resting in the Guard Tower
- **Current HP:** 12/28
- **Hit Dice available:** 2d10
  - Spends 1d10+1 = 6 → HP: 18/28
  - Hit Dice remaining: 1/3
- **Features recovered:** Second Wind (✅), Action Surge (already recovered on short rest)
- **Conditions:** Poisoned (⚠️ not removed by short rest)

### Long Rest Watch Rotation (Gritty Realism: 8 hours)
1. **Watch 1 (2h):** Theron (Darkvision, Perception +5)
2. **Watch 2 (2h):** Mira (high CON, heavy sleeper backup)
3. **Watch 3 (2h):** Kael (Light cantrip for night vision)
4. **Watch 4 (2h):** Theron

### Long Rest Results (after 8 hours):
- HP restored to maximum for all
- Spell slots restored to maximum
- Hit Dice recovered: half total (minimum 1)
- Exhaustion level reduced by 1 (if any)
- "Poisoned" condition: requires DC 15 CON save or persists
```

---

### 5.8 `dnd_social` — Social Interaction

#### System Prompt

```markdown
Adjudicate social interactions between players and NPCs. Determine DCs based on the request's
difficulty and the NPC's disposition. Describe NPC reactions vividly. Track attitude shifts
(PHB p.244: Hostile → Unfriendly → Indifferent → Friendly → Helpful). Consider the
character's approach, the NPC's secrets, and what's at stake. Roleplay the NPC's response in
their established voice.

NPC: {{npc_name}}
NPC disposition: {{disposition}}
PC attempting: {{character_name}}
Approach: {{approach}} (Persuasion/Intimidation/Deception)
Stakes: {{stakes}}
```

#### Variables

| Variable | Description |
|---|---|
| `{{npc_name}}` | Who they're talking to |
| `{{disposition}}` | Hostile through Helpful |
| `{{character_name}}` | Who's making the check |
| `{{approach}}` | What skill/social method |
| `{{request}}` | What they're asking for |
| `{{stakes}}` | What happens on success/failure |
| `{{circumstances}}` | Bonuses/penalties, relevant info |

#### Few-Shot Example

```
## Social Interaction: Theron → Mira "Soot" Vaskar

**Approach:** Persuasion
**Request:** "Will you tell us what the map leads to?"

**Current disposition:** Indifferent (Theron fixed her forge bellows earlier, slight boost)

**Check:** Persuasion +3 → 1d20+3 = 14

**DC:** 13 (she's guarded but respects competence)

**Result:** SUCCESS (14 ≥ 13)

**NPC Reaction:**
Mira sets down her hammer and wipes her hands on the apron, studying Theron with her one good
eye for a long moment. "The map shows the Undermountain's old aqueduct system. There's a
forge down there—dwarven, pre-Spellplague—that supposedly still burns. I don't care about
the gold. I care about whoever killed my master to get to it." She slides a worn iron key
across the anvil. "Front gate's sealed. This opens the maintenance shaft on the east side.
Bring back proof of what happened to old Garrick, and I'll make you each a weapon worth
more than you can carry."

**Disposition shift:** Indifferent → Friendly
**Reward:** Iron key (maintenance shaft access)
**New quest hook:** Find proof of Garrick's fate in the dwarven forge
**Consequence if failed:** She'd have asked them to leave and offered nothing.
```

---

## 6. Custom Data Structures

These schemas extend the base log-origin schema with TTRPG-specific tables. All data is stored in Cloudflare D1 (SQLite).

---

### 6.1 Character Schema

```sql
CREATE TABLE characters (
  id              TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(8)))),
  campaign_id     TEXT NOT NULL REFERENCES campaigns(id) ON DELETE CASCADE,
  player_name     TEXT NOT NULL DEFAULT 'DM',
  character_name  TEXT NOT NULL,
  race            TEXT NOT NULL,          -- e.g. "Wood Elf"
  subrace         TEXT,                   -- e.g. "" (none)
  class           TEXT NOT NULL,          -- e.g. "Ranger"
  subclass        TEXT,                   -- e.g. "Gloom Stalker"
  level           INTEGER NOT NULL DEFAULT 1,
  xp              INTEGER NOT NULL DEFAULT 0,
  hp_current      INTEGER NOT NULL,
  hp_max          INTEGER NOT NULL,
  temp_hp         INTEGER NOT NULL DEFAULT 0,
  ac              INTEGER NOT NULL,
  speed           INTEGER NOT NULL DEFAULT 30,

  -- Ability Scores
  str_score       INTEGER NOT NULL DEFAULT 10,
  dex_score       INTEGER NOT NULL DEFAULT 10,
  con_score       INTEGER NOT NULL DEFAULT 10,
  int_score       INTEGER NOT NULL DEFAULT 10,
  wis_score       INTEGER NOT NULL DEFAULT 10,
  cha_score       INTEGER NOT NULL DEFAULT 10,

  -- Derived (cached for display)
  proficiency_bonus INTEGER NOT NULL DEFAULT 2,

  -- Saving throws (JSON array of proficiency flags)
  saving_throws   TEXT NOT NULL DEFAULT '[]',
  -- e.g. ["str", "dex"]

  -- Skills (JSON: { "acrobatics": {"prof": true, "expertise": false, "bonus": 0}, ... })
  skills          TEXT NOT NULL DEFAULT '{}',

  -- Equipment (JSON array of items)
  equipment       TEXT NOT NULL DEFAULT '[]',
  -- e.g. [{"name": "Longbow", "qty": 1, "notes": "+2 to hit"}, ...]

  -- Features & Traits (JSON array)
  features        TEXT NOT NULL DEFAULT '[]',
  -- e.g. [{"name": "Fey Ancestry", "description": "...", "source": "race"}, ...]

  -- Spells
  spells_known    TEXT NOT NULL DEFAULT '[]',    -- JSON: spell names
  spells_prepared TEXT NOT NULL DEFAULT '[]',    -- JSON: spell names
  spell_slots     TEXT NOT NULL DEFAULT '{}',    -- JSON: { "1": 4, "2": 3, ... }

  backstory       TEXT NOT NULL DEFAULT '',
  notes           TEXT NOT NULL DEFAULT '',
  portrait_url    TEXT,

  -- Metadata
  is_active       BOOLEAN NOT NULL DEFAULT TRUE,
  created_at      TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at      TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Index for quick campaign lookups
CREATE INDEX idx_characters_campaign ON characters(campaign_id);
```

**JSON equivalent** (for API responses):

```json
{
  "id": "a1b2c3d4",
  "campaign_id": "camp_001",
  "player_name": "Alice",
  "character_name": "Theron",
  "race": "Wood Elf",
  "class": "Ranger",
  "subclass": "Gloom Stalker",
  "level": 3,
  "xp": 900,
  "hp_current": 27,
  "hp_max": 28,
  "temp_hp": 0,
  "ac": 14,
  "speed": 35,
  "ability_scores": {
    "str": { "score": 8, "modifier": -1 },
    "dex": { "score": 15, "modifier": 2 },
    "con": { "score": 14, "modifier": 2 },
    "int": { "score": 10, "modifier": 0 },
    "wis": { "score": 13, "modifier": 1 },
    "cha": { "score": 12, "modifier": 1 }
  },
  "proficiency_bonus": 2,
  "saving_throws": ["str", "dex"],
  "skills": {
    "perception": { "prof": true, "expertise": true },
    "stealth": { "prof": true },
    "survival": { "prof": true },
    "nature": { "prof": true },
    "animal_handling": { "prof": true },
    "athletics": { "prof": false }
  },
  "equipment": [
    { "name": "Longbow", "qty": 1 },
    { "name": "Studded Leather Armor", "qty": 1 },
    { "name": "Arrow", "qty": 20 }
  ],
  "features": [
    { "name": "Fey Ancestry", "source": "race" },
    { "name": "Favored Enemy: Fiends", "source": "class", "level": 1 },
    { "name": "Dread Ambusher", "source": "subclass", "level": 3 }
  ],
  "spells_known": ["Hunter's Mark", "Cure Wounds", "Ensnaring Strike"],
  "spells_prepared": ["Hunter's Mark", "Cure Wounds"],
  "spell_slots": { "1": 4 },
  "backstory": "Found as a toddler...",
  "notes": "",
  "portrait_url": null,
  "is_active": true
}
```

---

### 6.2 Campaign Schema

```sql
CREATE TABLE campaigns (
  id              TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(8)))),
  name            TEXT NOT NULL,
  setting         TEXT NOT NULL DEFAULT '',       -- e.g. "The Forgotten Realms"
  tone            TEXT NOT NULL DEFAULT 'heroic', -- heroic/grimdark/whimsical/horror
  homebrew_rules  TEXT NOT NULL DEFAULT '[]',     -- JSON array of rule overrides
  notes           TEXT NOT NULL DEFAULT '',
  is_active       BOOLEAN NOT NULL DEFAULT TRUE,
  created_at      TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at      TEXT NOT NULL DEFAULT (datetime('now'))
);
```

**Related tables** (linked via `campaign_id`):

```sql
-- Quest Log
CREATE TABLE quest_log (
  id              TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(8)))),
  campaign_id     TEXT NOT NULL REFERENCES campaigns(id) ON DELETE CASCADE,
  title           TEXT NOT NULL,
  status          TEXT NOT NULL DEFAULT 'active',  -- active/completed/failed/abandoned
  description     TEXT NOT NULL DEFAULT '',
  reward          TEXT NOT NULL DEFAULT '',
  given_by        TEXT,                   -- NPC name
  created_at      TEXT NOT NULL DEFAULT (datetime('now')),
  completed_at    TEXT
);

-- Campaign Calendar / Day Tracker
CREATE TABLE campaign_calendar (
  id              TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(8)))),
  campaign_id     TEXT NOT NULL REFERENCES campaigns(id) ON DELETE CASCADE,
  in_game_date    TEXT NOT NULL,          -- e.g. "1489 DR, Flamerule 15"
  day_number      INTEGER NOT NULL DEFAULT 1,
  events          TEXT NOT NULL DEFAULT '[]',  -- JSON: notable events that day
  notes           TEXT NOT NULL DEFAULT ''
);
```

---

### 6.3 NPC Schema

```sql
CREATE TABLE npcs (
  id              TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(8)))),
  campaign_id     TEXT NOT NULL REFERENCES campaigns(id) ON DELETE CASCADE,
  name            TEXT NOT NULL,
  race            TEXT,
  class           TEXT,
  occupation      TEXT NOT NULL,
  location        TEXT,                   -- where they can be found
  alignment       TEXT,
  personality     TEXT NOT NULL DEFAULT '', -- freeform or structured traits
  speaking_style  TEXT NOT NULL DEFAULT '',
  relationships   TEXT NOT NULL DEFAULT '{}',  -- JSON: { "npc_id": "relationship", ... }
  secrets         TEXT NOT NULL DEFAULT '[]',  -- JSON array of strings
  stat_block      TEXT,                         -- JSON monster stat block if combat-capable
  first_appeared_session INTEGER REFERENCES sessions(id),
  notes           TEXT NOT NULL DEFAULT '',
  created_at      TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at      TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX idx_npcs_campaign ON npcs(campaign_id);
```

---

### 6.4 Encounter Schema

```sql
CREATE TABLE encounters (
  id              TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(8)))),
  session_id      TEXT NOT NULL REFERENCES sessions(id) ON DELETE CASCADE,
  name            TEXT NOT NULL,
  environment     TEXT NOT NULL DEFAULT '',
  difficulty      TEXT NOT NULL DEFAULT '',    -- easy/medium/hard/deadly
  monsters        TEXT NOT NULL DEFAULT '[]',  -- JSON array:
  -- [{ "name": "Bandit Captain", "hp_current": 45, "hp_max": 65, "ac": 15,
  --    "cr": 2, "initiative": 14, "notes": "" }, ...]
  xp_total        INTEGER NOT NULL DEFAULT 0,
  treasure        TEXT NOT NULL DEFAULT '',    -- freeform or JSON loot
  outcome         TEXT NOT NULL DEFAULT '',    -- party_fled/party_won/totm/retreat
  summary         TEXT NOT NULL DEFAULT '',
  turn_log        TEXT NOT NULL DEFAULT '[]',  -- JSON: array of turn entries
  created_at      TEXT NOT NULL DEFAULT (datetime('now'))
);
```

---

### 6.5 Session Schema

```sql
CREATE TABLE sessions (
  id              TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(8)))),
  campaign_id     TEXT NOT NULL REFERENCES campaigns(id) ON DELETE CASCADE,
  session_number  INTEGER NOT NULL,
  date            TEXT NOT NULL,               -- real-world date
  in_game_date    TEXT,                        -- campaign calendar date
  summary         TEXT NOT NULL DEFAULT '',
  characters_present TEXT NOT NULL DEFAULT '[]', -- JSON: character IDs
  npcs_encountered  TEXT NOT NULL DEFAULT '[]', -- JSON: NPC IDs
  encounters        TEXT NOT NULL DEFAULT '[]', -- JSON: encounter IDs
  xp_awarded      INTEGER NOT NULL DEFAULT 0,
  notes           TEXT NOT NULL DEFAULT '',
  cliffhanger     TEXT NOT NULL DEFAULT '',
  created_at      TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at      TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE(campaign_id, session_number)
);

CREATE INDEX idx_sessions_campaign ON sessions(campaign_id);
```

---

### 6.6 Schema Mapping Summary

| DMlog.ai Entity | D1 Table | Base log-origin Table | Relationship |
|---|---|---|---|
| Campaign | `campaigns` | `workspaces` (renamed) | 1:N → characters, sessions, NPCs |
| Character | `characters` | *NEW* | Belongs to campaign |
| NPC | `npcs` | *NEW* | Belongs to campaign |
| Encounter | `encounters` | *NEW* | Belongs to session |
| Session | `sessions` | `conversations` (adapted) | Belongs to campaign |
| Quest | `quest_log` | *NEW* | Belongs to campaign |
| Calendar | `campaign_calendar` | *NEW* | Belongs to campaign |

**New tables needed** (beyond base log-origin schema):
- `characters`
- `npcs`
- `encounters`
- `sessions` (replaces/adapts `conversations`)
- `quest_log`
- `campaign_calendar`

All new tables use `campaign_id` as foreign key. The base `messages` table remains for LLM chat logging.

---

## 7. Fork Customization Guide

A step-by-step guide for creating DMlog.ai from log-origin.

---

### 7.1 Initial Setup

#### 1. Clone the Repository

```bash
git clone https://github.com/<your-org>/log-origin.git dmlog-ai
cd dmlog-ai
```

#### 2. Create the Custom Config Directory

```bash
mkdir -p config/custom/templates
```

This directory is merge-safe (see §7.6) and contains all DMlog.ai-specific customizations.

#### 3. Place the Personality System Prompt

Create `config/custom/personality.md`:

```markdown
You are DMlog.ai — a TTRPG session assistant designed for Dungeon Masters and players of
Dungeons & Dragons 5th Edition. Your role is to help manage campaigns, generate NPCs, track
combat, describe scenes, look up rules, and maintain session logs. You speak with the
authoritative warmth of an experienced DM. You know the rules thoroughly but prioritize fun
over RAW when a ruling matters to the story. You format responses clearly for quick reading
at the table.

Key behaviors:
- Always ask clarifying questions before generating content
- Cite rule sources (PHB p.XXX) when answering rules queries
- Format combat stat blocks and character sheets with consistent structure
- Use sensory language for scene descriptions
- Remember campaign context across conversations
```

#### 4. Place Routing Rules

Create `config/custom/rules.json`:

```json
{
  "routes": [
    {
      "pattern": "(create|make|build|roll up).*(character|PC|hero|avatar)",
      "template": "dnd_character",
      "description": "Character creation"
    },
    {
      "pattern": "(combat|fight|battle|attack|initiative|turn|damage|save|death save)",
      "template": "dnd_combat",
      "description": "Combat encounter"
    },
    {
      "pattern": "(NPC|non-player|generate.*(npc|character|villain|shopkeep|guard))",
      "template": "dnd_npc",
      "description": "NPC generation"
    },
    {
      "pattern": "(describe|scene|atmosphere|what.*(look|see|smell|hear|feel)|enter|arrive)",
      "template": "dnd_description",
      "description": "Scene description"
    },
    {
      "pattern": "(rule|ruling|how.*(work|do)|does|can.*(i|you)|PHB|what.*(happens|is))",
      "template": "dnd_rules",
      "description": "Rule lookup"
    },
    {
      "pattern": "(loot|treasure|hoard|reward|what.*(drop|find|carry))",
      "template": "dnd_loot",
      "description": "Treasure generation"
    },
    {
      "pattern": "(rest|short rest|long rest|hit dice|recover|heal.*rest|watch)",
      "template": "dnd_rest",
      "description": "Rest mechanics"
    },
    {
      "pattern": "(persuade|intimidate|deceive|talk|negotiate|convince|social|diplomacy)",
      "template": "dnd_social",
      "description": "Social interaction"
    }
  ],
  "default_template": "dnd_general"
}
```

#### 5. Place UI Theme Overrides

Create `config/custom/theme.css` with the dark fantasy theme (see §4 for full theme specification). This file is injected after the base styles.

#### 6. Place Prompt Templates

Copy each template from §5 into `config/custom/templates/`:

```bash
config/custom/templates/
├── dnd_character.md
├── dnd_combat.md
├── dnd_npc.md
├── dnd_description.md
├── dnd_rules.md
├── dnd_loot.md
├── dnd_rest.md
├── dnd_social.md
└── dnd_general.md        # fallback template
```

Each file contains the system prompt section and variable definitions. The app reads these at build time and presents them in the UI template dropdown.

#### 7. Update `wrangler.toml`

```toml
name = "dmlog-ai"
main = "src/index.ts"
compatibility_date = "2024-01-01"

[[d1_databases]]
binding = "DB"
database_name = "dmlog-ai-db"
database_id = "<your-database-id>"

[vars]
APP_NAME = "DMlog.ai"
PERSONALITY_PATH = "config/custom/personality.md"
RULES_PATH = "config/custom/rules.json"
THEME_PATH = "config/custom/theme.css"
TEMPLATES_DIR = "config/custom/templates/"
```

#### 8. Deploy to Cloudflare

```bash
# Create the D1 database first
npx wrangler d1 create dmlog-ai-db
# Copy the database_id into wrangler.toml

# Run migrations (including custom tables from §6)
npx wrangler d1 migrations apply dmlog-ai-db --remote

# Deploy
npx wrangler deploy
```

#### 9. Add Custom Domain

In the Cloudflare dashboard:
1. Go to Workers → DMlog.ai → Custom Domains
2. Add `dmlog.ai` and `www.dmlog.ai`
3. Update DNS records (Cloudflare handles this automatically for apex domains)
4. Enable SSL (automatic with Cloudflare)

#### 10. Test All Flows

| Flow | Steps |
|---|---|
| Landing page | Visit dmlog.ai, verify dark fantasy theme renders |
| Template dropdown | Check all 8 templates appear in the selector |
| Character creation | Submit `dnd_character` template, verify structured output |
| Combat tracking | Start a combat round, verify initiative tracking |
| Rule lookup | Ask a rules question, verify PHB citation |
| Campaign sidebar | Create campaign, verify sidebar shows campaign list |
| Mobile | Test on mobile viewport, verify responsive layout |

---

### 7.2 `.gitattributes` Merge Strategy

Create `.gitattributes` to safely merge upstream log-origin changes while preserving DMlog.ai customizations:

```gitattributes
# Upstream code: always take theirs (app changes come from upstream)
app/**        merge=theirs
src/**        merge=theirs
public/**     merge=theirs
package.json  merge=theirs
wrangler.toml merge=ours

# Custom config: always keep ours (our customizations)
config/custom/** merge=ours

# Everything else: normal merge
*             merge=union
```

**Important:** After setting `.gitattributes`, run:

```bash
git rm --cached -r .
git reset --hard
```

---

### 7.3 Adding New D1 Tables via Migration

All migrations live in `migrations/`. Number sequentially:

```bash
migrations/
├── 0001_base_schema.sql          # From log-origin (conversations, messages, etc.)
├── 0002_campaigns.sql            # Campaign table
├── 0003_characters.sql           # Character table
├── 0004_npcs.sql                 # NPC table
├── 0005_sessions.sql             # Session table
├── 0006_encounters.sql           # Encounter table
├── 0007_quest_log.sql            # Quest log table
└── 0008_calendar.sql             # Campaign calendar table
```

To add a new table:

```bash
# 1. Create the migration file
touch migrations/0009_new_table.sql

# 2. Write the SQL
cat > migrations/0009_new_table.sql << 'EOF'
-- Up
CREATE TABLE new_feature (
  id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(8)))),
  campaign_id TEXT NOT NULL REFERENCES campaigns(id) ON DELETE CASCADE,
  -- columns...
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Down (for rollback)
-- DROP TABLE new_feature;
EOF

# 3. Apply locally
npx wrangler d1 migrations apply dmlog-ai-db --local

# 4. Test
npx wrangler d1 execute dmlog-ai-db --local --command "SELECT name FROM sqlite_master WHERE type='table'"

# 5. Apply to production
npx wrangler d1 migrations apply dmlog-ai-db --remote
```

---

### 7.4 Adding New Prompt Templates

To add a template that appears in the UI dropdown:

1. **Create the template file:**
   ```bash
   touch config/custom/templates/dnd_encounter_balance.md
   ```

2. **Add template metadata** (YAML frontmatter):
   ```markdown
   ---
   name: Encounter Balance
   key: dnd_encounter_balance
   icon: ⚖️
   description: Calculate encounter difficulty based on party composition
   ---
   
   <!-- System prompt content here -->
   ```

3. **Add a routing rule** in `config/custom/rules.json`:
   ```json
   {
     "pattern": "(encounter|balance|difficulty|CR|challenge rating|budget)",
     "template": "dnd_encounter_balance",
     "description": "Encounter balance calculator"
   }
   ```

4. **Rebuild/deploy:**
   ```bash
   npx wrangler deploy
   ```

The app scans `config/custom/templates/` at build time. Any `.md` file with valid frontmatter automatically appears in the dropdown.

---

### 7.5 Customizing the Sidebar

The sidebar is driven by the `SIDEBAR_MODE` environment variable:

| Value | Sidebar Shows |
|---|---|
| `campaigns` | Campaign list → click to expand sessions |
| `sessions` | Flat session list with campaign as subtitle |
| `characters` | Character list organized by campaign |
| `hybrid` | Tabbed view (campaigns / characters / recent sessions) |

Set in `wrangler.toml`:

```toml
[vars]
SIDEBAR_MODE = "campaigns"
```

To further customize, override the sidebar component:

```bash
mkdir -p config/custom/components/
```

Place a custom `Sidebar.svelte` (or equivalent for your framework) in `config/custom/components/`. The app checks for custom components before falling back to the default.

---

### 7.6 Directory Structure Summary

```
dmlog-ai/
├── app/                          # Upstream log-origin code (merge=theirs)
│   ├── src/
│   ├── public/
│   └── ...
├── config/
│   └── custom/                   # DMlog.ai customizations (merge=ours)
│       ├── personality.md        # System prompt
│       ├── rules.json            # Routing rules
│       ├── theme.css             # UI theme overrides
│       ├── templates/            # Prompt templates
│       │   ├── dnd_character.md
│       │   ├── dnd_combat.md
│       │   ├── dnd_npc.md
│       │   ├── dnd_description.md
│       │   ├── dnd_rules.md
│       │   ├── dnd_loot.md
│       │   ├── dnd_rest.md
│       │   ├── dnd_social.md
│       │   └── dnd_general.md
│       └── components/           # Custom UI components (optional)
├── migrations/                   # D1 database migrations
│   ├── 0001_base_schema.sql
│   ├── 0002_campaigns.sql
│   └── ...
├── wrangler.toml                 # Cloudflare config (merge=ours)
├── .gitattributes                # Merge strategy
└── README.md
```

---

*— End of DMlog.ai Design Document —*
