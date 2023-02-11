// import { Heading } from "@chakra-ui/react";
import { SmallHead } from "../SmallComp/SmallHead";
import styles from "./DisOurFav.module.css";
import { OneImage } from "./../OneImage/OneImage";
import { Link } from "react-router-dom";

export function MyCard({ src, cap }) {
  return (
    <div
      style={{
        minWidth: "230px",
        maxWidth: "300px",
        height: "auto",
        marginRight: "25px",
        color: "white",
        position: "relative",
        marginLeft: "-10px",
        border: "1px solid lightgray",
        borderRadius: "10px",
      }}
    >
      <img
        src={src}
        alt="i"
        style={{ borderRadius: "10px", height: "310px", margin: "auto" }}
      />
      <div className={styles.myCardCaption}>
        <Link to="/">{cap}</Link>
      </div>
    </div>
  );
}

export function DisOurFav() {
  const btnpressprev = () => {
    let box = document.querySelector(".productContainer");
    box.scrollLeft -= 300;
  };

  const btnpressnext = () => {
    let box = document.querySelector(".productContainer");
    box.scrollLeft += 300;
  };

  return (
    <div>
      <SmallHead
        head="Discover Our Favourites"
        line="Get your favourite item"
      />
      <OneImage src="https://images-static.nykaa.com/uploads/e17b2d07-2efe-4fb7-99c7-cdb7c12789a0.png?tr=w-1200,cm-pad_resize" />
      <SmallHead
        head="Special Products"
        line="Selection Of Our Finest category"
      />
      <div className={styles.productCarousal}>
        <button onClick={btnpressprev} className={styles.preBtn}>
          <p>⇐</p>
        </button>
        <button onClick={btnpressnext} className={styles.nextBtn}>
          <p>⇒</p>
        </button>
        <div
          className="productContainer"
          style={{
            padding: "0 10px",
            display: "flex",
            overflowX: "hidden",
            scrollBehavior: "smooth",
          }}
        >
          <Link to="/allProduct?filter=bags">
            <MyCard
              src="https://rukminim1.flixcart.com/image/832/832/k1l1ea80/backpack/k/j/p/burner-p8-uber015-backpack-f-gear-original-imafdk5ppcfcuczh.jpeg?q=70"
              cap="Bags"
            />
          </Link>
          <Link to="/allProduct?filter=electronics">
            <MyCard
              src="https://2.imimg.com/data2/UP/MK/MY-3812101/electronics-250x250.jpg"
              cap="Electronics"
            />
          </Link>
          <Link to="/allProduct?filter=jewelery">
            <MyCard
              src="https://rukminim1.flixcart.com/image/612/612/xif0q/jewellery-set/h/v/g/na-na-9-cm00234-arts-chetan-original-imagm8fufhequrt9.jpeg?q=70"
              cap="Jewellery"
            />
          </Link>
          <Link to="/allProduct?filter=women%27s+clothing">
            <MyCard
              src="https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/x/u/a/m-201-tf-wh-blue-ronin-original-imagff494he58xu6-bb.jpeg?q=70"
              cap="Ladies wear"
            />
          </Link>
          <Link to="/allProduct?filter=men%27s+clothing">
            <MyCard
              src="https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/g/q/9/m-lstr-grey-p-v-creations-original-imag9jggsvfcgpp4-bb.jpeg?q=70"
              cap="Gents wear"
            />
          </Link>
          <MyCard
            src="https://rukminim1.flixcart.com/image/612/612/l2w7b0w0/kids-dress/v/6/q/2-3-years-kids-pink-frock-vol-01-netra-creation-original-image4uy68fmmxuh.jpeg?q=70"
            cap="Baby Products"
          />
          <MyCard
            src="https://rukminim1.flixcart.com/image/416/416/l547yq80/makeup-kit/a/7/w/-original-imagfvymgpuchhfa.jpeg?q=70"
            cap="Makeup Kits"
          />
          <MyCard
            src="https://rukminim1.flixcart.com/image/416/416/xif0q/deodorant/y/u/m/-original-imaghbufhrzsv7yj.jpeg?q=70"
            cap="Fragrances"
          />

          <MyCard
            src="https://rukminim1.flixcart.com/image/612/612/k2w6xe80/showpiece-figurine/9/p/u/greenbuddha02-gw-creations-original-imafm58vgxgfstbw.jpeg?q=70"
            cap="Home Decorations"
          />

          <MyCard
            src="https://rukminim1.flixcart.com/image/612/612/xif0q/vehicle-lubricant/f/u/t/-original-imagkzcftmz7fpd5.jpeg?q=70"
            cap="Engine oil"
          />
        </div>
      </div>
    </div>
  );
}
