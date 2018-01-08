console.log('Working!');

$(document).ready(function() {

    $('#new-todo').submit(function(e) {
        // this prevents the default behavior of refreshing
        e.preventDefault();
        // sucks out the name and the value and makes it into an object
        var todo = $(this).serialize();

        $.post('/todos', todo, function(data) {
            console.log(data.body);
            $('.todo-list').append('<li>' + data.body + '</li>');
            // reset the todo form
            $('#new-todo')[0].reset();
        })
    });

    $('#remove-todo').click(function(e) {
        e.preventDefault();

        var todoId = $(this).data('id');
        $.ajax ({
        	url: '/todos/' + todoId,
        	type: 'DELETE',
        	success: function(result) {
        		$(this).parent().remove();
        	}
        });
    })

});