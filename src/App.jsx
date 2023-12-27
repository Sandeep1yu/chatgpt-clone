import "./App.css";
import chatgptLogo from "./assets/logo_chatgpt.png";
import home_icon from './assets/home_btn.png';
import query_icon from './assets/query_icon.png';
import upgrade_icon from './assets/upgrade-icon.png';

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={chatgptLogo} alt="" className="logo" />
            <span className="brand">ChapGpt</span>
          </div>
          <div className="upperSideBottom">
            <button className="midBtn">
              <img src="" alt="" className="addBtn" />
              +New Chat
            </button>
            <button className="query">
              <img src="" alt="" />
              What is programming?
            </button>
            <button className="query">
              <img src="" alt="" />
              What is programming?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems"><img src={home_icon} alt="" className="listItemsImg" />Home</div>
          <div className="listItems"><img src={query_icon} alt="" className="listItemsImg" />Saved</div>
          <div className="listItems"><img src={upgrade_icon} alt="" className="listItemsImg" />Updrade to Pro</div>
        </div>
      </div>

      <div className="mainSection"></div>
    </div>
  );
}

export default App;
