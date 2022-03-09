import React from "react";
import TeamSlider from "../TeamSlider";
import Tranier from "../Tranier";

export default function OurTeam() {
  return (
    <>
      {" "}
      <section className="about-container">
        <h2 className="intro py-3 text-center">Meet Our Team</h2>
        <p className="para-team px-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt est
          odio autem recusandae nihil, inventore quasi. Cupiditate quidem est
          voluptas inventore nesciunt ratione, velit neque eos atque eligendi
          aut quaerat. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Ea omnis, eos enim quibusdam sit non! Quod libero tenetur iusto,
          molestiae illum similique earum accusamus natus nulla, rem odio
          consequatur itaque. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Ea rem consectetur illo. Itaque atque qui unde quod
          quasi similique sint fugiat praesentium consectetur veritatis eum ut,
          officia quibusdam architecto vel?
        </p>
      </section>
      <TeamSlider />
      
      <section className="">
        <h2 className="intro py-3 text-center"> Our Traniner</h2>
        <p className="para-team px-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt est
          odio autem recusandae nihil, inventore quasi. Cupiditate quidem est
          voluptas inventore nesciunt ratione, velit neque eos atque eligendi
          aut quaerat. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Ea omnis, eos enim quibusdam sit non! Quod libero tenetur iusto,
          molestiae illum similique earum accusamus natus nulla, rem odio
          consequatur itaque. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Ea rem consectetur illo. Itaque atque qui unde quod
          quasi similique sint fugiat praesentium consectetur veritatis eum ut,
          officia quibusdam architecto vel?
        </p>
      </section>
      <Tranier />
    </>
  );
}
