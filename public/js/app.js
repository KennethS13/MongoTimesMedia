$('.save').on('click', event => {
    let id = $(event.target).data('id');
    $.ajax({
        method: 'POST',
        url: '/articles/' + id,
    }).then(() => {
        location.reload();
    });
});

$('.note').on('click', event => {
    $('#noteModal').modal('show');
    let id = $(event.target).data('id');
    $.ajax({
        method: 'GET',
        url: '/saved/' + id
    })
    .then(data => {
        $(".modal-title").html(data.title);
        $(".modal-footer").append(`<button type="button" data-id="${data._id}" id="submit" class="btn btn-primary">Submit Note</button>`);
        console.log(data.note);
        
    });
});

$('#noteModal').on('click', '#submit', event => {
    event.preventDefault();
    console.log('Clicked');
    let id = $(event.target).data('id');
    $.ajax({
        method: 'POST',
        url: '/saved/' + id,
        data: {
          title: $('#title').val().trim(),
          body: $('#body').val().trim()
        }
    }).then(() => {
        location.reload();
    });
});

$('.delete').on('click', event => {
    let id = $(event.target).data('id');
    $.ajax({
        method: 'DELETE',
        url: '/saved/' + id,
    }).then(() => {
        location.reload();
    });
});