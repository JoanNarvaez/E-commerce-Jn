import "./Article.css";

const Article = (props) => {
  return (
    <div className="container.art">
      <div className="style">
        {props.children}
        {/* <Button >Solicitar Asesoría</Button> */}
      </div>
    </div>
  );
};
export default Article;
