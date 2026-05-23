# Storyboard Studio

Storyboard Studio is a browser-based storyboard tool built for animators, directors, indie teams, and anyone who has ever opened five different apps just to make a simple animatic.

You can draw panels, build timelines, add audio, export videos, and present boards directly from your browser. No installs, no subscriptions, no giant software package trying to launch twelve background processes for no reason.

It is still in beta, but it is already very usable and constantly improving.

---

# Features

## Main Editor

* Upload images or draw panels from scratch
* Add shot type, action, dialogue, and notes to every panel
* Drag panels around to reorder them
* Duplicate and delete panels instantly
* Export individual panels as PNGs
* Undo and redo support for edits

## Draw Mode

* Pen, bezier, line, rectangle, ellipse, and arrow tools
* Lasso and selection tools with rotate and scale controls
* Layer system for roughs, clean drawings, and backgrounds
* Stabilizer for smoother linework
* Fill bucket, eraser, and opacity controls
* Import images, PSDs, and GIFs
* Onion skinning support
* Export crop guides for safer framing

## Pro Mode

* Multi-track timeline with panel clips and audio
* Drag, trim, split, and duplicate clips
* Snap-to-edge editing and ripple delete
* Mute and solo controls for audio tracks
* Waveform previews
* Timecode burn-in support
* Synced playback
* Export as MP4, VP9 WebM, or VP8 WebM

## Export Options

* PDF export with optional compression
* PNG ZIP export with every panel separated
* Animatic video export with audio baked in
* SRT subtitle export from dialogue fields
* Individual panel PNG export

## Presentation Mode

* Fullscreen storyboard playback
* Displays dialogue and shot information during presentations
* Navigate with arrow keys or mouse clicks
* Press `Esc` to exit presentation mode

---

# Getting Started

Open the website and start boarding.

```txt id="w6c2lg"
https://kxleystudios.github.io/storyboard-studio/
```

No account required.

For proper project saving, use **Save .storyboard**. This keeps your timeline and audio intact. Browser autosave exists as a backup, but audio will not persist between sessions because browser storage limits are annoyingly small.

---

Opening `index.html` directly usually breaks offline support because service workers require HTTP.

---

# File Structure

Most of the app runs directly through the main files now, which honestly makes the project way easier to manage compared to digging through fifty JavaScript folders trying to remember where one button lives.

---

# Keyboard Shortcuts

Press `?` anywhere in the app to open the full shortcut list.

| Action         | Shortcut             |
| -------------- | -------------------- |
| Undo           | Ctrl/Cmd + Z         |
| Redo           | Ctrl/Cmd + Shift + Z |
| Play/Pause     | Space                |
| Split Clip     | Ctrl/Cmd + B         |
| Copy Clip      | Ctrl/Cmd + C         |
| Cut Clip       | Ctrl/Cmd + X         |
| Paste Clip     | Ctrl/Cmd + V         |
| Delete Clip    | Delete / Backspace   |
| Fit Timeline   | F                    |
| Open Shortcuts | ?                    |

---

# Offline Support

Storyboard Studio works as a Progressive Web App.

On Chrome and Edge, you can install it directly from the address bar. On iPhone and iPad, use Share → Add to Home Screen.

Once installed, the app works offline after the first load.

Which is useful because creative motivation tends to appear exactly when your internet decides to stop existing.

---

# Known Limitations

* Browser autosave does not store audio because of localStorage limits
* Older Safari versions may struggle with VP9 and VP8 exports
* Pro Mode is still actively being worked on, so extremely large timelines can occasionally behave unpredictably

If something starts acting weird, refreshing the page usually fixes it.

---

# Support

If Storyboard Studio has been useful to you and you want to support development:

```txt id="j2v9hf"
https://ko-fi.com/starstudiosproductionco
```

Feedback, bug reports, and feature requests are always welcome.
