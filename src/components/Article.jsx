import React from "react";
import Fashion1 from "../img/Fashion-Pic-1.png";

function Article() {
  return (
    <article id="blog-1">
      <h2>11/12/20</h2>
      <h1>On the Street in Brooklyn</h1>
      <img src={Fashion1} alt="Fashion Blog 1" />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet provident
        illo fugit corporis, architecto cum sunt aut quaerat soluta obcaecati
        debitis nisi, cumque fuga tenetur minus aliquam et porro quis quam
        repudiandae, assumenda laudantium. Iste magnam veniam sed placeat neque
        corporis in expedita, recusandae odio quaerat mollitia explicabo
        possimus perspiciatis voluptatum at rem? Sapiente eos necessitatibus
        nulla sit quaerat veniam commodi adipisci error placeat facilis
        expedita, totam doloribus ab, minus iusto nesciunt modi vitae autem
        eligendi inventore dolores accusantium excepturi aut repudiandae? Ad
        nihil tempora incidunt minus nam ullam eius. Mollitia aliquid, officiis
        ea eaque molestias dignissimos accusamus. Aspernatur, tempore?
      </p>

      <a class="continues" href="#">
        Continues...
      </a>
    </article>
  );
}

export default Article;
