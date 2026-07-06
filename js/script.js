/* ============================================================
   DATA
============================================================ */
const DISHES = [
  {id:1, name:"Chicken Kizhi Porotta", cat:"Kerala Specials", desc:"Shredded chicken roast wrapped in banana leaf with flaky porotta, steamed to soak in every spice.", price:280, rating:4.8, veg:false, spice:3, img:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=500&auto=format&fit=crop"},
  {id:2, name:"Chatti Choru", cat:"Kerala Specials", desc:"Clay-pot rice meal with a rotating spread of curries, pickle, papadam and payasam.", price:320, rating:4.7, veg:true, spice:2, img:"https://images.unsplash.com/photo-1567337710282-00832b415979?q=80&w=500&auto=format&fit=crop"},
  {id:3, name:"Kerala Meals", cat:"Kerala Specials", desc:"Classic sadhya-style thali — rice, sambar, avial, thoran and more on a banana leaf.", price:250, rating:4.6, veg:true, spice:1, img:"https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=500&auto=format&fit=crop"},
  {id:4, name:"Paal Porotta", cat:"Kerala Specials", desc:"Milk-layered porotta, soft and slightly sweet, best paired with a spicy curry.", price:60, rating:4.5, veg:true, spice:0, img:"https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=500&auto=format&fit=crop"},

  {id:5, name:"Dragon Chicken", cat:"Chicken", desc:"Wok-tossed chicken in a fiery Indo-Chinese chilli glaze, topped with spring onion.", price:260, rating:4.6, veg:false, spice:4, img:"https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=500&auto=format&fit=crop"},
  {id:6, name:"Pepper Chicken", cat:"Chicken", desc:"Dry-roasted chicken tossed in crushed black pepper and curry leaf.", price:270, rating:4.7, veg:false, spice:3, img:"https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=500&auto=format&fit=crop"},
  {id:7, name:"Chicken Roast", cat:"Chicken", desc:"Slow-roasted Kerala-style chicken in a deep coconut and roasted spice masala.", price:275, rating:4.8, veg:false, spice:3, img:"https://images.unsplash.com/photo-1631292784640-2b24be784d5d?q=80&w=500&auto=format&fit=crop"},
  {id:8, name:"Chicken Curry", cat:"Chicken", desc:"Everyday Kerala chicken curry simmered in coconut milk and kudampuli.", price:265, rating:4.6, veg:false, spice:2, img:"https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=500&auto=format&fit=crop"},

  {id:9, name:"Fish Curry", cat:"Seafood", desc:"Kingfish simmered in a tangy gamboge and coconut gravy — a Kerala household staple.", price:310, rating:4.8, veg:false, spice:3, img:"https://images.unsplash.com/photo-1626200419199-391ae4be7a41?q=80&w=500&auto=format&fit=crop"},
  {id:10, name:"Fish Fry", cat:"Seafood", desc:"Pan-seared spiced fish fillets with a crisp turmeric-chilli crust.", price:290, rating:4.7, veg:false, spice:3, img:"https://images.unsplash.com/photo-1580959375944-abcecc63c569?q=80&w=500&auto=format&fit=crop"},
  {id:11, name:"Prawns Fry", cat:"Seafood", desc:"Jumbo prawns tossed in coastal spices and shallow-fried till golden.", price:340, rating:4.9, veg:false, spice:3, img:"https://images.unsplash.com/photo-1625943913772-adecdba0d523?q=80&w=500&auto=format&fit=crop"},
  {id:12, name:"Squid Roast", cat:"Seafood", desc:"Tender squid roasted with onion, curry leaf and black pepper.", price:330, rating:4.6, veg:false, spice:3, img:"https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=500&auto=format&fit=crop"},

  {id:13, name:"Beef Fry", cat:"Beef & Mutton", desc:"Kerala's iconic beef ularthiyathu — slow-cooked, dry-roasted with coconut slivers.", price:300, rating:4.9, veg:false, spice:4, img:"https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=500&auto=format&fit=crop"},
  {id:14, name:"Beef Roast", cat:"Beef & Mutton", desc:"Rich, dark beef roast in slow-caramelised onions and roasted spice.", price:310, rating:4.8, veg:false, spice:3, img:"https://images.unsplash.com/photo-1626200926749-8a49a794f0e5?q=80&w=500&auto=format&fit=crop"},
  {id:15, name:"Mutton Curry", cat:"Beef & Mutton", desc:"Slow-braised mutton in a deep, roasted coconut masala.", price:350, rating:4.7, veg:false, spice:3, img:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=500&auto=format&fit=crop"},

  {id:16, name:"Biryani", cat:"Rice", desc:"Short-grain khyma rice layered with saffron, fried onion and a rich meat masala.", price:280, rating:4.9, veg:false, spice:2, img:"https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=500&auto=format&fit=crop"},
  {id:17, name:"Ghee Rice", cat:"Rice", desc:"Fragrant basmati rice tossed in ghee, cashew and fried onion.", price:150, rating:4.5, veg:true, spice:0, img:"https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=500&auto=format&fit=crop"},
  {id:18, name:"Fried Rice", cat:"Rice", desc:"Wok-fried rice with vegetables and your choice of egg, chicken or prawn.", price:180, rating:4.4, veg:true, spice:1, img:"https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=500&auto=format&fit=crop"},

  {id:19, name:"Appam", cat:"Bread", desc:"Lacy, fermented rice-and-coconut crepes with soft, spongy centres.", price:40, rating:4.7, veg:true, spice:0, img:"https://images.unsplash.com/photo-1630383249896-424e482df921?q=80&w=500&auto=format&fit=crop"},
  {id:20, name:"Puttu", cat:"Bread", desc:"Steamed rice flour and coconut cylinders, classic with kadala curry.", price:60, rating:4.5, veg:true, spice:0, img:"https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=500&auto=format&fit=crop"},
  {id:21, name:"Idiyappam", cat:"Bread", desc:"Steamed rice noodle nests, delicate and mild — perfect with stew.", price:50, rating:4.4, veg:true, spice:0, img:"https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=500&auto=format&fit=crop"},
  {id:22, name:"Porotta", cat:"Bread", desc:"Flaky, layered flatbread, hand-beaten and griddle-cooked to order.", price:35, rating:4.6, veg:true, spice:0, img:"https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=500&auto=format&fit=crop"},

  {id:23, name:"Mojito", cat:"Drinks", desc:"Fresh mint and lime, shaken over ice with a splash of soda.", price:120, rating:4.6, veg:true, spice:0, img:"https://images.unsplash.com/photo-1546171753-97d7676e4602?q=80&w=500&auto=format&fit=crop"},
  {id:24, name:"Lemon Tea", cat:"Drinks", desc:"Hot, honey-sweetened black tea with a bright squeeze of lemon.", price:60, rating:4.5, veg:true, spice:0, img:"https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=500&auto=format&fit=crop"},
  {id:25, name:"Fresh Juice", cat:"Drinks", desc:"Seasonal fruit juice, pressed fresh to order — ask what's in season.", price:100, rating:4.4, veg:true, spice:0, img:"https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=500&auto=format&fit=crop"},
  {id:26, name:"Lime Soda", cat:"Drinks", desc:"Sweet or salted, fizzy and ice-cold — the house welcome drink.", price:70, rating:4.5, veg:true, spice:0, img:"https://images.unsplash.com/photo-1621263764928-df1444c5e859?q=80&w=500&auto=format&fit=crop"},

  {id:27, name:"Payasam", cat:"Desserts", desc:"Slow-simmered jaggery and coconut milk pudding with roasted cashew.", price:90, rating:4.8, veg:true, spice:0, img:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=500&auto=format&fit=crop"},
  {id:28, name:"Ice Cream", cat:"Desserts", desc:"House-churned scoops — vanilla bean, mango, and roasted coconut.", price:80, rating:4.5, veg:true, spice:0, img:"https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=500&auto=format&fit=crop"},
];

const GALLERY = [
  {cat:"Food", img:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=600&auto=format&fit=crop", cap:"Chicken Kizhi Porotta"},
  {cat:"Restaurant", img:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop", cap:"Main dining hall"},
  {cat:"Ambience", img:"https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=600&auto=format&fit=crop", cap:"Evening lighting"},
  {cat:"Kitchen", img:"https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=600&auto=format&fit=crop", cap:"Open kitchen pass"},
  {cat:"Food", img:"https://images.unsplash.com/photo-1626200419199-391ae4be7a41?q=80&w=600&auto=format&fit=crop", cap:"Backwater fish curry"},
  {cat:"Events", img:"https://images.unsplash.com/photo-1519671482749-fd09be6ccebf?q=80&w=600&auto=format&fit=crop", cap:"Private celebration"},
  {cat:"Food", img:"https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=600&auto=format&fit=crop", cap:"Kerala sadhya"},
  {cat:"Restaurant", img:"https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=600&auto=format&fit=crop", cap:"Wooden interiors"},
  {cat:"Ambience", img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=600&auto=format&fit=crop", cap:"Warm table setting"},
  {cat:"Food", img:"https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop", cap:"Beef ularthiyathu"},
  {cat:"Kitchen", img:"https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=600&auto=format&fit=crop", cap:"Spice grinding"},
  {cat:"Events", img:"https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=600&auto=format&fit=crop", cap:"Family gathering"},
];

const REVIEWS = [
  {name:"Anjali R.", initial:"A", text:"The fish curry tasted exactly like my grandmother's — I haven't had Kerala food this authentic outside Kochi.", tag:"Authentic Kerala taste"},
  {name:"Vikram S.", initial:"V", text:"Staff remembered our order from last visit and got our table ready early. Genuinely warm hospitality.", tag:"Friendly staff"},
  {name:"Meera K.", initial:"M", text:"Booked a table for our anniversary — the lighting, the banana leaf service, all of it felt special.", tag:"Great ambience"},
  {name:"Rahul N.", initial:"R", text:"Ordered takeaway during a busy weekday and it was packed and ready in 15 minutes, still piping hot.", tag:"Fast service"},
  {name:"Divya P.", initial:"D", text:"₹300 for a full meals with dessert and it was more generous than places charging double.", tag:"Excellent value"},
  {name:"Arjun T.", initial:"T", text:"The beef fry alone is worth the drive across town. Order it dry-roasted, thank me later.", tag:"Authentic Kerala taste"},
];

/* ============================================================
   LOADER + SCROLL PROGRESS
============================================================ */
window.addEventListener("load", () => {
  setTimeout(() => document.getElementById("loader").classList.add("hide"), 900);
  document.querySelector(".hero").classList.add("is-ready");
});

const scrollProgress = document.getElementById("scrollProgress");
const header = document.getElementById("siteHeader");
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  const h = document.documentElement;
  const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  scrollProgress.style.width = pct + "%";
  header.classList.toggle("scrolled", h.scrollTop > 40);
  backToTop.classList.toggle("show", h.scrollTop > 600);
}, {passive:true});

backToTop.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));

/* ============================================================
   MOBILE MENU
============================================================ */
const mobileToggle = document.getElementById("mobileToggle");
const mobileMenu = document.getElementById("mobileMenu");
mobileToggle.addEventListener("click", () => mobileMenu.classList.toggle("open"));
mobileMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mobileMenu.classList.remove("open")));

