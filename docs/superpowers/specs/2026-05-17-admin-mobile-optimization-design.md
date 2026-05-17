# Admin Page Mobile Optimization Design

**Date:** 2026-05-17  
**Project:** MAKKN Landing - Admin Dashboard  
**Goal:** Optimize admin page for mobile devices using burger menu sidebar and card-based layouts

## Overview

The admin dashboard is currently optimized only for desktop (1024px+). On mobile devices, the fixed 224px sidebar squishes content into ~150px, and grid-based tables become unusable. This design implements a responsive mobile-first optimization using:

1. **Burger menu sidebar** - Collapsible navigation on mobile/tablet
2. **Card-based layouts** - Mobile-friendly alternative to tables
3. **Responsive breakpoints** - Progressive enhancement from mobile → tablet → desktop

## Current Problems

### Mobile (375px - 768px)
- Sidebar always visible, taking 224px of 375px screen width
- JobTable uses fixed grid `grid-cols-[1fr_120px_100px_120px]` - doesn't collapse
- ApplicationsPanel uses `grid-cols-[1fr_180px_110px_100px_40px]` - even worse
- StatsBar uses `grid-cols-3` creating tiny cramped cards
- Content area crushed to ~150px width
- Text truncation, overlapping elements, inaccessible action buttons

### Tablet (768px - 1024px)
- Similar issues - sidebar still takes significant space
- Tables slightly more usable but still cramped

## Design Solution

### 1. Responsive Sidebar with Burger Menu

**Why:** Free up horizontal space on small screens while maintaining full navigation access.

**How to apply:** Use mobile-first approach - sidebar hidden by default on mobile/tablet, always visible on desktop.

#### Breakpoint Behavior

**Mobile/Tablet (< lg: 1024px):**
- Sidebar hidden by default
- Burger icon (☰) visible in header (top-left)
- Clicking burger opens sidebar as overlay
- Sidebar slides in from left with backdrop blur
- Close via: backdrop click, close button (×), or selecting nav item

**Desktop (≥ 1024px):**
- Burger icon hidden
- Sidebar always visible (current behavior)
- Fixed 224px width
- No overlay mode

#### Implementation Details

**State Management:**
- Add `sidebarOpen` boolean state to AdminPage component
- Control with burger menu button

