$(function () {
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();
    $('.carousel').carousel({
        interval: 2000
    });

    $('#contacto').on('show.bs.modal', (e) => {
        console.log('el modal contacto se esta mostrando');

        $('#btnContacto').removeClass('btn-outline-success');
        $('#btnContacto').addClass('btn-primary');
        $('#btnContacto').prop('disabled', true);

    });
    $('#contacto').on('shown.bs.modal', (e) => {
        console.log('el modal contacto se mostro');
    });
    $('#contacto').on('hide.bs.modal', (e) => {
        console.log('el modal contacto se oculta');
        $('#btnContacto').prop('disabled', false);
        $('#btnContacto').removeClass('btn-primary');
        $('#btnContacto').addClass('btn-outline-primary');

    });
    $('#contacto').on('hidden.bs.modal', (e) => {
        console.log('el modal contacto se oculto');

    });
});