// import Image from "next/image";
// import Link from 'next/link'
// import { request } from "@/server/request";

// import Link from "next/link";
// import Image from "next/image";
// import Slider from "react-slick";

import { Image } from "antd";
import { request } from "../../../server/request";

import { Carousel } from "antd";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

async function getData() {
  try {
    return request("category");
  } catch (err) {
    console.log(err);
  }
}

// async function getProduct() {
//   try {
//     return request("product");
//   } catch (err) {
//     console.log(err);
//   }
// }






// var settings1 = {
//   dots: false,
//   infinite: true,
//   autoplay: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   initialSlide: 0,
//   responsive: [
//     {
//       breakpoint: 1124,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         infinite: true,
//         dots: true,
//       },
//     },
//     {
//       breakpoint: 800,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         initialSlide: 1,
//       },
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//   ],
// };

export default async function Home() {

  const { data: categories } = await getData();
  // const { data: product } = await getProduct();
  // console.log(product);
  console.log(categories);
  return (
    <main className="container ">
      <div className="category-row">
        <div className="product-slidaier">
          {/* <Slider {...settings1} className="container">
            <div>12</div>
          </Slider> */}
          <Carousel autoplay>
            <div
              className="d-flex justify-content-between gap-3"
              style={contentStyle}
            >
              {/* {product?.map((pro) => (
                <div key={pro._id}>
                  <div className="card">
                    <div className="card-border-top"></div>

                    <Image
                      className="img"
                      src={pro.images.url}
                      alt="Najot ta'lim"
                    />

                    <span> data: {pro?.createdAt.split("T")[0]}</span>
                    <p className="job"> {pro.name}</p>
                    <button> Click</button>
                  </div>
                </div>
              ))} */}
              2
            </div>
          
          </Carousel>
        </div>
        <h2 className="all-category">All category</h2>
      </div>
      <div className="cart-row">
        {categories?.map((ctg) => (
          <div key={ctg._id}>
            <div className="card">
              <div className="card-border-top"></div>

              <Image className="img" src={ctg.images.url} alt="Najot ta'lim" />

              <span> data: {ctg?.createdAt.split("T")[0]}</span>
              <p className="job"> {ctg.name}</p>
              <button> Click</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
