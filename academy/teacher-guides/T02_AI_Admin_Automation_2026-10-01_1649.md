<!--
  FILE      : T02_AI_Admin_Automation_2026-10-01_1649.md
  CREATED   : 2026-10-01_1649 UTC
  PURPOSE   : Teacher lesson plan for "AI Admin Automation: Get Your Week Back" (self-paced).
  READ FIRST: 00_IEBC_Teaching_Playbook_2026-10-01_1649.md
-->

# T02 Teacher Guide: AI Admin Automation: Get Your Week Back

| | |
|---|---|
| **Format** | Self-paced video course + monthly live Q&A and assignment review |
| **Length** | 6 modules, about 5 hours of student time (about 75 minutes of video) |
| **Level** | Beginner |
| **Demo business** | Lakeside Home Services |
| **Student deliverable** | Three live automations (lead follow-up, appointment reminders, invoice reminders) + a personal prompt library + before/after hours |

## How this course is taught

The teacher teaches this course in two ways:
1. **Recording:** each module below is a recording outline. Record 2–4 videos per module
   following the Playbook video standard (§13.4).
2. **Supporting:** a monthly 60-minute live Q&A (plan at the end) and assignment reviews
   within 3 business days.

Teachers who re-record a module must keep the ★ points and the assignment unchanged.

## Course-level objectives

Students can:
1. Find and rank the tasks eating their week (time audit).
2. Write reusable prompts that produce send-ready drafts with light editing.
3. Build and test a no-code automation with a trigger, actions and a check step.
4. Run three working automations and measure hours saved.

## Tools

- Any mainstream AI assistant (free tier works)
- Any no-code automation tool with a free tier (teach the *pattern*; demo in one tool)
- A form tool, a spreadsheet, and the student's email and calendar
- Tool choice for the demo: pick one and use it in every video so students aren't confused.
  Mention in Module 3 that other tools work the same way.

---

## Module 1: The time audit (2 videos, ~12 min)

**Objective:** Students track a week of tasks and choose their top 3 automation targets.

★ MUST TEACH:
1. Why start with an audit: *automating the wrong thing wastes more time than it saves.*
2. The scoring method: frequency × time per occurrence × frustration (1–3 each). Max 27.
3. The three-target rule: pick 3, not 10. Finish them before adding more.
4. Good first targets are **repetitive, rule-based and low-risk**. Bad first targets involve judgment, money movement or legal documents.