/* ============================================================
   THEME TOGGLE
============================================================ */
const themeToggle = document.getElementById("themeToggle");
let theme = "light";
themeToggle.addEventListener("click", () => {
  theme = theme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme === "dark" ? "dark" : "light");
  themeToggle.querySelector("svg").innerHTML = theme === "dark"
    ? '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>'
    : '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>';
});

/* ============================================================
   REVEAL ON SCROLL
============================================================ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting){ e.target.classList.add("in"); revealObserver.unobserve(e.target);} });
}, {threshold:0.15});
document.querySelectorAll(".reveal, .reveal-stagger").forEach(el => revealObserver.observe(el));

/* ============================================================
   ANIMATED COUNTERS
============================================================ */
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimal || "0");
    let cur = 0;
    const step = target / 60;
    const tick = () => {
      cur += step;
      if (cur >= target){ el.textContent = target.toFixed(decimals); return; }
      el.textContent = cur.toFixed(decimals);
      requestAnimationFrame(tick);
    };
    tick();
    counterObserver.unobserve(el);
  });
}, {threshold:0.5});
document.querySelectorAll(".stat-num").forEach(el => counterObserver.observe(el));

/* ============================================================
   TOASTS
============================================================ */
function showToast(msg){
  const container = document.getElementById("toastContainer");
  const t = document.createElement("div");
  t.className = "toast";
  t.innerHTML = `<span class="toast-icon">✦</span><span>${msg}</span>`;
  container.appendChild(t);
  requestAnimationFrame(() => t.classList.add("show"));
  setTimeout(() => { t.classList.remove("show"); setTimeout(() => t.remove(), 500); }, 2800);
}

