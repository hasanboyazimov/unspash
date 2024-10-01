//react icons
import { FaRegHeart } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";

//context
import { useGlobalContext } from "../hooks/useGlobalContext";

//toaster
import { toast } from "react-toastify";

function Image({ links, user, urls, alt, image }) {
  const { dispatch, likedImages,  } = useGlobalContext();

  const addLikedImage = (image) => {
    const alreadyAdded = likedImages.some((img) => img.id == image.id);

    if (!alreadyAdded) {
      dispatch({ type: "ADD_LIKED_IMAGE", payload: {...image, leked: true} });
    } else {
      toast.arguments("image already added!")
    }
  };
  return (
    <div className="relative group">
      <span
        onClick={() => {
          addLikedImage(image);
        }}
        className="right-3 top-3 image-hover"
      >
        <FaRegHeart style={{color: likedImages ? "red" : "white"}} />
      </span>
      <img
        className="rounded"
        src={urls.regular}
        alt={alt}
        style={{ width: "100%", display: "block" }}
        
      />
      <span className="image-hover left-3 bottom-3 rounded-full">
        <img className="rounded-full" src={user.profile_image.large} alt="" />
      </span>
      <p className="image-hover right-16 bottom-3 border-none w-full">
        {user.name}
      </p>
      <span className="image-hover right-3 bottom-3">
        <a
          href={links.download + "&force=true"}
          rel="nofollow"
          download
          target="_blank"
        >
          <IoMdDownload />
        </a>
      </span>
    </div>
  );
}

export default Image;
