---
title: Config
description: TL constructor config
---

# Config

<span class="layer-badge">Layer 225</span>

TL name: `config`  
Constructor ID: `0xcc1a241e`  
Returns: [Config](/tl/types#config)

## Fields

| Field | Type | Description |
|---|---|---|
| `flags` | `uint32` | | 
| `default_p2p_contacts` | `bool` *(flags.3)* | | 
| `preload_featured_stickers` | `bool` *(flags.4)* | | 
| `revoke_pm_inbox` | `bool` *(flags.6)* | | 
| `blocked_mode` | `bool` *(flags.8)* | | 
| `force_try_ipv6` | `bool` *(flags.14)* | | 
| `date` | `int32` | | 
| `expires` | `int32` | | 
| `test_mode` | `bool` | | 
| `this_dc` | `int32` | | 
| `dc_options` | `[]DCOption` | | 
| `dc_txt_domain_name` | `string` | | 
| `chat_size_max` | `int32` | | 
| `megagroup_size_max` | `int32` | | 
| `forwarded_count_max` | `int32` | | 
| `online_update_period_ms` | `int32` | | 
| `offline_blur_timeout_ms` | `int32` | | 
| `offline_idle_timeout_ms` | `int32` | | 
| `online_cloud_timeout_ms` | `int32` | | 
| `notify_cloud_delay_ms` | `int32` | | 
| `notify_default_delay_ms` | `int32` | | 
| `push_chat_period_ms` | `int32` | | 
| `push_chat_limit` | `int32` | | 
| `edit_time_limit` | `int32` | | 
| `revoke_time_limit` | `int32` | | 
| `revoke_pm_time_limit` | `int32` | | 
| `rating_e_decay` | `int32` | | 
| `stickers_recent_limit` | `int32` | | 
| `channels_read_media_period` | `int32` | | 
| `tmp_sessions` | `int32` *(flags.0)* | | 
| `call_receive_timeout_ms` | `int32` | | 
| `call_ring_timeout_ms` | `int32` | | 
| `call_connect_timeout_ms` | `int32` | | 
| `call_packet_timeout_ms` | `int32` | | 
| `me_url_prefix` | `string` | | 
| `autoupdate_url_prefix` | `string` *(flags.7)* | | 
| `gif_search_username` | `string` *(flags.9)* | | 
| `venue_search_username` | `string` *(flags.10)* | | 
| `img_search_username` | `string` *(flags.11)* | | 
| `static_maps_provider` | `string` *(flags.12)* | | 
| `caption_length_max` | `int32` | | 
| `message_length_max` | `int32` | | 
| `webfile_dc_id` | `int32` | | 
| `suggested_lang_code` | `string` *(flags.2)* | | 
| `lang_pack_version` | `int32` *(flags.2)* | | 
| `base_lang_pack_version` | `int32` *(flags.2)* | | 
| `reactions_default` | `Reaction` *(flags.15)* | | 
| `autologin_token` | `string` *(flags.16)* | | 
