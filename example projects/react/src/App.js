import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { Greet } from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import StyleSheet from "./components/StyleSheet";
import Inline from "./components/Inline";
import "./appStyle.css";
import style from "./appStyle.module.css";
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LifeCycleA />
        {/* <Form /> */}
        {/* <h1 className="error">Error </h1>
        <h1 className={style.success}>Success</h1>
        <Inline />
        <StyleSheet primary={true} />
        <NameList />
        <UserGreeting />
        <ParentComponent />
        <EventBind />
        <ClassClick />
        <FunctionClick />
        <Counter />
        <Message />
        <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder Woman" />
        <Welcome name="Bruce" heroName="Batman" />
        <Welcome name="Clark" heroName="Superman" />
        <Welcome name="Diana" heroName="Wonder Woman" />
        <Hello /> */}
      </div>
    );
  }
}

export default App;
