<template>
    <div>
      <div class="ownership">
        <div class="sitemap-nav">
          <div class="grid-column">
              <div>ABOUT</div>
              <a href="#">About Us</a>
              <a href="#">ShopZone Stories</a>
              <a href="#">Corporate Information</a>
            </div>
          <div class="grid-column">
              <div>GROUP COMPANIES</div>
              <a href="#"  rel="noopener noreferrer" target="_blank" aria-label="Myntra">Myntra</a>
              <a href="#"  rel="noopener noreferrer" target="_blank" aria-label="Flipkart Wholesale">Flipkart Wholesale</a>
              <a href="#"  rel="noopener noreferrer" target="_blank" aria-label="Cleartrip">Cleartrip</a>
              <a href="#"  rel="noopener noreferrer" target="_blank" aria-label="Shopsy">Shopsy</a>
          </div>
          <div  class="grid-column">
              <div>HELP</div>
              <a href="#"  aria-label="Payments">Payments</a>
              <a href="#"  aria-label="Shipping">Shipping</a>
              <a href="#"  aria-label="Cancellation &amp; Returns">Cancellation &amp; Returns</a>
              <a href="#"  aria-label="FAQ">FAQ</a>
              <a href="#"  aria-label="Report Infringement">Report Infringement</a>
          </div>
          <div  class="grid-column">
              <div>CONSUMER POLICY</div>
              <a href="#"  aria-label="Cancellation &amp; Returns">Cancellation &amp; Returns</a>
              <a href="#"  aria-label="Terms Of Use">Terms Of Use</a>
              <a href="#"  aria-label="Security">Security</a>
              <a href="#"  aria-label="Privacy">Privacy</a>
              <a href="#"  aria-label="Sitemap">Sitemap</a>
              <a href="#"  aria-label="Grievance Redressal">Grievance Redressal</a>
              <a href="#"  aria-label="EPR Compliance">EPR Compliance</a>
          </div>
          <div class="grid-column">
              <div >Mail Us:</div>
              <div>
                  <p>Shopzone Internet Private Limited,</p>
                  <p>12-Buildings &amp;</p>
                  <p>Preetam Square,</p>
                  <p>Outer Ring Road,</p>
                  <p>Madurai, 625002,</p>
                  <p>Tamilnadu, India</p>
              </div>
              <div>Social:</div>
              <div class="social">
                  <div>
                      <a href="#" aria-label="Facebook">
                        <font-awesome-icon icon="fa-brands fa-facebook" />
                      </a>
                  </div>
                  <div >
                      <a href="#" aria-label="Twitter">
                        <font-awesome-icon icon="fa-brands fa-twitter" />
                      </a>
                  </div>
                  <div >
                      <a href="#" aria-label="YouTube">
                        <font-awesome-icon icon="fa-brands fa-youtube" />
                      </a>
                  </div>
              </div>
          </div>
          <div>
              <div >Registered Office Address:</div>
              <div>
                <p>Shopzone Internet Private Limited,</p>
                  <p>12-Buildings &amp;</p>
                  <p>Preetam Square,</p>
                  <p>Outer Ring Road,</p>
                  <p>Madurai, 625002,</p>
                  <p>Tamilnadu, India</p>
                  <p></p>
                  <p>Telephone: <a href="tel:8870609902">+91-8870609902</a></p>
              </div>
          </div>
      </div>
      <div class="sitemap-nav nav--secondary">
          <div>
              <a href="#" aria-label="Become a Seller"><span>Become a Seller</span></a>
          </div>
          <div>
            <a href="#" aria-label="Advertise"><span>Advertise</span></a>
          </div>
          <div>
            <a href="#" aria-label="Gift Cards"><span>Gift Cards</span></a>
          </div>
          <div>
            <a href="#" aria-label="HelpCenter"><span>HelpCenter</span></a>
          </div>
          <span>
              ©2024
              <span>ShopZone.com</span>
          </span>
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg" alt="Payment methods" />
      </div>
      </div>
  </div>
  </template>
  
  
<script>
  
</script>
  
<style scoped lang="scss">
.ownership{
    font-size: 12px;
    background-color: #222;
    color: #fff;
}

.sitemap-nav {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    padding: 40px 60px 0;
    -webkit-column-gap: 20px;
    column-gap: 20px;
    img{
      width:100%;
    }
    @media (max-width: 768px){
      grid-template-columns: repeat(2, 1fr);
      gap:10px;
      padding: 20px 10px;
    }
    @media (max-width: 500px){
      grid-template-columns: repeat(1, 1fr);
      gap:10px;
      padding: 20px 10px;
    }
}
.nav--secondary{
    background-color: #000;
}
.grid-column {
    display: inline-grid;
}

.social {
    display: flex;
    justify-content: flex-start;
    a {
       padding-right:5px;
       font-size: medium;
    }
    
}
</style>
  