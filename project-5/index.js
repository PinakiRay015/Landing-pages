const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();  // Prevent form submission

    let totalPrice = 0;
    const inputs = document.querySelectorAll('input[type="text"]');
    for (const input of inputs) {
        if (input.value === '') {
            alert("Enter all the fields");
            return;  // Exit the function if any input is empty
        }
        totalPrice += parseFloat(input.value);  // Sum all input values
    }

    const sgst = totalPrice * 0.025;
    const cgst = totalPrice * 0.025;
    const finalTotal = totalPrice + sgst + cgst;

    document.getElementById('price').textContent = totalPrice.toFixed(2);
    document.getElementById('sgst').textContent = sgst.toFixed(2);
    document.getElementById('cgst').textContent = cgst.toFixed(2);
    document.getElementById('totalprice').textContent = finalTotal.toFixed(2);
});