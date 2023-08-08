import "./App.css";
import myPicture from "./../src/assets/gobills.png";

const info = [
  {
    sectionName: "About Me",
    content:
      "I am a senior level engineer that enjoys developing less experienced engineers through mentorship, pair configuration/programming, and training.",
  },
  {
    sectionName: "Contact Me",
    content: "thomas.kanney@perkinelmer.com",
  },
];

function App() {
  return (
    <div>
      <img className="meImg" src={myPicture} alt="Picture of Tom Kanney" />
      <h1>Tom Kanney</h1>
      <h2>Staff Software Engineer</h2>
      {info.map((item) => {
        return (
          <div className="section">
            <h3>{item.sectionName}</h3>
            <hr />
            <p>{item.content}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
