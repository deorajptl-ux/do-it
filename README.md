# DO IT: mobile app

Plain HTML/CSS/JS, wrapped as an Android and iOS app with Capacitor.

## 1. Cloud sharing (Supabase)
1. Create a project at supabase.com, open SQL Editor and run `supabase/schema.sql`.
2. Copy Project URL and the `anon` public key (Project Settings > API) into `js/config.js`.
Uploaded tests are then visible to everyone using the app. Results stay on each phone.

## 2. Build
```
npm install
npm run add:android      # once: creates android/ and installs the native plugin
npm run icons            # generates the app icon for Android and iOS from assets/
npm run android          # opens Android Studio -> Run, or Build > Build APK(s)
npm run add:ios          # once, on a Mac
npm run ios              # opens Xcode
```
After changing any file in `js/`, `css/` or `index.html`, run `npm run sync`.

## What the app does during a test
| | Android | iPhone |
|---|---|---|
| Do Not Disturb | Turned on automatically after the user allows "Do Not Disturb access" once; restored afterwards | Not possible for any app. Checklist tick required |
| Mobile data | Test will not start while it is on; Open Settings button; works offline | Not possible. Checklist tick required |
| Screen pinning, screen kept awake, screenshots blocked | Yes | Screen kept awake only |
| Leaving the screen recorded | Yes | Yes |

Android cannot switch mobile data off by itself (blocked for all apps since Android 5), so the app checks it and refuses to begin until the user turns it off.
Tests that are uploaded from PDF/Word need internet once, to load the file readers.

## Get the APK without installing anything
1. Create a GitHub repository and upload this whole folder (keep the `.github` folder).
2. Open the repository's Actions tab. "Build DO IT APK" runs by itself (or press Run workflow).
3. When it finishes (about 5 minutes), open the run and download `DO-IT-apk`. Unzip it and install `app-debug.apk` on the phone (allow "install unknown apps").
