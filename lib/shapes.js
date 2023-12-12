
class Shape{
        constructor(color){
            this.color=color;
        }
        setColor(color){
            this.color=color;
        }
    };
    class Circle extends Shape{
        render(){
            return `<circle cx="50%" cy="50%" r="130" height="100%" width="100%" fill="${this.color}"/>`
        }
    }
    class Square extends Shape{
        render(){
            return `<rect x="0" y ="0" height="300" width="400" fill="${this.color}"/>`
        }
    }
    class Triangle extends Shape{
        render(){
            return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"/>`
        }
    };
    
    module.exports = {Circle, Square, Triangle}