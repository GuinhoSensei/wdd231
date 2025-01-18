document.addEventListener('DOMContentLoaded', function() {
    // First paragraph
    var footerCopyright = document.getElementById('copyright');
    var currentYear = new Date().getFullYear();
    var name = 'Thiago Gomes Gouveia';
    var location  = 'Richmond, CA';

    footerCopyright.innerHTML = '&copy; ' + currentYear + ' ' + name + ' | ' + location;

    // Second paragraph
    var lastModified = document.getElementById('lastModified');
    var lastModifiedDate = new Date(document.lastModified);
    lastModified.innerHTML = 'Last Modified: ' + lastModifiedDate.toLocaleString();
  });