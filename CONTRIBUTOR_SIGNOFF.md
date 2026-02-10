# Link Loom Developer Sign-Off Manifesto

> "Quality is not an act, it is a habit." - Aristotle

## Certification

I, `[INSERT NAME]`, certify that I have reviewed the code submitted in this Pull Request and confirm it strictly adheres to the **Link Loom Architectural Standards**.

I have personally verified the following points:

### 1. General Standards (All Code)

- [ ] **Language**: All code, comments, and static text are in **English**.
- [ ] **Clean Code**: No unused imports, variables, or functions. No "dead code".
- [ ] **KISS**: No overengineering. Simple logic is preferred over complex patterns unless necessary.
- [ ] **Naming**: Semantic variable names used. **NO** single-letter variables (`x`, `e`, `t`).
- [ ] **Linting**: Code passes all project linting rules (Prettier/ESLint) without errors or warnings.

---

### 2. Backend (Node.js) Compliance

_Skip if this PR only contains frontend code._

#### Architecture & Structure

- [ ] **DDD Parity**: Directory structure matches `domain/sub-domain/entity`.
- [ ] **Naming**: Classes follow the `[Domain][Entity][Type]` pattern (e.g., `UserManagementUserProfileService`).
- [ ] **Flat-Style**: No deep nesting. Guard clauses used for all negative checks. Happy path is at the end.

#### Models

- [ ] **Inheritance**: Extends `BaseModel`.
- [ ] **4-Way Sync**: Properties match in 1) Class Declaration, 2) `initializeEntityProperties`, 3) `get` getter, and 4) Swagger.
- [ ] **Strictness**: No "black box" properties. All fields explicitly defined.
- [ ] **UI Colors**: Status definitions include a `color` (hex) property.

#### Services & Routes

- [ ] **Validation**: Public methods start with input validation.
- [ ] **Query Selector**: `get` method uses `switch(params.queryselector)`.
- [ ] **Swagger**: All routes have complete JSDoc/Swagger documentation.

---

### 3. Frontend (React) Compliance

_Skip if this PR only contains backend code._

#### Architecture & Components

- [ ] **DDD Parity**: `src/components/pages/...` mirrors the backend domain structure exactly.
- [ ] **Entry Point**: Components implement `initializeComponent` for data loading.
- [ ] **Communication**: Components use `itemOnAction(action, entity)` for event bubbling.
- [ ] **Manager Pattern**: Used `*Manager` component to orchestrate `List`/`Edit`/`Preview` modes.

#### Styling

- [ ] **Bootstrap First**: Layout uses Bootstrap 5 classes (`row`, `col`, `d-flex`, etc). **NO** MUI Grid.
- [ ] **Icons**: Used MUI Icons (`@mui/icons-material`), aliased with `Icon` suffix (e.g., `UserIcon`).

#### Data Access

- [ ] **Adapters**: Used `entityServiceAdapter` utils (e.g., `fetchEntityCollection`). **NO** direct `axios` calls.
- [ ] **Safe Async**: Async operations wrapped in `try-catch` blocks.

---

### 4. Review Resolution (CRITICAL)

_Required for any PR that has received comments/changes requested._

- [ ] **100% Resolved**: I have read **EVERY** comment on the PR.
- [ ] **No Partial Fixes**: I have implemented fixes for **ALL** requested changes, not just a subset.
- [ ] **Replied**: I have replied to each comment explaining the fix or providing a counter-argument.
- [ ] **Verification**: I have locally verified that my fixes actually solve the reported issues.

---

### 5. Documentation

- [ ] **Local Docs**: I have checked local documentation (`loom-sdk/docs` or `react-sdk/src/index.js`) before creating new utilities/components.

---

**Signed By:** `[INSERT NAME]`
**Date:** `[INSERT DATE]`
