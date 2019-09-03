import React, { Component } from 'react';

import article1 from './article_1.jpg';
import article2 from './article_2.jpg';
import article3 from './article_3.jpg';
import project1 from './project1.png';
import project2 from './project2.png';
import project3 from './project3.png';

const Archive = () => {
    // console.log(this.props)
    return (
      <section>
        <h2 className="black-text">Projects</h2>

        <div className="grid-wrapper articles">
          <article className="col-third">
            <img src={project1} alt="Cactus" />
            <div>
              <h3 className="black-text">Project 1 &mdash; WayFarer</h3>
              <a href="https://wayfarer-react-app.herokuapp.com/">Heroku Link</a>
              <p className="black-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel voluptate eos nisi necessitatibus aperiam dolorem ut eveniet quae dolores quisquam nulla, cumque tenetur blanditiis modi tempora excepturi error veniam suscipit dicta praesentium reiciendis illo obcaecati odit inventore minima. Pariatur facilis, excepturi! Facilis cumque dicta reiciendis nam accusantium cum pariatur sunt accusamus voluptas eaque sapiente totam dolorum nulla eligendi molestiae, quidem odit repellat temporibus quae ipsa aut placeat modi sint doloribus. Ipsum nisi veritatis, facere doloribus. Nihil veritatis corporis eaque odio.</p>
              <button src="https://github.com/nabilnassery/Wayfarer">View Source</button>
            </div>
          </article>
          <article className="col-third">
            <img src={project2} alt="Camp Fire" />
            <div>
              <h3 className="black-text">Project 2 &mdash; Adopt-A-Dog</h3>
              <a href="https://adoptadogproject123.herokuapp.com/">Heroku Link</a>
              <p className="black-text">Maiores qui doloremque suscipit molestias. Saepe omnis dolore, ipsum voluptatem quisquam eveniet repellat! Eius in vero, cum dolorem ad earum, dignissimos quasi qui obcaecati, minima, esse aliquid beatae. Placeat, adipisci temporibus suscipit neque assumenda earum perferendis autem voluptatem nostrum ipsa porro, voluptas cumque ullam et reiciendis deserunt eos aspernatur esse laudantium cum natus cupiditate nesciunt. Nostrum doloremque odio maiores, quis architecto vero unde error, obcaecati ullam esse soluta et incidunt. Totam quaerat unde doloribus inventore sapiente molestiae, rem? Dolor, est.</p>
              <button>View Source</button>
            </div>
          </article>
          <article className="col-third">
            <img src={project3} alt="Plate of Food" />
            <h3 className="black-text">Project 3 - Twitter Clone</h3>
            <a href="https://teamtwitterga.herokuapp.com/">Heroku Link</a>
            <p className="black-text">Dolore asperiores, ad nam, molestiae, fugiat numquam ut dolorum est unde eum cupiditate! Totam optio ullam enim sed ipsum molestias quod fugiat, placeat, fugit nemo saepe quidem ex asperiores excepturi rerum! Earum obcaecati non dignissimos voluptate repellendus voluptatibus ratione sit totam architecto, pariatur, amet ea. Officia nulla repellat, eius voluptatibus provident repellendus sint dolorum veniam? Amet rerum alias quas aut ratione illum voluptatem excepturi, ea saepe illo quis maxime repudiandae minus praesentium nihil quaerat ducimus reprehenderit consequatur qui?</p>
            <button>View Source</button>
          </article>
        </div>
      </section>
    )
}

export default Archive;
