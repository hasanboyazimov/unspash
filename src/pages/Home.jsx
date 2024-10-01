//custom hooks
import { useGlobalContext } from "../hooks/useGlobalContext";
import { useFetch } from "../hooks/useFetch";

//masonry
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

//components
import { Image } from "../components";

//react hooks
import { useEffect, useState } from "react";

function Home() {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isPending, error } = useFetch(
    `https://api.unsplash.com/search/photos?client_id=${
    import.meta.env.VITE_ACCESS_KEY
    }&query=flowers&page=${pageNumber}`
  );

  const { dispatch, images } = useGlobalContext();
  console.log(images);

  useEffect(() => {
    if (data) {
      console.log(data);
      dispatch({ type: "ADD_IMAGES", payload: data.results });
    }
  }, [data, dispatch]);

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="my-container">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="10px">
          {images.length > 0 ? (
            images.map((image) => {
              const { id, links, user, urls, alt_description, likedImages } = image;
              return (
                <Image
                  key={id}
                  links={links}
                  user={user}
                  urls={urls}
                  alt={alt_description}
                  image={image}
                  likedImages={likedImages}
                />
              );
            })
          ) : (
            <h1>No images to display</h1>
          )}
        </Masonry>
      </ResponsiveMasonry>
      <button
        onClick={() => {
          setPageNumber(pageNumber + 1);
        }}
        className="border py-2 w-full mt-10 hover:bg-slate-50"
      >
        Read more...
      </button>
    </div>
  );
}

export default Home;
