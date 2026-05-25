---
title: ThemeSettings
description: TL constructor themeSettings
---

# ThemeSettings

<span class="layer-badge">Layer 225</span>

TL name: `themeSettings`  
Constructor ID: `0xfa58b6d4`  
Returns: [ThemeSettings](/tl/types#themesettings)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `message_colors_animated` | `bool` *(flags.2)* | | 
| `base_theme` | `BaseTheme` | | 
| `accent_color` | `int32` | | 
| `outbox_accent_color` | `int32` *(flags.3)* | | 
| `message_colors` | `[]int32` *(flags.0)* | | 
| `wallpaper` | `WallPaper` *(flags.1)* | | 
