# Agentic UX Framework

**Current version:** 1.1 (detailed lifecycle)  
**Executive journey revision:** October 7, 2026  
**Status:** Human-approved baseline  
**Canonical source:** `01_Framework` in the Agentic UX Research Ledger

## Purpose

A shared map for designing agents that create value, stay legible in motion, and improve without losing meaningful human control.

The framework has four primary layers:

1. **Lifecycle** — where are we in the agent journey?
2. **10 evolving principles** — how should we design the experience well?
3. **Before / During / After lens** — what must the experience communicate?
4. **Two sides of Agentic UX** — are we designing the experience of using the agent, or building and managing it?

Research territories sit underneath these layers and provide deeper investigation of important emerging areas.

---

# 1. Accepted lifecycle — v1.1

## 1. Understand value
**Question:** What should the agent actually accomplish?

Clarify the outcome, user value, and reason delegation is worthwhile before introducing setup, permissions, or complexity.

## 2. Delegate
**Question:** What does the user want, and what are the boundaries?

Capture the task, goal, constraints, preferences, context, and authority being delegated to the agent.

## 3. Configure
**Question:** Does the agent have what it needs to act correctly?

Provide the knowledge, tools, permissions, context, workflows, and behavioral instructions required for the agent to perform the work.

## 4. Test
**Question:** Can the user safely discover whether the agent works?

Use realistic scenarios, simulations, test conversations, or evals to evaluate behavior before relying on the agent in live use.

## 5. Release
**Question:** Is this tested version ready to become the live agent?

Move a tested agent version into live use through explicit publish/deploy decisions, with appropriate review, rollout, versioning, and rollback controls.

## 6. Run + supervise
**Question:** What is happening, and when does the user need to intervene?

Let the agent act while maintaining meaningful visibility, attention management, intervention points, and approvals.

## 7. Verify + recover
**Question:** Did the agent do the right thing, and what happens when it does not?

Support verification, audit, correction, undo, escalation, rollback, handoff, and recovery.

## 8. Improve
**Question:** How do failures become better future behavior?

Turn user feedback, production failures, observed gaps, and outcomes into improved instructions, tools, knowledge, tests, and agent behavior.

## 9. Scale
**Question:** What changes when the system operates with greater scope or autonomy?

Address advanced conditions such as persistence, proactivity, multi-agent coordination, multi-user collaboration, cross-channel behavior, and cross-tool execution.

### Lifecycle view

```text
Understand value
      ↓
   Delegate
      ↓
  Configure
      ↓
     Test
      ↓
   Release
      ↓
Run + supervise
      ↓
Verify + recover
      ↓
   Improve
      ↓
    Scale
```

**Learning loop:** Improve closes the loop, not the journey. Failures, outcomes, and feedback become evidence that refreshes value, configuration, and testing before the next run.

---

# 2. Ten evolving Agentic UX principles

These principles are a visible cross-cutting layer. They answer **“How should we design this well?”** while the lifecycle answers **“Where are we in the journey?”**

The principles are intentionally more adaptable than the lifecycle, but material changes require explicit human approval.

## PR01 — Value First
Design the shortest credible path to meaningful user value, and avoid front-loading setup before value is visible.

## PR02 — Clear Expectations
Make capabilities, limits, required inputs, dependencies, and likely outcomes understandable before users rely on the agent.

## PR03 — Guided Autonomy
Increase autonomy deliberately as risk, confidence, permissions, reversibility, and user trust allow.

## PR04 — Visible Intent
Make the agent's goal, plan, next action, and requests for attention legible without exposing raw internal reasoning.

## PR05 — Useful Explanation
Explain consequential decisions and actions in user or business terms, and expose evidence or provenance when it materially improves review or trust.

## PR06 — Safe Uncertainty
Surface meaningful ambiguity and ask, constrain, defer, or escalate rather than confidently guessing when uncertainty can change the outcome.

## PR07 — Test Before Trust
Let users safely test realistic scenarios before release or reliance, especially when behavior is probabilistic or consequential.

## PR08 — Easy Recovery
Make correction, retry, undo, escalation, rollback, and human handoff clear and inexpensive.

## PR09 — Observable Progress
Show meaningful state, progress, blockers, and attention needs without forcing users to monitor low-value activity.

## PR10 — Continuous Learning
Turn feedback, failures, outcomes, and production evidence into better future behavior while keeping changes reviewable and controllable.

### Principle governance

For every principle review, classify the evidence as:

- **Keep**
- **Strengthen**
- **Rename candidate**
- **Merge candidate**
- **Split candidate**
- **Add candidate**
- **Retire candidate**
- **Evidence gap**

Do not materially rename, merge, split, add, or retire a visible principle without explicit human approval.

---

# 3. Before / During / After lens

