(function ($) {

    $.fn.export = function (options) {
        var settings = $.extend({
            'filename': 'export.xls',
            'scriptPath': 'export.php'
        }, options);

        var output = [];
        this.find('tr').each(function (i) {
            var t = $(this);
            if (!t.hasClass('export-ignore')) {
                var op = [];
                t.find('td, th').each(function (x) {
                    var st = $(this);
                    if (!st.hasClass('export-ignore')) {
                        var type = 'text';
                        if (st.hasClass('export-type-date')) {
                            type = 'date';
                        }
                        if (st.hasClass('export-type-protected')) {
                            type = 'protected';
                        }
                        var txt = st.text();
                        if (st.find('.export-text').length > 0) {
                            txt = st.find('.export-text').text();
                        }
                        op.push([txt, type]);
                    }
                });
                output.push(op);
            }
        });
        $('body').append('<form action="'+settings.scriptPath+'" method="post" id="postToIframe"><input type="hidden" name="tablestring" value="" /><input type="hidden" name="filename" value="" /></form>');
        $('#postToIframe input[name=tablestring]').val(JSON.stringify(output));
        $('#postToIframe input[name=filename]').val(settings.filename);
        $('#postToIframe').submit().remove();
    };
} (jQuery));
