---
title: GlobalPrivacySettings
description: TL constructor globalPrivacySettings
---

# GlobalPrivacySettings

<span class="layer-badge">Layer 225</span>

TL name: `globalPrivacySettings`  
Constructor ID: `0xfe41b34f`  
Returns: [GlobalPrivacySettings](/tl/types#globalprivacysettings)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `archive_and_mute_new_noncontact_peers` | `bool` *(flags.0)* | | 
| `keep_archived_unmuted` | `bool` *(flags.1)* | | 
| `keep_archived_folders` | `bool` *(flags.2)* | | 
| `hide_read_marks` | `bool` *(flags.3)* | | 
| `new_noncontact_peers_require_premium` | `bool` *(flags.4)* | | 
| `display_gifts_button` | `bool` *(flags.7)* | | 
| `noncontact_peers_paid_stars` | `int64` *(flags.5)* | | 
| `disallowed_gifts` | `DisallowedGiftsSettings` *(flags.6)* | | 
