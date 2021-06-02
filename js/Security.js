class Security {

    constructor(){

        // Add code to create the input and button elements
        this.access1 = createInput("code1")
        this.access1.position(350,210)
        this.access1.style('background','white')

        this.access2 = createInput("code2")
        this.access2.position(350,540)
        this.access2.style('background','white')

        this.access3 = createInput("code3")
        this.access3.position(1000,370)
        this.access3.style('background','white')


        this.button1 = createButton('Check')
        this.button1.position(350,240)
        this.button1.style('background','brown')

        this.button2 = createButton('Check')
        this.button2.position(350,570)
        this.button2.style('background','brown')

        this.button3 = createButton('Check')
        this.button3.position(1000,400)
        this.button3.style('background','brown')

    }

    display(){

        // Add code to make the buttons function as expected
        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });
        
        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });

        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
            }
        });
    }
}
