class Food {
    constructer() {
        this.foodStock = 0;
        this.lastFed;
        this.bedroomImage = loadImage("images/bedRoom.png");
        this.gardenImage = loadImage("images/garden.png");
        this.washroomImage = loadImage("images/washRoom.png");
    }

    updateFoodStock(foodStock) {
        this.foodStock = foodStock;
    }

    deductFood() { 
        if(this.foodStock > 0){
           this.foodStock = this.foodStock - 1;
        }
    }
  
    getFoodStock() {
        return this.foodStock;
    }

    getFedTime(lastFed) {
        this.lastFed = lastFed;
    }
    
    bedroom() {
        background(this.bedroomImage, 550, 500);
    }

    garden() {
        background(this.gardenImage,550,500);
    }

    washroom() {
        background(this.washroomImage,550,500);
    }
     
}