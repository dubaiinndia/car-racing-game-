class Form{
    constructor(){
this.input= createInput("name");
this.button = createButton('play');
this.greeting=createElement('h3');
this.title= createElement('h2');
this.reset=createButton("reset")
    }
    hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
    }
    display(){
       
        this.title.html("Car Racing Game ")
        this.title.position(displayWidth/2-50,0)
        this.reset.position(displayWidth-100,50)
        this.input.position(diplayWidth/2-40,displayHeight/2-80)
         
        this.button.position(displayWidth/2+30,displayHeight/2)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
        
           player.name = this.input.value();
            playerCount+=1
            player.index=playerCount 
            player.update(name)
            player.updateCount(playerCount)
            
            this.greeting.html("HELLO ")
            this.greeting.position(displayWidth/2-70,displayHeight/2)
        })

        this.reset.mousePressed(()=>{
            player.updateCount(0)
            game.update(0);
        })

    }

    
    
}