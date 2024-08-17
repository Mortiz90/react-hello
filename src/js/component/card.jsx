import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} className="card-img-top" alt="IMG" style={{ width: "100%", maxWidth: "500px", height: "325px", objectFit: "cover", margin: "auto" }} />
      <div className="card-body text-center">
        <h5 className="card-title">{props.title}Card title</h5>
        <p className="card-text">{props.content} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa repellendus labore quas? Repudiandae iure quisquam, assumenda officia dicta, vel optio, inventore modi laborum rerum placeat doloribus distinctio explicabo facilis.</p>
        <div className="btn-container">
          <button className="btn btn-primary">Find Out More</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

