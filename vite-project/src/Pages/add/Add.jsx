import React from "react";
import "./Add.scss";

const Add = () => {
  return (
    <div className="add">
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="info">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="e.g. I will do something I'm really good at"
            />
            <label htmlFor="">Category</label>
            <select name="cats" id="cats">
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <label htmlFor="">Cover Image</label>
            <input type="file" />
            <label htmlFor="">Upload Images</label>
            <input type="file" multiple />
            <label htmlFor="">Description</label>
            <textarea
              name=""
              id=""
              placeholder="Brief descriptions to introduce your service to customers"
              cols="0"
              rows="16"
            ></textarea>
          </div>
          <div className="details">
            <label htmlFor="">Price</label>
            <input type="number" />
            <label htmlFor="">Delivery Time (e.g. 3 days)</label>
            <input type="number" />
            <label htmlFor="">Add Tags</label>
            <textarea
              name=""
              id=""
              placeholder="Add tags related to your Gig"
              cols="30"
              rows="10"
            ></textarea>
            <label htmlFor="">Add Message to the Buyer</label>
            <textarea
              name=""
              id=""
              placeholder="Add a short Message to the Buyer"
              cols="30"
              rows="10"
            ></textarea>

            <label htmlFor="">Revision Number</label>
            <input type="number" />
          </div>
        </div>
        <button>Create</button>
      </div>
    </div>
  );
};

export default Add;
