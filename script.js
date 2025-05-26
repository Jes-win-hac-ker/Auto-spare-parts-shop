const app = document.getElementById('app');

const content = {
  home: `<h2>Welcome to Our Auto Spare Parts Shop</h2>
         <p>Located on Kechery-Wadakanchery Road, Thrissur, Kerala.</p>`,
  about: `<h2>About Us</h2>
          <p>We’ve been serving customers with genuine auto parts for 20+ years.</p>`,
  products: `<h2>Our Products</h2>
             <div class="product">Engine Oils</div>
             <div class="product">Brake Pads</div>
             <div class="product">Air Filters</div>
             <div class="product">Suspension Kits</div>`,
  contact: `<h2>Contact Us</h2>
            <p>Phone: +91-XXXXXXXXXX</p>
            <p>Email: spares@kecheryautoparts.com</p>`,
  location: `<h2>Find Us</h2>
             <iframe src="https://www.google.com/maps?q=Kechery,+Thrissur,+Kerala&output=embed"
             width="100%" height="300" style="border:0;" allowfullscreen></iframe>`
};

function renderPage(section) {
  app.innerHTML = `
    <header>
      <h1>Auto Spare Parts - Kechery</h1>
    </header>
    <nav>
      <a href="#" onclick="renderPage('home')">Home</a>
      <a href="#" onclick="renderPage('about')">About</a>
      <a href="#" onclick="renderPage('products')">Products</a>
      <a href="#" onclick="renderPage('contact')">Contact</a>
      <a href="#" onclick="renderPage('location')">Location</a>
    </nav>
    <main>${content[section]}</main>
    <footer>&copy; 2025 Auto Spare Parts, Kechery</footer>
  `;
}

renderPage('home');
