import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Navbar from "./components/Navbar";
import Routing from "./components/Routing";
import Footer from "./components/Footer";
import logo from './img.png';
import "./App.css";
import PropTypes from 'prop-types';

const snacksMessage = 'Would you like to have fries or sundae as your snacks?';
const drinksMessage = 'Would you like to have iced-tea or softdrinks as your beverage?';
const sizeMessage = 'Would you like to upgrade your snacks and drinks to a medium or large size?';
const chickenSizeMessage = 'Would you like to upgrade your snacks and drinks to a medium or large size?';
const addSundae = 'Would you like to add a delicious sundae to your order today? 🍦';
const orderDone = 'Has your order been completed?'
const addPie = 'Would you like to add some pie to your order? 🥧'

// Creating our own theme
const theme = {
  background: '#f5f8fb',
  headerBgColor: '#8a000a',
  headerFontSize: '20px',
  botBubbleColor: '#8a000a',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#d31927',
  userFontColor: 'white',
};

// Set some properties of the bot
const config = {
  botAvatar: logo,
  floating: true,
};



const orders = []
function SummaryOfOrder() {
  return (
    <div style={{ width: "100%" }}>
      <h5>Order: 001</h5>
      <h4>Summary of Orders</h4>
      <table>
        <tbody>
          {orders.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

SummaryOfOrder.propTypes = {
  steps: PropTypes.object,
};

SummaryOfOrder.defaultProps = {
  steps: undefined,
};

const addOrder = (value) =>{
  orders.push(value);
  return console.log(orders);
}

var i = 1;
function ChefNim(props){
  const steps = [{
    id: '1',
    message: 'Annyeong! ~ 👋 Welcome to Meokja! I\'m Chef-nim, and I\'m here to help you place your order. 😊 Please choose from the following option to start.',
    trigger: 'mealType'
  }, {
    id: 'mealType',
    options: [
      { value: 'Burger Meal', label: 'Burger Meal 🍔', 
      trigger: () => {
        addOrder('Meal Set #' + i + ': Burger Meal');
        i++;
        return 'burgerMeal'}},
      { value: 'Pasta Meal', label: 'Pasta Meal 🍝 ',
      trigger: () => {
        addOrder('Meal Set #' + i + ': Pasta Meal');
        i++;
        return 'pastaMeal'}},
      { value: 'Chicken Meal', label: 'Chicken Meal 🍗',
      trigger: () => {
        addOrder('Meal Set #' + i + ': Chicken Meal');
        i++;
        return 'chickenMeal'}},
    ],
  }, {
    id: 'burgerMeal',
    message: 'You have selected Burger Meal. \n' + snacksMessage,
    trigger: 'burgerSnacks',
  }, {
    id: 'burgerSnacks',
    options: [
      { value: 'Fries', label: 'Add Fries 🍟',
      trigger: () => {
        addOrder('with Fries');
        return 'burgerFries'}},
      { value: 'Sundae', label: 'Add Sundae 🍦',
      trigger: () => {
        addOrder('with Sundae');
        return 'burgerSundae'}},
    ],
  }, {
    id: 'burgerFries',
    message: 'You have added Fries to your order. \n' + drinksMessage,
    trigger: 'burgerFDrinks',
  }, {
    id: 'burgerSundae',
    message: 'You have added Sundae to your order. \n' + drinksMessage,
    trigger: 'burgerSDrinks',
  }, {
    id: 'burgerFDrinks',
    options: [
      { value: 'Iced-Tea', label: 'Iced-Tea',
      trigger: () => {
        addOrder('\nIced Tea');
        return 'burgerFSize' }},
      { value: 'Softdrinks', label: 'Softdrinks',
      trigger: () => {
        addOrder('\nSoftdrinks');
        return 'burgerFSize'}},
    ],
  }, {
    id: 'burgerSDrinks',
    options: [
      { value: 'Iced-Tea', label: 'Iced-Tea',
      trigger: () => {
        addOrder('Iced Tea');
        return 'burgerSDSSize' }},
      { value: 'Softdrinks', label: 'Softdrinks',
      trigger: () => {
        addOrder('Softdrinks');
        return 'burgerSDSSize' }},
    ],
  }, {
    id: 'burgerFSize',
    message: sizeMessage,
    trigger: 'burgerFDSize',
  }, {
    id: 'burgerFDSize',
    options: [
      { value: 'Medium Size', label: 'Medium Size',
      trigger: () => {
        addOrder('Medium Size');
        return 'additionalSundae' }},
      { value: 'Large Size', label: 'Large Size',
      trigger: () => {
        addOrder('Large Size');
        return 'additionalSundae' }},
    ],
  }, {
    id: 'burgerSDSSize',
    message: sizeMessage,
    trigger: 'burgerSDSize',
  }, {
    id: 'burgerSDSize',
    options: [
      { value: 'Medium Size', label: 'Medium Size',
      trigger: () => {
        addOrder('Medium Size');
        return 'orderPie' }},
      { value: 'Large Size', label: 'Large Size',
      trigger: () => {
        addOrder('Large Size');
        return 'orderPie' }},
    ],
  }, {
    id: 'additionalSundae',
    message: addSundae,
    trigger: 'burgerFDSundae',
  }, {
    id: 'burgerFDSundae',
    options: [
      { value: 'with Sundae', label: 'Yes',
      trigger: () => {
        addOrder('with Additional Sundae');
        return 'orderPie' }},
      { value: ' ', label: 'No',
      trigger: () => {
        addOrder(' ');
        return 'orderPie' }},
    ],
  },
  
  //Pasta Meal
  {
    id: 'pastaMeal',
    message: 'You have selected Pasta Meal. ' + snacksMessage,
    trigger: 'pastaSnacks',
  }, {
    id: 'pastaSnacks',
    options: [
      { value: 'Fries', label: 'Add Fries 🍟',
      trigger: () => {
        addOrder('with Fries');
        return 'pastaFries' }},
      { value: 'Sundae', label: 'Add Sundae 🍦',
      trigger: () => {
        addOrder('with Sundae');
        return 'pastaSundae' }},
    ],
  }, {
    id: 'pastaFries',
    message: 'You have added Fries to your order. \n' + drinksMessage,
    trigger: 'pastaFDrinks',
  }, {
    id: 'pastaSundae',
    message: 'You have added Sundae to your order. \n' + drinksMessage,
    trigger: 'pastaSDrinks',
  }, {
    id: 'pastaFDrinks',
    options: [
      { value: 'Iced-Tea', label: 'Iced-Tea',
      trigger: () => {
        addOrder('Iced Tea');
        return 'pastaFSize' }},
      { value: 'Softdrinks', label: 'Softdrinks',
      trigger: () => {
        addOrder('Softdrinks');
        return 'pastaFSize' }},
    ],
  }, {
    id: 'pastaSDrinks',
    options: [
      { value: 'Iced-Tea', label: 'Iced-Tea',
      trigger: () => {
        addOrder('Iced Tea');
        return 'pastaSSize' }},
      { value: 'Softdrinks', label: 'Softdrinks',
      trigger: () => {
        addOrder('Softdrinks');
        return 'pastaSSize' }},
    ],
  }, {
    id: 'pastaFSize',
    message: sizeMessage,
    trigger: 'pastaFDSize',
  }, {
    id: 'pastaFDSize',
    options: [
      { value: 'Medium Size', label: 'Medium Size',
      trigger: () => {
        addOrder('Medium Size');
        return 'additionalPSundae' }},
      { value: 'Large Size', label: 'Large Size',
      trigger: () => {
        addOrder('Large Size');
        return 'additionalPSundae' }},
    ],
  }, {
    id: 'pastaSSize',
    message: sizeMessage,
    trigger: 'pastaSDSize',
  }, {
    id: 'pastaSDSize',
    options: [
      { value: 'Medium Size', label: 'Medium Size',
      trigger: () => {
        addOrder('Medium Size');
        return 'orderPie' }},
      { value: 'Large Size', label: 'Large Size',
      trigger: () => {
        addOrder('Large Size');
        return 'orderPie' }},
    ],
  }, {
    id: 'additionalPSundae',
    message: addSundae,
    trigger: 'pastaFDSundae',
  }, {
    id: 'pastaFDSundae',
    options: [
      { value: 'with Sundae', label: 'Yes',
      trigger: () => {
        addOrder('with Additional Sundae');
        return 'orderPie' }},
      { value: ' ', label: 'No',
      trigger: () => {
        addOrder(' ');
        return 'orderPie' }},
    ],
  },
  
  // Chicken Meal
  {
    id: 'chickenMeal',
    message: 'You have selected Chicken Meal. ' + drinksMessage,
    trigger: 'chickenDrinks',
  }, {
    id: 'chickenDrinks',
    options: [
      { value: 'Iced-Tea', label: 'Iced-Tea',
      trigger: () => {
        addOrder('Iced Tea');
        return 'chickenIcedtea' }},
      { value: 'Softdrinks', label: 'Softdrinks',
      trigger: () => {
        addOrder('Softdrinks');
        return 'chickenSoftdrinks' }},
    ],
  }, {
    id: 'chickenIcedtea',
    message: 'You have added iced-tea to your order.' + chickenSizeMessage,
    trigger: 'chickenSize'
  }, {
    id: 'chickenSoftdrinks',
    message: 'You have added softdrinks to your order.' + chickenSizeMessage,
    trigger: 'chickenSize'
  }, {
    id: 'chickenSize',
    options: [
      { value: 'Medium Size', label: 'Medium',
      trigger: () => {
        addOrder('Medium Size');
        return 'additionalCSundae' }},
      { value: 'Large Size', label: 'Large',
      trigger: () => {
        addOrder('Large Size');
        return 'additionalCSundae' }},
    ],
  }, {
    id: 'additionalCSundae',
    message: addSundae,
    trigger: 'chickenAddSundae',
  }, {
    id: 'chickenAddSundae',
    options: [
      { value: 'with Sundae', label: 'Yes',
      trigger: () => {
        addOrder('with Additional Sundae');
        return 'orderPie' }},
      { value: ' ', label: 'No',
      trigger: () => {
        addOrder('');
        return 'orderPie' }},
    ],
  },
  
  //Additional Pie
  {
    id: 'orderPie',
    message: addPie,
    trigger: 'additionalPie',
  }, {
    id: 'additionalPie',
    options: [
      { value: 'with Pie', label: 'Yes',
      trigger: () => {
        addOrder('with Pie');
        return 'orderComplete' }},
      { value: ' ', label: 'No',
      trigger: () => {
        addOrder('');
        return 'orderComplete' }},
    ],
  },
  
  //Orders Complete?
  {
    id: 'orderComplete',
    message: orderDone,
    trigger: 'orderStatus',
  }, {
    id: 'orderStatus',
    options: [
      { value: 'yes', label: 'Yes', trigger: 'orderSummary' },
      { value: 'no', label: 'No', trigger: 'addMore' },
    ],
  },
  
  // No? NEW MEAL
  {
    id: 'addMore',
    message: 'What else would you like to add?',
    trigger: 'mealType',
  }, {
    id: 'orderSummary',
    component: <SummaryOfOrder />,
    asMessage: true,
    trigger: 'endOrder',
  },{
    id: 'totalPrice',
    component: <calculatePrice/>,
    asMessage: true,
    trigger: 'endOrder',
  },{
    id: 'endOrder',
    message: 'Your orders complete! Please present your order number to the cashier to pay for your order. 맛있게 드세요!~ 🤞',
    end: true,
  },
  ]; 
  return(
    <div className="App">
      <Navbar />
      <Routing />
      <Footer />
      <ThemeProvider theme={theme}>
        <ChatBot steps={steps} floating={true}
          headerTitle="Chef-nim 👨‍🍳"

          {...config}
        />
        
      </ThemeProvider>
    </div>
  );
}

export default ChefNim;
