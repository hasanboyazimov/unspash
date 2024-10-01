//component
import { Image } from "../components";

//react rounter dom
import { Link } from "react-router-dom";

//mansory
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

//global context
import { useGlobalContext } from "../hooks/useGlobalContext";

function LikedImages() {
  const { likedImages } = useGlobalContext();

  if (!likedImages.length) {
    return (
      <div className="flex items-center flex-col">
        <h1>you dont have any liked images :(</h1>
        <Link className="text-blue-500" to="/">go to the home</Link>
      </div>
    );
  }
  return (
    <div className="my-container">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="10px">
          {likedImages.length > 0 ? (
            likedImages.map((image) => {
              const { id, links, user, urls, alt_description } = image;
              return (
                <Image
                  key={id}
                  links={links}
                  user={user}
                  urls={urls}
                  alt={alt_description}
                  image={image}
                />
              );
            })
          ) : (
            <h1>No images to display</h1>
          )}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

export default LikedImages;
