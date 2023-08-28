import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Navbar from "./components/Navbar";
import Routing from "./components/Routing";
import Footer from "./components/Footer";
import logo from './img.png';
import "./App.css";

const greetingMessage = 'Annyeong! ~ 👋 Welcome to Meokja! This is Chef-nim, your virtual assistant. What would you like to order? 😊';
const snacksAndDrinksMessage = 'Would you like to add fries or a sundae to your order?';
const drinksMessage = 'Would you like to have iced tea or softdrinks as your beverage?';
const sizeMessage = 'Would you like to upgrade your snacks and drinks to a medium or large size?';
const addSundae = 'Would you like to add a delicious sundae to your order today? Our sundaes are made with the finest ingredients and come in a variety of flavors. They\'re the perfect way to finish off your meal!'
const orderDone = 'Has your order been completed?'
const addPie = 'Would you like to add some pie to your order? 🥧'

const steps = [{
    id: '1',    
    message: greetingMessage,    
    trigger: 'menu',  
},{    
    id: 'menu',    
    options: [      
        { value: 'Burger Meal', label: 'Burger Meal 🍔', trigger: 'burger-meal' },
        { value: 'Pasta Meal', label: 'Pasta Meal 🍝 ', trigger: 'pasta-meal' },
        { value: 'Chicken Meal', label: 'Chicken Meal 🍗', trigger: 'chicken-meal' },
    ],
},{
    id: 'burger-meal',
    message: 'You have selected Burger Meal. ' + snacksAndDrinksMessage,
    trigger: 'burger-snacks',
},{
    id: 'burger-snacks',
    options: [
        { value: 'Fries', label: 'Add Fries 🍟', trigger: 'burger-fries' },
        { value: 'Sundae', label: 'Add Sundae 🍦', trigger: 'burger-sundae' },
    ],
},{
    id: 'burger-fries',
    message: 'You have added fries to your order. ' + drinksMessage,
    trigger: 'burger-drinks',
},{
    id: 'burger-sundae',
    message: 'You have added sundae to your order. ' + drinksMessage,
    trigger: 'burger-drinks',
},{
    id: 'burger-drinks',
    options: [
        { value: 'Iced-Tea', label: 'Iced-Tea', trigger: 'burger-icedtea' },
        { value: 'Softdrinks', label: 'Softdrinks', trigger: 'burger-softdrinks' },
    ],
},{
    id: 'burger-icedtea',
    message: 'You have added iced-tea to your order.' + sizeMessage,
    trigger: 'burger-size'
},{
    id: 'burger-softdrinks',
    message: 'You have added softdrinks to your order.' + sizeMessage,
    trigger: 'burger-size'
},{
    id: 'burger-size',
    options: [
        { value: 'Medium', label: 'Medium', trigger: 'burger-add' },
        { value: 'Large', label: 'Large', trigger: 'burger-add' },
    ],
},{
    id: 'burger-add',
    message: addSundae,
    trigger: 'burger-addSundae',
},{
    id: 'burger-addSundae',
    options: [
        { value: 'Sundae', label: 'Yes', trigger: 'order-pie' },
        { value: ' ', label: 'No', trigger: 'order-pie' },
    ],
},


{
    id: 'pasta-meal',
    message: 'You have selected Pasta Meal. ' + snacksAndDrinksMessage,
    trigger: 'pasta-snacks',
},{
    id: 'pasta-snacks',
    options: [
    { value: 'Fries', label: 'Add Fries 🍟', trigger: 'pasta-fries' },
    { value: 'Sundae', label: 'Add Sundae 🍦', trigger: 'pasta-sundae' },
    ],
},{
    id: 'pasta-fries',
    message: 'You have added fries to your order. ' + drinksMessage,
    trigger: 'pasta-drinks',
},{
    id: 'pasta-sundae',
    message: 'You have added sundae to your order. ' + drinksMessage,
    trigger: 'pasta-drinks',
},{
    id: 'pasta-drinks',
    options: [
        { value: 'Iced-Tea', label: 'Iced-Tea', trigger: 'pasta-icedtea' },
        { value: 'Softdrinks', label: 'Softdrinks', trigger: 'pasta-softdrinks' },
    ],
},{
    id: 'pasta-icedtea',
    message: 'You have added iced-tea to your order.' + sizeMessage,
    trigger: 'pasta-size'
},{
    id: 'pasta-softdrinks',
    message: 'You have added softdrinks to your order.' + sizeMessage,
    trigger: 'pasta-size'
},{
    id: 'pasta-size',
    options: [
        { value: 'Medium', label: 'Medium', trigger: 'pasta-add' },
        { value: 'Large', label: 'Large', trigger: 'pasta-add' },
    ],
},
{
    id: 'pasta-add',
    message: addSundae,
    trigger: 'burger-addSundae',
},{
    id: 'pasta-addSundae',
    options: [
        { value: 'Sundae', label: 'Yes', trigger: 'order-pie' },
        { value: ' ', label: 'No', trigger: 'order-pie' },
    ],
},


{
    id: 'chicken-meal',
    message: 'You have selected Chicken Meal. ' + drinksMessage,
    trigger: 'chicken-drinks',
},{
    id: 'chicken-drinks',
    options: [
        { value: 'Iced-Tea', label: 'Iced-Tea', trigger: 'chicken-icedtea' },
        { value: 'Softdrinks', label: 'Softdrinks', trigger: 'chicken-softdrinks' },
    ],
},{
    id: 'chicken-icedtea',
    message: 'You have added iced-tea to your order. ' + sizeMessage,
    trigger: 'chicken-size'
},{
    id: 'chicken-softdrinks',
    message: 'You have added softdrinks to your order. ' + sizeMessage,
    trigger: 'chicken-size'
},{
    id: 'chicken-size',
    options: [
        { value: 'Medium', label: 'Medium', trigger: 'chicken-sundae' },
        { value: 'Large', label: 'Large', trigger: 'chicken-sundae' },
    ],
},
{
    id: 'chicken-sundae',
    message: 'You have added softdrinks to your order. ' + addSundae,
    trigger: 'chicken-addSundae'
},
{
    id: 'chicken-addSundae',
    options: [
        { value: 'Sundae', label: 'Yes', trigger: 'order-pie' },
        { value: ' ', label: 'No', trigger: 'order-pie' },
    ],
},
{
    id: 'order-pie',
    message: addPie,
    trigger: 'add-pie',
},{
    id: 'add-pie',
    options: [
        { value: 'Pie', label: 'Yes', trigger: 'order-complete' },
        { value: ' ', label: 'No', trigger: 'order-complete' },
    ],
},{
    id: 'order-complete',
    message: orderDone,
    trigger: 'order-status',
},
{
    id: 'order-status',
    options: [
      { value: 'yes', label: 'Yes', trigger: 'order-summary' },
      { value: 'no', label: 'No', trigger: 'addMore' },
    ],
},
{
    id: 'addMore',
    message: 'What else would you like to add?',
    trigger: 'add-meal',
},
{    
    id: 'add-meal',    
    options: [      
        { value: 'Burger Meal', label: 'Burger Meal 🍔', trigger: 'new-burger-meal' },
        { value: 'Pasta Meal', label: 'Pasta Meal 🍝', trigger: 'new-pasta-meal' },
        { value: 'Chicken Meal', label: 'Chicken Meal 🍗', trigger: 'new-chicken-meal' },
    ],
},
{
    id: 'new-burger-meal',
    message: 'You have selected Burger Meal. ' + snacksAndDrinksMessage,
    trigger: 'new-burger-snacks',
},{
    id: 'new-burger-snacks',
    options: [
        { value: 'Fries', label: 'Add Fries 🍟', trigger: 'new-burger-fries' },
        { value: 'Sundae', label: 'Add Sundae 🍦', trigger: 'new-burger-sundae' },
    ],
},{
    id: 'new-burger-fries',
    message: 'You have added fries to your order. ' + drinksMessage,
    trigger: 'new-burger-drinks',
},{
    id: 'new-burger-sundae',
    message: 'You have added sundae to your order. ' + drinksMessage,
    trigger: 'new-burger-drinks',
},{
    id: 'new-burger-drinks',
    options: [
        { value: 'Iced-Tea', label: 'Iced-Tea', trigger: 'new-burger-icedtea' },
        { value: 'Softdrinks', label: 'Softdrinks', trigger: 'new-burger-softdrinks' },
    ],
},{
    id: 'new-burger-icedtea',
    message: 'You have added iced-tea to your order.' + sizeMessage,
    trigger: 'new-burger-size'
},{
    id: 'new-burger-softdrinks',
    message: 'You have added softdrinks to your order.' + sizeMessage,
    trigger: 'new-burger-size'
},{
    id: 'new-burger-size',
    options: [
        { value: 'Medium', label: 'Medium', trigger: 'new-burger-add' },
        { value: 'Large', label: 'Large', trigger: 'new-burger-add' },
    ],
},{
    id: 'new-burger-add',
    message: addSundae,
    trigger: 'new-burger-addSundae',
},{
    id: 'new-burger-addSundae',
    options: [
        { value: 'Sundae', label: 'Yes', trigger: 'order-pie' },
        { value: ' ', label: 'No', trigger: 'order-pie' },
    ],
},


{
    id: 'new-pasta-meal',
    message: 'You have selected Pasta Meal. ' + snacksAndDrinksMessage,
    trigger: 'new-pasta-snacks',
},{
    id: 'new-pasta-snacks',
    options: [
    { value: 'Fries', label: 'Add Fries 🍟', trigger: 'new-pasta-fries' },
    { value: 'Sundae', label: 'Add Sundae 🍦', trigger: 'new-pasta-sundae' },
    ],
},{
    id: 'new-pasta-fries',
    message: 'You have added fries to your order. ' + drinksMessage,
    trigger: 'new-pasta-drinks',
},{
    id: 'new-pasta-sundae',
    message: 'You have added sundae to your order. ' + drinksMessage,
    trigger: 'new-pasta-drinks',
},{
    id: 'new-pasta-drinks',
    options: [
        { value: 'Iced-Tea', label: 'Iced-Tea', trigger: 'new-pasta-icedtea' },
        { value: 'Softdrinks', label: 'Softdrinks', trigger: 'new-pasta-softdrinks' },
    ],
},{
    id: 'new-pasta-icedtea',
    message: 'You have added iced-tea to your order.' + sizeMessage,
    trigger: 'new-pasta-size'
},{
    id: 'new-pasta-softdrinks',
    message: 'You have added softdrinks to your order.' + sizeMessage,
    trigger: 'new-pasta-size'
},{
    id: 'new-pasta-size',
    options: [
        { value: 'Medium', label: 'Medium', trigger: 'new-pasta-add' },
        { value: 'Large', label: 'Large', trigger: 'new-pasta-add' },
    ],
},
{
    id: 'new-pasta-add',
    message: addSundae,
    trigger: 'new-burger-addSundae',
},{
    id: 'new-pasta-addSundae',
    options: [
        { value: 'Sundae', label: 'Yes', trigger: 'new-order-pie' },
        { value: ' ', label: 'No', trigger: 'new-order-pie' },
    ],
},


{
    id: 'new-chicken-meal',
    message: 'You have selected Chicken Meal. ' + drinksMessage,
    trigger: 'new-chicken-drinks',
},{
    id: 'new-chicken-drinks',
    options: [
        { value: 'Iced-Tea', label: 'Iced-Tea', trigger: 'new-chicken-icedtea' },
        { value: 'Softdrinks', label: 'Softdrinks', trigger: 'new-chicken-softdrinks' },
    ],
},{
    id: 'new-chicken-icedtea',
    message: 'You have added iced-tea to your order. ' + sizeMessage,
    trigger: 'new-chicken-size'
},{
    id: 'new-chicken-softdrinks',
    message: 'You have added softdrinks to your order. ' + sizeMessage,
    trigger: 'new-chicken-size'
},{
    id: 'new-chicken-size',
    options: [
        { value: 'Medium', label: 'Medium', trigger: 'new-chicken-sundae' },
        { value: 'Large', label: 'Large', trigger: 'new-chicken-sundae' },
    ],
},
{
    id: 'new-chicken-sundae',
    message: 'You have added softdrinks to your order. ' + addSundae,
    trigger: 'new-chicken-addSundae'
},
{
    id: 'new-chicken-addSundae',
    options: [
        { value: 'Sundae', label: 'Yes', trigger: 'new-order-pie' },
        { value: ' ', label: 'No', trigger: 'new-order-pie' },
    ],
},
{
    id: 'new-order-pie',
    message: addPie,
    trigger: 'new-add-pie',
},{
    id: 'new-add-pie',
    options: [
        { value: 'Pie', label: 'Yes', trigger: 'order-complete' },
        { value: ' ', label: 'No', trigger: 'order-complete' },
    ],
},
{
  id: 'order-summary',
  message: (props) => {
    const { steps } = props;
    const order = {
      meal: steps['menu'].value,
      snacks: steps['burger-snacks']?.value || steps['pasta-snacks']?.value  || '',
      drinks: steps['burger-drinks']?.value || steps['pasta-drinks']?.value || steps['chicken-drinks']?.value || '',
      size: steps['burger-size']?.value || steps['pasta-size']?.value || steps['chicken-size']?.value || '',
      sundae: steps['burger-addSundae']?.value || steps['pasta-addSundae']?.value || steps['chicken-addSundae']?.value || '',
      pie: steps['add-pie']?.value || '',
      addMeal: steps['add-meal'].value,
      addSnacks: steps['new-burger-snacks']?.value || steps['new-pasta-snacks']?.value  || '',
      addDrinks:steps['new-burger-drinks']?.value || steps['new-pasta-drinks']?.value || steps['new-chicken-drinks']?.value || '',
      addSize: steps['new-burger-size']?.value || steps['new-pasta-size']?.value || steps['new-chicken-size']?.value || '',
      addSundaeOrder: steps['new-burger-addSundae']?.value || steps['new-pasta-addSundae']?.value || steps['new-chicken-addSundae']?.value || '',
      addPieOrder:steps['new-add-pie']?.value || '',
    };
    return `You have ordered: \n
    ${order.meal}, \n
    ${order.snacks}, \n
    ${order.drinks} (${order.size}), \n
    ${order.sundae}, \n
    ${order.pie}, \n
    ${order.addMeal}, \n
    ${order.addSnacks}, \n
    ${order.addDrinks} (${order.addSize}), \n
    ${order.addSundaeOrder}, \n
    ${order.addPieOrder}`; 
  },
  trigger: 'end-order',
},{
  id: 'end-order',
    message: 'Awesome! Your orders complete!',
    end: true,
},
];

 
// Creating our own theme
const theme = {
    background: 'white',
    headerBgColor: '#d31927',
    headerFontSize: '18px',
    botBubbleColor: '#8a000a',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#f4ce14',
    userFontColor: 'white',
    fontSize: '14px',
};
 
// Set some properties of the bot
const config = {
    botAvatar: logo,
    floating: true,
};
 
function App() {
    return (
        <div className="App">
          <Navbar />
          <Routing />
          <Footer />
            <ThemeProvider theme={theme}>
                <ChatBot
 
                    // This appears as the header
                    // text for the chat bot
                    headerTitle="Chef-nim 👨‍🍳"
                    steps={steps}
                    {...config}
 
                />
            </ThemeProvider>
        </div>
    );
}
 
export default App;
