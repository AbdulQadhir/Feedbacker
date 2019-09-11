import Login from "./login"
import Review from "./review"
import ReviewQuestions from "./review/questions"
import Sales from "./salesreport"
import Menu from "./mainmenu"
import { createStackNavigator,createAppContainer } from "react-navigation"

const AppNavigator = createStackNavigator(
    {
      Review: Review,
      Login: Login,
      Menu:Menu,
      ReviewQuestions: ReviewQuestions,
      Sales: Sales
    }
  );
  export default App = createAppContainer(AppNavigator);
