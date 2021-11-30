Q2Functions = {
    LargestOfTwoNumbers : function LargestOfTwoNumbers(a,b){
        if(a>b) return a;
        else return b;
    },

    LargestOfThreeNumbers : function LargestOfThreeNumbers(a,b,c){
        if(a>b && a>c) return a;
        else if (b>a && b>c) return b;
        else return c;
    },
    FactorialOfNumbers : function FactorialOfNumbers(num){
        if(typeof num==Number){
            return "Provide Number"
        }
        var result = 1;
        for (let i=1;i<=num;i++){
            result=result*i;
        }
        return result;
    },
    CheckEvenOdd : function CheckEvenOdd(num){
        if(num%2==0) return true;
        else return false;
    },
    LargestElementInArray : function LargestElementInArray(arr){
        var max=0;
        arr.forEach(element => {
            if(element>max){
                max=element;
            }
        });
        return max;
    },
    SearchElementInArray : function SearchElementInArray(arr,ele){
        var bfound = false;
        arr.forEach(element => {
            if(element==ele){
                bfound=true;
            }
        });
        return bfound;
    }
}
module.exports = Q2Functions;