Use this lens at every lifecycle stage to expose what the experience must communicate.

## Before — shape the contract
- Value
- Intent
- Capability
- Context
- Boundaries
- Preview

## During — keep action legible
- Progress
- Rationale
- Attention
- Intervention
- Permission

## After — prove and improve
- Outcome
- Verification
- Audit
- Recovery
- Learning

---

# 4. Agentic UX Lifecycle — current executive view

**Presentation revision:** October 7, 2026, explicitly approved by the user through the supplied **Agentic UX Life Cycle.png** and the request to update related resources. This supersedes the C006 mini-stage presentation. The detailed nine-stage lifecycle and ten UX principles remain unchanged.

**One lifecycle, two feedback loops.** People prepare, run, and improve agentic work while staying accountable. Give agents autonomy. Keep humans accountable.

## Prepare — pre-production

Get the agent ready for production.

1. **Define** — Set the goal, value, and boundaries. Human touchpoint: **Direct**.
2. **Configure** — Set tools, permissions, and guardrails. Human touchpoint: **Approve**.
3. **Test** — Preview expected behavior and prove it before launch. Human touchpoint: **Verify**. Preview and Prove remain useful test activities, rather than separate executive-view stages.
4. **Launch** — Authorize the first move into live production. Explicit **gate**; human touchpoint: **Approve**.

Between Test and Launch, use **AI/Human Review + Recommendations**: AI recommends; humans decide. Apply changes in Configure, then Test again. Repeat until ready for launch approval. This is a review checkpoint and loop, not a fifth touchpoint verb.

**Outcome:** Production-ready version. Launch ends Prepare and starts live production.

## Run — continuous, always on

Manage live work and deliver the current outcome.

1. **Execute** — Carry out the live operational task. The agent acts autonomously within its configured authority.
2. **Monitor** — Watch live behavior, progress, health, and exceptions. Human touchpoint: **Direct** when steering is needed; this does not require constant human attention.
3. **Intervene** — Approve when asked, redirect, pause, recover, escalate, or take control. Human touchpoint: **Intervene**; approval requests still use **Approve**.
4. **Verify outcome** — Return the result and confirm it is acceptable. Human touchpoint: **Verify**.

**Continuous loop:** Execute → Monitor → Intervene when needed → Verify outcome → repeat for further work. Intervention may resume Execute directly. The diagram shows available activities, not a requirement to interrupt every run.

**Outcome:** The current production result is delivered and verified. Verification of this result is distinct from longitudinal evaluation in Improve.

## Improve — periodic, evidence-triggered

Use production evidence to improve future performance.

1. **Evaluate** — Judge performance across outcomes, trends, failures, and feedback. Human touchpoint: **Verify**.
2. **Adapt** — Diagnose patterns, update prompts and guardrails. Human touchpoint: **Direct**. Technical diagnosis and refinement remain activities here.
3. **Re-test** — Validate changes against production-derived cases and protected behavior. Human touchpoint: **Verify**.
4. **Release** — Approve and ship the improved version. Explicit **gate**; human touchpoint: **Approve**.

**Periodic loop:** Trigger when evidence warrants a change; do not force redesign after every task. Telemetry, exceptions, failures, and feedback feed Evaluate. Re-test failure returns to Adapt. Released versions return to live Run and update future prompts. Preserve versioning and rollback as supporting engineering responsibilities.

**Outcome:** Improved version released into Run. Durable learning — policies, patterns, and proven practices — informs future Prepare decisions. Changed goals or boundaries revisit Prepare.

## Four recurring human touchpoints

- **Direct** — Steer and set goals.
- **Approve** — Authorize decisions, actions, launch, or release.
- **Intervene** — Step in and recover.
- **Verify** — Judge quality and fit.

Attach touchpoints to the relevant activities. Autonomous is an agent operating mode, not a fifth human touchpoint. Gate is a decision boundary, not a touchpoint or permanent actor lane.

## Gate Criteria Framework

Review the gate criteria in this order:

| Criterion | Gate question |
| --- | --- |
| Fit | Is this the right task and context? |
| Behavior | Did the agent act as intended? |
| Outcome | Is the result acceptable? |
| Control | Are permissions appropriate? |

Use these criteria at Launch and Release. Outcome verification during Run is a recurring acceptance activity, rather than a new deployment gate.

## Human Evaluation Layer

The existing cross-cutting evaluation method remains **Expectation → Evidence → Judgment → Action**. Fit, Behavior, Outcome, and Control remain its dimensions. The executive graphic summarizes gate criteria; it does not remove the broader Control responsibilities of visibility, authority, intervention, recovery, and approval.

Automated evals measure behavior. Human evaluation judges whether the evidence is sufficient to launch, continue, intervene, accept, adapt, release, or stop. Use evidence and representative cases rather than an opaque single quality score.

