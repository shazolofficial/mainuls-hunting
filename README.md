# 🎯 Mainul's Hunting — AI Client Hunting System

AI-powered client hunting tool for professional photo editors.

**Developed by Mainul Islam**

---

## 📁 File Structure

```
mainuls-hunting/
├── index.html                        ← Main app
├── main.js                           ← Electron entry
├── package.json                      ← Build config
├── icon.png                          ← App icon (তুমি দেবে)
├── README.md
└── .github/
    └── workflows/
        └── build-release.yml         ← Auto build workflow
```

---

## 🚀 GitHub Release করার পূর্ণ গাইড

### ধাপ ১ — GitHub Account ও Repository

1. [github.com](https://github.com) এ login করো
2. উপরে ডানে **"+"** → **"New repository"**
3. Repository name: `mainuls-hunting`
4. Public বা Private — যেকোনো
5. **"Create repository"** click করো

---

### ধাপ ২ — ফাইল Upload করো

Repository-র main page-এ **"uploading an existing file"** link-এ click করো।

এই ফাইলগুলো drag & drop করো:
- ✅ `index.html`
- ✅ `main.js`
- ✅ `package.json`
- ✅ `icon.png` ← যেকোনো 256×256 PNG

তারপর `.github/workflows/` folder-এর জন্য:
1. **"Create new file"** click করো
2. File name লিখো: `.github/workflows/build-release.yml`
3. `build-release.yml` ফাইলের content paste করো
4. **"Commit new file"** click করো

---

### ধাপ ৩ — Release দাও (Build trigger হবে)

1. Repository-র ডান পাশে **"Releases"** click করো
2. **"Create a new release"** click করো
3. **"Choose a tag"** box-এ লিখো: `v1.0.0`
4. **"Create new tag: v1.0.0 on publish"** click করো
5. Release title: `Mainul's Hunting v1.0.0`
6. **"Publish release"** click করো

---

### ধাপ ৪ — Build হওয়া দেখো

Repository-তে **"Actions"** tab-এ click করো।
Build চলছে দেখবে — সবুজ হলে complete।
সময় লাগবে ~৮–১২ মিনিট।

---

### ধাপ ৫ — .exe Download করো

**"Releases"** page-এ গেলে দুটো ফাইল পাবে:

| File | ব্যবহার |
|------|---------|
| `Mainuls-Hunting-Setup.exe` | Normal installer |
| `Mainuls-Hunting-Portable.exe` | ✅ Install ছাড়াই চলবে |

> তোমার PC-তে admin restriction আছে — **Portable version** নাও।

---

## 🔄 Update করতে চাইলে

`index.html` update করে নতুন tag দাও:

```
v1.0.1 → bug fix
v1.1.0 → নতুন feature
v2.0.0 → major update
```

Releases → Edit → নতুন tag → Publish → Auto build!

---

## ✨ App Features

| Feature | বিবরণ |
|---------|-------|
| 🤖 AI Assistant | Mail draft, LinkedIn message, niche research |
| ✉️ Mail Center | AI mail → one-click Gmail open |
| 💼 LinkedIn | Connect message + follow-up generator |
| 📊 Dashboard | Daily stats, weekly chart, target progress |
| 📋 Daily Tracker | প্রতিদিনের activity log |
| 📈 Reports | Full history + CSV export |
| ⚙️ Settings | সব কিছু customize করো |

---

## ⚙️ First Time Setup

1. App open করো
2. **Settings** page-এ যাও
3. তোমার **Gmail address** দাও
4. **Skills, niche, rate** দাও
5. **Save করো**
6. **AI Assistant** থেকে কাজ শুরু করো!

---

*Developed by Mainul Islam*
