export const messages: TranslationKeys = {

  nav_search: "Search",
  nav_library: "Library",
  nav_settings: "Settings",
  nav_upcoming: "Upcoming",

  player_setup_audiostreams: "Setting up  AudioStreams...",
  player_livestreams_hls: "Turn on HLS to listen to LiveStreams!",
  player_audiostreams_null: "No Audio Streams Found.",
  player_now_playing: "Now Playing",
  player_channel: "Channel",
  player_volume: "Volume",
  player_loop: "Loop",
  player_more: "More",
  player_play_button: "Play",
  player_play_previous: "Play previous",
  player_seek_backward: "Seek backward",
  player_seek_forward: "Seek forward",
  player_play_next: "Play next",

  upcoming_clear: "Clear",
  upcoming_shuffle: "Shuffle",
  upcoming_remove: "Remove",
  upcoming_filter: "Filter < 10:00",
  upcoming_enqueue_related: "Enqueue Related Streams",
  upcoming_info: "Upcoming streams show here",

  fetchlist_url_null: "No Channel URL provided",
  fetchlist_error: "Could not get playlistData",
  fetchlist_nonexistent: "Got error: \"The playlist does not exist.\"",

  search_placeholder: "Search or enter YT URL             CTRL+K",
  search_filter_all: "All",
  search_filter_videos: "Videos",
  search_filter_channels: "Channels",
  search_filter_playlists: "Playlists",
  search_filter_music_songs: "Songs",
  search_filter_music_artists: "Artists",
  search_filter_music_videos: "Videos",
  search_filter_music_albums: "Albums",
  search_filter_music_playlists: "Playlists",
  search_filter_sort_by: "Sort by",
  search_filter_date: "Date",
  search_filter_views: "Views",

  library_discover: "Discover",
  library_history: "History",
  library_favorites: "Favorites",
  library_listen_later: "Listen Later",
  library_featured: "Featured",
  library_collections: "Collections",
  library_playlists: "Playlists",
  library_albums: "Albums",
  library_artists: "Artists",
  library_channels: "Channels",
  library_feed: "Subscription Feed",
  library_for_you: "For You",
  library_import: "Import",
  library_export: "Export",
  library_clean: "Clean",

  list_play: "Play",
  list_enqueue: "Enqueue",
  list_import: "Import",
  list_imported: "{listTitle} has been imported to your collections.",
  list_set_title: "Set Title",
  list_clear_all: "Clear all",
  list_remove: "Remove",
  list_delete: "Delete",
  list_rename: "Rename",
  list_share: "Share",
  list_radio: "Radio",
  list_sort: "Sort",
  list_info: "Playlist, channel or your collection items show here",

  actions_menu_play_next: "Play next",
  actions_menu_enqueue: "Enqueue",
  actions_menu_start_radio: "Start radio",
  actions_menu_download: "Download",
  actions_menu_watch_ytify: "Watch ytify",
  actions_menu_watch_youtube: "Watch Youtube",
  actions_menu_view_artist: "View artist",
  actions_menu_view_lyrics: "View Lyrics",
  actions_menu_view_channel: "View channel",
  actions_menu_debug_info: "Debug information",

  collection_selector__add_to: "Add to",
  collection_selector_create_new: "Create New Collection",
  collection_selector_favorites: "Favorites",
  collection_selector_listen_later: "Listen later",

  settings_feedback_placeholder: "Anonymously enter your feedback (bugs, feature requests) here:",
  settings_feedback_submit: "Submit Feedback",
  settings_changelog: "Changelog",
  settings_clear_cache: "Clear Cache",
  settings_restore: "Restore Settings",
  settings_export: "Export Settings",
  settings_import: "Import Settings",
  settings_custom_instance: "Use Custom Instance",
  settings_links_host: "Links Host",
  settings_image_loading: "Image Loading",
  settings_image_eager: "Eager",
  settings_image_lazy: "Lazy",
  settings_image_off: "off",
  settings_download_format: "Download Format",
  settings_pwa_share_action: "PWA Share Action",
  settings_pwa_play: "Play",
  settings_pwa_download: "Download",
  settings_pwa_always_ask: "Always ask",
  settings_watch_ytify: "Watch on ytify",
  settings_search: "Search",
  settings_set_songs_as_default_filter: "Set Songs as Default Filter",
  settings_display_suggestions: "Display suggestions",
  settings_playback: "Playback",
  settings_hq_audio: "Highest Quality Audio",
  settings_codec_preference: "Codec Preference",
  settings_always_proxy_streams: "Always Proxy Streams",
  settings_stable_volume: "Prefer Stable Volume",
  settings_hls: "HTTP Live Streaming",
  settings_library: "Library",
  settings_set_as_default_tab: "Set as Default Tab",
  settings_store_discoveries: "Store Discoveries",
  settings_store_history: "Store History",
  settings_import_from_piped: "Import Playlists from Piped",
  settings_interface: "Interface",
  settings_roundness: "Roundness",
  settings_use_custom_color: "Use Custom Color",
  settings_theming_scheme: "Theming Scheme",
  settings_theming_scheme_dynamic: "Dynamic",
  settings_theming_scheme_system: "System",
  settings_theming_scheme_light: "Light",
  settings_theming_scheme_dark: "Dark",
  settings_theming_scheme_hc: "High Contrast",
  settings_theming_scheme_hc_system: "System",
  settings_theming_scheme_white: "White",
  settings_theming_scheme_black: "Black",

  settings_parental_controls: "Parental controls",
  settings_pin_toggle: "Set Up",
  settings_pin_message: "PIN is required to setup parental controls, after which the app will reload to integrate the parts manager.",
  settings_pin_prompt: "Enter PIN",
  settings_pin_incorrect: "Incorrect PIN!",

  settings_language: "Language",
  settings_custom_color_prompt: "Enter rgb in the format r,g,b",
  settings_enter_piped_api: "Enter Piped API URL :",
  settings_enter_invidious_api: "Enter Invidious API URL :",
  settings_opus_recommended: "Opus (Recommended)",
  settings_clear_discoveries: "This will clear your existing {count} discoveries, continue?",
  settings_clear_history: "This will clear {count} items from your history, continue?",
  settings_roundness_none: "None",
  settings_roundness_lighter: "Lighter",
  settings_roundness_light: "Light",
  settings_roundness_heavy: "Heavy",
  settings_roundness_heavier: "Heavier",
  settings_fullscreen: "Toggle Fullscreen",
  piped_enter_auth: "Enter the Piped Authentication Instance API URL :",
  piped_enter_username: "Enter username: ",
  piped_enter_password: "Password",
  piped_success_auth: "Successfully logged out of your piped account.",
  piped_failed_auth: "Couldn\'t logout successfully",
  piped_success_imported: "Succesfully imported playlists from your piped account into ytify as collections",
  piped_failed_imported: "Could not successfully import all playlists, Error : {e}",
  piped_success_fetched: "Succesfully fetched playlists from account.",
  piped_failed_find: "Failed to Find Playlists, Error : {e}",
  piped_failed_login: "Failed to Login, Error : {e}",
  piped_failed_token: "No Auth Token Found! Aborted Login Process.",
  piped_success_logged: "Successfully logged in to account.",
  updater_changelog_full: "Read all previous changes",
  updater_button: "Update",
  pwa_share_prompt: "Click ok to Play, click cancel to Download"
}

