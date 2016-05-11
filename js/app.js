function run(){
  var dropdown = new Dropdown({
    wrapper: document.getElementById("dropdown"),
    options: [{id: "1", value: "A"}, {id: "2", value: "B"}, {id: "3", value: "C"}]
  });

  $("[data-desc]").click(function(){
    $(".sidebar").fadeIn();

    var cssClass = $(this).data('desc');

    $(".sidebar .title").text(cssClass);

    $(".sidebar .description").text(descriptions[cssClass]);

  });

  $(".close-sidebar").click(function(){
    $(".sidebar").hide();
  });
}


var descriptions = {
  h1: "This is used very rarely. Only on the event detail page",
  h2: "This is used on every header. The featured events header, ministry events header, serve opportunities header... Anywhere where a header is needed",
  h3: "This is used rarely. Really only on the contact block and other obscure locations",
  h4: "This is never used. It is the same size as the normal text and is essencially useless but is kept here for overriding other applied font sizes",
  h5: "This should only be used for small, not that important, text",
  "Normal Text": "The default text size. This size will be applied if you do not specify any and has no font sizes inherited",
  p: "Used anywhere multiple lines are required. Differes from other classes because it applies font-spacing and line-height",
  text: "Class for every text box",
  "validation-error": "Applied to form elements who have been marked incorrect when validating",
  button: "The general button class",
  "button-toggle": "Used for toggle buttons",
  "button[disable]": "Used on buttons that can't be clicked on. Note that this is a property not a class",
  "button-small": "A smaller looking button. Used in the user account section of the website",
  a: "Basic link styling",
  "data-balloon": "The data attribute placed on a button to create a tooltip. Note it is a data attribute, not a class",
  "group-table-header": "The header class for tables",
  "group-table-header": "The class for a table body",
  "center-constrained-mid": "Puts margin on the sides of content and has media queries to remove margin when window gets small",
  "center-constrained-small": "Puts margin on the sides of content and has media queries to remove margin when window gets small. Only difference from mid is the size",
}
