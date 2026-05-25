---
title: InputThemeSettings
description: TL constructor inputThemeSettings
---

# InputThemeSettings

<span class="layer-badge">Layer 225</span>

TL name: `inputThemeSettings`  
Constructor ID: `0x8fde504f`  
Returns: [InputThemeSettings](/tl/types#inputthemesettings)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `message_colors_animated` | `bool` *(flags.2)* | | 
| `base_theme` | `BaseTheme` | | 
| `accent_color` | `int32` | | 
| `outbox_accent_color` | `int32` *(flags.3)* | | 
| `message_colors` | `[]int32` *(flags.0)* | | 
| `wallpaper` | `InputWallPaper` *(flags.1)* | | 
| `wallpaper_settings` | `WallPaperSettings` *(flags.1)* | | 
