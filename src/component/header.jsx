import React from "react";

const Header = () => {
  return (
    <div>
      <body class="bg-gray-100">
        <header class="bg-white shadow-md">
          <div class="container mx-auto px-4 py-4 flex justify-between items-center">
            <div class="text-xl font-bold text-gray-800">My Website</div>
            <nav>
              <ul class="flex space-x-6 text-gray-700">
                <li>
                  <a href="#home" class="hover:text-blue-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#product" class="hover:text-blue-500">
                    Product
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main class="container mx-auto px-4 py-8">
          <section id="home" class="mb-8">
            <h1 class="text-2xl font-bold text-gray-800">
              Welcome to Home Section
            </h1>
            <p class="text-gray-600 mt-2">
              This is the home section of the page.
            </p>
          </section>
          <section id="product">
            <h1 class="text-2xl font-bold text-gray-800">Our Products</h1>
            <p class="text-gray-600 mt-2">
              Explore our range of products here.
            </p>
          </section>
        </main>
      </body>
    </div>
  );
};

export default Header;
