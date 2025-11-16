
   const cupcakeCards = document.querySelectorAll('.cupcake-card');

   const cupcakeModalEl   = document.getElementById('cupcakeModal');
   const cupcakeModal     = new bootstrap.Modal(cupcakeModalEl);
   const modalTitle       = document.getElementById('cupcakeModalLabel');
   const modalImg         = document.getElementById('modalCupcakeImg');
   const modalDescription = document.getElementById('modalDescription');
   const modalIngredients = document.getElementById('modalIngredients');

   cupcakeCards.forEach(card => {
     card.addEventListener('click', () => {
       const name        = card.dataset.name || 'Cupcake';
       const description = card.dataset.description || 'Description coming soon.';
       const ingredientsStr = card.dataset.ingredients || '';
       const imgEl       = card.querySelector('.cupcake-img');

  
       modalTitle.textContent = name;
       modalImg.src = imgEl ? imgEl.src : '';
       modalImg.alt = name;
       modalDescription.textContent = description;

       // Build ingredients list (used AI to help with this part)
       modalIngredients.innerHTML = '';
       ingredientsStr.split('|').forEach(item => {
         const trimmed = item.trim();
         if (trimmed.length > 0) {
           const li = document.createElement('li');
           li.textContent = trimmed;
           modalIngredients.appendChild(li);
         }
       });

       cupcakeModal.show();
     });
   });

   // Prevent cupcake card click when Add to Cart button is pressed (had AI help make it so that if the order button is clicked it dosn't show the ingrediants)
document.querySelectorAll('.order-button').forEach(btn => {
  btn.addEventListener('click', (event) => {
    event.stopPropagation();  // <-- stops the modal from opening
  });
});