## Builder / operator focus and historical continuity

Detailed builder research remains in RT03 / `15_AI Builder UX Journey`; end-user behavior and edge cases remain in RT07 / `19_Using an Agent Journey Research`. Use contextual role explanations when needed. The diamond in the updated executive image means **gate**; do not reuse it there as a builder/operator marker.

Preserve prior evidence IDs and mappings. The former Preview/Prove activities map to Test; Deliver maps to Verify outcome; Diagnose maps into Adapt; Refine is represented by Adapt plus Re-test. Do not retroactively rename evidence claims.

The current mapping lives in `20_Master Journey`. C007 records this user-approved presentation revision; C006 remains historical.

---

# 5. Major research territories

These are persistent research areas, not lifecycle stages or principles.

## RT01 — Agent-builder onboarding
**Question:** How do builders get from blank state to first credible proof of behavior?

Focus areas:
- value framing
- starting abstraction
- progressive disclosure
- first test / first credible proof
- activation
- readiness and first release

## RT02 — Agent components / information architecture
**Question:** What are agents made of, and how should builders understand the parts?

Focus areas:
- goal / role
- instructions / behavior
- knowledge / context
- tools / actions
- workflows / procedures / journeys
- permissions / guardrails
- tests / evals
- versions / release
- monitoring / optimization

## RT03 — AI Agent Builder UX
**Question:** How should builder/operator work map onto the shared three-phase master journey, and where does that role materially differ from the end user's?

Examples include:
- Sierra Ghostwriter
- Decagon Duet
- ElevenLabs Architect
- Retell Conductor
- Salesforce Agent Optimizer
- OpenAI Workspace Agents
- Microsoft Copilot Studio
- Salesforce Agentforce

### RT03 full end-to-end journey

#### Phase A — Prepare
1. **Understand the value / choose the use case**
2. **Choose a starting point**
3. **Define the job and boundaries**
4. **Generate the first agent draft**
5. **Orient the builder to the agent**
6. **Reach the first credible proof of behavior**
7. **Deepen configuration from evidence**
8. **Validate readiness and release the first version**

#### Phase B — Run
9. **Run and supervise the live agent**

#### Phase C — Improve
10. **Detect an opportunity to improve**
11. **Diagnose the cause**
12. **Propose and preview a change**
13. **Test the change**
14. **Review, approve, and release the change**
15. **Observe, learn, and compound**

### Key RT03 journey-design questions

At each stage, research:
- the builder's job to be done
- the AI builder's role
- entry point / trigger
- starting abstraction
- information shown
- generated content or recommendation
- interaction pattern / UI primitive
- evidence and provenance
- uncertainty and caveats
- the human decision required
- edit / reject / narrow / compare / alternative controls
- approval / permission boundaries
- blast radius / consequence communication
- preview / semantic diff
- test generation and coverage
- regression risk and failure presentation
- disagreement and override paths
- rollback / recovery
- collaboration and reviewer ownership
- risk-based autonomy
- long-running progress / attention behavior
- traceability from evidence -> diagnosis -> change -> test -> release -> outcome
- friction, cognitive load, and trust burden

## RT04 — Testing, simulation, and evaluation
**Question:** How do humans and automated evals build confidence in agent quality before launch, during live operation, and before improved releases?

Scope includes Test (preview and proof) -> AI/Human Review -> Launch gate -> continuous live monitoring/outcome verification -> evidence-triggered Evaluate -> Adapt -> Re-test -> Release gate, plus the Human Evaluation Layer: **Fit, Behavior, Outcome, Control** using **Expectation -> Evidence -> Judgment -> Action**.

## RT05 — Supervision, attention, and autonomy
**Question:** How should agents expose state, request attention, and negotiate authority while working?

## RT06 — Release, versioning, and recovery
**Question:** How should agent changes move safely from draft to live and back?

## RT07 — Using an Agent UX
**Question:** How should end-user behavior, human touchpoints, human evaluation, and edge cases map onto the shared Prepare / Run / Improve Master Journey?

**Status:** Active research territory inside the accepted Master Journey

Current research scope includes:
- deciding whether and what to delegate
- communicating goals, context, preferences, constraints, and authority
- clarifying ambiguity and establishing shared understanding
- understanding agent intent / plan when useful
- supervising meaningful progress without micromanagement
- attention requests, approvals, intervention, and escalation
- verifying outcomes and evidence
- correction, retry, undo, handoff, and recovery
- refining future delegation, memory, and continuity
- handoffs into builder/operator work when live-use evidence requires configuration, policy, testing, release, or operational changes

`19_Using an Agent Journey Research` validates end-user behavior, touchpoint timing, continuity, recovery, and edge cases against the shared Master Journey. It does not define a competing public master journey.

