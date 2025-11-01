import React, {  } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const NewsDetailsCard = ({ news }) => {
    if (!news) return null; // avoid error
  
    const { image_url, title, details, author, category_id } = news;

    return (
        <div className="card bg-base-100 shadow-sm p-4  rounded-lg overflow-hidden ">

            {/* Image */}
            <figure>
                <img src={image_url} alt={title} className="w-full h-[380px] object-cover" />
            </figure>

            {/* Body */}
            <div className="p-5">

                {/* Title */}
                <h2 className="text-2xl font-bold leading-snug mb-3">
                    {title}
                </h2>

                {/* Author + date */}
                <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                        <img
                            src={author?.img}
                            className="w-10 h-10 rounded-full object-cover"
                            alt="author"
                        />
                        <div>
                            <p className="font-medium">{author?.name}</p>
                            <p>{author?.published_date}</p>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 leading-7 mb-6 whitespace-pre-line">
                    {details}
                </p>

                {/* Back button */}
            
                <Link to={`/category/${category_id}`}>
                    <button className="btn btn-secondary text-white ">
                        ← All news in this category
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default NewsDetailsCard;