**Sidebar Component:**
```tsx
<aside className={`
  fixed lg:static 
  inset-y-0 left-0 
  z-50 lg:z-auto
  w-56 
  transform lg:transform-none
  transition-transform duration-300
  ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
  flex flex-col bg-[#1e1040]
`}>
  {/* Existing sidebar content */}
</aside>
```

**Backdrop:**
```tsx
{sidebarOpen && (
  <div 
    className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
    onClick={() => setSidebarOpen(false)}
  />
)}
```

**Burger Button:**
```tsx
<button
  onClick={() => setSidebarOpen(!sidebarOpen)}
  className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
  aria-label="Toggle menu"
>
  <Menu className="h-5 w-5" />
</button>
```

**Close Button (inside sidebar):**
```tsx
<button
  onClick={() => setSidebarOpen(false)}
  className="lg:hidden absolute top-4 right-4 text-white/70 hover:text-white"
  aria-label="Close menu"
>
  <X className="h-5 w-5" />
</button>
```

**Auto-close on nav item click:**
- Add `onClick={() => { setActiveNav(item.id); setSidebarOpen(false); }}` to nav buttons

### 2. StatsBar Responsive Grid

**Why:** Three columns become unreadable on mobile. Single column provides breathing room.

**How to apply:** Use Tailwind responsive grid utilities.

#### Breakpoint Behavior

- **Mobile (< 640px):** 1 column - full width cards, easy to scan
- **Tablet+ (≥ 640px):** 3 columns - current layout

#### Implementation

**Change from:**
```tsx
<div className="grid grid-cols-3 gap-4">
```

**To:**
```tsx
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
```

No other changes needed - cards automatically stack vertically on mobile.

### 3. JobTable: Dual Rendering (Table/Cards)

**Why:** Tables don't work on mobile. Cards provide better touch targets and readability.

**How to apply:** Render two versions - show table on desktop, cards on mobile using Tailwind display utilities.

#### Desktop Table (≥ 1024px)

Keep existing table structure:
- Grid layout: `grid-cols-[1fr_120px_100px_120px]`
- All columns visible
- Compact action buttons

#### Mobile Cards (< 1024px)

Each job becomes a card:
- Full-width card with rounded borders
- Vertical layout for all info
- Larger touch targets (32px×32px buttons)
- Status badge inline with title

#### Implementation Structure

```tsx
export default function JobTable({ jobs, onEdit, onDelete, onToggleStatus }: JobTableProps) {
  if (jobs.length === 0) {
    // Existing empty state
  }

  return (
    <>
      {/* Desktop Table */}
      <div className="hidden lg:block overflow-hidden rounded-2xl border border-gray-100 bg-white">
        {/* Existing table code */}
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
            {/* Card content - see detailed structure below */}
          </div>
        ))}
      </div>
    </>
  );
}
```

#### Mobile Card Structure

```tsx
<div className="rounded-xl border border-gray-100 bg-white p-4">
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
    <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
      job.status === "active"
        ? "bg-green-100 text-green-700"
        : "bg-gray-100 text-gray-500"
    }`}>
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
        aria-label={job.status === "active" ? "Set inactive" : "Set active"}
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
```

### 4. ApplicationsPanel: Same Card Pattern

**Why:** ApplicationsPanel has the same table problems as JobTable. Apply consistent solution.

**How to apply:** Duplicate the desktop table / mobile cards pattern.

#### Desktop Table (≥ 1024px)

Keep existing:
- Grid: `grid-cols-[1fr_180px_110px_100px_40px]`
- Click row to open drawer
- All columns visible

#### Mobile Cards (< 1024px)

Simplified cards showing key info:
- Applicant name + avatar
- Job title
- Status badge
- Chevron indicating tappable
- Tap card to open drawer (existing behavior)

#### Implementation

```tsx
{/* Desktop Table */}
<div className="hidden lg:block overflow-hidden rounded-2xl border border-gray-100 bg-white">
  {/* Existing table header + rows */}
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
          <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${STATUS_STYLES[app.status]}`}>
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

#### Filter Row Responsive

**Change from:**
```tsx
<div className="flex flex-wrap items-center gap-3">
```

**To:**
```tsx
<div className="flex flex-col sm:flex-row sm:items-center gap-3">
```

This stacks filters vertically on mobile, horizontal on tablet+.

**Search input:**
```tsx
<div className="relative w-full sm:flex-1 sm:min-w-48">
  {/* Existing search input - now full width on mobile */}
</div>
```

**Selects:** Already work well, just stack vertically on mobile with flex-col.

### 5. Header Responsive Adjustments

**Why:** Header wastes vertical space on mobile. Reduce padding and make button more compact.

**How to apply:** Use responsive padding and conditional text rendering.

#### Padding

**Change from:**
```tsx
<header className="flex items-center justify-between border-b border-gray-200 bg-white px-8 py-4">
```

**To:**
```tsx
<header className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
```

#### Title/Subtitle

**Change from:**
```tsx
<h1 className="text-lg font-semibold text-gray-900">
```

**To:**
```tsx
<h1 className="text-base sm:text-lg font-semibold text-gray-900">
```

**Subtitle stays as-is** (already small at text-xs).

#### Add Position Button

**Desktop:** Full text + icon
**Mobile:** Icon only

```tsx
<button
  onClick={handleAdd}
  className="flex items-center gap-2 rounded-full bg-[#6320ce] px-3 sm:px-5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
>
  <Plus className="h-4 w-4" />
  <span className="hidden sm:inline">Add position</span>
</button>
```

#### Burger Menu Integration

Add burger button before title:

```tsx
<header className="flex items-center gap-3 sm:gap-4 justify-between border-b border-gray-200 bg-white px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
  {/* Burger menu - only visible on mobile/tablet */}
  <button
    onClick={() => setSidebarOpen(true)}
    className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
    aria-label="Open menu"
  >
    <Menu className="h-5 w-5" />
  </button>

  <div className="flex-1 min-w-0">
    {/* Existing title/subtitle */}
  </div>

  {activeNav === "jobs" && (
    {/* Add position button */}
  )}
