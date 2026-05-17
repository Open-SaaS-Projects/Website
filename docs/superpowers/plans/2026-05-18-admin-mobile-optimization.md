# Admin Mobile Optimization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Optimize admin dashboard for mobile devices with burger menu sidebar and card-based layouts.

**Architecture:** Mobile-first responsive design using Tailwind breakpoints. Sidebar converts to overlay on mobile/tablet (< 1024px), tables convert to cards. No new dependencies - pure CSS/markup changes.

**Tech Stack:** Next.js 14, React, Tailwind CSS, lucide-react (existing)

---

## File Structure

**Files to Modify:**
1. `app/admin/page.tsx` - Add sidebar state, burger button, backdrop, responsive classes
2. `components/admin/StatsBar.tsx` - Responsive grid (1 col → 3 col)
3. `components/admin/JobTable.tsx` - Dual rendering (table/cards)
4. `components/admin/ApplicationsPanel.tsx` - Dual rendering (table/cards), responsive filters

**No New Files:** All changes are modifications to existing components.

---

### Task 1: Import Menu and X Icons

**Files:**
- Modify: `app/admin/page.tsx:4`

- [ ] **Step 1: Add Menu and X icons to imports**

Update the lucide-react import line:

```tsx
import { Plus, Briefcase, Users, Settings, LogOut, Menu, X } from "lucide-react";
```

- [ ] **Step 2: Verify no import errors**

Run: `pnpm dev`
Expected: Dev server starts without errors, page loads at http://localhost:3000/admin

- [ ] **Step 3: Commit**

```bash
git add app/admin/page.tsx
git commit -m "feat(admin): add Menu and X icons for burger menu"
```

---

### Task 2: Add Sidebar State Management

**Files:**
- Modify: `app/admin/page.tsx:15-19`

- [ ] **Step 1: Add sidebarOpen state**

Add state after the existing state declarations (around line 18):

```tsx
export default function AdminPage() {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [activeNav, setActiveNav] = useState<NavItem>("jobs");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // ── Handlers ──────────────────────────────────────────────────────────────
```

- [ ] **Step 2: Verify state compiles**

Check browser console for any TypeScript errors.
Expected: No errors, page renders normally.

- [ ] **Step 3: Commit**

```bash
git add app/admin/page.tsx
git commit -m "feat(admin): add sidebar open/close state"
```

---

### Task 3: Make StatsBar Responsive

**Files:**
- Modify: `components/admin/StatsBar.tsx:21`

- [ ] **Step 1: Update grid classes for responsive layout**

Change line 21 from:
```tsx
<div className="grid grid-cols-3 gap-4">
```

To:
```tsx
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
```

- [ ] **Step 2: Test responsive behavior**

In browser:
1. Open http://localhost:3000/admin
2. Open DevTools (F12)
3. Toggle device toolbar (Ctrl+Shift+M / Cmd+Shift+M)
4. Set width to 375px (iPhone SE)
   - Expected: Stats cards stack vertically (1 column)
5. Set width to 640px (tablet)
   - Expected: Stats cards show 3 columns

- [ ] **Step 3: Commit**

```bash
git add components/admin/StatsBar.tsx
git commit -m "feat(admin): make stats bar responsive (1 col mobile, 3 col tablet+)"
```

---

### Task 4: Add Burger Button to Header

**Files:**
- Modify: `app/admin/page.tsx:152-175`

- [ ] **Step 1: Update header structure with burger button**

Replace the header section (lines 152-175) with:

```tsx
{/* Top bar */}
<header className="flex items-center gap-3 sm:gap-4 border-b border-gray-200 bg-white px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
  {/* Burger menu - only visible on mobile/tablet */}
  <button
    onClick={() => setSidebarOpen(true)}
    className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
    aria-label="Open menu"
  >
    <Menu className="h-5 w-5" />
  </button>

  <div className="flex-1 min-w-0">
    <h1 className="text-base sm:text-lg font-semibold text-gray-900">
      {activeNav === "jobs" && "Job Positions"}
      {activeNav === "applications" && "Applications"}
      {activeNav === "settings" && "Settings"}
    </h1>
    <p className="text-xs text-gray-400">
      {activeNav === "jobs" && "Manage open and inactive positions"}
      {activeNav === "applications" && "Review submitted applications"}
      {activeNav === "settings" && "Configure admin preferences"}
    </p>
  </div>

  {activeNav === "jobs" && (
    <button
      onClick={handleAdd}
      className="flex items-center gap-2 rounded-full bg-[#6320ce] px-3 sm:px-5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
    >
      <Plus className="h-4 w-4" />
      <span className="hidden sm:inline">Add position</span>
    </button>
  )}
</header>
```

