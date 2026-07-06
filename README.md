# Cloverdale Cuisine — Website

Authentic Kerala restaurant website for Cloverdale Cuisine, Mysuru.

## Structure
```
index.html        Main page (all sections: hero, about, menu, gallery, reservations, reviews, contact, footer)
css/styles.css     All styling — design tokens, layout, animations, responsive rules
js/script.js       All interactivity — menu data, cart, filters, search, gallery lightbox, forms, animations
```

## Run it
No build step needed. Just open `index.html` in a browser, or serve the folder with any static server, e.g.:

```
npx serve .
```
or
```
python3 -m http.server 8000
```

## What's included
- Cinematic animated hero, sticky nav with dark mode
- Full menu (28 dishes, 8 categories) with search, filters, wishlist, and a working cart drawer
- Filterable gallery with lightbox
- Reservation form, reviews, contact section with embedded map
- Floating WhatsApp/call buttons, scroll progress, toasts, cookie banner, loading screen

## What's not included (needs a real backend)
This is a front-end-only build. Cart, reservations, and reviews use in-memory JS state and reset on refresh — there is no database, authentication, payment gateway, or admin dashboard wired up. A real backend (Node/Express + MongoDB or PostgreSQL, JWT/Google auth, Razorpay/Stripe, an admin panel) would need to be built and hosted separately.

## Editing
- Menu items live in the `DISHES` array in `js/script.js`
- Gallery images live in the `GALLERY` array
- Reviews live in the `REVIEWS` array
- Colors and fonts are CSS variables at the top of `css/styles.css` (`:root`)
