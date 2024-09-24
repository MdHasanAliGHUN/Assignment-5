// THIS FUNCTION CREATED FOR GET INPUT FIELD VALUE USING BY ID...
const getInputFieldValueUsingById = (id) => {
    let inputFieldValue =  document.getElementById(id).value;
    let inputFieldValueConvertToNumber = parseFloat(inputFieldValue)
    return inputFieldValueConvertToNumber
 }
 
 
 // THIS FUNCTION CREATED FOR GET TEXT FIELD VALUE USING BY ID...
 const getTextFieldValueUsingById  = (id) => {
     let textFieldValue = document.getElementById(id).innerText;
     let textFieldValueConvertToNumber = parseFloat(textFieldValue)
     return textFieldValueConvertToNumber
 }
 
 // THIS FUNCTION CREATED FOR SHOW AND HIDE HISTORY AND HOME PAGE
 const showHistoryUsingById = (id) => {
     document.getElementById("history").classList.add("hidden")
     document.getElementById("homePage").classList.add("hidden")
     document.getElementById(id).classList.remove("hidden")
 }
 
 // THIS FUNCTION CREATED FOR CONDITIONALY SET BUTTON BACKGROUND COLOR
 const setButtonBgColor = (id) => {
    const button = document.getElementById(id);
    button.style.backgroundColor = "#46ba1c"
}
 // THIS FUNCTION CREATED FOR CREATE HISTORY CARD
 const createHistoryCard = (donateForFloodInputBoxValue, donateCardTitle) => {
     let div = document.createElement("div");
     div.className = "bg-gray-300 p-5 rounded-md my-4"
     let h1 = document.createElement("h1");
     let p = document.createElement("p");
     h1.classList = "text-2xl font-bold"
     p.classList = "text-[18px] font-bold mt-5"
     h1.innerText = `${donateForFloodInputBoxValue} taka is Donated for ${donateCardTitle}`;
     p.innerText = new Date()
     div.appendChild(h1);
     div.appendChild(p);
     return div
 }
 // THIS FUNCTION CREATED FOR  VALIDATE  INPUT FIELD
 const validateInputField = (donateForFloodInputBoxValue, mainBalance) => {
     if(donateForFloodInputBoxValue !== ""){
         if(!isNaN(donateForFloodInputBoxValue)){
             if(donateForFloodInputBoxValue > 0){
                 if(mainBalance >= donateForFloodInputBoxValue){
                     return true;
                 }else{
                     alert("You Don't Have Sufficient Balance")
                 }
             }else{
                 alert("You Can Not Donate Negative Number");
             }
         }else{
         alert("It Is Not Any Number, Please Input Any Number")
         }
     }else{
         alert("Input Field Is Emty");
     }
 }
 
 // THIS FUNCTION CREATE FOR CLEAR INPUT FIELD
 const clearInputField = (id) => {
     document.getElementById(id).value = " "
 }
 