$(function () {
  'use strict';

  var tabCount = 0;

  $('.code-tabs').each(function (index, codeTab) {
    var tabIds, tabClass, languages, tabs;
    var $codeTab = $(codeTab);
    var $figures = $codeTab.children('figure.highlight');

    $figures.wrapAll('<div class="tab-content"></div>');

    tabIds = [];
    tabClass = 'active';
    $figures.each(function (index, figure) {
      tabIds.push(++tabCount);
      $(figure).wrap('<div role="tabpanel" class="tab-pane ' + tabClass +
                     '" id="code-tabs-' + tabCount + '"></div>');
      tabClass = '';
    });

    languages = $codeTab.data('languages').split(',');
    tabClass = 'active';

    tabs = '<ul class="nav nav-tabs" role="tablist">';
    tabIds.forEach(function (id, index) {
      tabs += '<li class="' + tabClass +
        '" role="presentation"><a href="#code-tabs-' + id +
        '" aria-controls="code-tabs-' + id +
        '" role="tab" data-toggle="tab">' + languages[index] + '</a></li>';
      tabClass = '';
    });
    tabs += '</ul>';

    $codeTab.prepend(tabs);

    $codeTab.children('a').click(function (e) {
      e.preventDefault();
      $(this).tab('show');
    });
  });
});
