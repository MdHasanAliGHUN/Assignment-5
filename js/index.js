document.getElementById("blog").addEventListener("click", () => {
    window.location.href = "blog.html";
});

document.getElementById("historyButton").addEventListener("click", () => {
    setButtonBgColor("historyButton")
    document.getElementById("homePageButton").style.backgroundColor = "#dbe0da"
    showHistoryUsingById("history")
})

document.getElementById("homePageButton").addEventListener("click", () => {
    setButtonBgColor("homePageButton")
    document.getElementById("historyButton").style.backgroundColor = "#dbe0da"
    showHistoryUsingById("homePage")
})

document.getElementById("donateForFloodButton").addEventListener("click", () => {
    let donateForFloodInputBoxValue =  getInputFieldValueUsingById("donateForFloodInputBox");
    let mainBalance = getTextFieldValueUsingById("mainBalance")
    let donatedFloodBlance = getTextFieldValueUsingById("donatedFloodBlance")
    

    if(validateInputField(donateForFloodInputBoxValue, mainBalance)){
        alert(`Do You Want To Donate ${donateForFloodInputBoxValue} Taka`)
        let newBlance = mainBalance - donateForFloodInputBoxValue;
        document.getElementById("mainBalance").innerText = newBlance;

        let newDonatedFloodBlance = donateForFloodInputBoxValue + donatedFloodBlance
        document.getElementById("donatedFloodBlance").innerText = newDonatedFloodBlance;

        // Donate for Flood at Noakhali, Bangladesh Title
        let donateFloodNoakhaliBangladeshTitle = document.getElementById("donateFloodNoakhaliBangladeshTitle").innerText;

        let historyCard = createHistoryCard(donateForFloodInputBoxValue, donateFloodNoakhaliBangladeshTitle)
        document.getElementById("historyContainer").appendChild(historyCard)
    

        clearInputField("donateForFloodInputBox")

    }
     
})

document.getElementById("donateForFooadReliefInFeniButtton").addEventListener("click", () => {
    let donateFloodReliefFeniInputBoxValue = getInputFieldValueUsingById("donateFloodReliefFeniInputBox");
    let mainBalance = getTextFieldValueUsingById("mainBalance");
    let donatedFloodForFeniBlance = getTextFieldValueUsingById("donatedFloodForFeniBlance")
    
    if(validateInputField(donateFloodReliefFeniInputBoxValue, mainBalance)){
        alert(`Do You Want To Donate ${donateFloodReliefFeniInputBoxValue} Taka`)
        let donatedFeniNewBlance = mainBalance - donateFloodReliefFeniInputBoxValue;
        document.getElementById("mainBalance").innerText = donatedFeniNewBlance;

        let newdonatedFloodForFeniBlance = donatedFloodForFeniBlance + donateFloodReliefFeniInputBoxValue;
        document.getElementById("donatedFloodForFeniBlance").innerText = newdonatedFloodForFeniBlance;

        // Donate for Flood at Feni, Bangladesh Title
        let donateFloodFeniReliefBangladeshTitle = document.getElementById("donateFloodFeniReliefBangladeshTitle").innerText;

        let historyCard = createHistoryCard(donateFloodReliefFeniInputBoxValue, donateFloodFeniReliefBangladeshTitle)
        document.getElementById("historyContainer").appendChild(historyCard)

        clearInputField("donateFloodReliefFeniInputBox")
    }
})

document.getElementById("donateForQuotaMovementButton").addEventListener("click", () => {
    let donateForQuataMovementInputBoxValue = getInputFieldValueUsingById("donateForQuataMovementInputBox")
    let mainBalance = getTextFieldValueUsingById("mainBalance");
    let donatedForQuotaMovementBlance = getTextFieldValueUsingById("donatedForQuotaMovementBlance")

    if(validateInputField(donateForQuataMovementInputBoxValue, mainBalance)){
        alert(`Do You Want To Donate ${donateForQuataMovementInputBoxValue} Taka`)
        let quotaMovementNewBlance = mainBalance - donateForQuataMovementInputBoxValue;
        document.getElementById("mainBalance").innerText = quotaMovementNewBlance;

        let quotaMovementBlance = donatedForQuotaMovementBlance + donateForQuataMovementInputBoxValue;
        document.getElementById("donatedForQuotaMovementBlance").innerText = quotaMovementBlance;

        // Quota Movement title
        let donateQoutaMovementTitle = document.getElementById("donateQoutaMovementTitle").innerText;

        let historyCard = createHistoryCard(donateForQuataMovementInputBoxValue, donateQoutaMovementTitle)
        document.getElementById("historyContainer").appendChild(historyCard)

        clearInputField("donateForQuataMovementInputBox")
    }
})


document.getElementById("donatePoorManButton").addEventListener("click", () => {
    let donateForPoorManInputBoxValue = getInputFieldValueUsingById("donateForPoorManInputBox")
    let mainBalance = getTextFieldValueUsingById("mainBalance");
    let donatedPoorManBlance = getTextFieldValueUsingById("donatedPoorManBlance")

    if(validateInputField(donateForPoorManInputBoxValue, mainBalance)){
        alert(`Do You Want To Donate ${donateForPoorManInputBoxValue} Taka`)
        let poorManNewBlance = mainBalance - donateForPoorManInputBoxValue;
        document.getElementById("mainBalance").innerText = poorManNewBlance;

        let quotaMovementBlance = donatedPoorManBlance + donateForPoorManInputBoxValue;
        document.getElementById("donatedForQuotaMovementBlance").innerText = quotaMovementBlance;

        // Quota Movement title
        let donatePoorManTitle = document.getElementById("donatePoorManTitle").innerText;

        let historyCard = createHistoryCard(donateForPoorManInputBoxValue, donatePoorManTitle)
        document.getElementById("historyContainer").appendChild(historyCard)

        clearInputField("donateForPoorManInputBox")
    }
})