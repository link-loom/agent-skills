# Link Loom Agent Skills

This repository contains the official **Agent Skills** for the Link Loom ecosystem (Blackwood Stone Holdings, Inc.). These skills empower AI agents to generate code that strictly adheres to our architectural standards, design patterns, and best practices for both backend and frontend development.

## What's Included?

| Skill             | Description                                                                                                                                                              | Target Use Case                                               |
| :---------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------ |
| **`loom-nodejs`** | **Backend Development.** Generates Node.js services, models, and routes compatible with `loom-sdk`. Enforces DDD, 4-way property sync, and defensive coding.             | _"Create a user service", "Add a new route for payments"_     |
| **`loom-react`**  | **Frontend Development.** Generates React components and pages compatible with `link-loom-react-sdk`. Enforces component structure, styling rules, and manager patterns. | _"Build a dashboard page", "Create a complex form component"_ |

## Installation

To install these skills, use the standard `skills` CLI. You can choose between project-level (shared with team) or global (personal) installation.

### Project Installation (Recommended)

Installs skills into `.agent/skills` within your current project. This ensures all team members share the same version of the skills.

```bash
npx skills add https://github.com/link-loom/agent-skills
```

### Global Installation

Installs skills into your user directory (e.g., `~/.gemini/antigravity/skills`), making them available across all your projects.

```bash
npx skills add https://github.com/link-loom/agent-skills -g
```

Once installed, the agent will automatically detect and use the appropriate skill based on your prompt (e.g., asking for a "Backend Service" triggers `loom-nodejs`).

## Development & Maintenance

This repository acts as the **Source of Truth** for all Link Loom agent capabilities. The `assets/` directory contains the canonical templates used for code generation.

### Updating Standards

To modify architectural rules or coding standards:

1.  **Edit Manifest**: Update the relevant `SKILL.md` (`loom-nodejs/SKILL.md` or `loom-react/SKILL.md`) with new instructions.
2.  **Update Templates**: Modify the corresponding files in the `assets/` directory to reflect the new standard.
    - _Note: Ensure these updates match the production code in `loom-svc-js` and `bsh.sommatic.client.webapp`._
3.  **Publish**: Commit and push your changes to this repository.

Consumers can update their local skills to the latest version at any time:

```bash
npx skills update
```

## Repository Structure

```text
agent-skills/
├── loom-nodejs/           # Backend Skill
│   ├── SKILL.md           # Instructions & Rules
│   └── assets/            # Templates (Model, Service, Route)
├── loom-react/            # Frontend Skill
│   ├── SKILL.md           # Instructions & Rules
│   └── assets/            # Templates (Page, Component)
└── README.md              # Documentation
```

## License

**Apache 2.0** - Blackwood Stone Holdings, Inc.
