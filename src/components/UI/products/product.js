import Carousel from "nuka-carousel";
import Card from "../Card/card";
// import { Carousel } from "react-responsive-carousel";
import "./product.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Stars from "../stars/star";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Product() {
  useEffect(() => {
    let el = document.querySelector("ul");
    if (el) el.style.top = "20px";
  }, []);

  const medicinesData = useSelector((sel) => sel.med);

  console.log("medicines", medicinesData.data);
  debugger;
  return (
    <div className="carousal--container">
      <div className="medicine--title">Medicines</div>
      <Carousel
        wrapAround={true}
        slidesToShow={5}
        autoplay
        renderCenterLeftControls={({ previousSlide }) => (
          <button onClick={previousSlide} className="next--btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icons--slider"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button onClick={nextSlide} className="next--btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icons--slider"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
      >
        {medicinesData.map((e) => {
          return (
            <Card key={e?.id}>
              <img src={`${e?.image}`}></img>
              <div className="description--container">
                <div className="name">{e?.product_name}</div>
                <div className="description--para">
                  {e?.product_description.length > 36
                    ? `${e?.product_description.slice(0, 37)}...`
                    : e?.product_description}
                </div>
                <div className="price">{`₹${e?.price}`}</div>
                <div className="review">
                  <Stars size={e?.product_review} />
                </div>
              </div>
            </Card>
          );
        })}
      </Carousel>
    </div>
  );
}
export default Product;
