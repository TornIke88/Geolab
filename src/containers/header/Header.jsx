import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/handy.png';
import './header.css';

const Header = () => (
  <div className="tera__header section__padding" id="home">
    <div className="tera__header-content">
      <h1 className="gradient__text">ღია ბანკინგი ტერაბანკისგან</h1>
      <p>ღია ბანკინგით შეგიძლია, დაამატო და ნახო ყველა საბანკო ანგარიში და მათზე არსებული ნაშთები ერთ სივრცეში, აკონტროლო თითოეული ტრანზაქცია მარტივად და კომფორტულად.</p>

      <div className="tera__header-content__input">
        <input type="email" placeholder="ძიება" />
        <button type="button">შესვლა</button>
      </div>

      <div className="tera__header-content__people">
        <img src={people} />
        <p>1600 ადამიანმა მიიღო ღია ბანკინგზე წვდომა ბოლო 24 საათში</p>
      </div>
    </div>

    <div className="tera__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
