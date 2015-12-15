// Setup our own endsWith definition since midori doesn't know about it.
String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

function hashSelect(first) {
    console.log("Changing to new hash...");
    var found = false;
    $.each(all_ids, function(i, idx) {
        var curr = $('#' + idx);
        if (location.href.endsWith(SEP + idx)) {
            curr.removeClass('hidden');
            found = true;
        }
        else {
            var isHidden = curr.hasClass('hidden');
            if (! isHidden) {
                curr.addClass('hidden');
            }
        }
    });
    if (! found) {
        $("#" + first).removeClass('hidden');
        var original = location.href.replace(/\/$/, "");
        history.pushState({}, '', original + SEP + first);
    }
}

$(document).ready(function() {
    // First thing.. hide the warning about javascript being required.
    $("#js-warning").addClass('hidden');

    var first = question_tree.children[0].id;
    hashSelect(first);

    // Wire up the "yes" links
    $("a.yes").click(function(event) {
        $(this).parent().parent().addClass('hidden');
        var next = $(this).attr('data-next');
        $('#' + next).removeClass('hidden');
        var original = location.href.replace(/\/$/, "");
        history.pushState({}, '', original + SEP + next);
    });

    // Wire up the "nope" links
    $("a.nope").click(function(event) {
        $(this).parent().parent().addClass('hidden');
        var next = $(this).attr('data-next');
        $('#' + next).removeClass('hidden');
        var tokens = location.href.replace(/\/$/, "").split(SEP).slice(0, -1);
        tokens.push(next);
        history.replaceState({}, '', tokens.join(SEP));
    });

    // Wire up the "back" links
    $("a.back").click(function(event) {
        $(this).parent().parent().addClass('hidden');
        var tokens = location.href.replace(/\/$/, "").split(SEP).slice(0, -1);
        var next = tokens.slice(-1).pop();
        history.go(-1);
        $('#' + next).removeClass('hidden');
    });
    $(window).on('hashchange', function() {
        // Detect hash changes for "back" functions
        hashSelect(first);
    });

});
function reloadHome() {
    window.location = "#";
    window.location.reload();
}