---

# 6. Current open hypotheses

These remain outside the accepted framework until explicitly approved.

## End-user moment universality is not yet validated
The **Prepare / Run / Improve Master Journey, 12 activity stages plus the pre-launch AI/Human Review checkpoint, explicit phase outcomes, four-touchpoint vocabulary, and Human Evaluation Layer are accepted**. What remains open is which end-user behaviors are universal, which vary by risk/task/product, which are recurring states rather than steps, and when live-use evidence should hand off into builder/operator work.

**Status:** Research in progress — role-specific details remain hypotheses within the accepted master structure

## Scale may be a cross-cutting dimension
Persistence, proactivity, multi-agent coordination, multi-user behavior, and cross-tool execution may affect many lifecycle stages rather than occurring only at the end.

**Status:** Needs validation

## Attention management may be part of Observable Progress
Current evidence increasingly suggests attention management can be expressed within PR09 rather than becoming an 11th principle.

**Status:** Open question

## Autonomy may remain inside Guided Autonomy
Current evidence increasingly suggests risk-based approval and autonomy controls can be expressed within PR03 rather than requiring a new framework dimension.

**Status:** Open question

## Activation may be broader than a first test conversation
Working hypothesis:

> **Activation = first credible proof of behavior.**

A successful, relevant test conversation remains a strong practical activation milestone for many conversational/no-code agent builders, but it may not be universal.

**Status:** Open question

---

# 7. Framework-change rule

Do not change the accepted lifecycle because of one article, one product launch, or one compelling example.

New findings should first be classified as:

- **Keep** — current framework still fits
- **Strengthen** — keep the structure, expand the definition
- **Add** — potential new stage or principle
- **Change** — potential structural revision
- **Question** — conflicting evidence or unresolved interpretation
- **Evidence gap** — insufficient evidence

Structural changes remain proposals until explicitly human-approved.

---

# 8. Visual validation model

Framework reviews should, when useful, show:

1. **Current framework map**
2. **Evidence overlay**
3. **Weekly delta**
4. **Evidence coverage**
5. **Proposed framework map**
6. **Principles visual / lifecycle-to-principle matrix**
7. **Research-territory journey visuals** when a territory changes meaningfully

Recommended progressive explanation:

```text
Baseline
  ↓
New evidence
  ↓
Affected framework / principle / journey area
  ↓
Proposed interpretation or change
  ↓
Human review
```

---

# 9. Public website expression

The public website should expose the framework through a simpler practitioner-facing structure:

- **Home** — combined orientation + visual exploration / field guide
- **Principles** — how to design Agentic UX well, with research integrated into each principle
- **Journeys** — evidence-backed end-to-end journeys and sub-journeys
- **Articles** — research syntheses, product teardowns, field notes, patterns, and playbooks
- **About** — project purpose and methodology

Top navigation: **Principles | Journeys | Articles | About | Subscribe**.

There is no separate Explore, Framework, or Research page in v1. Research is contextual: it supports Principles and Journeys, while deeper narrative research lives in Articles. The Journeys experience should lead with **Prepare -> Run -> Improve** and the **12 activity stages plus the pre-launch AI/Human Review checkpoint**, make **Launch** the visible first-production boundary, show the phase outcomes, attach **Direct / Approve / Intervene / Verify** only where relevant, expose the **Human Evaluation Layer** across all three phases, show builder/operator focus contextually, and include the Run cycle plus the learning loop. Detailed builder, end-user, and evaluation research should appear as drill-downs rather than permanent swimlanes in the primary visual.

---

# Canonical research memory

The evolving evidence base lives in the **Agentic UX Research Ledger**:

https://docs.google.com/spreadsheets/d/1S6rGgNccMhz3XD6yMe9TxTfH0pBZ6BNZdhtzOGxvoSc/edit

Key tabs include:

- `01_Framework` — accepted lifecycle
- `13_Principles` — evolving principles
- `14_Research Territories` — persistent research themes
- `15_AI Builder UX Journey` — detailed builder/operator RT03 drill-down
- `19_Using an Agent Journey Research` — research-in-progress validation of end-user behavior, touchpoints, and edge cases
- `20_Master Journey` — accepted Prepare / Run / Improve master journey, 12 activity stages plus the pre-launch AI/Human Review checkpoint, explicit phase outcomes, four human touchpoints, Human Evaluation Layer, Launch/Release gates, continuous Run, periodic Improve, and durable-learning loop
- `02_Evidence` — evidence base
- `03_Framework Changes` — framework governance
- `11_Onboarding Benchmark` — onboarding comparisons
- `12_Agent Components` — normalized component model

Use the ledger, not this Markdown file, as the canonical source for changing research state.
