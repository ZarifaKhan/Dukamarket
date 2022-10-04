import { produceWithPatches } from "immer";

const Helmet = (props) => {
  document.title = "Dukamarket" + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
