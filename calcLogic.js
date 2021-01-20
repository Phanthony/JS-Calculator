const calc = {
    additition: function(num1,num2){
        return (num1 + num2)
    },
    subtraction: function(num1, num2){
        return (num1 - num2)
    },
    multiplication: function(num1, num2){
        return (num1 * num2)
    },
    division: function(num1, num2){
        if(num2 == 0){
            return 0
        } else {
            return (num1 / num2)
        }
    }
}

const domEditor = {
    num1Inp: document.getElementById("num1Inp"),
    num2Inp: document.getElementById("num2Inp"),
    addBtn: document.querySelector(".add"),
    subBtn: document.querySelector(".sub"),
    mulBtn: document.querySelector(".mul"),
    divBtn: document.querySelector(".div"),
    resultLabel: document.querySelector(".resultLabel"),
    resultUpdater: function(text){
        this.resultLabel.textContent = text
    },
    bothInputs: function(num1,num2){
        if(num1 === null || num2 === null || num1 == "" || num2 == ""){
            return false
        } else {
            return true
        }
    }
}

const eventListeners = {
    checkFields: function(num1, num2){
        if(domEditor.bothInputs(num1, num2)){
            return true
        } else {
            return false
        }
    },
    addBtnEventListner: function(){
        let num1 = domEditor.num1Inp.value
        let num2 = domEditor.num2Inp.value
        let res
        if(eventListeners.checkFields(num1,num2)){
            res = calc.additition(parseFloat(num1), parseFloat(num2))
        } else {
            res = "Error, both inputs must have a number."
        }
        domEditor.resultUpdater(res)

    },
    subBtnEventListner: function(){
        let num1 = domEditor.num1Inp.value
        let num2 = domEditor.num2Inp.value
        let res
        if(eventListeners.checkFields(num1,num2)){
            res = calc.subtraction(parseFloat(num1), parseFloat(num2))
        } else {
            res = "Error, both inputs must have a number."
        }
        domEditor.resultUpdater(res)

    },
    mulBtnEventListner: function(){
        let num1 = domEditor.num1Inp.value
        let num2 = domEditor.num2Inp.value
        let res
        if(eventListeners.checkFields(num1,num2)){
            res = calc.multiplication(parseFloat(num1), parseFloat(num2))
        } else {
            res = "Error, both inputs must have a number."
        }
        domEditor.resultUpdater(res)

    },
    divBtnEventListner: function(){
        let num1 = domEditor.num1Inp.value
        let num2 = domEditor.num2Inp.value
        let res
        if(!eventListeners.checkFields(num1,num2)){
            res = "Error, both inputs must have a number."
        } else {
            if(parseInt(num2) == 0){
                res = "Error, can't divide by 0."
            } else {
                res = calc.division(parseFloat(num1), parseFloat(num2))
            }
        }
        domEditor.resultUpdater(res)
    },
    addEventListeners: function(){
        domEditor.addBtn.addEventListener("click", this.addBtnEventListner)
        domEditor.subBtn.addEventListener("click", this.subBtnEventListner)
        domEditor.mulBtn.addEventListener("click", this.mulBtnEventListner)
        domEditor.divBtn.addEventListener("click", this.divBtnEventListner)
    }
}

eventListeners.addEventListeners()



