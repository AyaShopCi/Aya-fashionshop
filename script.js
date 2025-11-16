
let cart = [];
function addToCart(name, price){
  cart.push({name,price});
  renderCart();
  document.getElementById('cart').style.display='block';
}
function renderCart(){
  const list = document.getElementById('cartList');
  if(!list) return;
  list.innerHTML='';
  let total=0;
  cart.forEach((item,i)=>{
    list.innerHTML += '<div>'+(i+1)+'. '+item.name+' — '+item.price.toLocaleString()+' FCFA</div>';
    total += item.price;
  });
  document.getElementById('cartTotal').innerText = 'Total : '+total.toLocaleString()+' FCFA';
}
function placeOrder(){
  const name = document.getElementById('cname').value.trim();
  const phone = document.getElementById('cphone').value.trim();
  const pay = document.getElementById('cpay').value;
  if(!name||!phone||cart.length===0){ alert('Remplis ton nom, téléphone et ajoute au moins 1 produit.'); return; }
  alert('Commande enregistrée ! Merci '+name+'. Paiement via '+pay+'. Nous t'envoyons un message sur WhatsApp.');
  cart=[]; renderCart(); document.getElementById('cart').style.display='none';
  document.getElementById('cname').value=''; document.getElementById('cphone').value='';
}
