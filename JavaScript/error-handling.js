//  todo Exampe of error handling

/*
   if user Enter the number > 10 throw error;
*/

var errorExample = (number) => {
    this.number = number;
    try {
        if (number > 10) {
            throw new Error('Please Enter the Number < 10 ');
        }
        while(this.number < 10){
            ++this.number;
            console.log(this.number);
            this.number++ ;
        }
    }
    catch(error){
        console.log(error.message);
    }

}

errorExample(0);
errorExample(11);

