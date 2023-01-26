import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-title">
        <span>Contact</span>
      </div>
      <div className="footer-details">
        <div className="footer-phone">
          <i class="bi bi-telephone-fill"></i>{" "}
          <span className="phone">+48 000 000 000</span>
        </div>

        <div className="work">
          <div className="work-days">
            <span>mon - fri:</span>
            <span>sat - sun:</span>
          </div>
          <div className="work-hours">
            <span>09:00 - 20:00</span>
            <span>10:00 - 18:00</span>
          </div>
        </div>
        <div className="footer-mail">
          <i class="bi bi-envelope-fill"></i>
          <span> example@example.pl</span>
        </div>
      </div>
      <div className="footer-social">
        <i class="bi bi-facebook"></i>
        <i class="bi bi-instagram"></i>
        <i class="bi bi-tiktok"></i>
        <i class="bi bi-twitter"></i>
      </div>
    </footer>
  );
}
