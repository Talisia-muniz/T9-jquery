

//-- JS 
//function helloJavascript() 
   // alert('Hello World')
// helloJavascript()

//-- jQuery
//DOM
//ready espera o DOM estar 100% carregado para realizar uma ação
//$(document).ready(function () 
 //   alert('Hello World em jQuery')});

//ou 
//$(function () 
    //alert('Eu sou um Hello World de uma função anonima')

    $(document).ready(function() {

        $('p').html(`Olá é igual a 
        <span class="cor">Hello</span>
        <strong>Darkness</strong>
        `
        );
    
        $('li').addClass("margin")
    
        $('li').removeClass("item1")
    
    
        $("p").click(function() {
            $(this).toggleClass("destaque")
        })
    })