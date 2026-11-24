# Priyanka — Thyroid-Focused Nutritionist Landing Page

A modern, high-converting Next.js (App Router) + Tailwind CSS landing page built specifically for **Priyanka**, a Thyroid-Focused Nutritionist helping women manage thyroid symptoms, boost energy, and achieve healthy weight management through personalized nutrition.

---

## 🔗 Repository

- **GitHub Repository**: [https://github.com/connecttws/Priyanka_Landing_Page](https://github.com/connecttws/Priyanka_Landing_Page)

---

## 🎨 Design Philosophy & Color Palette

This landing page follows a refined **"lightish"** wellness aesthetic designed by a frontend engineer to look human-made, credible, and empathetic:

- **Background Canvas**: Soft ivory / porcelain pearl (`#fafaf7`).
- **Primary Accent**: Botanical therapeutic teal (`#0d9488` / `#0f766e`) with soft mint washes (`#f0fdfa`).
- **Headings & High Contrast**: Deep Forest Evergreen (`#13382e`) for high typographic contrast without harsh pure black.
- **Warm Accents**: Soft apricot/amber (`#e08338`) and blush rose (`#f43f5e`) for empathetic symptom callouts.
- **Surfaces & Cards**: Crisp white (`#ffffff`) with subtle organic borders (`#e7ede8`).

### ✒️ Typography System
- **Display Headings**: *Playfair Display* (warm editorial serif for emotional connection).
- **Body & Controls**: *Plus Jakarta Sans* (clean, modern humanist geometry for effortless reading).
- **Personal Touch**: *Great Vibes* (authentic handwritten signature for Priyanka's name).

---

## 📋 Content & Section Breakdown

1. **Sticky Header (`Navbar.tsx`)**:
   - Signature logo (*"Priyanka — Thyroid-Focused Nutritionist"*), smooth-scroll section links, slots status pill, and desktop/mobile "Book Free Consultation" triggers.
2. **Hero Section (`HeroSection.tsx`)**:
   - Primary Headline: *"Taking Thyroid Medication, But Not Feeling Like Yourself Again?"*
   - Subheadline explaining Priyanka's personalized nutrition protocol.
   - Interactive VSL Video Player with an 8-minute masterclass preview card.
   - Primary CTA: *"Book Your Free Consultation"*.
   - Reassurance Strip: *1000+ women guided | 5+ years experience | Certified Thyroid-Focused Nutritionist*.
3. **Trust & Credentials Strip (`TrustStrip.tsx`)**:
   - 5-point credibility markers (1000+ Women Guided, 5+ Years Experience, Certified Nutritionist, Zero Crash Diets, 100% Free First Call).
4. **"Sound Familiar?" Empathy Section (`SymptomsSection.tsx`)**:
   - 4 Interactive symptom deep-dives:
     - *Tired all day, even after a full night's sleep*
     - *Weight keeps climbing, no matter how clean you eat*
     - *Hair loss, dull skin, and mood swings*
     - *Your daily life seems like an impossible task*
   - Empathy Reassurance Banner:
     > *“You are not lazy. Your body is asking for help, and a tablet alone was never meant to answer all of it.”*
5. **"How It Works" Protocol (`HowItWorksSection.tsx`)**:
   - Subtitle: *"Your struggles, your story"*
   - **Phase 1: IDENTIFY** — What might be affecting you (medical panels, gut health, stress, and nutrient mapping).
   - **Phase 2: PERSONALISE** — A personalised food and lifestyle plan that fits your life and kitchen (wholesome Indian home cooking).
   - **Phase 3: SUSTAIN** — Regular follow-ups so you are never alone (weekly check-ins and WhatsApp accountability).
   - Secondary CTA: *"Book Your Free Thyroid Consultation"*.
6. **Coach Profile (`CoachProfileSection.tsx`)**:
   - Headline: *"Meet Priyanka, THYROID-FOCUSED NUTRITIONIST"*
   - **Photo Placeholder Frame**: Stylized portrait frame with nutritionist avatar, credentials badge (`5+ Years Experience`), and upload dimensions hint (`800 × 1000px`).
   - Bio highlighting her focus on root causes rather than crash diets or generic charts.
   - Mission Statement Box:
     > *“My mission is to help every woman with thyroid feel energetic, confident, and in control of her health again.”*
7. **Social Proof & Client Stories (`TestimonialSection.tsx`)**:
   - Headline: *"Real Women, Real Change"*
   - **3 Dedicated Testimonial Frames** (`[Testimonial video or screenshot 1 / 2 / 3]`):
     - `[ Testimonial Video 1 ]`: Pooja M. (34 yrs, Bengaluru) — Energy transformed from 3/10 to 9/10.
     - `[ Testimonial Screenshot 2 ]`: Neha R. (42 yrs, Delhi NCR) — 7.5 kg lost sustainably & stopped hair thinning.
     - `[ Testimonial Video 3 ]`: Shweta G. (29 yrs, Mumbai) — Thyroid + PCOS menstrual cycle normalized & brain fog cleared.
   - **Interactive Modal**: Clicking on any frame opens a preview player modal.
   - **Weekly Check-In Logs**: Dummy conversational WhatsApp check-in bubbles demonstrating real client wins.
8. **Frequently Asked Questions (`FAQSection.tsx`)**:
   - Smooth accordion addressing key patient concerns:
     - *Do I have to stop my medicine?* (No. Decided only with your doctor).
     - *How soon will I see results?* (Most notice better energy in 3 to 6 weeks).
     - *Is the consultation really free?* (Yes. 100% free with no obligation).
     - Indian food culture compatibility and thyroid-PCOS overlap.
9. **Final Conversion Section (`FinalCTASection.tsx`)**:
   - Headline: *"How many more years will you live tired and frustrated?"*
   - Subheadline: *"Take the first step today and find out what your thyroid is really telling you."*
   - Button: *"Book My Free Consultation"*.
   - Trust Guarantee: *"Your details are 100% safe. Limited slots every week."*
10. **Interactive Booking Modal (`BookingModal.tsx`)**:
    - Complete discovery intake form (Full Name, WhatsApp Number, Email, Thyroid Condition, Primary Struggle, Preferred Call Window).
    - Instant submission confirmation with WhatsApp follow-up instructions.
11. **Floating Mobile Bar**:
    - Sticky bottom bar allowing 1-click booking access from anywhere on the page.

---

## 🖼️ Favicons & Metadata System

- **Vector Favicon**: `src/app/icon.svg` & `public/icon.svg` (custom teal squircle with botanical leaf & monogram "P").
- **Legacy Fallback**: `src/app/favicon.ico` & `public/favicon.ico` (32×32 binary icon).
- **Web App Manifest**: `public/manifest.json` (`theme_color: #0d9488`, `background_color: #fafaf7`).
- **OpenGraph & Twitter**: Fully configured in `src/app/layout.tsx` for social and chat link previews.

---

## 🔄 How to Replace Placeholders with Real Client Assets

1. **Priyanka's Portrait**:
   - Place Priyanka's photo at `public/images/priyanka.jpg` (recommended 800 × 1000px).
   - In `src/components/CoachProfileSection.tsx`, update the visual container with `<Image src="/images/priyanka.jpg" ... />`.
2. **Testimonial Videos / Screenshots**:
   - Replace the video embeds or screenshot cards in `src/components/TestimonialSection.tsx` with your direct YouTube/Wistia/Vimeo video embed links or client screenshot images.
3. **VSL Masterclass Video**:
   - In `src/components/HeroSection.tsx`, replace the video iframe `src` with your Wistia, Vimeo, or YouTube embed link.

---

## 📁 Project Structure

```text
Priyanka_Landing_Page/
├── public/
│   ├── favicon.ico         # 32x32 binary icon
│   ├── favicon.svg         # Vector favicon
│   ├── icon.svg            # Retina icon
│   ├── manifest.json       # PWA / Web app manifest
│   └── images/             # Upload folder for real client images
├── src/
│   ├── app/
│   │   ├── favicon.ico     # Next.js App Router icon
│   │   ├── globals.css     # Tailwind v4 theme tokens
│   │   ├── icon.svg        # Next.js automatic vector route
│   │   ├── layout.tsx      # Fonts, OpenGraph, viewport, and head
│   │   └── page.tsx        # Landing page layout & modal state
│   └── components/
│       ├── BookingModal.tsx        # Consultation modal form
│       ├── CoachProfileSection.tsx # Priyanka profile & photo frame
│       ├── FAQSection.tsx          # Interactive FAQ accordion
│       ├── FinalCTASection.tsx     # Closing conversion section
│       ├── Footer.tsx              # Light clinical footer
│       ├── HeroSection.tsx         # Headline, subhead, VSL & CTA
│       ├── HowItWorksSection.tsx   # 3-step personalized protocol
│       ├── Navbar.tsx              # Sticky header with quick actions
│       ├── SymptomsSection.tsx     # "Sound Familiar?" cards & truth quote
│       ├── TestimonialSection.tsx  # Video/screenshot frames & dummy testis
│       └── TrustStrip.tsx          # Credentials & social proof strip
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies
├── postcss.config.mjs      # Tailwind v4 postcss setup
└── tsconfig.json           # TypeScript configuration
```

---

## 🚀 Running Locally

```bash
# Navigate to the project directory
cd "C:\Users\ashis\Desktop\Our TWS\Priyanka_Landing_Page"

# Start development server
npm run dev

# Or build and launch production server
npm run build
npm run start
```
