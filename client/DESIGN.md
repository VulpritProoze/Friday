---
version: alpha
name: Friday Terminal
description: A minimalist, developer-themed command-line interface design system for the Friday Notes Assistant.
colors:
  primary: "#0d0e11"      # Dark obsidian console background
  secondary: "#1e222b"    # Slightly lighter terminal widget/card background
  tertiary: "#4af626"     # Bright matrix-green for interactive elements and active cursors
  neutral: "#f8fafc"      # High-contrast white for primary text/headers
  neutral-dim: "#64748b"  # Slate grey for secondary text, log timestamps, and metadata
  border: "#334155"       # Slate border color for visual grid lines
  error: "#f43f5e"        # Bright red for error logs and alerts
typography:
  headline:
    fontFamily: "JetBrains Mono, Fira Code, Courier New, monospace"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: "JetBrains Mono, Fira Code, Courier New, monospace"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.6
  console:
    fontFamily: "JetBrains Mono, Fira Code, Courier New, monospace"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.5
rounded:
  none: "0px"
  sm: "2px"
spacing:
  base: "16px"
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
components:
  input-prompt:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.tertiary}"
    rounded: "{rounded.none}"
    padding: "8px"
  terminal-panel:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.none}"
    padding: "16px"
---

# Friday Terminal Design System

## Overview

The Friday Notes Assistant design system features an **interactive developer CLI (Command Line Interface)** aesthetic. It is completely distraction-free, relying on monospaced typography, solid sharp borders, and high-contrast glowing accent colors. The UI is designed to feel fast, keyboard-centric, and highly engineered, resembling a Linux terminal or customized shell environment.

## Colors

The color palette is rooted in terminal-themed dark mode to ensure high readability and a classic hacker style.

*   **Primary (#0d0e11)**: A pitch-black obsidian background used for the main console screen.
*   **Secondary (#1e222b)**: A dark carbon slate used for modular panels (e.g., folder tree, AI log drawer).
*   **Tertiary (#4af626)**: A vibrant phosphor green used for active highlights, prompt symbols (`>`), and successful actions.
*   **Neutral (#f8fafc)**: Pure white for note titles and body content to ensure zero eye strain.
*   **Neutral-Dim (#64748b)**: Muted grey for log details, word counts, and inactive notes.

## Typography

Typography is strictly monospaced to reflect the CLI vibe.

*   **Monospace Stack**: Prioritizes `JetBrains Mono` and `Fira Code`, falling back to system `monospace`.
*   **Headlines**: Set at `20px` with bold weights for folder headings and active note titles.
*   **Body**: Regular weight at `14px` with a generous `1.6` line height to ensure readability for text blocks up to 100k characters.
*   **Console**: Compact `12px` layout for status bars, text counts, and agent thought feeds.

## Layout

The workspace follows a strict grid alignment mimicking standard multiplexed terminal layouts (like `tmux`).

*   **Layout Grid**: Left pane for folder navigation (250px), central workspace for note editing, and an optional sliding panel/drawer on the right for the AI Agent terminal.
*   **Spacing**: Built around an `8px` spacing unit to align borders and buttons consistently.

## Elevation & Depth

*   **Zero Shadows**: Dropshadows are disabled to respect the retro-flat aesthetic.
*   **Contrast borders**: Depth is achieved entirely by using `1px solid` borders (using `colors.border` or `colors.tertiary` for active focus state) and shifting background fills.

## Shapes

*   **Architectural Sharpness**: Elements default to a `0px` (`rounded.none`) corner radius. 
*   **Interactive Focus**: Inputs, buttons, and note preview cards use hard, clean rectangular cuts to reinforce the technical CLI motif.

## Components

### Input Fields
*   Designed like shell command inputs. 
*   Active state prefixes the text with a green `$` or `>` command indicator.

### Terminal Panels
*   Used for the AI Agent logs. Shows scrolling code outputs and reasoning streams in a waterfall format.

## Do's and Don'ts

*   **Do** use bright phosphor green (`colors.tertiary`) sparingly for cursors, prompts, and highlight borders.
*   **Don't** use gradients, curves, or translucent overlays that break the terminal vibe.
*   **Do** support full keyboard navigation (e.g., arrow keys or simple commands) to support the power-user experience.
