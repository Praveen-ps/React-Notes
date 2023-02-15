import logo from "./logo.svg";
import "./App.css";
import BasicClassComponents from "./Components/ClassComponents/BasicClassComponents";
import ConditionalRendering from "./Components/ConditionalRender/ConditionalRendering";
import ParentComp from "./Components/PureComponent/ParentComp";
import RefComp from "./Components/RefComp/RefComp";
import FocusInput from "./Components/RefComp/FocusInput";
import RefParent from "./Components/ForwardingRef/RefParent";
import HoverComp from "./Components/HigherOrderComponent(HOC)/HoverComp";
import CounterComp from "./Components/HigherOrderComponent(HOC)/CounterComp";
import Counter from "./Components/RenderProps/Counter";
import ClickCounter from "./Components/RenderProps/ClickCounter";
import HoverCounter from "./Components/RenderProps/HoverCounter";
import ComponentA from "./Components/Context/ComponentA";
import Httpcomp from "./Components/HttpRequest/Httpcomp";
import HttpPost from "./Components/HttpRequest/HttpPost";
import UseStateHook from "./Components/Hooks/UseStaet/UseStateHook";
import UseStateObjHook from "./Components/Hooks/UseStaet/UseStateObjHook";
import UseStateArrHook from "./Components/Hooks/UseStaet/UseStateArrHook";
import ClassCounter from "./Components/Hooks/UseEffectHook/ClassCounter";
import UseEffectCounter from "./Components/Hooks/UseEffectHook/UseEffectCounter";
import ClassMouse from "./Components/Hooks/UseEffectHook/ClassMouse";
import HookMouse from "./Components/Hooks/UseEffectHook/HookMouse";
import MouseContainer from "./Components/Hooks/UseEffectHook/MouseContainer";
import AutoCounter from "./Components/Hooks/UseEffectHook/AutoCounter";
import StopWatch from "./Components/Hooks/UseEffectHook/StopWatch/StopWatch";
import FetchAxiosWithHook from "./Components/Hooks/UseEffectHook/FetchAPI/FetchAxiosWithHook";
import SinglePost from "./Components/Hooks/UseEffectHook/FetchAPI/SinglePost";
import CompA from "./Components/Hooks/UseContext/CompA";
import {
  UserContext,
  ChannelContext,
} from "./Components/Hooks/UseContext/CompA";
import ReducerCounter from "./Components/Hooks/UseReducerHook/ReducerCounter";
import ReducerCounter2 from "./Components/Hooks/UseReducerHook/ReducerCounter2";
import MultipleUseReducer from "./Components/Hooks/UseReducerHook/MultipleUseResucer";
import FetchWithState from "./Components/Hooks/UseReducerHook/FetchWithState";
import ReducerWithFetch from "./Components/Hooks/UseReducerHook/ReducerWithFetch";
import Parent from "./Components/Hooks/UseCallBack/Parent";
import MemoCounter from "./Components/Hooks/UseMemo/MemoCounter";
import FocusDefaultInput from "./Components/Hooks/UseRef/FocusDefaultInput";
import TimerClass from "./Components/Hooks/UseRef/TimerClass";
import TimerFuncwithRef from "./Components/Hooks/UseRef/TimerFuncwithRef";
import DocTitleOne from "./Components/CustomHooks/Custom1/DocTitleOne";
import DocTitleTwo from "./Components/CustomHooks/Custom1/DocTitleTwo";
import CounterOne from "./Components/CustomHooks/CustomHook2/CounterOne";
import CounterTwo from "./Components/CustomHooks/CustomHook2/CounterTwo";
import UserForm from "./Components/CustomHooks/CustomHook3/UserForm";

function App() {
  return (
    <div className="App">
      <UserForm />
      {/* <CounterOne />
      <CounterTwo /> */}
      {/* <DocTitleOne />
      <DocTitleTwo /> */}
      {/* <TimerClass /> */}
      {/* <TimerFuncwithRef /> */}
      {/* <FocusDefaultInput /> */}
      {/* <MemoCounter /> */}
      {/* <Parent /> */}
      {/* <ReducerWithFetch /> */}
      {/* <FetchWithState /> */}
      {/* <MultipleUseReducer /> */}
      {/* <ReducerCounter2 /> */}
      {/* <UserContext.Provider value="Praveen">
        <ChannelContext.Provider value="Code Evolution">
          <CompA />                                                 // useContext
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <SinglePost /> */}
      {/* <FetchAxiosWithHook /> */}
      {/* <StopWatch /> */}
      {/* <AutoCounter /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <ClassMouse /> */}
      {/* <UseEffectCounter /> */}
      {/* <ClassCounter /> */}
      {/* <UseStateArrHook /> */}
      {/* <UseStateObjHook /> */}
      {/* <UseStateHook /> */}
      {/* <HttpPost /> */}
      {/* <Httpcomp /> */}
      {/* <h1>Hello</h1> */}
      {/* <BasicClassComponents />
      <ConditionalRendering /> */}
      {/* <ParentComp /> */}
      {/* <RefComp /> */}
      {/* <FocusInput /> */}
      {/* <RefParent /> */}
      {/* <HoverComp />
      <CounterComp name="Praveen" /> */}
      {/* <Counter
        render={(count, increment) => (
          <ClickCounter increment={increment} count={count} />
        )}
      />
      <Counter
        render={(count, increment) => (
          <HoverCounter count={count} increment={increment} />
        )}
      /> */}
      {/* <ComponentA /> */}
    </div>
  );
}

export default App;
