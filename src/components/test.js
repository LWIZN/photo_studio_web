import Modal from "./Modal";
import sample from "../image/sample2.jpg";

export default function test() {
  return (
    <div>
      <Modal img={sample} />
      <Modal img={sample} />
    </div>
  );
}
