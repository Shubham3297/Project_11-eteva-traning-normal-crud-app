import logo from './logo.svg';
import './App.css';
import './Components/Greet';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import LifeCycleA from './Components/LifeCycleA';
import HooksUseState from './Components/HooksUseState';
import HooksUseEffect from './Components/HooksUseEffect';
import HooksUseMemo from './Components/HooksUseMemo';
import HooksUseRef from './Components/HooksUseRef';
import A from './Components/A';
import HooksUseReducer from './Components/HooksUseReducer';
import HooksUseCallbackParent from './Components/HooksUseCallbackParent';
import HooksUseLayoutEffect from './Components/HooksUseLayoutEffect';
import HooksUseImparativHandleParent from './Components/HooksUseImparativHandleParent';
import HooksUseLoggerCustom from './Components/HooksUseLoggerCustom';
import Button from './Bootstrap/Button';
import DefaultProps from './Components/DefaultProps';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import ConditionalRendering from './Components/ConditionalRendering';
import ListRendering from './Components/ListRendering';
import Stylesheet from './Components/Stylesheet';
import Inlinecss from './Components/Inlinecss';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './Components/Form';
import FirstPage from './Bootstrap/FirstPage';
import Navbar from './Bootstrap/Navbar';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Buttons from './Bootstrap/Button/Buttons';
import Cards from './Bootstrap/Card/Cards';
import InputData from './Bootstrap/InputData/InputData';
import PageNotFound from './Bootstrap/PageNotFound';
import FragmentDemo from './Components/FragmentDemo';
import Table from './Components/Table';
import PureComp from './Components/PureComp';
import ParentComp from './Components/ParentComp';
import RefsDemo from './Components/RefsDemo';
import FocusInput from './Components/FocusInput';
import ProductData from './Components/ProductData';
import ProductData1 from './Components/ProductData1';
import ButtonR from './Components/ButtonR';
import ReduxTask from './ReduxTask';
import ApiJson from './Components/ApiJson';
import ApiCrudApplication from './Components/ApiCrudApplication';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    NotificationManager.info('Info message');


  }, [])
  return (
    <>
      <NotificationContainer />



      {/* <Greet name="Shubham" heroName="Batman">
        <p>This is Children Props</p>
      </Greet>
      <Greet name="Smita" heroName="Super girl" >
        <button>Action</button>
      </Greet> */}
      {/* <Greet name="Rani" heroName="Wonder Women" /> */}
      {/* <Welcome name="Shubham" heroName="Batman" /> */}
      {/* <Welcome name="Smita" heroName="Super girl" />
      <Welcome name="Rani" heroName="Wonder Women" /> */}
      {/* <Hello /> */}

      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <ClassClick></ClassClick> */}
      {/* <LifeCycleA></LifeCycleA> */}
      {/* <HooksUseState></HooksUseState> */}
      {/* <HooksUseEffect></HooksUseEffect> */}
      {/* <HooksUseMemo></HooksUseMemo> */}
      {/* <HooksUseRef></HooksUseRef> */}
      {/* <A></A> */}
      {/* <HooksUseReducer></HooksUseReducer> */}
      {/* <HooksUseCallbackParent></HooksUseCallbackParent> */}
      {/* <HooksUseCallbackParent></HooksUseCallbackParent> */}
      {/* <HooksUseLayoutEffect></HooksUseLayoutEffect> */}
      {/* <HooksUseImparativHandleParent></HooksUseImparativHandleParent> */}
      {/* <HooksUseLoggerCustom></HooksUseLoggerCustom> */}
      {/* <Button></Button> */}
      {/* <DefaultProps ></DefaultProps> */}
      {/* <EventBind></EventBind> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <ConditionalRendering></ConditionalRendering> */}
      {/* <ListRendering></ListRendering> */}
      {/* <Stylesheet primary={true}></Stylesheet> */}

      {/* <Inlinecss></Inlinecss> */}
      {/* <h1 className='error'>Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}

      {/* <Form></Form> */}
      {/* <Navbar></Navbar> */}

      {/* <div class="bg-info">
        <BrowserRouter>

          <Navbar />
          <Routes>
            <Route exact path='/' element={<Buttons />} />
            <Route path='/Buttons' element={<Buttons />} />
            <Route path='/Cards' element={<Cards />} />
            <Route path='/InputData' element={<InputData />} />
            <Route path='/*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div> */}

      {/* <FragmentDemo></FragmentDemo> */}
      {/* <Table></Table> */}
      {/* <ParentComp /> */}
      {/* <RefsDemo /> */}
      {/* <FocusInput /> */}
      {/* <ProductData /> */}
      {/* <ProductData1 /> */}

      {/* <ButtonR /> */}

      {/* <ReduxTask /> */}
      {/* <ApiJson /> */}

      <ApiCrudApplication />
    </>
  );
}

export default App;
