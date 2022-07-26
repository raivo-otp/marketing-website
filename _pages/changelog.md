---
layout: page
title: Changelog
include_in_header: true
---

# Changelog

<pre>
{{ site.github | inspect }} 
</pre>

<pre>
{{ site.github.releases | inspect }} 
</pre>

{{ site.github.releases[0].name }} contains the latest features, bug fixes and improvements . Further down the page, you can wander endlessly through the history of Raivo. Will you scroll all the way down to its birth?

<br>

{% for release in site.github.releases %}

## **{{ release.name }}**

{{ release.body }}

<br>

{% endfor %}

