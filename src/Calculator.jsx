import './Calculator.css';
import { useState } from 'react';

const Calculator=()=>{

    const[data,setData]=useState({fn:"",opt:"",res:""});
    const handleNumber=(evt)=>{
        if(data.res==="")
        {
            setData({...data,res:evt.target.value});
        }
        else
        {
            setData({...data,res:data.res+evt.target.value});
        }
    }

    const handleOperator=(evt)=>{
        setData({fn:data.res,opt:evt.target.value,res:""});
    }

    const handleEquals=()=>{

      
        const a=parseInt(data.fn);
        const b=parseInt(data.res);
        let c=0;
        switch(data.opt)
        {
            case "+": c=a+b;
                      break;
            case "-": c=a-b;
                      break;
            case "*": c=a*b;
                      break;
            case "/": c=a/b;
                      break;
                    
        }

        setData({fn:"",opt:"",res:c});

    }
    

    return(
        <div className='Calculator'>      
            <h1>Calculator</h1>          
            <input type="text" name="result" value={data.res} readOnly /> <br />
            <input type="button" value="1" name="one" onClick={handleNumber} />
            <input type="button" value="2" name="two" onClick={handleNumber} />
            <input type="button" value="3" name="three" onClick={handleNumber} />
            <input type="button" value="4" name="four" onClick={handleNumber} /> <br />
            <input type="button" value="5" name="five" onClick={handleNumber} />
            <input type="button" value="6" name="six" onClick={handleNumber} />
            <input type="button" value="7" name="seven" onClick={handleNumber} />
            <input type="button" value="8" name="eight" onClick={handleNumber} /> <br />
            <input type="button" value="9" name="nine" onClick={handleNumber} />
            <input type="button" value="0" name="zero" onClick={handleNumber} />
            <input type="button" value="+" name="add" onClick={handleOperator} />
            <input type="button" value="-" name="minus" onClick={handleOperator} /> <br />
            <input type="button" value="*" name="multiply" onClick={handleOperator} />
            <input type="button" value="/" name="division" onClick={handleOperator} />
            <input type="button" value="=" name="equals" onClick={handleEquals} />
            <input type="button" value="CLR" name="clear" onClick={()=>setData({fn:"",res:"",opt:""})}/>
           
        </div>
    );

}

export default Calculator;