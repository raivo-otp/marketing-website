---
---

$(function() {
    {% for file in site.static_files %}
        {%- if file.path contains 'assets/screenshot/' -%}
                    $(".iphoneScreen").attr('src', '{{ site.github.baseurl }}{{ file.path }}');
                    $(".iphoneScreen").removeClass("hidden");
                    console.log("{{ file.path }}");
        {%- elsif file.path contains 'assets/videos/' -%}
            {%- unless file.path contains 'assets/videos/Place-video-files-here.txt' -%}
                        $(".iphoneScreen").addClass("hidden");
                        console.log("remove screenshot");
            {%- endunless -%}
            {%- if file.extname == ".mov" or file.extname == ".mp4" -%}
                        $(".videoContainer").removeClass("hidden");
                        $(".screenvideo").append('<source src="{{ site.github.baseurl }}{{ file.path }}" type="video/mp4">');
                        console.log("{{ file.path }}");
            {%- elsif file.extname == ".ogg" -%}
                        $(".videoContainer").removeClass("hidden");
                        $(".screenvideo").append('<source src="{{ site.github.baseurl }}{{ file.path }}" type="video/ogg">');
                        console.log("{{ file.path }}");
            {%- elsif file.extname == ".webm" -%}
                    $(".videoContainer").removeClass("hidden");
                    $(".screenvideo").append('<source src="{{ site.github.baseurl }}{{ file.path }}" type="video/webm">');
                    console.log("{{ file.path }}");
            {%- endif -%}
        {%- endif -%}
    {% endfor %}
});