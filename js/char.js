$(document).ready(function() {

const character =[
        {
            'charid':1,
            'name': "Lux",
            'type': "Ability Power",
            'lane':'Mid Lane',
        },
        {
            'charid':2,
            'name': "Jhin",
            'type': "Attack Damage",
            'lane':'Bottom Lane',
      },
        {
            'charid':3,
            'name': "Jinx",
            'type': "Attack Damage",
            'lane':'Bottom Lane',
      }
];

let template   = Handlebars.compile($("#char-template").html());
let theCompiledHtml = template(character);
$("#content-placeholder").html(theCompiledHtml);

$('#newcharform').submit(function(evt) {
  evt.preventDefault();
    newchar= {
   charid:$('#charid').val(),
   name:$('#name').val(),
   type:$('#type').val(),
   lane:$('#lane').val(),
    }
    character.push(newchar);

    let theCompiledHtml = template(character);
    $("#content-placeholder").html(theCompiledHtml);

    $('.charModal').modal('hide');
    $('input[type="text"]').each(function() {
    $(this).val("");
    });
});

$("#btncall").on('click', function(){
    $(".charModal").modal('show');
});

});

