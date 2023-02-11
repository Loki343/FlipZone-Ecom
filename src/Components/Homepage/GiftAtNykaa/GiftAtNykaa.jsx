import styles from "./GiftAtNykaa.module.css";
import { SmallHead } from "./../SmallComp/SmallHead";
// import { TwoImage } from "../OneImage/OneImage";

export function GiftAtNykaa() {
  return (
    <div>
      <div>
        <SmallHead head="FlipZone Exclusive Gift Cards" line="Grab your special gifts" style={{justifyContent:'left'}}/>
        <div className={styles.TIdiv}>
          <img
            src="https://images-fe.ssl-images-amazon.com/images/G/65/SG-hq/2022/img/Giftcard/XCM_Manual_1405717_2160972_4534359_SG_sg_giftcard_evergreen_stores_refresh_750x200_en_SG.jpg"
            alt=""
            className={styles.twoImage}
          />
          <img
            src="https://images-static.nykaa.com/uploads/fc68d953-2b29-42f9-8df6-5ee176ad8d01.jpg?tr=w-600,cm-pad_resize"
            alt=""
            className={styles.twoImage}
          />
        </div>
      </div>
    </div>
  );
}
