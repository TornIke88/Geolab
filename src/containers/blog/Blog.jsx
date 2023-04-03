import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="tera__blog section__padding" id="blog">
    <div className="tera__blog-heading">
      <h1 className="gradient__text">ტერასიახლეები</h1>
    </div>
    <div className="tera__blog-container">
      <div className="tera__blog-container_groupA">
        <Article imgUrl={blog01} date="Mar 9, 2023" text="Start Up ბიზნეს სესხი" />
      </div>
      <div className="tera__blog-container_groupB">
        <Article imgUrl={blog02} date="Mar 2, 2023" text="Visa-ს და ProfBeauty-ის ერთობლივი შეთავაზება ტერაბანკის მომხმარებლებისთვის " />
        <Article imgUrl={blog03} date="Feb 21,2023" text="საინვესტიციო იპოთეკური სესხი - ახალი პროდუქტი ტერაბანკისგან" />
        <Article imgUrl={blog04} date="Jan 18, 2023" text="გამორჩეული დასვენება ყაზბეგში - Visa-სა და აჭარა ჯგუფის ახალი შეთავაზება" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="1+1 - Mastercard-ისა და „პური გულიანის“ ახალი შეთავაზება" />
      </div>
    </div>
  </div>
);

export default Blog;