/* ============================================================
   RIPPLE EFFECT
============================================================ */
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", function(e){
    const rect = this.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = (e.clientX - rect.left - size/2) + "px";
    ripple.style.top = (e.clientY - rect.top - size/2) + "px";
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 650);
  });
});

/* ============================================================
   CART
============================================================ */
let cart = {};
let wishlist = new Set();

function renderCart(){
  const container = document.getElementById("cartItems");
  const ids = Object.keys(cart);
  if (!ids.length){
    container.innerHTML = `<div class="cart-empty">Your cart is empty. Add a dish from the menu to get started.</div>`;
  } else {
    container.innerHTML = ids.map(id => {
      const dish = DISHES.find(d => d.id == id);
      const qty = cart[id];
      return `<div class="cart-item">
        <img src="${dish.img}" alt="${dish.name}">
        <div class="cart-item-info">
          <h5>${dish.name}</h5>
          <span>₹${dish.price} × ${qty}</span>
          <div class="qty-control">
            <button onclick="changeQty(${id},-1)" aria-label="Decrease quantity">−</button>
            <span>${qty}</span>
            <button onclick="changeQty(${id},1)" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeItem(${id})">Remove</button>
      </div>`;
    }).join("");
  }
  const subtotal = ids.reduce((sum, id) => sum + DISHES.find(d => d.id == id).price * cart[id], 0);
  document.getElementById("cartSubtotal").textContent = "₹" + subtotal;
  document.getElementById("cartCount").textContent = ids.reduce((s,id) => s + cart[id], 0);
}
function addToCart(id){
  cart[id] = (cart[id] || 0) + 1;
  renderCart();
  const dish = DISHES.find(d => d.id == id);
  showToast(`${dish.name} added to your order`);
}
function changeQty(id, delta){
  cart[id] = (cart[id] || 0) + delta;
  if (cart[id] <= 0) delete cart[id];
  renderCart();
}
function removeItem(id){ delete cart[id]; renderCart(); }

