import CUsereducer from "./components/CUsereducer";
import Chacktypes from "./components/Chacktypes";
import Form from "./components/Form";
const nameList = [
  {
    first: "Mr. ",
    last: "X",
  },
  {
    first: "Mr. ",
    last: "Y",
  },
  {
    first: "Mr. ",
    last: "Z",
  },
];

const App = () => {
  return (
    <section>
      <Form />
      <Chacktypes names={nameList} themeType="Dark" />
      <CUsereducer />
    </section>
  );
};

export default App;
