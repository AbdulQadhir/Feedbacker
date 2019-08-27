import Login from "./login"
import Review from "./review"
import ReviewQuestions from "./review/questions"
import Sales from "./salesreport"
import { createStackNavigator,createAppContainer } from "react-navigation"

const AppNavigator = createStackNavigator(
    {
      Login: Login,
      ReviewQuestions: ReviewQuestions,
      Review: Review,
      Sales: Sales
    }
  );
export default createAppContainer(AppNavigator);
