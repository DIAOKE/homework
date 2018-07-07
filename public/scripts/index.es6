let f = '';
class PraiseButton{
	constructor(num,element){
		this.num = num;
		this.element = element;
	}
	clickAction(){
		this.element.click(()=>{
            if(f){
                clearTimeout(f);
            }
            f = setTimeout(()=>{
                if(this.num <10){
                    this.element.css('-webkit-filter','grayscale(0)');
                    $("#animation").addClass('num');
                    this.num = add(this.num);
                    setTimeout(function(){$("#animation").removeClass('num')},1000);
                    axios.get('/index/update')
                        .then(function (response) {
                            console.log('axios response',response);
                        })
                        .catch(function (error) {
                            console.log('axios error',error);
                        });
        
                }else{
                    this.num = 0;
                    this.element.css('-webkit-filter','grayscale(1)');
                }
                console.log('num=1',this.num);
            },800);
	
        }
    );
	
	}
}
class Thumb extends PraiseButton{
	constructor(num,element){
		super(num,element);
	}

}
export default Thumb