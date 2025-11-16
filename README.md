<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Aya Fashion Shop — Ton élégance, notre priorité</title>
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
<style>
  :root{
    --bg:#0b0b0b;
    --card:#0f0f0f;
    --text:#f2efe9;
    --gold:#c7a878; /* or metallic gold */
    --muted:#bfb6aa;
    --accent:#1b1b1b;
  }
  *{box-sizing:border-box}
  body{
    margin:0;
    font-family:'Poppins',sans-serif;
    background:var(--bg);
    color:var(--text);
    -webkit-font-smoothing:antialiased;
  }

  /* Header */
  header{
    padding:22px 14px;
    text-align:center;
    border-bottom:1px solid rgba(199,168,120,0.08);
    background:linear-gradient(180deg, rgba(11,11,11,0.95), var(--bg));
  }
  header img{ height:90px; display:block; margin:0 auto 8px; }
  header .title{ font-size:28px; font-weight:700; color:var(--text); letter-spacing:0.6px; }
  header .slogan{ font-size:14px; color:var(--muted); margin-top:6px; }

  /* Nav */
  nav{ display:flex; gap:22px; justify-content:center; padding:14px 10px; background:transparent; }
  nav a{ color:var(--text); text-decoration:none; font-weight:600; opacity:0.95; }
  nav a:hover{ color:var(--gold); }

  /* Hero */
  .hero{
    padding:72px 20px;
    background: linear-gradient(135deg, rgba(0,0,0,0.6), rgba(8,8,8,0.4));
    text-align:center;
  }
  .hero h1{ font-size:44px; margin:0 0 8px; color:var(--text); }
  .hero p{ color:var(--muted); font-size:18px; margin:0; }

  /* Layout */
  .container{ max-width:1180px; margin:28px auto; padding:0 18px; }

  /* Categories */
  .categories{ display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:18px; margin-bottom:28px;}
  .cat{
    background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
    padding:18px; border-radius:12px; text-align:center; border:1px solid rgba(199,168,120,0.06);
  }
  .cat img{ width:100%; height:150px; object-fit:cover; border-radius:8px; display:block; margin-bottom:12px; }
  .cat h4{ margin:0; color:var(--text); font-weight:600; }

  /* Product grid */
  .products{ display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:20px; margin-bottom:34px;}
  .card{
    background:var(--card);
    padding:14px;
    border-radius:12px;
    border:1px solid rgba(199,168,120,0.06);
    transition:transform .22s ease, box-shadow .22s ease;
  }
  .card:hover{ transform:translateY(-6px); box-shadow:0 10px 30px rgba(0,0,0,0.5); }
  .thumb{
    border-radius:10px;
    overflow:hidden;
    border:1px solid rgba(199,168,120,0.14); /* cadre fin doré */
    margin-bottom:12px;
  }
  .thumb img{ width:100%; height:220px; object-fit:cover; display:block; }
  .card h3{ margin:8px 0 6px; font-size:18px; color:var(--text); }
  .price{ color:var(--gold); font-weight:700; font-size:16px; margin-bottom:10px; }
  .card p{ color:var(--muted); font-size:14px; margin:0 0 12px; }

  /* Buttons */
  .btn{
    display:inline-block;
    width:100%;
    padding:10px 12px;
    background:transparent;
    color:var(--gold);
    border:1px solid var(--gold);
    border-radius:10px;
    font-weight:600;
    cursor:pointer;
    text-align:center;
  }
  .btn.fill{
    background:linear-gradient(90deg,var(--gold), #b78e59);
    color:#0b0b0b;
    border:none;
  }

  /* Cart/checkout preview */
  .checkout{
    background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
    padding:18px; border-radius:12px; border:1px solid rgba(199,168,120,0.06);
    max-width:480px; margin:0 auto 40px;
  }
  .checkout label{ color:var(--muted); display:block; margin:10px 0 6px; font-size:14px; }
  .checkout input, .checkout select{
    width:100%; padding:10px; border-radius:8px; border:1px solid rgba(255,255,255,0.04); background:transparent; color:var(--text);
  }

  /* Footer */
  footer{
    background:linear-gradient(180deg, rgba(0,0,0,0.9), rgba(0,0,0,0.95));
    color:var(--muted); padding:28px 18px; margin-top:40px; text-align:center;
  }
  footer .links{ display:flex; gap:18px; justify-content:center; flex-wrap:wrap; margin-bottom:10px; }
  footer a{ color:var(--muted); text-decoration:none; }
  footer .small{ font-size:13px; color:rgba(191,182,170,0.8); }

  /* Responsive */
  @media(max-width:700px){
    .hero h1{ font-size:28px; }
    .thumb img{ height:160px; }
  }
</style>
</head>
<body>

<header>
  <!-- Remplace logo.png par ton vrai logo -->
  <img src="logo.png" alt="Logo Aya Fashion Shop" />
  <div class="title">Aya Fashion Shop</div>
  <div class="slogan">Ton élégance, notre priorité</div>
</header>

<nav>
  <a href="#home">Accueil</a>
  <a href="#shop">Boutique</a>
  <a href="#best">Best Sellers</a>
  <a href="#contact">Contact</a>
</nav>

<section class="hero">
  <div>
    <h1>Collection Luxe 2025</h1>
    <p>Découvrez des pièces choisies pour sublimer votre élégance.</p>
  </div>
</section>

<div class="container">

  <!-- Catégories -->
  <div class="categories" id="shop">
    <div class="cat">
      <img src="https://via.placeholder.com/800x500?text=V%C3%AAtements+enfants" alt="">
      <h4>Vêtements enfants</h4>
    </div>
    <div class="cat">
      <img src="https://via.placeholder.com/800x500?text=Sacs+%26+Accessoires" alt="">
      <h4>Sacs femmes</h4>
    </div>
    <div class="cat">
      <img src="https://via.placeholder.com/800x500?text=Chaussures" alt="">
      <h4>Chaussures</h4>
    </div>
  </div>

  <!-- Best sellers / produits -->
  <section id="best" class="products">
    <!-- Card 1 -->
    <article class="card">
      <div class="thumb"><img src="https://via.placeholder.com/800x600?text=Valise+Bordeaux+Grande" alt=""></div>
      <h3>Valise bordeaux grande</h3>
      <div class="price">60 000 FCFA</div>
      <p>Coque rigide, roulettes 360°, finition premium.</p>
      <button class="btn fill" onclick="addToCart('Valise bordeaux grande','60000')">Ajouter au panier</button>
    </article>

    <!-- Card 2 -->
    <article class="card">
      <div class="thumb"><img src="https://via.placeholder.com/800x600?text=Valisette+Rouge+Moyenne" alt=""></div>
      <h3>Valisette rouge moyenne</h3>
      <div class="price">24 500 FCFA</div>
      <p>Taille moyenne, design épuré, très résistante.</p>
      <button class="btn fill" onclick="addToCart('Valisette rouge moyenne','24500')">Ajouter au panier</button>
    </article>

    <!-- Card 3 -->
    <article class="card">
      <div class="thumb"><img src="https://via.placeholder.com/800x600?text=Ballerines+Noires" alt=""></div>
      <h3>Ballerines noires</h3>
      <div class="price">9 500 FCFA</div>
      <p>Confortables et élégantes pour toutes ocases.</p>
      <button class="btn fill" onclick="addToCart('Ballerines noires','9500')">Ajouter au panier</button>
    </article>

    <!-- Card 4 -->
    <article class="card">
      <div class="thumb"><img src="https://via.placeholder.com/800x600?text=Pagne+Baoul%C3%A9" alt=""></div>
      <h3>Pagne Baoulé authentique</h3>
      <div class="price">18 000 FCFA</div>
      <p>Tissé main, motifs traditionnels Baoulé.</p>
      <button class="btn fill" onclick="addToCart('Pagne Baoulé','18000')">Ajouter au panier</button>
    </article>

    <!-- Card 5 -->
    <article class="card">
      <div class="thumb"><img src="https://via.placeholder.com/800x600?text=Sac+%C3%A0+main+lux" alt=""></div>
      <h3>Sac à main Élégance</h3>
      <div class="price">14 000 FCFA</div>
      <p>Cuir synthétique premium, finitions dorées.</p>
      <button class="btn fill" onclick="addToCart('Sac à main Élégance','14000')">Ajouter au panier</button>
    </article>

    <!-- Card 6 -->
    <article class="card">
      <div class="thumb"><img src="https://via.placeholder.com/800x600?text=Chaussures+enfant" alt=""></div>
      <h3>Chaussures enfant sport</h3>
      <div class="price">8 000 FCFA</div>
      <p>Semelle antidérapante, confort toute la journée.</p>
      <button class="btn fill" onclick="addToCart('Chaussures enfant sport','8000')">Ajouter au panier</button>
    </article>

  </section>

  <!-- Checkout preview -->
  <div id="cart" class="checkout" style="display:none;">
    <h3 style="color:var(--text); margin:0 0 12px;">Récapitulatif de la commande</h3>
    <div id="cartList" style="margin-bottom:12px; color:var(--muted);"></div>
    <div style="font-weight:700; color:var(--gold); margin-bottom:10px;" id="cartTotal">Total : 0 FCFA</div>

    <label>Nom complet</label>
    <input id="cname" placeholder="Ton nom" />

    <label>Numéro téléphone (Mobile Money)</label>
    <input id="cphone" placeholder="+225 XX XX XX XX" />

    <label>Mode de paiement</label>
    <select id="cpay">
      <option>Wave</option>
      <option>MTN Money</option>
      <option>Orange Money</option>
      <option>Moov Money</option>
    </select>

    <button class="btn fill" onclick="placeOrder()">Valider la commande</button>
  </div>

</div>

<footer>
  <div style="max-width:980px;margin:0 auto;padding:8px;">
    <div class="links">
      <a href="#shop">Boutique</a>
      <a href="#best">Best Sellers</a>
      <a href="#contact">Contact</a>
      <a href="#shop">Promotions</a>
    </div>
    <div style="margin:8px 0;" class="small">Paiements acceptés : Wave • MTN Money • Orange Money • Moov Money — Paiements sécurisés</div>
    <div class="small">© 2025 Aya Fashion Shop — Tous droits réservés</div>
  </div>
</footer>

<script>
  // Simple cart logic (frontend demo)
  let cart = [];
  function addToCart(name, price){
    cart.push({name, price: parseInt(price)});
    renderCart();
    // show checkout area
    document.getElementById('cart').style.display = 'block';
    // mini feedback
    alert(name + ' ajouté au panier');
  }
  function renderCart(){
    const list = document.getElementById('cartList');
    list.innerHTML = '';
    let total = 0;
    cart.forEach((item, i) => {
      list.innerHTML += '<div style="padding:6px 0; border-bottom:1px solid rgba(255,255,255,0.03)">'+(i+1)+'. '+item.name+' — '+item.price+' FCFA</div>';
      total += item.price;
    });
    document.getElementById('cartTotal').innerText = 'Total : ' + total.toLocaleString() + ' FCFA';
  }

  function placeOrder(){
    const name = document.getElementById('cname').value.trim();
    const phone = document.getElementById('cphone').value.trim();
    const pay = document.getElementById('cpay').value;
    if(!name || !phone || cart.length===0){ alert('Remplis ton nom, téléphone et ajoute au moins 1 produit.'); return; }
    // Here: normally call backend to create order and generate payment instructions
    alert('Commande enregistrée ! Merci ' + name + '. Paiement via ' + pay + '.');
    // reset demo
    cart = []; renderCart();
    document.getElementById('cart').style.display='none';
    document.getElementById('cname').value=''; document.getElementById('cphone').value='';
    
