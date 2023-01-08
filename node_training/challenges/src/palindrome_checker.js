/**
 * Classic iterative implementation 
 * @param {String} word 
 * @returns {Boolean}
 */
function checker ( word ){

    const length = word.length;
    
    for(i= 0; i< length/2 ; i++){
        if( word[i] != word[length-1-i])
            return false;        
    }

    return true;

}

/**
 * ES6 functional implementation 
 * @param {String} word 
 * @returns {Boolean}
 */
function checker_es6 ( word ){

    const length = word.length;

    let isEqualBackwards =  [...iterate(0, length/2)]
        .every(index =>{
            return word[index] == word[length-1-index];
        })

    console.log({word,isEqualBackwards});
    return isEqualBackwards;
}


function* iterate(from,to){
    for(i = from; i<to; i++){
        yield i;
    }
}


module.exports.checker = checker_es6;