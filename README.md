# Link Loom Agent Skills

This repository contains the official **Agent Skills** for the Link Loom ecosystem (Blackwood Stone Holdings, Inc.). These skills empower AI agents to generate code that strictly adheres to our architectural standards, design patterns, and best practices for both backend and frontend development.

## What's Included?

| Skill             | Description                                                                                                                                                              | Target Use Case                                               |
| :---------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------ |
| **`loom-nodejs`** | **Backend Development.** Generates Node.js services, models, and routes compatible with `loom-sdk`. Enforces DDD, 4-way property sync, and defensive coding.             | _"Create a user service", "Add a new route for payments"_     |
| **`loom-react`**  | **Frontend Development.** Generates React components and pages compatible with `link-loom-react-sdk`. Enforces component structure, styling rules, and manager patterns. | _"Build a dashboard page", "Create a complex form component"_ |

## Installation

To install these skills into your local agent environment (e.g., `~/.gemini/antigravity/skills` or project `.agent/skills`), use the standard `skills` CLI:

```bash
# Add both skills to your current project/workspace
npx skills add https://github.com/link-loom/agent-skills
```

Once installed, the agent will automatically detect and use the appropriate skill based on your prompt (e.g., asking for a "Backend Service" triggers `loom-nodejs`).

## Development & Maintenance

These skills rely on **Templates** (`assets/`) that mirror our production codebases (`loom-svc-js` and `bsh.sommatic.client.webapp`).

### Syncing Assets (Automated)

**DO NOT manually copy files** from the source repositories. Use the synchronization script to ensure the skills are always up-to-date with production standards.

1.  Navigate to this directory:
    ```bash
    cd link-loom/github/agent-skills
    ```
2.  Run the sync script:
    ```bash
    node scripts/sync-assets.js
    ```
3.  Commit the changes:
    ```bash
    git add .
    git commit -m "chore: sync assets with latest production code"
    git push
    ```

### Adding New Rules

1.  Edit the specific `SKILL.md` file (`loom-nodejs/SKILL.md` or `loom-react/SKILL.md`).
2.  Add the new rule clearly in the relevant section.
3.  If the rule requires a code change pattern, update the corresponding template in the source repo first, then run `node scripts/sync-assets.js`.

## Repository Structure

```text
agent-skills/
├── loom-nodejs/           # Backend Skill
│   ├── SKILL.md           # Instructions & Rules
│   └── assets/            # Templates (Model, Service, Route)
├── loom-react/            # Frontend Skill
│   ├── SKILL.md           # Instructions & Rules
│   └── assets/            # Templates (Page, Component)
├── scripts/               # Maintenance Scripts
│   └── sync-assets.js     # Assets Synchronization Tool
└── README.md              # Documentation
```

## License

**Apache 2.0** - Blackwood Stone Holdings, Inc.
