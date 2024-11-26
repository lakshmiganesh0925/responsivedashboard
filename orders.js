const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const themeToggler = document.querySelector('.theme-toggler'); // Fix: Use querySelector

// Open side menu
menuBtn.addEventListener("click", () => {
    sideMenu.style.display = 'block';
});

// Close side menu
closeBtn.addEventListener("click", () => {
    sideMenu.style.display = 'none';
});

// Theme toggler
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});

// Orders data
const Orders = [
    { productName: 'Foldable Mini Drone', productNumber: '85631', paymentStatus: 'Due', shipping: 'Pending' },
    { productName: 'Drone with Camera Drone', productNumber: '96996', paymentStatus: 'Paid', shipping: 'Delivered' },
    { productName: 'Foldable Mini Drone', productNumber: '85631', paymentStatus: 'Due', shipping: 'Pending' },
    { productName: 'Drone with Camera Drone', productNumber: '96996', paymentStatus: 'Paid', shipping: 'Delivered' },
    { productName: 'Foldable Mini Drone', productNumber: '85631', paymentStatus: 'Due', shipping: 'Pending' },
    { productName: 'Drone with Camera Drone', productNumber: '96996', paymentStatus: 'Paid', shipping: 'Delivered' },
    { productName: 'Foldable Mini Drone', productNumber: '85631', paymentStatus: 'Due', shipping: 'Pending' },
    { productName: 'Drone with Camera Drone', productNumber: '96996', paymentStatus: 'Paid', shipping: 'Delivered' }
];

// Append orders to table
const tableBody = document.querySelector('table tbody'); // Ensure the table body exists
if (tableBody) {
    Orders.forEach(order => {
        const tr = document.createElement('tr');
        const trContent = `
            <td>${order.productName}</td>
            <td>${order.productNumber}</td>
            <td>${order.paymentStatus}</td>
            <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'Pending' ? 'warning' : 'primary'}">${order.shipping}</td>
            <td class="primary">Details</td>
        `;
        tr.innerHTML = trContent;
        tableBody.appendChild(tr);
    });
} else {
    console.error('Table body element not found!');
}