const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
function openCart(){ cartDrawer.classList.add("open"); cartOverlay.classList.add("open"); }
function closeCart(){ cartDrawer.classList.remove("open"); cartOverlay.classList.remove("open"); }
document.getElementById("cartToggle").addEventListener("click", openCart);
document.getElementById("cartClose").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);
document.getElementById("applyCoupon").addEventListener("click", () => {
  const code = document.getElementById("couponInput").value.trim();
  if (code) showToast(code.toUpperCase() === "KERALA10" ? "10% discount applied!" : "Coupon not recognised — try KERALA10");
});
document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (!Object.keys(cart).length){ showToast("Your cart is empty"); return; }
  showToast("Redirecting to secure checkout…");
});

/* ============================================================
   MENU RENDER + FILTER + SEARCH
============================================================ */
let activeCat = "all";
let activeFilter = "all";
let searchTerm = "";
const spiceIcon = n => n === 0 ? "" : "🌶️".repeat(n);

function renderMenu(){
  const grid = document.getElementById("menuGrid");
  let items = DISHES.filter(d => {
    const matchCat = activeCat === "all" || d.cat === activeCat;
    const matchFilter = activeFilter === "all" || (activeFilter === "veg" && d.veg) || (activeFilter === "nonveg" && !d.veg) || (activeFilter === "wishlist" && wishlist.has(d.id));
    const matchSearch = d.name.toLowerCase().includes(searchTerm) || d.desc.toLowerCase().includes(searchTerm);
    return matchCat && matchFilter && matchSearch;
  });
  if (!items.length){
    grid.innerHTML = `<div class="menu-empty">No dishes match your search just yet — try another filter.</div>`;
    return;
  }
  grid.innerHTML = items.map(d => `
    <div class="dish-card">
      <div class="dish-media">
        <img src="${d.img}" alt="${d.name}" loading="lazy">
        <div class="dish-badges">
          <div class="${d.veg ? 'veg-dot' : 'veg-dot nonveg-dot'}" title="${d.veg ? 'Vegetarian' : 'Non-Vegetarian'}"></div>
          ${d.spice ? `<div class="spice-badge">${spiceIcon(d.spice)}</div>` : ""}
        </div>
        <button class="fav-btn ${wishlist.has(d.id) ? 'active' : ''}" onclick="toggleWishlist(${d.id}, this)" aria-label="Add to wishlist">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="${wishlist.has(d.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 000-7.6z"/></svg>
        </button>
      </div>
      <div class="dish-body">
        <div class="dish-top">
          <h4>${d.name}</h4>
          <div class="dish-rating">★ ${d.rating}</div>
        </div>
        <p class="dish-desc">${d.desc}</p>
        <div class="dish-bottom">
          <span class="dish-price">₹${d.price}</span>
          <button class="add-cart-btn" onclick="addToCart(${d.id})" aria-label="Add ${d.name} to cart">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </button>
        </div>
      </div>
    </div>
  `).join("");
}
function toggleWishlist(id, btn){
  if (wishlist.has(id)) wishlist.delete(id); else wishlist.add(id);
  btn.classList.toggle("active");
  btn.querySelector("svg").setAttribute("fill", wishlist.has(id) ? "currentColor" : "none");
  if (activeFilter === "wishlist") renderMenu();
}
document.getElementById("menuTabs").addEventListener("click", e => {
  const btn = e.target.closest(".menu-tab");
  if (!btn) return;
  document.querySelectorAll(".menu-tab").forEach(t => t.classList.remove("active"));
  btn.classList.add("active");
  activeCat = btn.dataset.cat;
  renderMenu();
});
document.querySelector(".menu-filters").addEventListener("click", e => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
  chip.classList.add("active");
  activeFilter = chip.dataset.filter;
  renderMenu();
});
document.getElementById("menuSearch").addEventListener("input", e => {
  searchTerm = e.target.value.toLowerCase();
  renderMenu();
});
document.getElementById("loadMoreBtn").addEventListener("click", () => {
  showToast("You're viewing the full menu already ✦");
});
renderMenu();

