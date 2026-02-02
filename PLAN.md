# PLAN: Fix home page experience date range

Overall Goal: Show the correct company tenure on the home page experience list (earliest start to current end) while keeping the current role title/built text accurate.

---

### Step 1: Update home page experience range logic
- Goal: Use the oldest start date in a company and the current role end date for the home page range.
- Files: src/pages/index.astro
- Verify: Visual check of rendered home page experience section.

### Step 2: Validate behavior
- Goal: Ensure lint passes and no regressions for the updated rendering.
- Files: (none)
- Verify: npm run lint.

### Step 3: Capture UI confirmation
- Goal: Provide screenshot of updated home page experience section.
- Files: (none)
- Verify: Screenshot from local dev server.

### Final Step: Cleanup & Validation
- Goal: Remove PLAN.md after approval and completion.
- Verify: repository root has no PLAN.md.
