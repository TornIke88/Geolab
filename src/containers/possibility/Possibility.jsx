import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="tera__possibility section__padding" id="possibility">
    <div className="tera__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="tera__possibility-content">
      <h4>განახლებული ინტერნეტბანკი</h4>
      <h1 className="gradient__text"> ინტერნეტბანკი  <br />იურიდიული პირებისთვის</h1>
      <p>იურიდიული პირების ინტერნეტბანკის მოსახერხებელი ინტერფეისი და მრავალფეროვანი ფუნქციონალი ბიზნესის ყველა თანამედროვე მოთხოვნასა და საჭიროებას პასუხობს. მისი დახმარებით მომხმარებლებს მარტივად შეუძლიათ როგორც საბანკო ოპერაციების შესრულება, ისე უფლებამოსილი პირების პროფაილების მართვა. </p>
      <h4>ინტერნეტბანკის სრულყოფის პროცესი მუდმივად გრძელდება. </h4>
    </div>
  </div>
);

export default Possibility;
