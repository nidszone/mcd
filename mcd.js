document.addEventListener('DOMContentLoaded', function () {
    const orderBtn = document.getElementById('orderBtn');
    const foodDisplay = document.querySelector('.food-display');
    const foodImage = document.getElementById('foodImage');
    const orderId = document.getElementById('orderId');
    const foodItems = document.querySelectorAll('input[name="foodItem"]');

    orderBtn.addEventListener('click', () => {
        const selectedFoodItems = Array.from(foodItems)
            .filter(item => item.checked)
            .map(item => item.value);

        if (selectedFoodItems.length === 0) {
            alert('Please select at least one food item.');
            return;
        }

        orderBtn.disabled = true;

        // Simulate order processing with a promise
        const orderPromise = new Promise((resolve) => {
            const randomSeconds = Math.floor(Math.random() * 5) + 1;
            setTimeout(() => {
                const randomFoodItem = selectedFoodItems[Math.floor(Math.random() * selectedFoodItems.length)];

                // Display the food image and order ID
                foodImage.src = `b1.jpg`;
                orderId.textContent = `Order ID: ${generateOrderId()}`;
                foodDisplay.style.display = 'block';

                resolve();
            }, randomSeconds * 1000);
        });

        orderPromise.then(() => {
            orderBtn.disabled = false;
        });
    });

    function generateOrderId() {
        return Math.floor(Math.random() * 10000);
    }
});
