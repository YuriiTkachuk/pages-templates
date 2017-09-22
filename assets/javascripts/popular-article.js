$('#myModal').on('show.bs.modal', function (event) {
  var link = $(event.relatedTarget)
  var slideTo = link.data('slide-to');
  if ("undefined" !== typeof slideTo) {
    $('#carousel-example-generic').carousel(slideTo);
  }
})
