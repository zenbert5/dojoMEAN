module.exports = function(){
    return {
        add: function(num1, num2){
            return num1+num2;
        },
        multiply: function(num1, num2){
            return num1*num2;
        },
        square: function(num){
            return num**2;
        },
        random: function(num1, num2){
            var delta = num2 - num1;
            return Math.floor((Math.random() * delta) + num1);
        }
    }
};