/* ============================================================
   GALLERY + LIGHTBOX
============================================================ */
let activeGCat = "all";
let currentLbIndex = 0;
let filteredGallery = GALLERY;

function renderGallery(){
  filteredGallery = activeGCat === "all" ? GALLERY : GALLERY.filter(g => g.cat === activeGCat);
  const grid = document.getElementById("masonryGrid");
  grid.innerHTML = filteredGallery.map((g, i) => `
    <div class="masonry-item" onclick="openLightbox(${i})">
      <img src="${g.img}" alt="${g.cap}" loading="lazy">
      <div class="masonry-overlay"><span>${g.cap}</span></div>
    </div>
  `).join("");
}
document.querySelector(".gallery-filters").addEventListener("click", e => {
  const btn = e.target.closest(".gfilter");
  if (!btn) return;
  document.querySelectorAll(".gfilter").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  activeGCat = btn.dataset.gcat;
  renderGallery();
});
renderGallery();

const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
function openLightbox(i){
  currentLbIndex = i;
  lbImg.src = filteredGallery[i].img;
  lbImg.alt = filteredGallery[i].cap;
  lightbox.classList.add("open");
}
function closeLightbox(){ lightbox.classList.remove("open"); }
document.getElementById("lbClose").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });
document.getElementById("lbPrev").addEventListener("click", () => { currentLbIndex = (currentLbIndex - 1 + filteredGallery.length) % filteredGallery.length; openLightbox(currentLbIndex); });
document.getElementById("lbNext").addEventListener("click", () => { currentLbIndex = (currentLbIndex + 1) % filteredGallery.length; openLightbox(currentLbIndex); });
document.addEventListener("keydown", e => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") document.getElementById("lbNext").click();
  if (e.key === "ArrowLeft") document.getElementById("lbPrev").click();
});

