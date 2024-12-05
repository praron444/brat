// Rendelés kezelés
function orderProduct(productName, price) {
    alert(`A(z) ${productName} rendelése sikeres! Az összeg: ${price} Ft.`);
}

document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    
    alert(`Köszönjük a rendelést, ${name}!\nEmail: ${email}\nSzállítási cím: ${address}`);
    
    // Űrlap törlése
    document.getElementById('orderForm').reset();
});
