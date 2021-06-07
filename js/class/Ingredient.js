class Ingredient{
    constructor(ingredient){
        ingredient && Object.assign(this, ingredient);
    }
    show(){
        if(this.unit == undefined){
            this.unit = '';
        };
        /* if(this.quantity == undefined){
            document.querySelectorAll('.quantity').style.display= 'none';
        }; */
        var unit = this.unit;
        var unitSplit = unit.split(' ')
        return `<div class="ingredient"><p>${this.ingredient}</p>
          <p class="quantity">: ${this.quantity} ${unitSplit[0]}</p></div>`;
    }
}





