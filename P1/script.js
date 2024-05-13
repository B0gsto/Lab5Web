$(document).ready(function(){
    //when double click on an item in select1, move it to select2
       $('#select1').dblclick(function(){
         $('#select1 option:selected').appendTo('#select2');
       });

         //when double click on an item in select2, move it to select1

         $('#select2').dblclick(function(){
             $('#select2 option:selected').appendTo('#select1');
         });
 });