</header>
```

### 6. Main Content Area Padding

**Why:** Reduce excessive padding on mobile to maximize content area.

**How to apply:**

**Change from:**
```tsx
<main className="flex-1 px-8 py-8">
```

**To:**
```tsx
<main className="flex-1 px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
```

### 7. Page Container Layout

**Why:** Sidebar overlay requires proper z-index stacking.

**How to apply:** Ensure proper structure for fixed sidebar overlay.

**Current:**
```tsx
<div className="flex min-h-screen bg-gray-50">
  <aside>...</aside>
  <div className="flex flex-1 flex-col overflow-auto">...</div>
</div>
```

**Updated:**
```tsx
<div className="flex min-h-screen bg-gray-50">
  {/* Backdrop - only on mobile when open */}
  {sidebarOpen && (
    <div 
      className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
      onClick={() => setSidebarOpen(false)}
    />
  )}

  {/* Sidebar */}
  <aside className={/* responsive classes */}>...</aside>

  {/* Main content */}
  <div className="flex flex-1 flex-col overflow-auto">...</div>
</div>
```

## Breakpoint Reference

| Breakpoint | Min Width | Usage |
|------------|-----------|-------|
| `sm:` | 640px | Stats bar 3-col, header padding increase, filter row horizontal |
| `lg:` | 1024px | Hide burger, show sidebar, switch to table view, full button text |

**Mobile-first approach:** Base styles are mobile, then progressively enhance with `sm:` and `lg:` prefixes.

## Component Changes Summary

### Files to Modify

1. **`app/admin/page.tsx`**
   - Add `sidebarOpen` state
   - Add burger button to header
   - Add backdrop component
   - Update sidebar classes for responsive behavior
   - Add close button inside sidebar
   - Update header responsive classes
   - Update main content padding

2. **`components/admin/StatsBar.tsx`**
   - Change `grid-cols-3` to `grid-cols-1 sm:grid-cols-3`

3. **`components/admin/JobTable.tsx`**
   - Wrap existing table in `<div className="hidden lg:block">`
   - Add new mobile cards view in `<div className="block lg:hidden">`
   - Both views receive same props, call same handlers

4. **`components/admin/ApplicationsPanel.tsx`**
   - Wrap existing table in `<div className="hidden lg:block">`
   - Add new mobile cards view in `<div className="block lg:hidden">`
   - Update filter row: `flex-col sm:flex-row`
   - Make search input full width on mobile: `w-full sm:flex-1`

### No Changes Needed

- **`AddJobModal.tsx`** - Already responsive (uses dialog component)
- **`ApplicationDrawer`** - Already works well on mobile (max-w-md)

## Testing Checklist

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

## Design Principles Applied

1. **Mobile-first:** Base styles target mobile, enhance for larger screens
2. **Progressive enhancement:** Functionality works at all sizes, experience improves on larger screens
3. **Touch-friendly:** Minimum 32px tap targets on mobile (buttons, cards)
4. **Content priority:** Hide/collapse navigation to maximize content area on small screens
5. **Consistency:** Same data, same actions, just optimized layout per screen size
6. **No horizontal scroll:** All content fits within viewport width
7. **Readable typography:** No text smaller than 11px, adequate line spacing

## Implementation Notes

- Use existing Tailwind breakpoints (sm: 640px, lg: 1024px)
- No new dependencies required (lucide-react already has Menu/X icons)
- No state management library needed (local useState sufficient)
- Maintain existing color scheme (#6320ce purple, #1e1040 dark purple)
- Keep all existing functionality - this is purely a layout optimization
- Empty states and error states work at all sizes (already well-designed)

## Accessibility

- Burger button has `aria-label="Open menu"`
- Close button has `aria-label="Close menu"`
- All action buttons have `aria-label` (existing)
- Focus management: trap focus in sidebar when open on mobile
- Keyboard navigation: ESC key closes sidebar
- Screen readers: sidebar state announced on toggle

## Future Enhancements (Out of Scope)

- Swipe gestures to open/close sidebar
- Persist sidebar state to localStorage
- Animated page transitions
- Pull-to-refresh
- Optimistic updates for better perceived performance
- Skeleton loading states

## Success Criteria

- All admin functionality accessible on mobile devices (375px+)
- No horizontal scrolling at any viewport size
- All touch targets meet minimum 32px size
- Stats, jobs, and applications readable without zooming
- Sidebar navigation accessible via burger menu
- Existing desktop experience unchanged
- No performance regression (no new dependencies, just CSS/markup changes)