import { FaShareAlt, FaRegBookmark, FaEye, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
    const { id , title, author, thumbnail_url, details, rating, total_view } = news;
    return (
        <div className="card bg-base-100 shadow-sm  ">
            {/* Author & icons */}
            <div className="flex justify-between items-center p-4 rounded-t-xl bg-gray-100">
                <div className="flex gap-3 items-center">
                    <img
                        src={author.img}
                        alt="author"
                        className="w-12 h-12 rounded-full "
                    />
                    <div>
                        <h2 className="font-semibold">{author.name}</h2>
                        <p className="text-sm text-gray-500">
                            {new Date(author.published_date).toLocaleDateString()}
                        </p>
                    </div>
                </div>

                <div className="flex gap-3 text-xl cursor-pointer">
                    <FaRegBookmark />
                    <FaShareAlt />
                </div>
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold p-4">{title}</h2>

            {/* Thumbnail */}
            <figure>
                <img src={thumbnail_url} alt="news" className="w-11/12 rounded-lg" />
            </figure>

            {/* Details */}
            <div className="p-4">
                <p className="text-gray-700">
                    {details.slice(0, 200)}...{" "}
                    <Link to={`/news-details/${id}`}  className="text-blue-600 cursor-pointer font-semibold">
                        Read More
                    </Link>
                </p>
            </div>

            {/* Rating & Views */}
            <div className="flex justify-between items-center p-4 border-t border-gray-200">
                <div className="flex items-center gap-1 text-orange-500 font-bold">
                    <FaStar />
                    {rating.number} / 5
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                    <FaEye />
                    {total_view}
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
