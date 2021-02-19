class Food
{
    constructor()
    {
        this.image = loadImage("milkImage.png");
        //this.foodStock = 15;
        this.foodStock = 0;
        
    }
    getFoodStock()
    {
        //database.ref("lunch/food");
        return this.foodStock;
    }
    updateFoodStock(foodStock)
    {
        //foodStock = this.foodStock,
        // shubhra :  Here we are passing foodstock and in function we are assigning the value to it. 
        //so correct way is : 
        this.foodStock=foodStock;
    
        //foodStock = foodStock + 1;
        // Shubhra : above line not required 
    }
    deductFood()
    {
        if(this.foodStock>0){
            this.foodStock = this.foodStock - 1;
        }
    }
    display()
    {
        var x = 80;
        var y = 100;

        imageMode(CENTER);
        //image(this.image,720,220,70,70);

        if (this.foodStock!=0)
        {
            for(var i = 0;i<this.foodStock;i++)
            {
                if (i%10===0)
                {
                    x = 80;
                    y = y+70;
                }
                image(this.image,x,y,50,50);
                x = x+30;
            }
        }
    }
}