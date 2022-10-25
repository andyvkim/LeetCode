/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const openingBrackets = "({[";
    const closingBrackets = ")}]";
    const lookUp = {
        "(" : ")",
        "[" : "]",
        "{" : "}"
    };
    
    const stack = [];
    
    for(let char of s){
        if((openingBrackets.includes(char))){
            stack.push(lookUp[char]);
        }
        else if(closingBrackets.includes(char)){
            if(stack.pop() !== char){
                return false
            }
        }
    }
    return stack.length == 0;
};