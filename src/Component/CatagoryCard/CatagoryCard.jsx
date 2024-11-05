import React from 'react';
import { MdCommentBank } from "react-icons/md";

const CatagoryCard = ({category}) => {
    const {logo,category_name,availability}=category
    return (
        <div className=''>
            <div className="card border card-compact bg-base-100  shadow-xl">
  <figure>
      <p className='w-20'><MdCommentBank></MdCommentBank></p>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{category_name}</h2>
    <p>{availability}</p>
  </div>
</div>
        </div>
    );
};

export default CatagoryCard;