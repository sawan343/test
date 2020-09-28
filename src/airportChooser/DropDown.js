import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import VirtualizedList from "./VirtualizeList";
import styles from "./airportChooser.module.css";

const DropDown = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({ showHideList }));
  const { data, children, selected } = props;
  const [isOpenList, setIsOpenList] = useState(true);
  const [arrowClass, setArrowClass] = useState([styles.down]);

  useEffect(() => {
    setArrowClass(isOpenList ? [styles.up] : [styles.down]);
  }, [isOpenList]);

  function showHideList() {
    setIsOpenList(!isOpenList);
  }

  const view = ({ index, style }) => children(data[index], style)

  return (
    <div className={styles.listContainer}>
      <span className={styles.ddHeader} onClick={showHideList}>
        {selected && selected.name}
        <i className={[styles.arrow, ...arrowClass].join(" ")}></i>
      </span>
      <VirtualizedList
        numItems={data.length}
        itemHeight={30}
        windowHeight={500}
        show={isOpenList}
        renderItem={view}
      ></VirtualizedList>
    </div>
  );
});

export default DropDown;
