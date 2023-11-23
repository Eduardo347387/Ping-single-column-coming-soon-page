document.addEventListener('DOMContentLoaded',function(){
    
    const $formulario = document.getElementById('form')
    
    $formulario.addEventListener('submit',enviarGmail)

    function enviarGmail(e){
        e.preventDefault()
        
        const $inputEmail  = document.getElementById('email')
        
        validarInput($inputEmail)

    }

    function validarInput(element){
        
        if(element.value.trim()=== ''){
            alertaError(element.parentElement,'¡Ups! Parece que olvidaste agregar tu correo electrónico')
            addStyle(element,{borderColor:'red'})
            return
        }
        else if(!validarEmail(element.value)){
            alertaError(element.parentElement,'Proporcione una dirección de correo electrónico válida')
            addStyle(element,{borderColor:'red'})
            return
        }
        else{
            limpiar(element.parentElement,'.msError')
            addStyle(element,{borderColor:''})
        
            setTimeout(()=>{
                messageSubmit(element.parentElement.parentElement,'Gmail Enviado')
                setTimeout(()=>{
                    location.reload(true);
                },1800)
            },1300)
            
        }
       


    }

    function messageSubmit(referencia,mensaje){
        limpiar(referencia.parentElement,'.msSubmit')
        let $message = document.createElement('p')
        $message = addStyle($message,{backgroundColor:'green',color:'#fff',display:'block',padding:'1rem', marginTop:'2rem',fontSize:'1.4rem',fontWeight:'700', width:'60%',borderRadius:'2rem',textAlign:'center'})
        $message.textContent = mensaje
        $message.classList.add('msSubmit')
        referencia.insertAdjacentElement('afterend', $message);
    }

    function validarEmail(gmail){
        const  regex  =   /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(gmail);
        return resultado;
    }


    function alertaError(referencia,mensaje){
        limpiar(referencia,'.msError')
        let $paragraph = document.createElement('p')
        $paragraph = addStyle($paragraph,{color:'red',paddingTop:'0.4rem',paddingLeft:'1rem',fontSize:'1.3rem'})
        $paragraph.textContent = mensaje
        $paragraph.classList.add('msError')
        referencia.appendChild($paragraph)
     
    }



    function limpiar(referencia,element){
        const $element = referencia.querySelector(element)
        if($element){
            $element.remove()
        }
    }

    function addStyle(elemento,ObjStyle){
        for (const key in ObjStyle) {
            elemento.style[key] = ObjStyle[key]
        }
        return elemento;
    }

})
