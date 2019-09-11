import Login from "./login"
import Review from "./review"
import ReviewQuestions from "./review/questions"
import Sales from "./salesreport"
import Menu from "./mainmenu"
import ThankYou from "./thankyou"
import { createStackNavigator,createAppContainer } from "react-navigation"

const AppNavigator = createStackNavigator(
    {
      Login: Login,
      Review: Review,
      Menu:Menu,
      ReviewQuestions: ReviewQuestions,
      Sales: Sales,
      ThankYou
    }
  );
  export default App = createAppContainer(AppNavigator);