**SHOW:** Fill in the Time Audit worksheet for Lakeside: 12 tasks, scored. Top 3 end up as new-lead follow-up (27), appointment confirmations (18), overdue invoice reminders (18).
**TRY/BUILD (on-screen card):** Download the worksheet. Track your tasks for 5 working days (or estimate from last week's calendar and email). Score them. Circle your top 3.
**Watch for (in assignment reviews):** Students choosing huge, vague targets ("marketing"). Coach them to name one specific repeated task ("reply to website inquiries").

**Assignment 1:** Completed Time Audit with top 3 targets.

| Not yet | Meets | Strong |
|---|---|---|
| Fewer than 8 tasks, or targets are vague | 8+ tasks scored, 3 specific targets | Also includes current time per week for each target (the "before" number) |

## Module 2: AI assistants for daily admin (3 videos, ~15 min)

**Objective:** Students write prompts that produce usable drafts and save them in a library.

★ MUST TEACH:
1. The 4-part prompt: role, context, task, format.
2. Give examples of your voice: paste 2–3 past messages and say *"match this tone."*
3. Iterate in the same conversation instead of starting over.
4. The prompt library: a single document with a name, the prompt and a "fill in" placeholder for each.
5. ★ The mistake moment: show a draft that invents a policy ("we offer a 2-year warranty") that Lakeside doesn't have. Teach: *"Remove anything you didn't tell it."*
6. The data rule.

**SHOW:** Build three Lakeside prompts live: inquiry reply, quote cover note, review reply. Show a weak prompt first, then the 4-part version, side by side.
**TRY:** Students copy the inquiry-reply prompt and run it on the demo email.
**BUILD:** Students write prompts for their 5 most common messages.
**Stretch:** Add "ask me clarifying questions first" and a checklist the AI must confirm (price, date, next step).

**Assignment 2:** Prompt library with 5 prompts + one before/after example.

| Not yet | Meets | Strong |
|---|---|---|
| Prompts are one line, missing context or format | 5 prompts with all 4 parts and placeholders | Includes voice examples and a quality checklist |

## Module 3: No-code automation basics (3 videos, ~15 min)

**Objective:** Students understand triggers, actions and connections, and build a test automation.

★ MUST TEACH:
1. **Trigger → action(s) → check.** Every automation, in every tool.
2. Connections (logging accounts into the tool) and why to use a business account, not personal.
3. **Test with fake data first.** Turn on only after 3 clean test runs.
4. Where automations fail: changed field names, expired logins, duplicate triggers. How to read the tool's run history.

**SHOW:** Build "web form → add row to spreadsheet → email the owner" for Lakeside. Run three tests. Break it on purpose (rename a form field) and show how the run history reveals the problem.
**TRY:** Students build the same automation with the demo form.
**BUILD:** None yet (they build their own in Module 4).
**Watch for:** Students skipping the test step. Repeat in the Q&A: the test step is required in the rubric.

## Module 4: Follow-ups and reminders on autopilot (3 videos, ~15 min)

**Objective:** Students build their first real automation: a lead follow-up.

★ MUST TEACH:
1. Lead follow-up pattern: new inquiry → instant acknowledgment → same-day personal reply → follow-up in 2 days if no response.
2. Where AI fits: drafting the personal reply for a human to approve, not sending it unreviewed.
3. Appointment reminders: 24 hours before, with a reschedule link. No-show recovery message.
4. Review request after a job, sent only if the job is marked complete.
5. A "stop" rule: the sequence stops as soon as the customer replies.

**SHOW:** Lakeside inquiry form → instant acknowledgment email → task created for the office with an AI-drafted reply → 2-day follow-up if no reply.
**TRY:** Students rebuild it with the demo data.
**BUILD:** Students build it for their business and run 3 tests.
**Stretch:** Add SMS (if their tool supports it) or a different message for after-hours inquiries.
**Watch for:** Follow-ups that keep going after the customer replies. Check for the stop rule.

**Assignment 3:** Working lead follow-up automation (screenshot of the flow + run history with 3 successful tests).

| Not yet | Meets | Strong |
|---|---|---|
| Not tested, or no stop rule | Tested 3×, stop rule present, human reviews AI draft | Also has after-hours handling or a reminder automation |

## Module 5: Invoices and getting paid (2 videos, ~10 min)

**Objective:** Students set up invoice templates and an overdue-reminder sequence.

★ MUST TEACH:
1. Templates and recurring invoices in their existing tool (most invoicing tools have both built in; use built-in features before building custom automations).
2. Reminder schedule: friendly at 3 days overdue, firm at 10, phone call task at 21.
3. ★ Never let AI change amounts, due dates or payment terms. Those come from the invoicing system only.
4. Connect payments to books (preview of the AI Bookkeeping course).

**SHOW:** Lakeside overdue-invoice sequence with three message drafts written with the Module 2 method.
**BUILD:** Students set up their sequence (built-in reminders or automation).

## Module 6: Keep it running (2 videos, ~8 min)

**Objective:** Students set up a weekly check routine and measure results.

★ MUST TEACH:
1. The 10-minute weekly check: run history, failed runs, replies that need a human.
2. When to add a human review step (money, complaints, anything public).
3. Measure: before hours (Module 1) vs. after hours for each automation. Real numbers only.
4. What to automate next: go back to the Time Audit list.

**Assignment 4 (final):** Before/after hours for the 3 automations + screenshots of all 3 working.

| Not yet | Meets | Strong |
|---|---|---|
| Fewer than 3 automations working | 3 working, before/after numbers recorded | Also a written weekly-check routine and a next-target plan |

---

## Monthly live Q&A and review session (60 min)

| Time | Segment |
|---|---|
| 0:00–0:05 | Welcome, who's on which module (poll) |
| 0:05–0:25 | Fix-it clinic: 3–4 students share screens with a broken or stuck automation; teacher troubleshoots out loud using run history |
| 0:25–0:40 | Mini-lesson on whatever confused the most people this month (from reviewer notes) |
| 0:40–0:55 | Open questions |
| 0:55–1:00 | Reminders: assignment deadlines, survey |

Prep: reviewer sends the teacher the 3 most common mistakes from the month's assignments.

## Common questions

| Question | Answer |
|---|---|
| "My automation ran twice." | Usually two triggers or a form that submits twice. Check run history; add a "only if this ID is new" filter. |
| "Can AI send replies without me checking?" | For simple acknowledgments, yes. For anything with prices, promises or complaints, keep a human review step. |
| "The free tier ran out of runs." | Reduce test runs, filter so only real leads trigger it, or upgrade once you know it's saving time. |

## Tool notes (update quarterly)

- Last verified: 2026-10-01. Record all demos in one automation tool and name it in Module 3.
