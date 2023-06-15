<template>
  <div class="footer-parent">
    <div class="footer-col-container">

      <!-- Footer column 1 -->

      <div class="footer-col-left-generic">
        <div class="footer-col-1">
          <img
            src="../assets/buyHiveLogo.png"
            alt="buy-hive-logo"
            width="150px"
            height="auto"
          />
          <p class="footer-logo-text">
            Connecting buyers and manufacturers using the world’s best sourcing
            experts & technology built by buyers, for buyers.
          </p>
          <p class="newsletter-text">Sign Up to Our Newsletter</p>
          <div class="footer-email-input">
            <label class="footer-email-label"
              >Email<span class="email-required">*</span></label
            >
            <input type="text" name="" id="" />
          </div>
          <button class="footer-submit-button">Submit</button>
          <div class="footer-follow-container">
            <p>Follow Us:</p>
            <button class="footer-follow-linkedin">in</button>
            <button class="footer-follow-facebook">f</button>
          </div>
        </div>
      </div>
      <div class="footer-col-right-generic">
        <div class="footer-col-right-inner">

          <!-- Footer column 2 -->

          <div class="footer-col-2">
            <p class="footer-col2-about-text">About Us</p>
            <ul class="footer-col2-about" v-for="item in aboutUs">
              <li>{{ item }}</li>
            </ul>
            <p class="footer-col2-about-text">We accept</p>
          </div>

          <!-- Footer column 3 -->

          <div class="footer-col-3">
            <p class="footer-col2-about-text">Our Services</p>
            <ul class="footer-col2-about" v-for="item in ourServices">
              <li>{{ item }}</li>
            </ul>
          </div>

          <!-- Footer column 4 -->

          <div class="footer-col-4">
            <p class="footer-col2-about-text">Account</p>
            <ul class="footer-col2-about" v-for="item in account">
              <li>{{ item }}</li>
            </ul>
          </div>

          <!-- Footer column 5 -->

          <div class="footer-col-5">
            <p class="footer-col2-about-text">Our Locations</p>
            <ul class="footer-col2-about" v-for="item in ourLocations">
              <li>{{ item }}</li>
            </ul>
          </div>
        </div>

        <div class="payment-card-images">
          <img src="../assets/visa.png" alt="" />
          <img src="../assets/master.png" alt="" />
          <img src="../assets/express.png" alt="" />
          <img class="ach-image" src="../assets/ach.png" alt="" />
        </div>
      </div>
    </div>
    <div class="footer-bottom-bar-container">
      <div class="footer-bottom-bar-left">
        <p>© 2023 BuyHive Limited All Rights Reserved</p>
      </div>
      <div class="footer-bottom-bar-right">
        <p>Terms of Use</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aboutUs: [
        "Our Story",
        "How to Buy",
        "Our Partners",
        "Contact Us",
        "Careers",
        "Terms of Use",
        "Privacy Policy",
      ],
      ourServices: [
        "Expert Sourcing",
        "Contract Manufacturing",
        "Buy",
        "Financing",
      ],
      account: [
        "Sign In",
        "Register to Buy",
        "My Profile",
        "My Orders",
        "Register to Sell",
        "Become a Sourcing Expert",
      ],
      ourLocations: [
        "BuyHive Limited",
        "Dragon Industrial Bldg. Unit 8B, 93 King Lam St. Cheung Sha Wan, Kowloon, Hong Kong",
        "BuyHive USA Inc.",
        "4730 South Fort Apache Rd. Suite 300 Las Vegas, NV 89147 USA",
      ],
    };
  },
};
</script>

<style>
.footer-parent {
  background-color: #f2f2f2;
  margin: 0;
  padding: 0;
}
.footer-col-1 {
  flex: 4;
}
.footer-col-2 {
  flex: 2;
  margin-left: 50px;
}
.footer-col-3 {
  flex: 2;
  margin-left: -100px;
}
.footer-col-4 {
  flex: 2;
}
.footer-col-5 {
  flex: 1.5;
}
.footer-col-left-generic {
  flex: 2;
}
.footer-col-right-generic {
  flex: 4;
}
.footer-col-right-inner {
  display: flex;
}
.footer-col-container {
  display: flex;
  margin: 0 220px;
  padding: 100px 0 60px 0;
  border-bottom: 1px solid #000;
}
.footer-logo-text {
  color: #595757;
  line-height: 1.5em;
}
.newsletter-text {
  font-weight: 500;
  font-size: 20px;
  margin: 30px 0 15px 0;
}
.footer-email-input {
  display: flex;
  flex-direction: column;
}
.footer-email-label {
  color: #5957577c;
  font-size: 14px;
  margin-bottom: 8px;
}
.email-required {
  color: red;
}
.footer-email-input input {
  width: 300px;
  border: 1px solid #c8c5c5;
  padding: 15px;
  border-radius: 15px;
}
.footer-submit-button {
  border: 1px solid #47b3ca;
  background-color: #47b3ca;
  width: 120px;
  height: 40px;
  border-radius: 15px;
  color: #fff;
  font-size: 16px;
  margin-top: 30px;
  font-weight: bold;
  cursor: pointer;
}
.footer-follow-container {
  margin-top: 50px;
  display: flex;
}
.footer-follow-linkedin {
  font-size: 24px;
  font-weight: 900;
  margin-left: 20px;
  border-radius: 50px;
  padding: 0 20px;
  border: none;
  background-color: #dddcdc;
  cursor: pointer;
}
.footer-follow-facebook {
  font-size: 24px;
  font-weight: 900;
  margin-left: 10px;
  border-radius: 50px;
  padding: 0 28px;
  border: none;
  background-color: #dddcdc;
  cursor: pointer;
}
.footer-follow-container p {
  font-size: 20px;
}
.footer-bottom-bar-container {
  display: flex;
  justify-content: space-between;
  margin: 0 220px;
  padding: 20px 0;
  display: flex;
  color: #8b8889;
}
.footer-bottom-bar-right {
  display: flex;
  width: 250px;
  justify-content: space-around;
  cursor: pointer;
}
.footer-col2-about {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.footer-col2-about-text {
  font-size: 20px;
  font-weight: 500;
}
.footer-col2-about li {
  font-size: 17px;
  margin: 15px 0;
  color: #8b8889;
  cursor: pointer;
}
.payment-card-images {
  margin-left: 50px;
  display: flex;
  align-items: center;
}
.ach-image {
  background-color: #3564d9;
  padding: 14px 20px;
  border-radius: 5px;
  margin-left: 5px;
}
.payment-card-images img {
  margin-right: 5px;
}
@media only screen and (max-width: 1300px) {
  .footer-parent {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }
  .footer-col-container {
    margin: 0;
    padding: 50px 20px;
    display: flex;
    flex-direction: column;
  }
  .payment-card-images {
    display: none;
  }
  .footer-col-right-inner {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  .footer-bottom-bar-container {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
  }
  .footer-bottom-bar-right {
    display: flex;
    flex-direction: column;
  }
  .footer-col-2 {
    margin: 0;
  }
  .footer-col-3 {
    margin: 0;
  }
  .footer-email-input input {
    width: 50vw;
  }
}
</style>
