
/**
 *
 * @returns {object} props
 */
export async function getStaticProps() {
  return {
    props: {foo: "bar"},
  };
}

const Home = (props) => {
  const {foo} = props;

  return <div>Hello there, Fellas! Foo = "{foo}";</div>;
};

export default Home;
