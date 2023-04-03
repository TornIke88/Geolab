import React from 'react';
import teraLogo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="tera__footer section__padding">
    <div className="tera__footer-heading">
      <h1 className="gradient__text">მიიღე  სესხი ონლაინ მარტივად</h1>
    </div>

    <div className="tera__footer-btn">
      <p>მეტის ნახვა</p>
    </div>

    <div className="tera__footer-links">
      <div className="tera__footer-links_logo">
        <img src={teraLogo} alt="tera_logo" />
        <p>თქვენი კომფორტისთვის <br /> @Terabank.</p>
      </div>
      <div className="tera__footer-links_div">
        <h4>ჩვენს შესახეხ</h4>
        <p>ბმულები</p>
        <p>სოც. მედია</p>
        <p>ვაკანსიები</p>
        <p>კონტაქტი</p>
      </div>
      <div className="tera__footer-links_div">
        <h4>კომპანია</h4>
        <p>შეგვაფასეთ </p>
        <p>ხელშეკრულებები</p>
        <p>ფილიალების ქსელი</p>
      </div>
      <div className="tera__footer-links_div">
        <h4>ტერაბანკის სათავო ოფისი</h4>
        <p>თბილისი, წმ. ქეთევან დედოფლის გამზ. 3</p>
        <p>მობილურიდან: * 50 50</p>
        <p>ელ. ფოსტა: info@terabank.ge</p>
      </div>
    </div>

    <div className="tera__footer-copyright">
      <p>@2023 Terabank.</p>
    </div>
  </div>
);

export default Footer;
