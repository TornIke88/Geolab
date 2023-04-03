import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatBank.css';

const WhatBank = () => (
  <div className="tera__whattera section__margin" id="wtera">
    <div className="tera__whattera-feature">
      <Feature title="#terabankბიზნესისთვის" text="თუ მეწარმე ხარ და საკუთარი ბიზნესის განვითარებისთვის ფინანსური რესურსი გჭირდება, ტერაბანკის ბიზნეს სესხი დაგეხმარება. სპეციალურად შენთვის შექმნილი, ინდივიდუალურად შენზე მორგებული პირობები, შეღავათიანი საპროცენტო განაკვეთი და ბიზნესსაქმიანობასთან დაკავშირებული ყველა საბანკო პროდუქტი ტერაბანკშია ხელმისაწვდომი." />
    </div>
    <div className="tera__whattera-heading">
      <h1 className="gradient__text">#terabankბიზნესისთვის</h1>
      <p>იხილეთ ბიბლიოთეკაში</p>
    </div>
    <div className="tera__whattera-container">
      <Feature title="ანაბრები" text="ვადიანი ანაბარი საშუალებას მოგცემს, წინასწარ განსაზღვრული ვადით განათავსო თანხა ანაბარზე და მიიღო მაღალი საპროცენტო სარგებელი." />
      <Feature title="სავაჭრო ოპერაციები" text="სავაჭრო ოპერაციების დროს გადახდების უსაფრთხოების უზრუნველყოფისთვის!" />
      <Feature title="ტარიფები" text="ბიზნეს კლიენტების ანგარიშის მომსახურების სტანდარტული პაკეტი ყოველთვიური ტარიფი - 30 ლარი" />
      <Feature title="სახელფასო" text="რასაც ისურვებ, შენი გახდება - ზღაპრულ დაპირებას  ჰგავს, მაგრამ რეალობაა." />
    </div>
  </div>
);

export default WhatBank;