/* ============================================================
   REVIEWS RENDER
============================================================ */
document.getElementById("reviewTrack").innerHTML = REVIEWS.map(r => `
  <div class="review-card">
    <div class="review-stars">★★★★★</div>
    <p>"${r.text}"</p>
    <div class="review-user">
      <div class="review-avatar">${r.initial}</div>
      <div><strong>${r.name}</strong><span>${r.tag}</span></div>
    </div>
  </div>
`).join("");

/* ============================================================
   RESERVATION FORM
============================================================ */
document.getElementById("reservationForm").addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("rName").value;
  showToast(`Thanks ${name}! Your table request has been received.`);
  document.getElementById("tablesLiveText").textContent = "5 tables currently available for tonight";
  this.reset();
});

/* ============================================================
   CONTACT FORM
============================================================ */
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  showToast("Message sent — we'll get back to you shortly.");
  this.reset();
});

/* ============================================================
   NEWSLETTER
============================================================ */
document.getElementById("newsletterBtn").addEventListener("click", () => {
  const val = document.getElementById("newsletterInput").value;
  if (val.includes("@")){ showToast("Subscribed! Watch for our weekly specials."); document.getElementById("newsletterInput").value = ""; }
  else showToast("Please enter a valid email");
});

/* ============================================================
   COOKIE CONSENT
============================================================ */
const cookieBanner = document.getElementById("cookieBanner");
setTimeout(() => { if (!localStorage_safe_get()) cookieBanner.classList.add("show"); }, 1600);
function localStorage_safe_get(){ return window.__cookieChoiceMade; }
document.getElementById("cookieAccept").addEventListener("click", () => { window.__cookieChoiceMade = true; cookieBanner.classList.remove("show"); });
document.getElementById("cookieDecline").addEventListener("click", () => { window.__cookieChoiceMade = true; cookieBanner.classList.remove("show"); });

/* ============================================================
   FLOATING FROND DECORATIONS IN HERO
============================================================ */
(function(){
  const wrap = document.querySelector(".hero-fronds");
  wrap.setAttribute("width","100%");
  wrap.setAttribute("height","100%");
  wrap.style.position = "absolute"; wrap.style.inset = "0";
  let svgContent = "";
  const positions = [[8,20],[88,15],[15,70],[92,68],[50,10]];
  positions.forEach((p, i) => {
    svgContent += `<g style="transform-origin:center; animation: floatFrond ${5+i}s ease-in-out ${i*0.6}s infinite alternate;">
      <path d="M${p[0]}%,${p[1]}% q 3,-4 6,0 q -3,4 -6,0 Z" fill="rgba(212,175,55,0.35)"/>
    </g>`;
  });
  wrap.innerHTML = svgContent;
  const styleTag = document.createElement("style");
  styleTag.textContent = `@keyframes floatFrond{from{transform:translateY(0) rotate(0deg);} to{transform:translateY(-18px) rotate(8deg);}}`;
  document.head.appendChild(styleTag);
})();
