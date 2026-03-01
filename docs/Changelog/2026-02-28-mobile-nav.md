# 2026-02-28 — Mobile Nav Overhaul

## Summary
Complete mobile navigation redesign — from broken accordion to premium slide-in drawer.

## Changes
- `app/components/Header.tsx` — rebuilt with Framer Motion spring drawer, sub-panel drill-down (Destinations/Essentials), hamburger→X animation, dark backdrop, pinned CTA
- `app/global.css` — scoped blanket `button { bg-orange-700 }` to `.btn` only; removed global `header { fixed }` rule; scoped `nav` styles

## Result
- Zero orange in drawer except CTA button
- Premium travel brand feel — dark `#1a1a1a` text on white, light dividers, minimal
- Verified clean via computed styles on live site

## Commits
- `ff61807` redesign: premium travel mobile nav
- `128f668` polish: pinned CTA, spring sub-panels, Escape close
- `52e71fe` fix: scope global CSS