- [ ] **Step 2: Test burger button visibility**

In browser DevTools:
1. Set width to 375px - Expected: Burger button visible
2. Set width to 1024px - Expected: Burger button hidden
3. Click burger button (at 375px) - Expected: Nothing happens yet (state changes but sidebar not updated)

- [ ] **Step 3: Commit**

```bash
git add app/admin/page.tsx
git commit -m "feat(admin): add burger menu button to header with responsive sizing"
```

---

### Task 5: Update Sidebar for Responsive Behavior

**Files:**
- Modify: `app/admin/page.tsx:98-147`

- [ ] **Step 1: Update sidebar classes and add close button**

Replace the entire `<aside>` section (lines 98-147) with:

```tsx
{/* ── Sidebar ── */}
<aside
  className={`fixed lg:static inset-y-0 left-0 z-50 lg:z-auto w-56 transform lg:transform-none transition-transform duration-300 ${
    sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
  } flex flex-shrink-0 flex-col bg-[#1e1040]`}
>
  {/* Close button - only on mobile */}
  <button
    onClick={() => setSidebarOpen(false)}
    className="lg:hidden absolute top-4 right-4 text-white/70 hover:text-white z-10"
    aria-label="Close menu"
  >
    <X className="h-5 w-5" />
  </button>

  {/* Logo */}
  <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
    <div className="relative h-8 w-24 shrink-0 overflow-hidden">
      <img
        src="/makkn-logo.webp"
        alt="Makkn logo"
        className="absolute left-1/2 top-1/2 h-32 w-32 max-w-none -translate-x-1/2 -translate-y-1/2 object-contain"
      />
    </div>
    <span className="text-xs font-medium uppercase leading-none tracking-wide text-purple-400">
      admin
    </span>
  </div>

  {/* Nav */}
  <nav className="flex flex-1 flex-col gap-1 px-3 py-4">
    {navItems.map((item) => (
      <button
        key={item.id}
        onClick={() => {
          setActiveNav(item.id);
          setSidebarOpen(false);
        }}
        className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
          activeNav === item.id
            ? "border-l-2 border-[#6320ce] bg-white/10 text-white"
            : "text-white/50 hover:bg-white/5 hover:text-white/80"
        }`}
      >
        {item.icon}
        <span className="flex-1">{item.label}</span>
        {item.badge ? (
          <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-[#6320ce] px-1 text-[10px] font-semibold text-white">
            {item.badge}
          </span>
        ) : null}
      </button>
    ))}
  </nav>

  {/* Footer */}
  <div className="border-t border-white/10 px-5 py-4">
    <p className="text-xs text-white/40">Logged in as</p>
    <p className="mt-0.5 truncate text-xs font-medium text-white/70">
      admin@makkn.com
    </p>
    <button className="mt-3 flex items-center gap-1.5 text-xs text-white/30 hover:text-white/60">
      <LogOut className="h-3 w-3" />
      Sign out
    </button>
  </div>
</aside>
```

- [ ] **Step 2: Test sidebar open/close**

In browser at 375px width:
1. Sidebar should be hidden by default
2. Click burger button - Expected: Sidebar slides in from left
3. Click X button - Expected: Sidebar slides out
4. Click burger again, then click "Applications" - Expected: Sidebar closes and Applications view loads

- [ ] **Step 3: Commit**

```bash
git add app/admin/page.tsx
git commit -m "feat(admin): make sidebar responsive with slide-in overlay on mobile"
```

---

### Task 6: Add Backdrop Component

**Files:**
- Modify: `app/admin/page.tsx:96`

- [ ] **Step 1: Add backdrop before sidebar**

Add backdrop div right after the opening `<div className="flex min-h-screen bg-gray-50">` (around line 96):

```tsx
<div className="flex min-h-screen bg-gray-50">
  {/* Backdrop - only on mobile when open */}
  {sidebarOpen && (
    <div
      className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
      onClick={() => setSidebarOpen(false)}
    />
  )}

  {/* ── Sidebar ── */}
  <aside
```

- [ ] **Step 2: Test backdrop interaction**

In browser at 375px width:
1. Click burger button - Expected: Dark backdrop appears behind sidebar
2. Click backdrop (not sidebar) - Expected: Sidebar closes
3. At 1024px width - Expected: No backdrop, sidebar always visible

- [ ] **Step 3: Commit**

```bash
git add app/admin/page.tsx
git commit -m "feat(admin): add backdrop overlay for mobile sidebar"
```

---

### Task 7: Update Main Content Padding

**Files:**
- Modify: `app/admin/page.tsx:178`

- [ ] **Step 1: Update main content padding classes**

Find the `<main>` tag (around line 178) and change:

```tsx
<main className="flex-1 px-8 py-8">
```

To:

```tsx
<main className="flex-1 px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
```

- [ ] **Step 2: Test padding at different sizes**

In browser:
1. At 375px - Content has 16px (4 × 4px) padding
2. At 640px - Content has 24px (6 × 4px) padding  
3. At 1024px - Content has 32px (8 × 4px) padding

- [ ] **Step 3: Commit**

```bash
git add app/admin/page.tsx
git commit -m "feat(admin): add responsive padding to main content area"
```

---

### Task 8: Create Mobile Card View for JobTable

**Files:**
- Modify: `components/admin/JobTable.tsx:30-118`

- [ ] **Step 1: Wrap existing table in desktop-only div**

Replace the return statement (lines 30-118) with dual rendering:

```tsx
return (
  <>
    {/* Desktop Table */}
    <div className="hidden lg:block overflow-hidden rounded-2xl border border-gray-100 bg-white">
      {/* Table header */}
      <div className="grid grid-cols-[1fr_120px_100px_120px] gap-4 border-b border-gray-100 bg-gray-50 px-6 py-3">
        {["Position", "Type", "Status", "Actions"].map((h) => (
          <span
            key={h}
            className="text-xs font-semibold uppercase tracking-wide text-gray-400"
          >
            {h}
          </span>
        ))}
      </div>

      {/* Rows */}
      {jobs.map((job, i) => (
        <div
          key={job.id}
          className={`grid grid-cols-[1fr_120px_100px_120px] gap-4 px-6 py-4 transition-colors hover:bg-gray-50 ${
            i !== jobs.length - 1 ? "border-b border-gray-100" : ""
          } ${job.status === "inactive" ? "opacity-60" : ""}`}
        >
          {/* Position info */}
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-semibold text-gray-900">
              {job.title}
            </span>
            <span className="text-xs text-gray-400">
              {job.department} · {job.location}
            </span>
          </div>

          {/* Type */}
          <span className="self-center text-xs text-gray-500">{job.type}</span>

          {/* Status badge */}
          <div className="self-center">
            <span
              className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                job.status === "active"
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              {job.status === "active" ? "Active" : "Inactive"}
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Edit */}
            <button
              onClick={() => onEdit(job)}
              title="Edit"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-50 text-[#6320ce] transition-colors hover:bg-purple-100"
            >
              <Pencil className="h-3.5 w-3.5" />
            </button>

            {/* Toggle active/inactive */}
            <button
              onClick={() => onToggleStatus(job.id)}
              title={job.status === "active" ? "Set inactive" : "Set active"}
              className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                job.status === "active"
                  ? "bg-green-50 text-green-600 hover:bg-green-100"
                  : "bg-gray-100 text-gray-400 hover:bg-gray-200"
              }`}
            >
              {job.status === "active" ? (
                <Eye className="h-3.5 w-3.5" />
              ) : (
                <EyeOff className="h-3.5 w-3.5" />
              )}
            </button>

            {/* Delete */}
            <button
              onClick={() => onDelete(job.id)}
              title="Delete"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-red-500 transition-colors hover:bg-red-100"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      ))}
    </div>

    {/* Mobile Cards */}
    <div className="block lg:hidden space-y-3">
      {jobs.map((job) => (
        <div
          key={job.id}
          className={`rounded-xl border border-gray-100 bg-white p-4 ${
            job.status === "inactive" ? "opacity-60" : ""
          }`}
        >
          {/* Header: Title + Status */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-gray-900 mb-1">
                {job.title}
              </h3>
              <p className="text-xs text-gray-400">
                {job.department} · {job.location}
              </p>
            </div>
            <span
              className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                job.status === "active"
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              {job.status === "active" ? "Active" : "Inactive"}
            </span>
          </div>

          {/* Footer: Type + Actions */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <span className="text-xs text-gray-500">{job.type}</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => onEdit(job)}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-50 text-[#6320ce] transition-colors hover:bg-purple-100"
                aria-label="Edit"
              >
                <Pencil className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => onToggleStatus(job.id)}
                className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                  job.status === "active"
                    ? "bg-green-50 text-green-600 hover:bg-green-100"
                    : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                }`}
                aria-label={
                  job.status === "active" ? "Set inactive" : "Set active"
                }
              >
                {job.status === "active" ? (
                  <Eye className="h-3.5 w-3.5" />
                ) : (
                  <EyeOff className="h-3.5 w-3.5" />
                )}
              </button>
              <button
                onClick={() => onDelete(job.id)}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-red-500 transition-colors hover:bg-red-100"
                aria-label="Delete"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
);
```

- [ ] **Step 2: Test JobTable responsive views**

In browser:
1. At 375px - Expected: Cards visible, table hidden
2. At 1024px - Expected: Table visible, cards hidden
3. At 375px, click Edit button on card - Expected: Modal opens
4. At 375px, click Eye/EyeOff button - Expected: Status toggles
5. At 375px, click Delete button - Expected: Job removed

- [ ] **Step 3: Commit**

```bash
git add components/admin/JobTable.tsx
git commit -m "feat(admin): add mobile card view for job table"
```

---

### Task 9: Create Mobile Card View for ApplicationsPanel

**Files:**
- Modify: `components/admin/ApplicationsPanel.tsx:256-318`

- [ ] **Step 1: Wrap existing table in desktop-only div and add mobile cards**

Replace the table section (lines 256-318, after the empty state check) with:

```tsx
{/* Desktop Table */}
<div className="hidden lg:block overflow-hidden rounded-2xl border border-gray-100 bg-white">
  {/* Header */}
  <div className="grid grid-cols-[1fr_180px_110px_100px_40px] gap-4 border-b border-gray-100 bg-gray-50 px-6 py-3">
    {["Applicant", "Position", "Submitted", "Status", ""].map((h) => (
      <span
        key={h}
        className="text-xs font-semibold uppercase tracking-wide text-gray-400"
      >
        {h}
      </span>
    ))}
  </div>

  {/* Rows */}
  {filtered.map((app, i) => (
    <div
      key={app.id}
      onClick={() => setSelected(app)}
      className={`grid cursor-pointer grid-cols-[1fr_180px_110px_100px_40px] gap-4 px-6 py-4 transition-colors hover:bg-gray-50 ${
        i !== filtered.length - 1 ? "border-b border-gray-100" : ""
      } ${selected?.id === app.id ? "bg-purple-50/50" : ""}`}
    >
      {/* Applicant */}
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 text-xs font-semibold text-[#6320ce]">
          {getInitials(app.firstName, app.lastName)}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900">
            {app.firstName} {app.lastName}
          </p>
          <p className="text-xs text-gray-400">{app.email}</p>
        </div>
      </div>

      {/* Position */}
      <div className="self-center">
        <span className="text-xs text-gray-600">{app.jobTitle}</span>
      </div>

      {/* Submitted */}
      <div className="self-center">
        <span className="text-xs text-gray-400">
          {formatDate(app.submittedAt)}
        </span>
      </div>

      {/* Status */}
      <div className="self-center">
        <span
          className={`inline-block rounded-full px-2.5 py-1 text-xs font-medium ${STATUS_STYLES[app.status]}`}
        >
          {STATUS_LABELS[app.status]}
        </span>
      </div>

      {/* Arrow */}
      <div className="flex items-center justify-center self-center">
        <ChevronRight className="h-4 w-4 text-gray-300" />
      </div>
    </div>
  ))}
</div>

{/* Mobile Cards */}
<div className="block lg:hidden space-y-3">
  {filtered.map((app) => (
    <div
      key={app.id}
      onClick={() => setSelected(app)}
      className={`rounded-xl border border-gray-100 bg-white p-4 cursor-pointer transition-colors hover:bg-gray-50 ${
        selected?.id === app.id ? "ring-2 ring-[#6320ce] ring-opacity-50" : ""
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        {/* Avatar + Name */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-semibold text-[#6320ce]">
            {getInitials(app.firstName, app.lastName)}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-gray-900 truncate">
              {app.firstName} {app.lastName}
            </p>
            <p className="text-xs text-gray-400 truncate">{app.jobTitle}</p>
          </div>
        </div>

        {/* Status + Arrow */}
        <div className="flex items-center gap-2 shrink-0">
          <span
            className={`rounded-full px-2.5 py-1 text-xs font-medium ${STATUS_STYLES[app.status]}`}
          >
            {STATUS_LABELS[app.status]}
          </span>
          <ChevronRight className="h-4 w-4 text-gray-300" />
        </div>
      </div>

      {/* Submission date */}
      <div className="mt-2 text-xs text-gray-400">
        Submitted {formatDate(app.submittedAt)}
      </div>
    </div>
  ))}
</div>
```

- [ ] **Step 2: Test ApplicationsPanel responsive views**

In browser:
1. Navigate to Applications tab
2. At 375px - Expected: Cards visible, table hidden
3. At 1024px - Expected: Table visible, cards hidden
4. At 375px, click on a card - Expected: Drawer opens with full details
5. At 375px, change status in drawer - Expected: Badge updates in card view

- [ ] **Step 3: Commit**

```bash
git add components/admin/ApplicationsPanel.tsx
git commit -m "feat(admin): add mobile card view for applications panel"
```

---

### Task 10: Make ApplicationsPanel Filters Responsive

**Files:**
- Modify: `components/admin/ApplicationsPanel.tsx:199-243`

- [ ] **Step 1: Update filter row classes**

Change the filter row div (around line 199):

From:
```tsx
<div className="flex flex-wrap items-center gap-3">
```

To:
```tsx
<div className="flex flex-col sm:flex-row sm:items-center gap-3">
```

- [ ] **Step 2: Update search input wrapper**

Change the search input wrapper div (around line 201):

From:
```tsx
<div className="relative flex-1 min-w-48">
```

To:
```tsx
<div className="relative w-full sm:flex-1 sm:min-w-48">
```

- [ ] **Step 3: Test filter row responsive behavior**

In browser at Applications tab:
1. At 375px - Expected: Search and selects stack vertically, full width
2. At 640px - Expected: Filters in horizontal row
3. Test filtering at both sizes - Expected: Works correctly

- [ ] **Step 4: Commit**

```bash
git add components/admin/ApplicationsPanel.tsx
git commit -m "feat(admin): make applications filter row responsive"
```

---

### Task 11: Comprehensive Mobile Testing

**Files:**
- None (manual testing)

- [ ] **Step 1: Test mobile viewport (375px)**

1. Jobs tab:
   - [ ] Burger menu opens/closes sidebar
   - [ ] Sidebar closes when clicking backdrop
   - [ ] Sidebar closes when clicking nav item
   - [ ] Stats show 1 column, full width
   - [ ] Job cards visible (not table)
   - [ ] All buttons tappable (32px targets)
   - [ ] Edit modal opens and works
   - [ ] Toggle status works
   - [ ] Delete works
   - [ ] "Add position" shows icon only
   - [ ] No horizontal scrolling

2. Applications tab:
   - [ ] Filter row stacks vertically
   - [ ] Search is full width
   - [ ] Application cards visible (not table)
   - [ ] Click card opens drawer
   - [ ] Change status in drawer updates card
   - [ ] No horizontal scrolling

3. Settings tab:
   - [ ] Empty state displays correctly

- [ ] **Step 2: Test tablet viewport (768px)**

1. At 768px:
   - [ ] Burger menu still visible
   - [ ] Sidebar overlays (not always visible)
   - [ ] Stats show 3 columns
   - [ ] Job cards still visible (table appears at 1024px)
   - [ ] "Add position" shows full text
   - [ ] Filters horizontal

- [ ] **Step 3: Test desktop viewport (1024px+)**

1. At 1024px:
   - [ ] Burger menu hidden
   - [ ] Sidebar always visible (no overlay)
   - [ ] Stats show 3 columns
   - [ ] Job table visible (not cards)
   - [ ] Applications table visible (not cards)
   - [ ] All existing functionality works

- [ ] **Step 4: Test interactions across breakpoints**

1. Resize from mobile to desktop:
   - [ ] If sidebar open on mobile, closes when reaching desktop
   - [ ] Smooth transition between card/table views

- [ ] **Step 5: Document any issues**

If any issues found, note them here before proceeding to final commit.

---

### Task 12: Final Commit and Verification

**Files:**
- All modified files

- [ ] **Step 1: Review all changes**

Run:
```bash
git status
git diff
```

Expected files changed:
- app/admin/page.tsx
- components/admin/StatsBar.tsx
- components/admin/JobTable.tsx
- components/admin/ApplicationsPanel.tsx

- [ ] **Step 2: Create final commit**

```bash
git add -A
git commit -m "feat(admin): complete mobile optimization

- Add burger menu sidebar with overlay on mobile/tablet
- Make stats bar responsive (1 col mobile, 3 col tablet+)
- Add mobile card views for job table and applications
- Update header with responsive padding and button
- Add backdrop overlay for mobile sidebar
- Responsive filter row for applications

Mobile-first implementation using Tailwind breakpoints.
All functionality tested at 375px, 768px, and 1024px+.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

- [ ] **Step 3: Final verification**

1. Test one more time at each breakpoint:
   - 375px (mobile)
   - 768px (tablet)
   - 1024px (desktop)

2. Check console for any errors
   - Expected: No console errors

3. Check network tab
   - Expected: No 404s or failed requests

- [ ] **Step 4: Success criteria check**

Verify against spec success criteria:
- [ ] All admin functionality accessible on mobile (375px+)
- [ ] No horizontal scrolling at any viewport
- [ ] All touch targets meet 32px minimum
- [ ] Stats, jobs, applications readable without zooming
- [ ] Sidebar navigation accessible via burger menu
- [ ] Existing desktop experience unchanged
- [ ] No performance regression

---

## Testing Checklist Summary

From spec (docs/superpowers/specs/2026-05-17-admin-mobile-optimization-design.md):

### Mobile (375px)
- [ ] Burger menu opens/closes sidebar
- [ ] Sidebar overlays content with backdrop
- [ ] Clicking backdrop closes sidebar
- [ ] Selecting nav item closes sidebar
- [ ] Stats bar shows 1 column (full width cards)
- [ ] Job table shows cards, not table
- [ ] All job card actions are tappable
- [ ] Applications show cards, not table
- [ ] Filter row stacks vertically
- [ ] Header shows icon-only button
- [ ] No horizontal scrolling
- [ ] No text truncation/overlap

### Tablet (768px)
- [ ] Same as mobile (burger menu still active)
- [ ] Stats bar shows 3 columns
- [ ] Filter row shows horizontal
- [ ] Button shows full text

### Desktop (1024px+)
- [ ] Burger menu hidden
- [ ] Sidebar always visible (current behavior)
- [ ] Stats bar shows 3 columns
- [ ] Tables visible (not cards)
- [ ] All existing functionality works

### Interactions
- [ ] Edit job modal works on all sizes
- [ ] Delete job works on all sizes
- [ ] Toggle status works on all sizes
- [ ] Application drawer opens on all sizes
- [ ] Application status changes work
- [ ] Filters work on all sizes

---

## Implementation Complete

All tasks implement the design from:
`docs/superpowers/specs/2026-05-17-admin-mobile-optimization-design.md`

**Key Changes:**
1. Sidebar: Fixed → Overlay on mobile with burger menu
2. StatsBar: grid-cols-3 → grid-cols-1 sm:grid-cols-3
3. JobTable: Single table → Dual rendering (table/cards)
4. ApplicationsPanel: Single table → Dual rendering (table/cards)
5. Header: Desktop padding → Responsive padding + icon-only button
6. Main: Desktop padding → Responsive padding

**No new dependencies added.** Pure CSS/markup changes using existing Tailwind utilities.
