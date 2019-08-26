import Login from "./login"
import Review from "./review"
import ReviewQuestions from "./review/questions"
import Sales from "./salesreport"
import { createStackNavigator,createAppContainer } from "react-navigation"

const AppNavigator = createStackNavigator(
    {
      ReviewQuestions: ReviewQuestions,
      Login: Login,
      Review: Review,
      Sales: Sales
    }
  );
export default App = createAppContainer(AppNavigator);
