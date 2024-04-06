import { CiBookmark, CiShare2 } from "react-icons/ci";
import { MdRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const NewsCard = ({ aNew }) => {
    const { title, details, rating, total_view, author, _id, image_url } = aNew;
    return (
        <div>
            <div className="rounded-md w-full border-2 mb-10">
                <div className="flex items-center justify-between p-3 bg-gray-200">
                    <div className="flex items-center space-x-2">
                        <img src={author.img} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm bg-gray-500 border-gray-700" />
                        <div className="-space-y-1">
                            <h2 className="text-sm font-semibold leading-none">leroy_jenkins72</h2>
                            <span className="inline-block text-xs leading-none text-gray-400">Somewhere</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 text-xl">
                        <CiBookmark></CiBookmark>
                        <CiShare2></CiShare2>
                    </div>
                </div>
                <div className="p-5">
                    <p className="mb-4 text-2xl">{title}</p>
                    <img src={image_url} alt="" className="object-center object-cover w-full h-72 bg-gray-500" />
                    {
                        details.length > 200 ? <>
                            <p className="mt-4">{details.slice(0, 200)}</p>
                            <Link to={`/news/${_id}`} className="text-yellow-300">Read More</Link>
                        </> : <p className="mt-4">{details}</p>
                    }
                    <div className="divider"></div>
                    <div className="flex items-center justify-between">
                        <div className="flex gap-3 items-center">
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <p>{rating.number}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <MdRemoveRedEye className="text-2xl"></MdRemoveRedEye>
                            <p>{total_view}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    aNew: PropTypes.object
}

export default NewsCard;