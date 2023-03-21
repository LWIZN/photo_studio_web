import First from "./block_article/first";
import Second from "./block_article/second";
import Third from "./block_article/third";
import Fourth from "./block_article/fourth";
import Fiveth from "./block_article/fiveth";

export default function Selector(props) {
  let container = [<First />, <Second />, <Third />, <Fourth />, <Fiveth />];
  return container[props.value - 1];
}
