import x from "./x.png";
import css from "./TopNavbarItem.module.css";

const TopNavbarItem = (props) => {
  return (
    <div
      // onClick={}
      // className={[css.item, active === props.id ? css.active : ""].join(" ")}
      className={css.item}
    >
      <div className={css.content}>{props.name}</div>
      <div onClick={(e) => e.stopPropagation()} className={css.x__wrapper}>
        <img
          onClick={() => props.closeFrame(props.id)}
          className={css.x}
          src={x}
          alt="Close"
        />
      </div>
    </div>
  );
};
export default TopNavbarItem;
