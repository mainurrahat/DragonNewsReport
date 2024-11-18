import React from "react";
import { FaStar, FaEye, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
  console.log(news);

  // Ensure default or fallback values for destructured properties
  const author = news?.author || {};
  const thumbnail = news?.thumbnail_url || "https://via.placeholder.com/150";
  const title = news?.title || "No title available";
  const details = news?.details || "No details available";
  const rating = news?.rating?.number || "N/A";
  const totalView = news?.total_view || "N/A";

  return (
    <div className="max-w-md bg-white rounded-lg shadow-md overflow-hidden border-4 mx-auto px-5">
      {/* Author Section */}
      <div className="flex items-center p-4">
        <img
          src={author.img || "https://via.placeholder.com/50"}
          alt={author.name || "Unknown Author"}
          className="w-12 h-12 rounded-full"
        />
        <div className="ml-3">
          <h3 className="font-semibold">{author.name || "Anonymous"}</h3>
          <p className="text-sm text-gray-500">
            {author.published_date || "Unknown date"}
          </p>
        </div>
        <button className="ml-auto text-gray-500 hover:text-gray-700">
          <FaShareAlt />
        </button>
      </div>

      {/* Thumbnail Image */}
      <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />

      {/* Content Section */}
      <div className="p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm text-gray-600 mt-2">
          {details.length > 100 ? details.slice(0, 100) + "..." : details}
        </p>
        <button className="mt-3 text-blue-600 hover:underline">
          Read More
        </button>
      </div>

      {/* Footer Section */}
      <div className="p-4 flex items-center justify-between text-gray-500">
        <div className="flex items-center">
          <FaStar className="text-yellow-400" />
          <span className="ml-1">{rating}</span>
        </div>
        <div className="flex items-center">
          <FaEye />
          <span className="ml-1">{totalView}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

// {
//     "_id": "0282e0e58a5c404fbd15261f11c2ab6b",
//     "others_info": {
//         "is_todays_pick": false,
//         "is_trending": true
//     },
//     "category_id": "03",
//     "rating": {
//         "number": 4.5,
//         "badge": "Excellent"
//     },
//     "total_view": 488,
//     "title": "Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet",
//     "author": {
//         "name": "Jimmy Dane",
//         "published_date": "2022-08-24 17:27:34",
//         "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
//     },
//     "thumbnail_url": "https://i.ibb.co/QnwC4sG/unsplash-Eh-Tc-C9s-YXsw-11.png",
//     "image_url": "https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png",
//     "details": "Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.'The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2."
// }
