# 🔄 Cache Fix - See Polygon Shapes

If you're still seeing circles instead of polygons, the browser is showing you a cached (old) version of the site.

## Quick Fix Options

### Option 1: Hard Refresh (Fastest)
**Windows/Linux:**
- Press `Ctrl + Shift + R`
- Or `Ctrl + F5`

**Mac:**
- Press `Cmd + Shift + R`

### Option 2: Clear Service Worker Cache
1. Open DevTools (`F12`)
2. Go to **Application** tab
3. Click **Service Workers** (left sidebar)
4. Click **Unregister** next to the service worker
5. Click **Cache Storage** (left sidebar)
6. Right-click each cache → Delete
7. Close DevTools
8. Hard refresh (`Ctrl + Shift + R`)

### Option 3: Private/Incognito Mode
1. Open new **Incognito/Private** window
2. Go to `http://localhost:8000`
3. Should see polygons immediately

### Option 4: Clear Browser Data
1. Press `Ctrl + Shift + Delete`
2. Select "Cached images and files"
3. Time range: "All time"
4. Click "Clear data"
5. Refresh page

## What Changed

The service worker version has been bumped to `v1.0.1` which will:
- ✅ Automatically clear old caches
- ✅ Load fresh script.js with polygon data
- ✅ Update all cached assets

## Verify Polygons Loaded

After clearing cache, you should see:
- ✅ **Boot-shaped Italy** (not a circle)
- ✅ **Mediterranean islands** (Sicily, Sardinia, Corsica)
- ✅ **Realistic province shapes** (Gallia, Hispania, etc.)
- ✅ **Golden borders** on new expansion territories

## Check Console for Confirmation

Open Console (F12 → Console tab) and look for:
```
✅ ServiceWorker registered successfully
🗺️ Loaded period: [year] with [X] polygon territories
```

If you see `polygon` in the console logs, you're using the new version!

## Still Having Issues?

1. **Check you're on localhost:8000** (not a different port)
2. **Close all tabs** with the site open
3. **Restart browser** completely
4. **Try different browser** (if Chrome isn't working, try Edge or Firefox)

## Technical Details

The polygon data is in `script.js` starting at line 169:
```javascript
territories: [
    {
        type: 'polygon',
        name: 'Italia',
        coords: [[44.5, 11.0], [44.5, 13.5], ...]
    }
]
```

All 20 historical periods have been converted to this format!
