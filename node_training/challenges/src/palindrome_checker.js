
function checker ( word ){

    const length = word.length;
    
    for(i= 0; i< length/2 ; i++){
        if( word[i] != word[length-1-i])
            return false;        
    }

    return true;

}


module.exports.checker = checker;