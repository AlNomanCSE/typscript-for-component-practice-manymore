type Props = {
  names: {
    first: string;
    last: string;
  }[];
  themeType: "Dark" | "Light" | "Blue";
};

const Chacktypes = (props: Props) => {
  console.log(props);

  return (
    <div>
      {/* {names.map((data, index) => (
        <p key={index}>
          {data.first} {data.last}
        </p>
      ))} */}
    </div>
  );
};

export default Chacktypes;
