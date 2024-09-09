function App() {
  return (
      <div className="app">
        <section id="content">
          <header>
            <div>
              <h1>Shop Mart</h1>
              <div>
              <button className="icon-btn">
                <span>&#129293;</span>
                <span className="badge">3</span>
              </button>
                <button className="icon-btn">
                  <span>&#128722;</span>
                  <span className="badge">1</span>
                </button>
              </div>
            </div>

            <div>
              <nav>
                <button>Home</button>
                <button>Catalog</button>
                <button>All products</button>
                <button>Wishlist</button>
              </nav>
              <form>
                <input type="search" placeholder="search"/>
                <button type="button">Go</button>
              </form>
            </div>
          </header>
          <main>

            <div className="product">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Reebok_Royal_Glide_Ripple_Clip_shoe.jpg/640px-Reebok_Royal_Glide_Ripple_Clip_shoe.jpg" alt="shoes"/>
              <p className="pr-name">Awesome Shoes</p>
              <p className="pr-price">$25</p>
            </div>

            <div className="product">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Shirt%2C_men%27s_%28AM_2015.44.1-1%29.jpg/640px-Shirt%2C_men%27s_%28AM_2015.44.1-1%29.jpg" alt="shirt"/>
              <p className="pr-name">Stylish Shirt</p>
              <p className="pr-price">$28</p>
            </div>

            <div className="product">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Pelle_Pelle_Original_White_Leather_Jacket_-_52745902021.jpg/640px-Pelle_Pelle_Original_White_Leather_Jacket_-_52745902021.jpg" alt="jacket"/>
              <p className="pr-name">Windbraker Jacket</p>
              <p className="pr-price">$45</p>
            </div>
            
            <div className="product">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Slim_Leg_Jeans_f%C3%BCr_Damen.jpg/640px-Slim_Leg_Jeans_f%C3%BCr_Damen.jpg" alt="jeans"/>
              <p className="pr-name">Women's Jeans</p>
              <p className="pr-price">$35</p>
            </div>

            <div className="product">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Foldable_Phones.jpg/640px-Foldable_Phones.jpg" alt="smart phone"/>
              <p className="pr-name">Smart phone</p>
              <p className="pr-price">$1080</p>
            </div>

            <div className="product">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/ElectricBlender.jpg/640px-ElectricBlender.jpg"/>
              <p className="pr-name">Blender</p>
              <p className="pr-price">$18</p>
            </div>
          </main>
        </section>
        <footer>
          <div>
            <h3>Who we are</h3>
            <ul>
              <li><a href="">About us</a></li>
              <li><a href="">Contact us</a></li>
              <li><a href="">Sell with us</a></li>
            </ul>
          </div>

          <div>
            <h3>Policies</h3>
            <ul>
              <li><a href="">Return policies</a></li>
              <li><a href="">Shipping policies</a></li>
              <li><a href="">Terms of service</a></li>
            </ul>
          </div>

          <div>
            <h3>Our products</h3>
            <ul>
              <li><a href="">Home Page</a></li>
              <li><a href="">Search</a></li>
              <li><a href="">Catalog</a></li>
            </ul>
          </div>
        </footer>
      </div>
  );
}

export default App;
